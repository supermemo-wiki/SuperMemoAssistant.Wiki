# LaTeX & OCR

For LaTeX to work in SMA  you need MiKTeX and mathpix OCR.

## How to use OCR

## How to use LateX


## Installation: MiKTeX

1. Download MiKTeX https://miktex.org/download

2. <font size=5 color=red>Install with these options</font>
	
	2.1. **Install MiKTeX for anyone who uses this computer (all users)**
	
	2.2. **Install missing packages on-the-fly: Yes**

3. Add the miktex bin folder to your PATH environment variables

  3.1 Search "Enviroment variables" in windows

  3.2 Click "Enviroment Variables"

   <img src="https://raw.githubusercontent.com/supermemo/Documentation/master/docs/sma/content/images/MiktexSetup/miktex-enviromental2.png" style="zoom: 80%;" />

<<<<<<< HEAD
To be able to extract LaTeX equations, you need mathpix OCR and MiKTeX.


### OCR
=======
	3.3. Find variable called "Path" under **System variables**. Click Edit. Create New value and insert path to miktex (usually *C:\Program Files\MikTeX 2.9\miktex\bin\64\*)
	
	<img src="https://raw.githubusercontent.com/supermemo/Documentation/master/docs/sma/content/images/MiktexSetup/miktex-enviromental3.png" style="zoom: 67%;" />

4. Open settings in <u>MiKTeX console</u> and make sure the packages can be downloaded on the fly
<img src="https://raw.githubusercontent.com/supermemo/Documentation/master/docs/sma/content/images/MiktexSetup/miktex-onfly.png" style="zoom:67%;" /> 

5. Your "Directories" should be configured like  [this](https://raw.githubusercontent.com/supermemo/Documentation/master/docs/sma/content/images/MiktexSetup/miktex-directories.png)

      <img src="https://raw.githubusercontent.com/supermemo/Documentation/master/docs/sma/content/images/MiktexSetup/miktex-directories.png" style="zoom:67%;" /> 

Once this is done, you're pretty much set up to move onto [How to use LateX](https://sma.supermemo.wiki//sma/#/plugins-LaTeX?id=how-to-use-latex)


## Installation: OCR
>>>>>>> 9528681123f2ae69606b1957828d7e8e4ad7d28e

1. You need mathpix account https://mathpix.com/ocr

2. Sign-up requires credit card, the costs are insignificant - practically free (unless you do thousands of request per month)

3. After you have signed in, locate: (1) **app_id** and (2) **app_key**. These you need to insert in SMA´s PDF settings:

4. You can access PDF settings via SMA icon (the image), or CTRL+ALT+SHIFT+O

<img src="https://raw.githubusercontent.com/supermemo/Documentation/master/docs/sma/content/images/accesssettings.png" style="zoom:50%;" />

<<<<<<< HEAD
5. app_id and app_keyare inserted in boxes shown in the image below
=======
5. app_id and app_key are inserted under "MathPix App name" and "MathPix App key"
>>>>>>> 9528681123f2ae69606b1957828d7e8e4ad7d28e

<img src="https://raw.githubusercontent.com/supermemo/SuperMemoAssistant.Documentation/master/resources/SuperMemoAssistant.Plugins.PDF/insettings.png" style="zoom: 33%;" />

### MiKTeX


<<<<<<< HEAD
https://miktex.org/howto/install-miktex

There are a few additional step involved in getting LaTeX to work
1) Download MiKTeX https://miktex.org/download
   1.2) Installation instructions: https://miktex.org/howto/install-miktex
   **MAKE SURE TO INSTALL FOR ALL USERS**
2) Add the bin folder to your PATH environment variable
[.](https://raw.githubusercontent.com/supermemo/Documentation/master/docs/sma/content/images/MiktexSetup/miktex-enviromental.png)
3) Open MiKTeX console and make sure the packages can be downloaded on the fly
4) Make sure your directories look like this

Once this is done, you're pretty much set up.
Use one of
[$] (inline TeX formula)
[$$] (\begin{math})
[latex] (full LaTeX)

like so [$]\frac{1}{2}[/$]

Then use Ctrl+Alt+L to turn them into images
And Ctrl+Alt+Shift+L to turn images back into formulas
You can change the shortcuts in the LaTeX plugin options (Ctrl+Alt+Shift+O or right click on the tray icon)
If you're a LaTeX nerd you can also fine tweak the settings in %AppData%/SuperMemoAssistant/Configs/SuperMemoAssistant.Plugins.LaTeX/LateXCfg.json
Some of them are available in the option interface, but not all of them
=======
>>>>>>> 9528681123f2ae69606b1957828d7e8e4ad7d28e
