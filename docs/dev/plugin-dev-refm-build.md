## Build documentation {docsify-ignore}

### Output locations

[plugin-dev-refm-build-output-location.md](plugin-dev-refm-build-output-location.md ':include')

### .Net SDK version

The minimum version required is .Net Framework 4.7.2. The highest possible version is now .NET framework 4.8 since Microsoft announced the end of the .NET framework line

There are no plans for upgrading to newer .NET versions, for several reasons:
- The future of .NET Core is presently .NET 5, which is not available at the moment of releasing the SDK
- Several essential libraries are missing from .NET Core, such as the [System.Runtime.Remoting](https://docs.microsoft.com/en-us/dotnet/api/system.runtime.remoting?view=netcore-3.1)
- Several libraries on which SMA depends aren't targeting .NET Core
- It is a lot of work, and the benefits are unclear since .NET framework will be compatible in the foreseeable future

### Plugin Build System

🚧 Work in progress