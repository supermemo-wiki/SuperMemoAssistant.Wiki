### PDF: Video tutorial

<div class="youtube-container">
  <iframe src="https://www.youtube.com/embed/bZ-F7v_wWg8?start=622" class="youtube-video" frameborder="0" allowfullscreen></iframe>
</div>

### PDF: Importing

1. Make sure **SuperMemo** is focused
2. Press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>I</kbd> to open the **File picker dialog**
3. Select your `.pdf` file, and press the <kbd>Open</kbd> button

!> If you cannot find the File Picker Dialog, use <kbd>Alt</kbd> + <kbd>Tab</kbd> to find a window called **"Open"**. It might sometime open in the background.

![](content/images/plugin-pdf/pdf-import-pdf.png '@z2v="content/videos/plugin-pdf/pdf-import"')

> [!NOTE|style:flat]
> A **new element** will be created **in SuperMemo** for you. You can recognize <dfn aria-label="Element in SuperMemo which contains the data of an imported PDF.">[**PDF elements**](#glossary)</dfn> by their content, see below:

![](content/images/plugin-pdf/pdf-element.png)

### PDF: Opening, closing

?> To **start working** with one of your PDF, navigate to the <dfn aria-label="Element in SuperMemo which contains the data of an imported PDF.">**PDF element**</dfn> that was created in SuperMemo. The <dfn aria-label="The window that displays the actual PDF, and where extracts can be created.">[PDF window](#glossary)</dfn> will be opened.

![](content/images/plugin-pdf/pdf-window.png)

> [!NOTE]
> To **close** the PDF, either **close the Window** as you normally would, or **navigate to another element**.

### PDF: Extracting

#### Extracting text

1. Select text with your mouse
2. Press <kbd>Alt</kbd> + <kbd>X</kbd>

![](content/images/plugin-pdf/pdf-extract-text.png '@z2v="content/videos/plugin-pdf/pdf-extract-text-result"') 

!> If <kbd>Left click</kbd> selects the whole page, or large chunks of it, this is likely related to the format of your PDF. You will have to modify it, e.g. by using an OCR software, or editing the problematic content. If this is not an option, you can also extract images (see below).

#### Extract images

There are **two modes** for extracting images:

1. **Image selection (A)**: <kbd>Left click</kbd> on the image. An overlay will be displayed to indicate your selection. <kbd>Alt</kbd> + <kbd>X</kbd> to extract.
2. **Area snapshot (B)**: Hold <kbd>Right click</kbd>, then drag your mouse **(B)**. <kbd>Alt</kbd> + <kbd>X</kbd> to extract.

![Image selection](content/images/plugin-pdf/pdf-image-selections.png  '@z2v="content/videos/plugin-pdf/pdf-extract-image-click-and-drag"')

?> <kbd>Right click</kbd> will use the <dfn aria-label="Selection mode that ignores text or image under the cursor. Hold Right click and drag to use.">[force selection](#pdf-force-selection)</dfn> mode to **Area snapshot** (i.e. even if your cursor is currently over some text, or over an image).

#### Multi-selection

SMA allows you to **select as many objects** to extract as you desire. To start a multi-selection, **hold** the <kbd>Ctrl</kbd> key, and select your content as you normally would.

<!-- TODO -->
> [!NOTE]
> SMA will automatically try to fit your content to make the best use of the space in SuperMemo. *You can create new **layouts** to change the default arrangement. (work in progress)*

![](content/images/plugin-pdf/pdf-extract-multiple-AB.png '@z2v="content/videos/plugin-pdf/pdf-extract-multiple"')