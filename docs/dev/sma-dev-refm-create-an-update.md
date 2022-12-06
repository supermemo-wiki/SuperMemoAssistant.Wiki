## Procedure for creating SuperMemo Assistant and Plugin updates

### SMA Updates

After finalizing your changes in the SMA code base, this guide describes the procedure to publish your new version.

#### Generating the install/update packages

1. Make sure your code is clean, and can be compiled and run without errors.
2. **Commit** your work to git.
3. Create a tag at your latest commit. Make sure to follow the [versioning convention](https://semver.org/).
4. Push your work to GitHub.
5. Select the **desired configuration** in Visual Studio (Alpha, Beta release/debug, Stable release/debug).
6. In the solution explorer, right-click on the **SuperMemoAssistant** project, and select **Pack**.
7. Navigate to the `release/sma` folder at the root of the solution.
8. The following files have been created/updated:

| File name                                | Description                                            |
|------------------------------------------|--------------------------------------------------------|
| **SuperMemoAssistant-x.x.x.exe**         | The SMA installer                                      |
| **SuperMemoAssistant-x.x.x-delta.nupkg** | Update package for differential updates                |
| **SuperMemoAssistant-x.x.x-full.nupkg**  | Update package for full update                         |
| **RELEASES**                             | Contains the list of all versions and their metadata   |

#### Publishing the packages

Upload the **RELEASES** and **.nupkg** files to the releases website. At the time of writing, they should match the following url:
- https://releases.supermemo.wiki/sma/core/RELEASES
- https://releases.supermemo.wiki/sma/core/packages/SuperMemoAssistant-x.x.x-(delta|full).nupkg

Publish the installer on GitHub as release file for the tag you have previously created.

### Plugin Updates

🚧 Work in progress.