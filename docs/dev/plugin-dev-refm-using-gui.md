## Using GUI {docsify-ignore}

### Windows Presentation Framework (WPF)

#### Synchronization context

By default SMA Plugins instantiate a WPF application. This will create a Synchronization context that an be accessed in a number of ways, such as accessing the `Dispatcher` Property if your code is running in a PresentationFramework-derived object, or using the global `Application.Current.Dispatcher` Property.

You can create your own `System.Windows.Application` implementation (see the *Overridable methods* chapter above), but running the Plugin without a WPF Application instance will result in a crash.

### Windows Forms

It is possible to use the [Windows Forms](https://docs.microsoft.com/en-us/dotnet/framework/winforms/) framework, however we discourage from it and no support will be provided. WPF is the preferred way.