# LaTeX & OCR

## How to use LateX

*Work in progress...*

## Installation

To be able to extract LaTeX equations, you need mathpix OCR and MiKTeX.


### OCR

1. You need mathpix account https://mathpix.com/ocr

2. Sign-up requires credit card, the costs are insignificant - practically free (unless you do thousands of request per month)

3. After you have signed in, locate :(1) app_idand(2) app_key

   These you need to insert in SMA´s PDF settings:

4. You can access PDF settings via SMA icon (the image), orCTRL+ALT+SHIFT+O

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/accesssettings.png?raw=true" style="zoom:50%;" />

5. app_id and app_keyare inserted in boxes shown in the image below

<img src="https://raw.githubusercontent.com/supermemo/SuperMemoAssistant.Documentation/master/resources/SuperMemoAssistant.Plugins.PDF/insettings.png" style="zoom: 33%;" />

### MiKTeX


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
