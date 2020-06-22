This list is there for documentation-purpose only. You most likely will never need to use any of these properties when writing a Plugin.

- **SMA**: The main API entry point. It is recommended to use the `Svc.SMA` global property instead. `Svc` is a static class which contains global, static properties for most of the common most services used in coding Plugins. We will see more of it later in this guide
- **AssemblyVersion**: The Assembly Version of your Plugin. Used by the Plugin Manager
- **AssemblyName**: The Assembly Name of your Plugin. Used by the Plugin Manager
- **IsDevelopmentPlugin**: Whether your Plugin is located in the Development folder, or installed through the Plugin system install mechanism
- **SessionGuid**: A unique GUID assigned to each Plugin started by SMA's Plugin Manager
- **PluginMgr**: SMA's Plugin Manager service
- **ChannelName**: The remoting service Channel Name for your Plugin. Used by the Plugin Manager to establish a connection with your Plugin