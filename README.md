# How to use SuperMemoAssistant

# **PDF**



<!-- tabs:start -->

#### ** Import **

1. Set hook *(Hook determines place where PDFs are added in the knowledge tree)*

2. CTRL+ALT+I

3. File explorer for PDF should open. *(If file explorer doesn't pop up check ALT+TAB for window called "Open")*

   **Note: You need to set hook only once, not everytime you import PDFs!**

<img src="https://raw.githubusercontent.com/supermemo/SuperMemoAssistant.Documentation/master/resources/SuperMemoAssistant.Plugins.PDF/import.png" style="zoom: 50%;" />



#### ** Extract **

Extracts will show up in your knowledge tree just like any other topic!

1. Select text *(or/and image)*
2. Alt+X *(hold CTRL if you want both text & image)*

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/textimage.gif?raw=true" style="zoom:80%;" />



#### ** Sub-PDFs **

You can create Sub-PDFs of the original PDF via bookmarks or manual selection.

**Why to use it:** Sub-PDFs are useful when you want to focus on certain chapter, whilst working separately with rest of the chapters.

<img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/pdfextract.gif?raw=true" style="zoom: 80%;" />

------



| Result in knowledge tree *(Sub-PDF works just like any other PDFs)* | Result in Sub-PDF *(everything but extracted section is marked red)* | Result in the original PDF *(extracted section is marked orange)* |      |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | ---- |
| <img src="https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/subpdf.png?raw=true" alt="subpdf"  /> | ![redsection](https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/redsection.png?raw=true) | ![orangesect](https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/orangesect.png?raw=true) |      |

#### ** FAQ **

Q: Concept verification error: hook is not a child of root!

A: Change currently activated concept as the one with hook in it for the PDFs

<!-- tabs:end -->

------

# LateX

<!-- tabs:start -->

#### ** How to use **

1. You need to OCR text by holding ALT+(left or right drag) 

   *right drag forces selection (ignores text selection)* 

   2. Alt+X 
   3. CTRL+ALT+L to turn extracted text into L

    

#### ** Setup **

Download MikTeX

#### ** FAQ **

<!-- tabs:end -->

------

# Dictionary

<!-- tabs:start -->

#### ** In SM **

#### ** In PDF **

#### ** Setup**

You need to set up an oxford dictionary developer account.  

1. https://developer.oxforddictionaries.com/

2. Get your api key -> Choose the option "PROTOTYPE" on the left

![image-20200119020106787](https://github.com/supermemo/SuperMemoAssistant.Documentation/blob/master/resources/SuperMemoAssistant.Plugins.PDF/prototype2.png?raw=true)After the account is made and you are signed in click **credentials** in the home page. 

4. In credentials click "*[yourname]'s app*" and locate (1) application ID  (2) Application keys

5. After this input these values in dictionary settings *(you can access it by rightclicking SMA icon in windows toolbar)*

#### ** FAQ **

Q: Is credit card required?

A: credit card is not required for prototype account, if it is asked you chose the wrong option in step 2

<!-- tabs:end -->



