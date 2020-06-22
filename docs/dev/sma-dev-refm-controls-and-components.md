## Controls and Components {docsify-ignore}

In SMA terminology, a **Component** is to a **Control** what a **Html file** is to a **Web page** displaying that same html file.

- A **Control** is a live Component being displayed in SuperMemo,
- A **Component** is an object which stores the information necessary for the Control to load.

[![SuperMemo Assistant Controls and Components](content/images/sma/controls-and-components/sma-dev-refm-element-controls-and-components.png '@style="max-width: 600px;"')](content/images/sma/controls-and-components/sma-dev-refm-element-controls-and-components.png ':ignore')

### Lifecycle of Components and Controls

#### Loading

Whenever SuperMemo loads an element (e.g. "Topic #10"), it will load that element's **Components data** (Topic #10). In turn, the data is used to create and render the corresponding **Control** inside the [Element window](http://super-memory.com/help/element.htm).

#### Interactions

Once the **Control** is loaded in the Element window, either the user or Plugins can interact with it. Some typical actions would include:
- Editing the content (html, image, etc.),
- Resizing and moving,
- Changing properties
  - Display at,
  - Full html (for html components),
  - Image scaling (for image components)
  - etc.

#### Saving

Whenever the user is done working on the element (Topic #10), and commands SuperMemo to display the next one is the learning queue (e.g. Item #50), the former element (Topic #10) will be saved to disk.

If the **Control** was edited, any modification will be saved in the **Component** model, and saved to disk.

<hr />

### Controls

#### Controls UML diagram

[![Controls UML diagram](content/images/sma/controls-and-components/sma-dev-refm-controls-uml.png '@style="max-width: 600px;"')](content/images/sma/controls-and-components/sma-dev-refm-controls-uml.png ':ignore')

> [!NOTE|label:Diagram legend]
> - **Dotted lines**: Inherits from pointed type
> - **Solid lines**: One of the type's functions returns the pointed type
> - **Bubbles**: C# interface types

#### IControlGroup

The **Control Group** is the container of all the loaded controls. You could represent it as being the *Master Control*, encompassing the whole display area (see screenshot below).

If the `IControlGroup` were a **WPF** type, it would be a mix between a [Window](https://docs.microsoft.com/en-us/dotnet/api/system.windows.window) and a [Grid](https://docs.microsoft.com/en-us/dotnet/api/system.windows.controls.grid).

[![SuperMemo Assistant IControlGroup](content/images/sma/controls-and-components/sma-dev-refm-controls-IControlGroup.png '@style="max-width: 600px;"')](content/images/sma/controls-and-components/sma-dev-refm-controls-IControlGroup.png ':ignore')

Typical **usages** of the Control Group include:
- Get the **focused Control**,
- **Enumerate** all Controls,
- Get the loaded Controls **count**.

#### IControlWeb, IControlImage, etc.

Those are the controls displaying the **element's content**, and enabling the user to **interact** with it.

> [!TIP] If you want to learn more about the capabilities of each **Control**, check out their respective Types in Visual Studio.
> 
> Most of the types in the SDK are documented and should provide enough information for developers to understand their usage. If you feel like the documentation isn't clear enough, please open a [GitHub issue](https://github.com/supermemo/Documentation/issues).

[![SuperMemo Assistant IControlWeb](content/images/sma/controls-and-components/sma-dev-refm-controls-IControlWeb.png '@style="max-width: 600px;"')](content/images/sma/controls-and-components/sma-dev-refm-controls-IControlWeb.png ':ignore')

#### IControl, IControlTextBase

Those are abstract types from which other Controls can **inherit**. All Controls must inherit from `IControl`.

##### IControl

`IControl` contains Properties shared by every control:
- The **position** of the control,
- The **size** of the control,
- When to **display** the control (question, answer, grading, etc.),
- etc.

##### IControlTextBase

`IControlTextBase` contains Properties shared by every text-based control.

<hr />

### Components

<u>🚧 Work in progress 🚧</u>

<!--

[![](content/images/sma/controls-and-components/ '@style="max-width: 600px;"')](content/images/sma/controls-and-components/ ':ignore')
[![](content/images/sma/controls-and-components/ '@style="max-width: 600px;"')](content/images/sma/controls-and-components/ ':ignore')
[![](content/images/sma/controls-and-components/ '@style="max-width: 600px;"')](content/images/sma/controls-and-components/ ':ignore')

-->