# Installation

### Pre-requisites

<img src="content/images/qs-install/sm-menu-help-about.png" align="right" />

#### Supported SM versions

Make sure your current **version of SuperMemo** [is supported](/#supported-versions). To view your current SuperMemo version, from the menu, click on *Help*, then *About*.

![SuperMemo Version](content/images/qs-install/sm-build-version.png)

#### Dependencies

You will need to install the following tools in order to use SMA:

- [7-zip](https://www.7-zip.org/) to extract the files
- [Visual C++ Redistributable](https://www.microsoft.com/en-us/download/details.aspx?id=30679) (2012 x86)
- [.NET Framework](https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net472-web-installer) (4.7.2) (Installed by default on Windows 10)

### Downloading SMA

> SMA has no public release at this moment. If you wish to participate in the beta test, you can send a request to **@Naess** on our [Discord server](https://discord.gg/B2AWHPn).

Future SMA releases will be published on [our GitHub page](https://github.com/supermemo/SuperMemoAssistant/releases/latest/). You may also build the software from sources.

#### Are there risks ?

!> ⚠️ **Your collection is precious**. If you are using SuperMemo, you will likely be pouring days, weeks or months of your life in building it. Don't let it all go to waste. **Make sure you have a [backup strategy](/backup-setup)**.

We have been extensively testing SMA since 2019. There are no reasons to believe your collection is at risk by using SMA. However, SMA is a very complex piece of software. A rarely occuring bug could be hiding in the code base, or a future release could have unfortunate consequences. Don't take any chances.

### Installing SMA

**Make sure you meet the pre-requisites.**

1. Open Windows Explorer (<kbd class="win"></kbd> + <kbd>E</kbd>).
2. Navigate to `%AppData%` (expands to `C:\Users\<your-user>\AppData\Roaming`).

![](content/images/qs-install/sma-install-appdata-roaming.png)

?> ❔ If you can't view the AppData folder, [enable viewing hidden folders](https://support.pointlogic.com/faq/troubleshooting/accessing-the-appdata-folder).

3. Create a new folder named *SuperMemoAssistant* (<kbd>Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>N</kbd>).

?> The final path should be `C:\Users\<your-user>\AppData\Roaming\SuperMemoAssistant`.

4. Open `SuperMemoAssistant-vX.X.X.7z` and extract the content to the *SuperMemoAssistant* folder you created.

<img src="content/images/qs-install/sma-shortcut.png" align="right" />

##### (*Optional*) Create a shortcut

1. In the *SuperMemoAssistant* folder, find `SuperMemoAssistant.exe`.
2. Right-click on `SuperMemoAssistant.exe`, and select *Pin to Start*.
3. You can now run SMA from your Start Menu.
