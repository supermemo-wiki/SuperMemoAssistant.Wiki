# PDF

## How to import PDF?

[Make sure SMA & SuperMemo both are running](https://sma.supermemo.wiki/#/sma?id=starting-sma)

1. In SuperMemo: Set hook to determine place where PDFs will be imported
2. Press CTRL+ALT+I to import PDF
3. File explorer window for PDF should open. *(If it doesn't, check ALT+TAB for window called "Open")*

<img src="https://raw.githubusercontent.com/supermemo/SuperMemoAssistant.Documentation/master/resources/SuperMemoAssistant.Plugins.PDF/import.png" style="zoom: 25%;" />

Note: You need to set hook only once, not everytime you import PDFs!


## How to open PDF in SM?

 PDF will open when you select the topic SMA created for you. When unselected the PDF will close. The topic holds metadata of PDF and will look something like this:

 <img src="https://raw.githubusercontent.com/supermemo/SuperMemoAssistant.Documentation/master/resources/SuperMemoAssistant.Plugins.PDF/metadata.png" style="zoom: 25%;" />

## How to make extracts in PDF?

 Extracts will show up in your knowledge tree just like any other topic!

 1. Select text *(or/and image)*
 2. Alt+X *(hold CTRL if you want both text & image)*

 <img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/textimage.gif?raw=true" style="zoom: 50%;" />



## What is SUB-PDF?

Sub-PDFs are basically mirrors of your original PDF, but with specified section targeted. Sub PDFs are useful when you want to focus on certain chapter, whilst working separately with rest of the chapters. 

 You can create Sub-PDFs of the original PDF via bookmarks or manual selection.

Hotkeys: 

Bookmark extract CTRL+**ALT**+X

Manual PDF-Extract: CTRL+**SHIFT**+X

**Sub-PDF via bookmarks**

 <img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/pdfextract.gif?raw=true" style="zoom: 50%;" />

**Sub-PDF manually** *(You can also select text like you normally would and then CTRL+SHIFT+X)*

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/manualSUB.gif?raw=true" style="zoom: 50%;" />


| Result in Sub-PDF *(everything but extracted section is marked red)* | Result in the original PDF *(extracted section is marked orange)* | Result in knowledge tree *(Sub-PDF works just like any other PDFs)* |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ![redsection](https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/redsection.png?raw=true) | ![orangesect](https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/orangesect.png?raw=true) | <img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/subpdf.png?raw=true" alt="subpdf"  /> |

## Working with images (and OCR)

There are multiple ways to extract images in PDF.

Simplest way is by holding left click

<img src="https://raw.githubusercontent.com/supermemo/SuperMemoAssistant.Documentation/master/resources/SuperMemoAssistant.Plugins.PDF/image-click/image-click.gif" style="zoom:50%;" />

## PDF Deletion

  Your PDFs are held in SM binary, which can be located in SM: Search -> Other registries -> Binary. If you delete topic from knowledge tree, it will not delete it from binary. This you need to do manually after deleting topic if you don't want unnecessary things to make yourcollection sizelarger.

## Hotkeys

```
HotKeys
			- Bookmark PDF-extract (Ctrl+Alt+X)
			- Manual PDF-extract (Ctrl+Shift+X)
			- SM extract (Alt+X)
			- Mark text as ignored (Ctrl+Shift+I)
			- Show selected text in Dictionary (Ctrl+D)
			- Go To Page (Ctrl+G)
			- SM Learn (Ctrl+L)
			- Learn And Reschedule (Ctrl+Shift+L)
			- SM Reschedule (Ctrl+J)
			- SM LaterToday (Ctrl+Shift+J)
			- SM Done (Ctrl+Shift+Enter)
			- SM Delete (Ctrl+Shift+Del)
			- SM Previous (Alt+Left)
			- SM Next (Alt+Right)
			- SM Parent (Ctrl+Alt+Up)
			- SM Child (Ctrl+Alt+Down)
			- SM Prev Sibling (Ctrl+Alt+Left)
			- SM Next Sibling (Ctrl+Alt+Right)
			- UI Show Options (Ctrl+O)
			- UI Toggle Bookmarks (Ctrl+B)
			- UI Focus Viewer (Alt+C)
			- UI Focus Bookmarks (Alt+B)
```

```
Non-hotkeys
			- OCR (Alt+Click)
			- Image area selection (Hold left click)
			- Force image area selection (Hold right click)
			- Zoom (Ctrl+Wheel)
			- Extend text selection (Shift+Click, Shift+Left/Right)
			- Deselect (Escape)
			- PDF navigation (Up/Down/Left/Right/Pg. Down/Pg. Up/Home/End)
			- Select word (Double click)
			- Select paragraph (Triple click)
			- Select page text (Quadra click)
			- Select page (double click on empty space in page)
			- Extend page selection (Shift+Click page)
			- Add to selection (Hold ctrl)
			- Select image (Click image)
```

## FAQ

 **Q: Concept verification error: hook is not a child of root!**

 A: Change currently activated concept as the one with hook in it for the PDFs

 **Q: PDFs stop working after repair of SM collection**

 A: This is because when you do repair, SM restarts itself, while SMA doesn't. So the solution is to restart SMA manually.

**Q: When i click PDF the whole page is selected as an image**

A: Your PDF is made of images, force image area selection by holding right click to OCR the text with SMA. Another way is to use external OCR software to turn the PDF into editable text.

**Q: My PDF won't load and there is an error in the logs**

A: Create an [issue ticket on github](https://github.com/supermemo/SuperMemoAssistant.Plugins.PDF/issues) and upload your PDF



```
- When I click the whole page is selected as an image
				> Your pdf is made of images, either use an OCR and remove the images, or use force image area selection
			- My PDF won't load and there is an error in the logs
				> Create an [issue ticket on github](https://github.com/supermemo/SuperMemoAssistant.Plugins.PDF/issues) and upload your PDF
```