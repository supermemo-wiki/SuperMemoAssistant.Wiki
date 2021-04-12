## SuperMemo Natives

### SuperMemo methods

To extend the SuperMemo Assistant API and leverage existing functionalities in SuperMemo, you can use following procedure.

For example, you may want to add the ability to apply templates to an element (`TElWind.NewTemplate`).

#### Adding a new method

You will need:
- [IDR](https://github.com/crypto2011/IDR),
- [IDA Pro 7.0](https://www.hex-rays.com/products/ida/),
- [SigMaker](https://github.com/ajkhoury/SigMaker-x64) IDA plugin
- [CheatEngine](https://www.cheatengine.org/) (optionally),
- The address of the method,
- The prototype of the method,
- The signature of the method.

##### Finding the address and prototype of the method

Open the SuperMemo executable in IDR. Using the **Branch** view in the **ClassViewer**, or by exploring the ASM code, find the relevant method.

###### Example: Finding TElWind.NewTemplate

In the **Apply Template** example, we can start by looking for "ApplyTemplate" in the `TElWind` class. Following this trail leads us to the `TRegistryForm` class, which we can safely assume represents the registry dialog where the various registry members (text, images, templates, etc.) are presented.

We know from using SuperMemo that we can choose registry members and apply them to our current selection (e.g. apply a template, select an image to select in an image component, etc.) by clicking on the **Accept** button.

Looking at the `TRegistryForm` class, we directly see a button named **Accept,** and its associated method `AcceptClick`.

In this method, we see a `jmp dword ptr [eax*4+addr]` instruction followed by several `dd` instructions. This is the hallmark of a switch operation, and because the registry form handles different types of members (text, images, templates, etc.) we can assume this selects the code to call depending on the opened registry type (templates in our case).

Trying to figure out which is which may be time consuming, here it would be easier to use a debugger and find which path the program takes at runtime. Find the address of the `jmp` operation by right-clicking on its line, and clicking on **Copy Address**. In your favourite debugger (e.g. IDA, CheatEngine, ...), attach to the SuperMemo process and place a breakpoint at the copied address. You may need to adjust the address space (usually substract 0x400000).

In SuperMemo, press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>, select a template, and press **Accept**. The breakpoint in the debugger should now have been triggered. We can step over to find which path the program will execute. Continuing on this path, we find a first function call, which subsequently leads to `TElWind.NewTemplate`. Looking at the latter, we can see that it takes three parameters: eax (this ptr), edx and ecx. ECX is a byte and EDX a dword. Looking at the registers in the debugger, we see that EDX has the same value as the template position (visible in the Template Registry in SuperMemo). And ECX has a fixed value of 2.

We conclude that to apply a template, we need to call `TElWind.NewTemplate` with:
- EAX: instance of TElWind,
- EDX: the template position (id),
- ECX: 2.

###### Finding the address

Once you have identified the method, jump to its location in the **CodeViewer**.

Right-click on the first line (normally, `push ebp`), and click on **Copy Address**.

###### Finding the prototype

When IDR is able to determine the prototype, right click anywhere in the function in **CodeViewer** and select **Edit Prototype**.

If the prototype isn't available, you can determine it manually. The previous example gives an illustration.

##### Finding the signature of the method

Once you have identified the address of the method, open the SuperMemo executable in IDA.

You will need to install the [SigMaker](https://github.com/ajkhoury/SigMaker-x64) IDA plugin.

Jump the address of the method and open the SigMaker dialog **(Edit > Plugins > Sigmaker** or <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>S</kbd>).

Select **Auto create ida pattern**, and press **OK**. Copy the signature generated for you in the **Output window.**

##### Adding the method in SuperMemo Assistant

Open the SuperMemo Assistant solution in Visual Studio.

###### NativeDataCfg.json

Open the file **NativeDataCfg.json**.

There are two types of signatures:
- **Static signature** are in the form of `55 8B EC ...`. They reproduce the byte code of the method. Because methods can change from one version to the other, you will often need to generate a distinct signature for each version of SuperMemo.
- **Dynamic signature** are in the form of `E8 ? ? ? ? ...`. They leverage the pattern of another method calling (`call` = `E8` instruction) the one we are interested in to generate more reliable signatures. They will often remain valid across versions.

**Static signatures** must be added in the **NativeFunctionPatterns** property of the json objects.
**Dynamic signatures** must be added in the **NativeCallPatterns** property of the json objects.

Make sure to:
- Follow the existing naming convention,
- Add the pattern for every version of SuperMemo referenced in the json file.

In our `TElWind.NewTemplate` example, I have added the following pattern:
```json
"ElWdw_NewTemplate": {
  "Pattern": "E8 ? ? ? ? A1 ? ? ? ? 8B 00 E8 ? ? ? ? 84 C0 74 12",
  "Offset": 1 
},
```

###### Updating the NativeMethod enum

Open the **NativeMethod.cs** file, and add a new key in the enumeration. The name of the key must match the one in the json file.

In our `TElWind.NewTemplate` example, I have added the `ElWdw_NewTemplate` key.

###### Adding the method in SMNatives

Open the SMNatives.XXX.cs corresponding to the class which your method belongs to.

In the methods region, add a new method. The method's prototype should reflect the parameters which the user can change.

In our `TElWind.NewTemplate` example, I have added the following method:

```csharp
public bool ApplyTemplate(IntPtr elementWdwPtr, int templateId)
{
  try
  {
    NativeMethod.ElWdw_NewTemplate.ExecuteOnMainThread(
      elementWdwPtr,
      templateId,
      2);

    return true;
  }
  catch (Exception ex)
  {
    LogTo.Error(ex, "Native method call threw an exception.");
    return false;
  }
}
```

The `TElWind.NewTemplate` did not return any value, instead we return the assumed success of the operation (exeception or no exception).

###### Exposing the API

Open the relevant source file for your method (e.g. **ElementWdw.cs**, **RegistryBase.cs**, etc.).

Add a new method and place a call to the method added in **SMNatives.XXX.cs**.

In our `TElWind.NewTemplate` example, I have added the following method:

```csharp
public bool ApplyTemplate(int templateId)
{
  var template = Core.SM.Registry.Template[templateId];

  if (template == null || template.Empty)
    return false;

  return Core.Natives.ElWind.ApplyTemplate(ElementWdwPtr.Read<IntPtr>(), templateId);
}
```

Note the validation of data before calling the native method.

Once the method has been implemented, make sure to pull it up into the interface (`IElementWdw` in our example) and add a xml-doc description:

```csharp
/// <summary>
///   Applies the template identified by <paramref name="templateId" /> to the currently displayed element in the element
///   window.
/// </summary>
/// <param name="templateId">The template to apply</param>
/// <returns>Whether the operation was successful</returns>
bool ApplyTemplate(int templateId);
```

#### Updating an existing method to support new versions of SuperMemo

In the case of dynamic signatures, they should remain valid most of the time. With static signature, you will often need to update the signature with each new version of SuperMemo.

To achieve that, simply find the method in IDR again. Copy its address and jump to its location in IDA. Generate the new signature, and update it in the new definition in **NativeDataCfg.json**.

### SuperMemo variables

🚧 Work in progress.