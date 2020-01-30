## PDF



## Examples of use (GIFs)

<font size="4">**Simple extract**</font>

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/JstLtX.gif?raw=true" style="zoom: 50%;" />

<hr>


<font size="4">**Latex + Text**</font>

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/Txt%20and%20LtX.gif?raw=true" style="zoom: 50%;" />

<hr>




<font size="4">**Complex equation**</font>

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/CmplXLtX.gif?raw=true" style="zoom: 50%;" />

<!-- # LaTeX

# LaTeX -->





------

## OCR & LateX

### Examples (GIFs)



### LateX





### Latex + Text



### Setup LateX

### FAQ

Q: Is credit card required for OCR?

A: yes, the costs are insignificant.

Monthly payment as you go ("As of 2020/01/20"):

- First 1000 requests free.
- $0.004/request (1-100K requests)
- $0.002/request (100-300K requests)
- $0.001/request (300K+ requests)

------



### Import

1. In SuperMemo: Set hook to determine place where PDFs will be imported

2. CTRL+ALT+I to import PDF

3. File explorer window for PDF should open. *(If it doesn't, check ALT+TAB for window called "Open")*

<img src="https://raw.githubusercontent.com/supermemo/SuperMemoAssistant.Documentation/master/resources/SuperMemoAssistant.Plugins.PDF/import.png" style="zoom: 25%;" />

 Note: You need to set hook only once, not everytime you import PDFs!

#### PDF Activation

PDF will open when the topic created by SMA is selected. When unselected the PDF will close. The topic holds metadata of PDF and will look something like this:

<img src="https://raw.githubusercontent.com/supermemo/SuperMemoAssistant.Documentation/master/resources/SuperMemoAssistant.Plugins.PDF/metadata.png" style="zoom: 25%;" />

#### PDF Deletion

Your PDFs are held in SM binary, which can be located in SM: Search -> Other registries -> Binary. If you delete topic from knowledge tree, it will not delete it from binary. This you need to do manually after deleting topic if you don't want unnecessary things to make yourcollection sizelarger.


### Extracts

Extracts will show up in your knowledge tree just like any other topic!

1. Select text *(or/and image)*
2. Alt+X *(hold CTRL if you want both text & image)*

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/textimage.gif?raw=true" style="zoom: 50%;" />



#### Sub-PDFs

You can create Sub-PDFs of the original PDF via bookmarks or manual selection.

Why to use it:Sub-PDFs are useful when you want to focus on certain chapter, whilst working separately with rest of the chapters.

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/pdfextract.gif?raw=true" style="zoom: 50%;" />

------



| Result in knowledge tree *(Sub-PDF works just like any other PDFs)* | Result in Sub-PDF *(everything but extracted section is marked red)* | Result in the original PDF *(extracted section is marked orange)* |      |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | ---- |
| <img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/subpdf.png?raw=true" alt="subpdf"  /> | ![redsection](https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/redsection.png?raw=true) | ![orangesect](https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/orangesect.png?raw=true) |      |


### FAQ

Q: Concept verification error: hook is not a child of root!

A: Change currently activated concept as the one with hook in it for the PDFs

Q: PDFs stop working after repair of SM collection

A: This is because when you do repair, SM restarts itself, while SMA doesn't. So the solution is to restart SMA manually.

------

## OCR & LateX

### Examples (GIFs)



### LateX

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/JstLtX.gif?raw=true" style="zoom: 50%;" />



### Latex + Text

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/Txt%20and%20LtX.gif?raw=true" style="zoom: 50%;" />



### More examples

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/CmplXLtX.gif?raw=true" style="zoom: 50%;" />



### Setup OCR

1. You need mathpix account https://mathpix.com/ocr

2. Sign-up requires credit card, the costs are insignificant - practically free (unless you do thousands of request per month)

3. After you have signed in, locate :(1) app_idand(2) app_key

   These you need to insert in SMA´s PDF settings:

4. You can access PDF settings via SMA icon (the image), orCTRL+ALT+SHIFT+O

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/accesssettings.png?raw=true" style="zoom:50%;" />

5. app_id andapp_keyare inserted in boxes shown in the image below



<img src="https://raw.githubusercontent.com/supermemo/SuperMemoAssistant.Documentation/master/resources/SuperMemoAssistant.Plugins.PDF/insettings.png" style="zoom: 33%;" />

### Setup LateX

### FAQ

Q: Is credit card required for OCR?

A: yes, the costs are insignificant.

Monthly payment as you go ("As of 2020/01/20"):

- First 1000 requests free.
- $0.004/request (1-100K requests)
- $0.002/request (100-300K requests)
- $0.001/request (300K+ requests)

------

## Dictionary

### In SM

### In PDF

### Setup

You need to set up an oxford dictionary developer account.

1. https://developer.oxforddictionaries.com/

2. Get your api key -> Choose the option "PROTOTYPE" on the left

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/prototype2.png?raw=true" alt="image-20200119020106787" style="zoom: 33%;" />

After the account is made and you are signed in, clickCREDENTIALSin the home page.

4. In credentials click "<u>[yourname]'s app</u>" and locate(1) application ID  (2) Application keys, *(the image below)*

   <img src="https://raw.githubusercontent.com/supermemo/SuperMemoAssistant.Documentation/master/resources/SuperMemoAssistant.Plugins.PDF/credentials.png" style="zoom: 33%;" />

5. After you located these values, go to dictionary settings in SMA *(you can access it by rightclicking SMA icon in windows toolbar)*

6. In dictionary settings: Write values in "Oxford Dict. App ID" and Oxford Dict. App Key *(app key is the longer one)*

### FAQ

Q: Is credit card required?

A: credit card is not required for prototype account, if it is asked you chose the wrong option in step 2
