## Why & How ?

#### Why should you backup ?

!> ⚠️ **Your collection is precious**. If you are using SuperMemo, you will likely be pouring days, weeks or months of your life into building it. Don't let it all go to waste. **Having frequent backups is vital**.

Do you care about your health ? Would you take a gamble with your life and forfeit your health insurance ? If your answer is no, then keep reading.

Computer glitches can happen at any time. It is precisely because we cannot anticipate them, that we take measures to mitigate their potential damage.

?> *Still not convinced* ? [Read testimonies](#testimonies) of SuperMemo users who remained skeptic, until it was too late.

#### Proposed strategy

The strategy that we suggest attempts to strike a **balance between robustness and ease of use**. This is not a foolproof method, but it should be robust enough that you do not lose more than a single session of SuperMemo.

?> As importantly, it shouldn't take you more than **a few seconds** to commit your hard work to **safety**.

In this guide, you are going to implement two layers of safety:
1. *Local backups*: Frequent (15 minutes), cheap (disk size), without interruption (you can use SuperMemo concurrently).
2. *Internet backups*: On-demand (after every session), long-term storage (unlimited).

As of the moment of writing this guide (2020/02), this solution is **free** (as in free beer, and in freedom). As an added bonus, you will also be able to **synchronize your collection** between computers.

## Step-by-step guide

### Local backups: BitShelter

[BitShelter](https://github.com/alexis-/BitShelter) *(a.k.a. SuperMemo Backup)* is a software that keeps a version history of your files. It is similar to the Ctrl+Z feature of text editors, only for files.

##### I) (*Optional*) Create a partition for your SuperMemo collections

For easier management of your files, and to save space for the frequent snapshots (more on this later), we recommend creating a partition dedicated to your SuperMemo collection. A partition will allow you to keep your SuperMemo files completely seperated from your Window's C:/ drive. 

?> If you do not know how to create a partition in Windows, you can [follow this guide](https://www.tomshardware.com/news/how-to-make-partitions-windows-10,36643.html).

You should obtain a layout similar to this one (it is fine if you only have one disk, instead of two as in this example):

![](/content/images/backup-setup/computer-management-disks.png 'SuperMemo partition :ignore')


![](/content/images/backup-setup/computer-management-disks.png)

![](/content/images/backup-setup/computer-management-disks.png ':relative :ignore')


##### II) Install & Configuration

###### Installing BitShelter

?> Note that BitShelter won't run on 32 bit systems.

1. Download and install [the latest version](https://github.com/alexis-/BitShelter/releases) of *BitShelter*
2. Start **BitShelter Agent** from the Windows Start menu.
3. Double-click on the [Tray Icon ![](https://github.com/alexis-/BitShelter/raw/master/Resources/BitShelter.Agent_TrayIcon.png)](# '@tooltip-preview') 🖼️

###### Enabling Windows' Volume Snapshot Service (VSS)

> Take note of the Drive Letter which contains your SuperMemo collection. If you only have one disk in your computer, it should be C:\\

?> **In this example, the SuperMemo collection Drive Letter is E:\**

1. In the [Main Window ![](https://raw.githubusercontent.com/alexis-/BitShelter/master/Resources/BitShelter.Agent_Rules.png)](https://raw.githubusercontent.com/alexis-/BitShelter/master/Resources/BitShelter.Agent_Rules.png '@tooltip-preview'), click on the <kbd>**Add Schedule**</kbd> button.

> [!NOTE|style:flat]
> If BitShelter displays [an error![](/content/images/backup-setup/bitshelter-error.png)](/content/images/backup-setup/bitshelter-error.png '@tooltip-preview') about loading AlphaVSS.x64.dll, install vc_redist.x64.exe using [this link](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads).

2. Click on <kbd>**Enable other Drive(s)**</kbd> in the [General tab ![](https://github.com/alexis-/BitShelter/raw/master/Resources/BitShelter.Agent_General.png)](https://github.com/alexis-/BitShelter/raw/master/Resources/BitShelter.Agent_General.png '@tooltip-preview').
3. Select the SuperMemo drive **(E:\\)** in the [System Protection dialog ![](https://github.com/alexis-/BitShelter/raw/master/Resources/SystemPropertiesProtection_2018-05-05_13-10-18.png)](https://github.com/alexis-/BitShelter/raw/master/Resources/SystemPropertiesProtection_2018-05-05_13-10-18.png '@tooltip-preview') and click on <kbd>**Configure**</kbd>.
4. In the [new dialog ![](https://github.com/alexis-/BitShelter/raw/master/Resources/SystemPropertiesProtection_2018-05-05_13-10-22.png)](https://github.com/alexis-/BitShelter/raw/master/Resources/SystemPropertiesProtection_2018-05-05_13-10-22.png '@tooltip-preview') click on <kbd>**Turn on protection**</kbd>, select at least 2GB of desired reserved space for Snapshots, then press <kbd>**OK**</kbd> to both System Protection and System Properties windows.

> [!NOTE]
> If you chose not to create a dedicated partition for SuperMemo, increase reserve space significantly. As BitShelter will then run across your entire C:/ drive, it will be filled by all modifications made by any files in windows rather than SuperMemo alone.

5. Back in the [General tab ![](https://github.com/alexis-/BitShelter/raw/master/Resources/BitShelter.Agent_General.png)](https://github.com/alexis-/BitShelter/raw/master/Resources/BitShelter.Agent_General.png '@tooltip-preview'), click on <kbd>**Raise limit**</kbd>, and set the new limit to **512**.


###### Creating snapshot rules in BitShelter

1. Frequent snapshots (15 min)
  1. Click on the <kbd>**Add Schedule**</kbd> button
    * Select the SuperMemo **Drive letter (E:\\)**
    * Set **Lifetime** to *1 Day*
  2. Click on the <kbd>**Schedule**</kbd> **tab** and fill in [the following values](/content/images/backup-setup/bitshelter-15min-schedule.png ':ignore')
    * **Occurs every**: *15 minutes*
	* **Frequency**: *Daily*
	* **Recurs every**: *1 day(s)*
	* **End on**: *Never*
  3. Press the **Create** button
2. Daily snapshots
  1. Click on the <kbd>**Add Schedule**</kbd> button
    * Select the SuperMemo **Drive letter (E:\\)**
    * Set **Lifetime** to *6 Month*
  2. Click on the <kbd>**Schedule**</kbd> **tab** and fill in [the following values](/content/images/backup-setup/bitshelter-daily-schedule.png ':ignore')
    * **Occurs once at**: *08::00::00 (or whenever your computer is running)*
	* **Frequency**: *Daily*
	* **Recurs every**: *1 day(s)*
	* **End on**: *Never*
  3. Press the **Create** button

Your final BitShelter settings should look similar to the following configuration:

![](/content/images/backup-setup/bitshelter-rules.png ':ignore')

#### You are done... Almost !

!> It is highly recommended that you **make sure everything is working as intended**. 

Try out the following instructions and see if you're actually able to open up and use a copy made by BitShelter.

#### Oh no. Something happened to my Collection. How to save the day ?

Don't panic! Restoring your collection to an earlier version is easy with BitShelter! 

1. Right click on your collection folder and click on **Restore previous versions**

![](/content/images/backup-setup/bitshelter-restorepre.png ':ignore')

2. Click on the copy you'd like to go back to:

![](/content/images/backup-setup/bitshelter-restoremenu.png ':ignore')

3. You can then click restore, to overwrite current version of the folder, or click open to browse the files:

![](/content/images/backup-setup/bitshelter-restoremenu2.png ':ignore')

!> If you have issues with the above instuctions, you can also refer to [this guide](https://www.howtogeek.com/howto/11130/restore-previous-versions-of-files-in-every-edition-of-windows-7/)

### Internet backups: Git & Github

#### Git 101

?> **Git** is a tool that makes it easier to track changes to files. When you edit a file, git can help you determine exactly *what* changed, *who* changed it, and *why*. <br /><br />It is useful for coordinating work among multiple people on a project, and for tracking progress over time by saving “checkpoints”. You could use it while writing an essay, or to track changes to artwork and design files. [\[1\]](https://hackernoon.com/understanding-git-fcffd87c15a3)

**For our purposes**, ***git*** will be our mean to:
- Create versions of our collection (*\"checkpoints\"*).
- Upload\* our work to a safe\*\*, remote place.
- *(Bonus)* Synchronize our work between devices.

\*: GitHub has a 1GB limit on free private repositories. [GitLab](https://about.gitlab.com) offers 10gb free storage by default and [BitBucket](http://bitbucket.org) offers a 5gb plan for 3$. 

\*\*: *Although GitHub can be considered fairly reliable, we highly recommend that you implement a solution to encrypt your collection. This is, after all, a way to your innermost thoughts.*

#### Installing & Setting up Git with GitHub

> [!NOTE]
> If you want to use SSH authentication instead of HTTPS, follow [this guide](https://vladmihalcea.com/tutorials/git/windows-git-ssh-authentication-to-github/)

1. Create a [GitHub account](https://github.com/join/).

2. Download [Git for Windows](https://gitforwindows.org/).

3. Install it with default settings

5. Open a command prompt: type `cmd.exe`, then press <kbd>Enter</kbd> and run the following two commands (with your own name and email you use for github):

   ```
   git config --global user.name "Piotr Wozniak"
   git config --global user.email woz@supermemo.org
   ```
   Setup is now complete!
  
#### Creating & Synchronizing your GitHub repository

?> **In this example, the GitHub repository we create will be named SuperMemo-Collection**

1. Create a [new repository](https://github.com/new):
  - Give a name to your new repo (e.g. *SuperMemo-Collection*)
  - Select **Private**

![](/content/images/backup-setup/gitsetup-initialize.png ':ignore')

2. In your SuperMemo Drive (**E:\\**), open a command prompt: type `cmd.exe`, then press <kbd>Enter</kbd>

![](/content/images/backup-setup/windows-explorer-cmd.png ':ignore')

3. Go to your **GitHub repository** web page, click the <kbd>**Clone or download**</kbd> button, and **press use HTTPS**.

![](/content/images/backup-setup/github-clone-link.png ':ignore')

4. Copy the link starting with `https://`

![](/content/images/backup-setup/gitsetup-clonehttps.png ':ignore')

5. In the **command prompt**, type `git clone <https://github.com/......>`. Replace the text between **< >** with the link you copied from GitHub. 'git clone' will create a local copy of your github repository. 

6. A popup will appear. Login with your GitHub account to authenticate.

![](/content/images/backup-setup/gitsetup-login.png ':ignore')

7. Your repository is now synchronized with your computer. Copy your SuperMemo collection into the new folder. Your folder should look similar to the example below (*.gitignore* might be missing):

[](/content/images/backup-setup/git-local-collection-repository.png ':ignore')

8. <a href="/content/data/sm-main-commit.bat" target="_blank" rel="noopener">Download this .bat file</a> and save it in your local repository folder (where your `.git` directory is located). It contains the following commands:

```bat
git add -A && git commit -m "Update"
git push
```

9. Run `sm-main-commit.bat` (double click). If all went well, your should be able to see your collection in your GitHub repository web page.

#### Pushing (*\"saving\"*) your work to GitHub

!> Every time you finish using SuperMemo, make sure to run `sm-main-commit.bat`.

That's all ! Your collection is synchronized online, congratulations !

#### Optional: Pin commit script to taskbar

To make running sm-main-commit.bat more convenient, you can add it to taskbar. Windows doesn't let you add .bat files to taskbar so instead you can do the following:

1. Right click on sm-main-commit.bat and click [create shortcut ![](/content/images/backup-setup/shortcut-creation.png)](/content/images/backup-setup/shortcut-creation.png '@tooltip-preview').

2. The new shortcut still can't be added to taskbar. As such, right click properties and [go to shortcuts menu ![](/content/images/backup-setup/shortcut-edit.png)](/content/images/backup-setup/shortcut-edit.png '@tooltip-preview'). Add ```cmd /c``` (```cmd \c``` will not work) to the front of [ the target script ![](/content/images/backup-setup/shortcut-target.png)](/content/images/backup-setup/shortcut-target.png '@tooltip-preview') and press apply.

3. You can now [right click the shortcut ![](/content/images/backup-setup/shortcut-taskbar.png)](/content/images/backup-setup/shortcut-taskbar.png '@tooltip-preview') and add it to taskbar. After you are done using SuperMemo, click the shortcut in taskbar (or use winkey + taskbar position number key) to sync changes to your collections's Github repository.nt files that haven't been uploaded before running sm-main-pull.bat as it will overrite all local changes



## Suggestions to improve your backup strategy

> Work in progress. Come back later !

- [Encrypt your GitHub repository](https://github.com/AGWA/git-crypt).
- Implement the [3-2-1 Backup Rule](https://www.acronyms-it.co.uk/blog/backup-rule-of-three/) <a href="/content/images/backup-setup/321Backup.png">(Visual Guide)</a>.
- Make your SuperMemo partition a [Mirrored Volume (RAID 1)](https://www.windowscentral.com/how-set-mirrored-volume-file-redundancy-windows-10).

## Testimonies

> 💬 **Luke Avedon**: “*Back up your collection.  I'm ashamed to admit I used to never back up my collection.  Once while running a quick, 'repair collection' I lost power.  An entire section of my knowledge tree was mangled forever.  All the references changed to strange, incomprehensible characters.  Now I know better.  I automatically back up to two local hard drives, and three cloud drives each day.*”

> 💬 **Nour**: “*Well, I'm a bit new to SM and although I was warned, I did not understand the gravity of the warnings. Back-up your collection. Since I'm new, I don't understand a lot of the issues, but I know I didn't do anything to provoke them, and yet the combination of SM and my virtual machine had corrupted and misplaced files and needed to be repaired – with the repairs yielding some unwanted adjustments to my collection. Of course, if all your final prep is on SM, you'd be having heart palpitations at the thought of your collection getting messed up, I know I was. Sufficed to say lesson learned. The hard way, but learned never-the-less.*”

> 💬 **Supersrdjan**: “*I used supermemo for two years enjoying steady gains as my collection grew. I backed up my collection daily at first. But it seemed like overkill. So I switched to weekly backups. Sometimes I would skip a week, or two, and then weeks turned into months between backups. Of course, one day, inevitably, Supermemo crashed and wiped my collection. I felt worse than a stockbroker in 1929. I was about to fall into a great depression.  I had to revert to a 3-month old backup. Better than total bankruptcy I guess. But those months aren't coming back.*”
