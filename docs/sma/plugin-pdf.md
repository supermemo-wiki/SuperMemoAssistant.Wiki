# PDF

[plugin-pdf-common.md](plugin-pdf-common.md ':include')

### PDF: Force selection

When you have PDF made of images only, or when you find it hard to select the image (interference with text) you can use force selection by holding <kbd>Right click</kbd>. This will ignore text selection.

You can use <dfn aria-label="Selection mode that ignores text or image under the cursor. Hold Right click and drag to use.">force selection</dfn> with OCR as shown in the video clip below. (See [built-in OCR](#pdf-built-in-ocr))

<video width="600" height="340" controls>
  <source src="content/videos/plugin-pdf/pdf-extract-image-forceselection.webm" type="video/webm; codecs=vp9">
  <source src="content/videos/plugin-pdf/pdf-extract-image-forceselection.mp4" type="video/mp4">
  <p>Your browser doesn't support HTML5 video. Use this <a href="content/videos/plugin-pdf/pdf-extract-image-forceselection.mp4">link to the video</a> instead.</p>
</video>

### PDF: Built-in OCR

The PDF plugin implements an optional **OCR**, working with both **text** and **scientific formulas** (math, chemestry, ...).

#### Setup

Behind the scene, SMA uses [MathPix](https://www.mathpix.com/) to recognize images. [Register](https://dashboard.mathpix.com/) an account to unlock the OCR feature. At the day of writing this guide, pricing is free up to 1000 requests.

Once you are registered, copy your **MathPix App Name** and **Key** and paste them in the [PDF plugin settings](#).

<div class="pure-g">
  <div class="pure-u-1-3" style="padding-right: 30px;">
    <img src="content/images/plugin-pdf/pdf-mathpix-pricing.png" />
  </div>
  <div class="pure-u-2-3">
    <img src="content/images/plugin-pdf/pdf-mathpix-settings.png" />
  </div>
</div>

#### Using the OCR

1. In the **PDF window**, press the <kbd>Alt</kbd> key, then capture an <dfn aria-label="Image selection mode which captures a region of your PDF into an image. Hold left or right click, then drag an area with your mouse.">[area snapshot](#extract-images)</dfn>.
2. If your image was success recognized, a window titled *TeX editor* will display your result.

![TeX editor](content/images/plugin-pdf/pdf-ocr-TeX-editor.png '@z2v=content/videos/plugin-pdf/pdf-ocr-wholeline')

#### In-line formulas

If your PDF has formulas in-line with text you want to extract, the easiest way to select your area snapshot is to use <dfn aria-label="Selection mode that ignores text or image under the cursor. Hold Right click and drag to use.">[force selection](#pdf-force-selection)</dfn>.

<video width="600" height="360" style="margin: auto auto;" controls>
  <source src="content/videos/plugin-pdf/pdf-ocr-wholeline.webm" type="video/webm; codecs=vp9">
  <source src="content/videos/plugin-pdf/pdf-ocr-wholeline.mp4" type="video/mp4">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="content/videos/plugin-latex/pdf-ocr-wholeline.mp4">link to the video</a> instead.</p>
</video>

### PDF: Sub-PDF

Sub-PDFs are <dfn aria-label="Element in SuperMemo which contains the data of an imported PDF.">[PDF elements](#glossary)</dfn> which contain only a part of your original PDF. Sub-PDFs are useful when you want to focus on certain chapter, while working separately with rest of the chapters 

> PDF extracts are a way of splitting PDF into seperate pieces

 You can create Sub-PDFs of the original PDF via bookmarks *(if your PDF has these pre-made)* or manual text selection.

**Hotkeys:**

Bookmark extract: <kbd>Ctrl</kbd> + <kbd>ALT</kbd> + <kbd>X</kbd>

Manual PDF-Extract: <kbd>Ctrl</kbd> + <kbd>SHIFT</kbd> + <kbd>X</kbd>

<font size= 4>**Your PDFs will look like this after PDF-extracts**</font>


| Result in Sub-PDF *(extracted sections is focused)*          | Result in the original PDF *(extracted section is marked orange)* |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| <img src="content/images/redsection.png?raw=true" alt="redsection" style="zoom:50%;" /> | <img src="content/images/orangesect.png?raw=true" alt="orangesect" style="zoom: 67%;" /> |

#### Sub-PDF via bookmarks

If your PDF happens to have pre-made bookmarks you can toggle bookmarks with Ctrl+B, select chapter you want to extract and press <kbd>Ctrl</kbd> + <kbd>ALT</kbd> + <kbd>X</kbd>.

Or alternatively you can click the bookmark icon ![bookmark icon](content/images/bookmarkicon.png) and right click to extract.

#### Sub-PDF manually

You can select text like you typically would and press <kbd>Ctrl</kbd> + <kbd>SHIFT</kbd> + <kbd>X</kbd>.

Another way is double clicking area outside of text to turn page blue, then SHIFT+LEFT CLICK last page you want to include in the section. This prodecure is shown in the GIF below.

<video width="400" height="280" controls>
  <source src="content/videos/plugin-pdf/pdf-manualsub.webm" type="video/webm; codecs=vp9">
  <source src="content/videos/plugin-pdf/pdf-manualsub.mp4" type="video/mp4">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="content/videos/plugin-pdf/pdf-manualsub.mp4">link to the video</a> instead.</p>
</video>

## PDF: Deletion

  Your PDFs are held in SM binary, which can be located in SM: Search -> Other registries -> Binary. If you delete topic from knowledge tree, it will not delete it from binary. This you need to do manually after deleting topic if you don't want unnecessary things to make yourcollection sizelarger.

## PDF: Hotkeys

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

## Glossary

[plugin-pdf-glossary.md](plugin-pdf-glossary.md ':include')

## FAQ

**Q: Concept verification error: hook is not a child of root!**

A: Change currently activated concept as the one with hook in it for the PDFs

**Q: PDFs stop working after repair of SM collection**

A: This is because when you do repair, SM restarts itself, while SMA doesn't. So the solution is to restart SMA manually.

**Q: When i click PDF the whole page is selected as an image**

A: Your PDF is made of images, force image area selection by holding right click to OCR the text with SMA. Another way is to use external OCR software to turn the PDF into editable text. See [Working with images](#pdf-force-selection)

**Q: My PDF won't load and there is an error in the logs**

A: Create an [issue ticket on github](https://github.com/supermemo/SuperMemoAssistant.Plugins.PDF/issues) and upload your PDF