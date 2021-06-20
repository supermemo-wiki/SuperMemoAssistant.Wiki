## Building SMA

1) Install VS 2019 with the following modules:
  - .NET desktop development
  - Desktop development with C++
  - .NET 4.7.2 framework SDK
  - Windows 10 SDK
  - C++/CLI support
  
2) Clone the git repository with recurve submodules

3) Crate the following folders:
  - `libs\PluginManager\Releases`
  - `releases\nupkg`
  
4) Unload the following projects:
  - All SuperMemoAssistant.Sdk.\* (under the Build folder)
  - SuperMemoAssistant.Plugins.Email
  - SuperMemoAssistant.Plugins.ImageOcclusion
  - SuperMemoAssistant.Plugins.OmniMemo
  - SuperMemoAssistant.Plugins.MediaPlayer
  
5) Build and pack in order:
  - SuperMemoAssistant.Interop
  - All the services
  - The SuperMemoAssistant.Plugins.\*.Interop projects
  - The SuperMemoAssistant.Plugins.Import.BrowserNativeHost project

6) In the PDF plugins, you need to remove the PDFLicense variable and the parameter where it is used to call the initialization function (you do not have a license)

7) Build everything

🚧 Work in progress.