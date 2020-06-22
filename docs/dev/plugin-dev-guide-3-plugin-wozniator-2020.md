## Plugins: Coding the Wozniator 2020 {docsify-ignore}

<br />

> [!NOTE|style:flat|label:What is this] **After completing this tutorial**, you will have practical knowledge on using the **SMA SDK** and adding basic functionalities to your Plugins.
>
> This tutorial assumes that you have already completed the [previous tutorial](plugin-dev-guide-2-the-essentials.md).
> 
> In the [next tutorial](plugin-dev-guide-4-publishing-plugins.md) of this series, we will learn how to create new versions of our Plugin, and how to publish them.

### Plugin specifications

In this tutorial we will be **writing code** for our Wozniator 2020 Plugin. These are the **functions** we will be implementing:

1. A picture of **Piotr Wozniak** should be **inserted** at the top of the currently focused HTML component when the user presses the <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>W</kbd>,
2. A **new Topic** should be created containing a random quote from Piotr's [supermemo.guru](https://supermemo.guru) website when the user presses <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Q</kbd>,
3. When a new element is displayed in SuperMemo, **duplicated** Piotr Wozniak images in HTML components should be **removed** (there can only be one Piotr Wozniak),
4. Plugin **Settings** with:
  - An option to set the **amount of Wozniaks** to which we should normalize our HTML components, instead of the fixed number of 1 (see #3),
  - An option to select the **destination branch** for new Topics (see #2).

This Plugin should satisfy all your Wozniak needs.

> [!TIP|label:Wozniator 2020 Source Code|style:flat] You can download the complete source code for this project from its [GitHub repository](https://github.com/supermemo/SuperMemoAssistant.Plugins.Wozniator2020).

> [!NOTE|label:Who is Piotr Wozniak] Dr. [Piotr Wozniak](https://www.wired.com/2008/04/ff-wozniak/), is the co-creator of SuperMemo, and inventor of the first spaced repetition Algorithm. He has been uninterruptedly learning with SuperMemo since its first iteration, making him the longest user of SuperMemo !

### 0. Setting up the Plugin metadata

#### Bug reporting

We will set up the **automatic bug reporting** service with our Sentry API key.

1. **Register** on [Sentry.io](https://sentry.io)
2. Retrieve your **API key**
3. Replace the placeholder text in `Wozniator2020Plugin`'s constructor (see below)

```csharp
public Wozniator2020Plugin() : base("https://abc123@sentry.io/1234567") { }
```

#### Name and Settings values

We will set the display `Name` of our Plugin to be `Wozniator 2020`. This title will be displayed in the SMA settings instead of `SuperMemoAssistant.Plugins.Wozniator2020` once the plugin is running.

> [!NOTE] The `Name` property is only used in Development mode. When a Plugin is installed through SMA, the title from the NuGet package is displayed instead.

We will also leave the `HasSettings` property to false, since we won't be implementing that for the time being (until #4).

```csharp
    #region Properties Impl - Public

    /// This property defines our Plugin's friendly name
    public override string Name => "Wozniator 2020";

    /// This property determines whether or not the Plugin should have a settings button (more on that later)
    public override bool HasSettings => false;

    #endregion
```

### 1. The Woz emergency button

We will be implementing:
1. A **method** which inserts a html &lt;img&gt; tag at the top of the currently selected HTML component (if any)
2. A **hot key**: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>W</kbd>

> [!TIP] If your IDE displays errors about unknown types, you need to import the namespaces that those types belong to. [Intellisense can infer](https://docs.microsoft.com/en-us/visualstudio/ide/visual-csharp-intellisense?view=vs-2019#generate-from-usage) and generate the `using` statements from your code. To achieve that, click on the unidentified type, and press <kbd>Ctrl</kbd> + <kbd>.</kbd>.

#### The `WozEmergency` method

At the top of the `Wozniator2020Plugin` class, add:

```csharp
/// <summary>
/// The url of Dr. Wozniak's picture
/// </summary>
private const string WozniakImageUrl = "https://www.wired.com/wp-content/uploads/archive/images/article/magazine/1605/ff_wozniak_swim_f.jpg";
```

At the bottom of the `Wozniator2020Plugin` class, add:

```csharp
/// <summary>
///   Inserts a html &lt;img&gt; tag at the top of the currently selected HTML
///   component (if any).
/// </summary>
[LogToErrorOnException]
private void WozEmergency()
{
  try
  {
    var htmlCtrl = Svc.SM.UI.ElementWdw.ControlGroup?.FocusedControl?.AsHtml();

    // Make sure the currently focused control exists (there could be no
    // component at all), and is of the html kind (it could be a picture).
    if (htmlCtrl == null)
      return;

    htmlCtrl.Text = $@"<img src=""{WozniakImageUrl}"" /> <br />
{htmlCtrl.Text}";
  }
  catch (RemotingException) { }
}
```

##### `[LogToErrorOnException]`

This attribute belongs to [Anotar.Fody](https://github.com/Fody/Anotar#your-code-3). This is a shortcut for a **catch-all clause** (catches all exception types) for exceptions coming from anywhere inside the `WozEmergency` method.

Any exception caught this way will be logged to disk, sent to Sentry.io (if setup correctly), and re-thrown. Follow the link above for more information.

##### `try catch (RemotingException)`

Our method body is wrapped in a `try catch` statement for the `RemotingException` exception. This type of exception is thrown whenever the communication between two processes (here SMA and Wozniator2020) encounters an error.

In practice, such an exception may be raised when accessing one of the remote services: `Svc.SM.UI`, `Svc.SMA.Layouts`, etc.

We do not log these exceptions, as they neither necessarily constitute an error (SMA might have stopped just milliseconds ago), nor do they originate from our Plugin.

##### `htmlCtrl`

> [!NOTE|label:Recommended reading] Before proceeding, make sure that you understand the respective roles of [Controls and Components](sma-dev-refm-controls-and-components.md), and their differences.

> [!TIP] The `?.` syntax is called a [null-conditional operator](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/member-access-operators#null-conditional-operators--and-). It applies the requested operation only if the operand (left-side) is non-null.

```csharp
var htmlCtrl = Svc.SM.UI.ElementWdw.ControlGroup?.FocusedControl.AsHtml();
```

Let's break down this line:
- `Svc.SM`: Gets the SM remote service from SMA
- `UI`: Inside of the SuperMemo code base, essential functions are spread amongst different windows ([Element window](http://super-memory.com/help/element.htm), [Content window](http://super-memory.com/help/contwind.htm), etc.). SMA mimics this organization to make maintaining the code easier
- `ElementWdw`: Self-explanatory, gets the Element window
- `ControlGroup`: The [Control Group](sma-dev-refm-controls-and-components.md#icontrolgroup) is the container for all the controls (html, image, etc.) currently displayed in the Element Window. It is the object through which you gain access to information about the loaded controls, and access to the controls themselves
- `FocusedControl`: Gets the currently focused control, if any
- `AsHtml()`: Tries to convert the given [IControl](sma-dev-refm-controls-and-components.md#icontrol) to a [IControlWeb](sma-dev-refm-controls-and-components.md#icontrolweb-icontrolimage-etc). Returns `null` if the Control is `null` or of a different type (e.g. an Image)

##### `htmlCtrl.Text`

> [!TIP] The `$""` syntax is called [string interpolation](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated). It enables mix-and-matching literal text with C# variables.

```csharp
htmlCtrl.Text = $@"<img src=""{WozniakImageUrl}"" /> <br />
{htmlCtrl.Text}";
```

This Property allows us both to *get* the **html** from the component, as well as to *update* it with a new value. The web page in SuperMemo will automatically render the new content.

Here, we are prepending the `<img>` tag to the existing html code, and separating it from the rest with a html line break `<br />`, as well as an actual line break (windows style `\n\r\`).

The expected result is to see a picture appear at the top of the document.

> [!NOTE] This method of inserting the img tag may not always function depending on the existing content, but this is purely an algorithmic issue and lies beyond the scope of this guide.

#### Registering the hot key

```csharp
/// <inheritdoc />
protected override void PluginInit()
{
  Svc.HotKeyManager.RegisterGlobal(
    "WozEmergency",                           // internal id
    "Woz Emergency",                          // name displayed to the user in the settings (more on that later)
    HotKeyScopes.SMBrowser,                   // this hotkey will only trigger if used inside SM element window
    new HotKey(Key.W, KeyModifiers.CtrlAlt),  // the keyboard key stroke combination
    WozEmergency                              // the callback = our method
  );
}
```

##### Id and Name

The first parameter determines the **id** of the macro. This is used internally by the HotKeyManager to distinguish different Hot Keys (e.g. when saving and loading).

The second parameter determines the **friendly name** that will be displayed in the settings of your Plugin. SMA offers an optional service to automatically generate a graphical interface for your Settings, and for listing and rebinding your Hot Keys. We will be implementing this service in the last leg of this tutorial.

##### Scope of Hot Keys

`RegisterGlobal` uses the Windows [Hooks API](https://docs.microsoft.com/en-us/windows/win32/winmsg/about-hooks#wh_keyboard_ll) to listen for keystroke on a **system-wide** level. 
This means that the events will be triggered from anywhere inside of Windows, including outside the scope of SuperMemo (e.g. if you're reading your email).

*SMA* offers facilities to **narrow down the scope** of the activation to SuperMemo, or specific windows inside of SuperMemo. This option is defined with the `HotKeyScopes` type (see above).

### 2. The pool of insight

We will be implementing:
1. A `GetRandomWozQuote` **method** which selects a random quote from a file containing a collection of quotes from Piotr's supermemo.guru website
2. A `PoolOfInsight` **method** which creates a new Topic containing the text returned by `GetRandomWozQuote`
3. A **hot key**: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Q</kbd>

For our **collection of quotes**, we will be downloading [@jamesb](https://github.com/bjsi)'s spreadsheet. This spreadsheet was created by scrapping content from the supermemo.guru website using a script. [Download the quote spreadsheet](https://github.com/supermemo/Random-Woz-Quote/raw/master/quotes.tsv).

#### The `GetRandomWozQuote` method

This is a purely algorithmic, SMA-unrelated method. As such we won't be providing in-depth explanation aside from in-code comments.

1. Download and save the quote spreadsheet into your `Wozniator2020` project folder,
2. Set its **Build action** to `Content`,
3. Copy and paste the code below in a new file named `Utils.cs`.

```csharp
public static class Utils
{
  #region Constants & Statics

  private static readonly string[] SentenceEndingPunctuation = { ".", "!", "?" };
  private const string QuoteFileName = "quotes.tsv";

  #endregion



  #region Methods

  /// <summary>
  /// Loads the quote file and selects a random quote.
  /// </summary>
  /// <returns>The quote text or <see langword="null" /> if an error occured.</returns>
  public static string GetRandomWozQuote()
  {
    // Tab separated file with a heading
    // Quote, Author, Url, Title
    var quoteFile = new FilePath(QuoteFileName);

    if (quoteFile.Exists())
      return null;

    try
    {
      var lines = File.ReadAllLines(quoteFile.FullPath);

      // First line is the heading.
      if (lines.Length <= 1)
        return null;

      var randInt = new Random();
      var randomLineNumber = randInt.Next(1, lines.Length - 1);
      var quoteLine = lines[randomLineNumber];
      var splitQuoteLine = quoteLine.Split('\t');

      // Check that the chosen line has 4 fields
      if (splitQuoteLine.Length == 4)
      {
        // If the quote doesn't end with sentence ending punctuation, add a full stop.
          if (!SentenceEndingPunctuation.Any(p => splitQuoteLine[0]
                                        .EndsWith(p, StringComparison.OrdinalIgnoreCase)))
          splitQuoteLine[0] += ".";

        // Build and return the text
        return $@"<p><b>{splitQuoteLine[0]}</b> -- {splitQuoteLine[1]}</p>
<br />
<p><small><i>Source</i>: <a href='{splitQuoteLine[2]}'>{splitQuoteLine[3]}</a></small></p>";
      }
    }
    catch (IOException ex)
    {
      LogTo.Warning(ex, "IOException when trying to open {FullPath}", quoteFile.FullPath);
    }
    catch (Exception ex)
    {
      LogTo.Error(ex, "Exception caught while opening file {FullPath}", quoteFile.FullPath);
    }

    return null;
  }

  #endregion
}
```

#### The `PoolOfInsight` method

At the bottom of the `Wozniator2020Plugin` class, add:

```csharp
/// <summary>
/// Creates a new Topic containing a random quote from Piotr's supermemo.guru website.
/// </summary>
[LogToErrorOnException]
private void PoolOfInsight()
{
  try
  {
    var quoteText = Utils.GetRandomWozQuote();

    if (quoteText == null)
    {
      MessageBox.Show("An error occured while loading a random quote from the quote database");
      return;
    }

    var elemBuilder = new ElementBuilder(
      ElementType.Topic,
      quoteText,
      false);

    bool success = Svc.SM.Registry.Element.Add(
      out var results,
      ElemCreationFlags.CreateSubfolders,
      elemBuilder);

    if (success == false)
    {
      var errMsg = results.GetErrorString();

      MessageBox.Show(errMsg);
    }
  }
  catch (RemotingException) { }
}
```

🚧 This section is a work in progress.

#### Registering the hot key

In the `PluginInit()` method, replace the previous hot key registration code with the following snippet:

```csharp
Svc.HotKeyManager

   //
   // Woz Emergency
   .RegisterGlobal(
     "WozEmergency",                           // internal id
     "Woz Emergency",                          // name displayed to the user in the settings (more on that later)
     HotKeyScopes.SMBrowser,                   // this hotkey will only trigger if used inside SM element window
     new HotKey(Key.W, KeyModifiers.CtrlAlt),  // the keyboard key stroke combination
     WozEmergency                              // the callback
   )

   //
   // Pool of Insight
   .RegisterGlobal(
     "PoolOfInsight",
     "Pool of Insight",
     HotKeyScopes.SM,
     new HotKey(Key.Q, KeyModifiers.CtrlAlt),
     PoolOfInsight
   );
```

### 3. The singularity rectifier

🚧 This section is a work in progress.

### 4. The parametric Wozniator

🚧 This section is a work in progress.


<!--
[![](content/images/plugins/ '@style="max-width: 500px;"')](content/images/plugins/ ':ignore')
-->