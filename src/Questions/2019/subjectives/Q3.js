// 205 2019 Q3


// How you define Frames in HTML? Create a, web page, divide the browser screen into frame consisting of hyperlink, clicking on any link will lead to a new page which must open in the targe frame which is on the right hand side. 

// Frames in HTML allow you to divide a web page into multiple sections or frames, each of which can contain its own HTML document. However, frames are considered outdated and are not recommended for modern web development due to various usability and accessibility issues. Instead, you should use CSS and modern layout techniques like flexbox or CSS Grid to achieve similar effects. That being said, if you still want to use frames, here's how you can define them:

// html
// Copy code
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Frame Example</title>
// </head>
// <frameset cols="30%, 70%"> <!-- divide into two columns -->
//     <frame src="menu.html" name="menuFrame"> <!-- left frame for menu -->
//     <frame src="content.html" name="contentFrame"> <!-- right frame for content -->
//     <noframes> <!-- alternative content for non-frame-capable browsers -->
//         <body>
//             Your browser does not support frames.
//         </body>
//     </noframes>
// </frameset>
// </html>
// Here's how the structure works:

// <frameset>: Defines the structure of frames within the document. In this example, we have two columns specified by cols="30%, 70%".
// <frame>: Defines a single frame within the frameset. Each frame has a src attribute that specifies the URL of the HTML document to be loaded into that frame. The name attribute is used to target the frame.
// <noframes>: Provides alternative content for browsers that don't support frames. Inside <noframes>, you can include content that will be displayed when frames are not supported.
// Now, you need to create two HTML files (menu.html and content.html) that will be loaded into the frames. Here's a simple example:

// menu.html:

// html
// Copy code
// <ul>
//     <li><a href="page1.html" target="contentFrame">Page 1</a></li>
//     <li><a href="page2.html" target="contentFrame">Page 2</a></li>
// </ul>
// content.html:

// html
// Copy code
// <p>This is the content area. Click on a link in the menu to load a page here.</p>
// In this setup, when you click on a link in the left frame (menuFrame), the linked page will load in the right frame (contentFrame).