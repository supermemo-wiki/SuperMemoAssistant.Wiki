# PDF

[plugin-pdf-common.md](plugin-pdf-common.md ':include')

### 1.4 PDF: Extracting

SMA can extract text and/or images from PDFs into regular topics, or extract parts of a PDF into a Sub-PDF.


#### 1.4.1 Extracting Text and images

Text and image extracts for PDF elements work very similar to extracts in regular SuperMemo topics. 

##### Prerequisite:
 - Optionally, for using OCR feature (see below), make sure that the OCR plug-in has been set up. See the “Setting up the OCR plug-in” section for details.

##### To extract text and/or images:
1. Select the text and/or images to be extracted. There are several variations on this, depending on what you want to extract.

 - Selecting text
Text is selected in the PDF by holding left-click on the mouse, and dragging the cursor across the text to be extracted.

![](content/images/plugin-pdf/pdf-extract-text.png '@z2v="content/videos/plugin-pdf/pdf-extract-text-result"') 

 - Selecting images
There are two methods for extracting images: the Image-Selection method and Area snapshot method.

   - The Image-Selection method
This image extraction method selects an image present in the PDF, and is executed by simply left-clicking on the image.

   - The Area Snapshot method
The image extraction method uses Force Selection to select an area in the PDF, which is then used to create an image upon extraction. 
To select an area using Force Selection, hold right-click on the mouse and drag a selection box over the content to be extracted.

![Image selection](content/images/plugin-pdf/pdf-image-selections.png  '@z2v="content/videos/plugin-pdf/pdf-extract-image-click-and-drag"')

 - Multiple selections
SMA lets you select how many parts in a PDF as you want. To make additional selections in a PDF, hold the Ctrl key while making either of the above selections.

![](content/images/plugin-pdf/pdf-extract-multiple-AB.png '@z2v="content/videos/plugin-pdf/pdf-extract-multiple"')

 - OCR
The PDF plugin implements an optional OCR, for working with both text and scientific formulas, such one those encountered in mathematics and chemistry. To use the OCR feature, make an Area Snapshot while holding the Alt key, to bring up the TeX editor window. Optionally, in the TeX editor window, you can check and edit the scan. Press OK.

![TeX editor](content/images/plugin-pdf/pdf-ocr-TeX-editor.png '@z2v="content/videos/plugin-pdf/pdf-ocr-wholeline"')

 - Deselection
To undo a selection or selections you have made, left-click or right-click in the PDF.

2. Extract the selected content by pressing Alt + X.

##### Result:
 - A folder is created under the PDF element, and a new topic with the extracted content is created under that folder.
 - If only text was selected, the extracted topic contains an HTML component with the selected text.
 - If only images were selected, the extracted topic contains one or several image elements, each of which contains one of the selected images.
 - If both images and text was selected, the extracted topic contains a HTML component and an image component for each image.
 - Optionally, when using the OCR function, change the markup in the TeX editor window if desired.

##### Tips:
 - If your PDF has formulas in-line with text you want to extract, the easiest way to select your area snapshot is to use force selection.

##### Notes:
 - If clicking the text in PDF does not select text, but the page, or chunks of it, then the PDF likely consists of images. In that case, you can extract the images themselves or use the OCR feature.
 - Force Selection can be used to make an image out of text, since it bypasses text selection.
 
#### 1.4.2 Extracting Sub-PDFs

SMA can not only make extracts of the PDF content into regular topics, but also extract PDF Elements. A PDF Element created as an extract from another PDF Element is called a Sub-PDF, or PDF extract, and they display a section of the PDF of the parent PDF Element, which is selected by the user. 

There are two methods of creating Sub-PDFs: with manual selection, and using bookmarks.

##### Procedure for extracting Sub-PDFs with manual selection:
1. Select the content to be extracted. This can be done in two ways:
- Select text as specified under “Extracting Text and images” (note that Sub-PDF extracts do not work for image selections.).
- Select a page by double clicking on it, on an area that is neither text nor an image. The selection will be indicated by the page turning blue. Optionally, with the given page selected, extend the selection to include a range of pages by shift-clicking on another page above or below the first selected page, to include the pages between them, including the shift-clicked page.
2. Extract by pressing Ctrl + Alt + X.

##### To extract Sub-PDFs using bookmarks:
1. Open the bookmark section by clicking  (shortcut: Ctrl+B)
2. Open the context menu of the given bookmark.
3. Select PDF extract.

![](content/images/plugin-pdf/pdf-subpdf-visual-indicators.png)

##### Result:
 - A folder is created under the PDF element, and a new PDF Element is created under that folder. 
 - In the PDF of the new PDF Element, the parts that were not selected upon extraction are now shaded, and the reading point is set to the beginning of the selection. The PDF of the parent PDF Element is left unchanged.

##### Notes:
- If the bookmark section is empty, the PDF does not contain any bookmarks. In this case, sub-PDFs can only be extracted with manual selection.

### 1.5 Setting Up the OCR plug-in

Behind the scenes, SMA uses MathPix to scan images with the OCR plug-in, and you have to register an account on mathpix to enable the plug-in. At the time of writing this guide, pricing is free up to 1000 requests.

The OCR feature can be used during extraction in the PDFs of PDF Elements. See the “PDF: Extracting” section for details.

####To set up the OCR plug-in:
1. Register an account at mathpix.
2. Copy and paste your mathpix app name and key to their respective fields in the PDF plug-in settings.

![](content/images/plugin-pdf/pdf-mathpix-settings.png)

### 1.6 The Dictionary Plug-in
The PDF plugins implements an optional **dictionary**. Make sure to [setup the dictionary plugin](plugin-dictionary#setup).

Select a word and press <kbd>Ctrl</kbd> + <kbd>D</kbd>. A popup will be displayed [next to the word ![](content/images/plugin-pdf/pdf-dictionary-popup.png)](content/images/plugin-pdf/pdf-dictionary-popup.png ':ignore @tooltip-preview').

#### Per-PDF dictionary language

You can change the dictionary language for each of your PDF. In the <dfn aria-label="The window that displays the actual PDF, and where extracts can be created.">PDF window</dfn>, press <kbd>Ctrl</kbd> + <kbd>O</kbd> and [select a language ![](content/images/plugin-pdf/pdf-settings-dictionary-languages.png)](pdf-settings-dictionary-languages.png ':ignore @tooltip-preview') from the *PDF dictionary language* combo box.

### 1.7 PDF: Settings

There are two layers of settings available. Global PDF settings, and per-PDF settings.

#### 1.7.1 Opening the Global PDF Settings Window

##### Prerequisite:
 - The PDF plug-in must be enabled.

##### To open the global PDF settings window:
1. Open SuperMemo Assistant.
2. Click the cogwheel symbol symbol next to the PDF plug-in. This button is only displayed if the PDF plug-in is enabled.
Alternate procedure:
1. Right-click on system tray icon in the system tray
2. Select PDF.

##### Result: 
-The global PDF Settings window is opened.

#### 1.7.2 Opening the Per-PDF Settings Window

##### To open the per-PDF settings window:   

1. Open the PDF window.
2. Press Ctrl + O.

##### Result: 
-The per-PDF settings window is opened within the PDF window.


### 1.8 PDF: Hotkeys
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
> [!NOTE]
> When you extract text from the PDF file, the windows error sound may play. You can [disable it by switching off system sounds](#faq).
### 1.9 Glossary
[plugin-pdf-glossary.md](plugin-pdf-glossary.md ':include')

## FAQ

**Q: Concept verification error: hook is not a child of root!**

A: Change currently activated concept as the one with hook in it for the PDFs.

**Q: PDFs stop working after repair of SM collection**

A: This is because when you do repair, SM restarts itself, while SMA doesn't. So the solution is to restart SMA manually.

**Q: When i click PDF the whole page is selected as an image**

A: Your PDF is made of images, force image area selection by holding right click to OCR the text with SMA. Another way is to use external OCR software to turn the PDF into editable text. See [Working with images](#pdf-force-selection).

**Q: My PDF won't load and there is an error in the logs**

A: Create an [issue ticket on github](https://github.com/supermemo/SuperMemoAssistant.Plugins.PDF/issues) and upload your logs and your PDF file.

**Q: How to I jump to a specific page number ?**

A: Use <kbd>Ctrl</kbd> + <kbd>G</kbd>.

**Q:How do I disable the Windows Sound from playing when I extract from a PDF?**

A: In order to stop the sound from playing, you can right click the volume icon on the taskbar, then open the volume mixer and set system sounds to zero. 
