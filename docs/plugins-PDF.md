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

 You can create Sub-PDFs of the original PDF via bookmarks or manual selection.

 Why to use it:Sub-PDFs are useful when you want to focus on certain chapter, whilst working separately with rest of the chapters.

 <img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/pdfextract.gif?raw=true" style="zoom: 50%;" />


 | Result in knowledge tree *(Sub-PDF works just like any other PDFs)* | Result in Sub-PDF *(everything but extracted section is marked red)* | Result in the original PDF *(extracted section is marked orange)* |      |
 | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | ---- |
 | <img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/subpdf.png?raw=true" alt="subpdf"  /> | ![redsection](https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/redsection.png?raw=true) | ![orangesect](https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/orangesect.png?raw=true) |      |

## PDF Deletion

  Your PDFs are held in SM binary, which can be located in SM: Search -> Other registries -> Binary. If you delete topic from knowledge tree, it will not delete it from binary. This you need to do manually after deleting topic if you don't want unnecessary things to make yourcollection sizelarger.


## FAQ

 Q: Concept verification error: hook is not a child of root!

 A: Change currently activated concept as the one with hook in it for the PDFs

 Q: PDFs stop working after repair of SM collection

 A: This is because when you do repair, SM restarts itself, while SMA doesn't. So the solution is to restart SMA manually.
