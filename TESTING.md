<h2 id="validation">Validation</h2>

### 1. HTML

 HTML has been validated with W3C HTML5 Validator.


| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| Index.html - Before    | [W3C ](https://validator.w3.org/) | <img src="assets/images/testing/indexhtml1.jpeg" height="auto" width="600px"> <img src="assets/images/testing/indexhtml2.jpeg" height="auto" width="600px"> | Removed unnessacary roles, deleted stray end div tag, close footer form, change carousel section to div, remove alt text from icons in footer   |
| Index.html - After    | [W3C](https:/validator.w3.org) | <img src="assets/images/testing/indexhtml.jpeg" height="auto" width="600px">  | Passed all tests.   |
| About.html - Before   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/abouthtml.jpeg" height="auto" width="600px">| Removed roles, closed form in footer, removed alt tags from footer icons, fixed headers and header hierarchy|
| About.html - After   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/aboutpass.jpeg" height="auto" width="600px">| Passed all tests. |
| Gallery.html - Before   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/galleryhtml.jpeg" height="auto" width="600px"> <img src="assets/images/testing/galleryhtml2.jpeg" height="auto" width="600px"> | Remove navigation and header roles, remove img-fluid tags from all images in gallery, swap center element for css |
| Gallery.html - After   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/galleryhtmlafter.jpeg" height="auto" width="600px"> | Aria Labels maintained on up arrow icon - further explination needed for accessibility. Report filed to W3C |
| Contact.html - Before   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/contacthtmlbefore.jpeg" height="auto" width="600px"> | Remove unnessacary aria labels from query items |
| Contact.html - After   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/contacthtmlafter.jpeg" height="auto" width="600px"> | Passed all tests. |
| 404.html   | [W3C](https://validator.w3.org/) | <img src="assets/images/testing/404html.jpeg" height="auto" width="600px"> | Passed all tests  |

### 2. CSS 

CSS has been validated with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| All Pages - Before    | [W3C ](https://jigsaw.w3.org/css-validator/) | <img src="assets/images/testing/cssbefore.jpeg" height="auto" width="600px"> | Remove text shadow class for 311, apply comma after "Montserrat" 322, remove space between 1 and 00% for line 501. |
| All Pages - After    | [W3C](https://jigsaw.w3.org/css-validator/)| <img src="assets/images/testing/cssafter.jpeg" height="auto" width="600px">  | Passed all tests.   |

### 3. Link Testing

Links checked with [W3C Link Checker](https://validator.w3.org/checklink).



| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| All Pages   | [W3C ](https://validator.w3.org/checklink) | <img src="" height="auto" width="600px"> | 

COMPLETE THIS LINK SECTION AFTER CV HAS BEEN UPLOADED. 

### 4. JavaScript 

| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| contact.js   | [JSHint](https://validator.w3.org/checklink) | <img src="assets/images/testing/contactjs.jpeg" height="auto" width="600px"> | Warnings ignored, issue is with JSHint |
| main.js  | [JSHint](https://validator.w3.org/checklink) | <img src="assets/images/testing/mainjs.jpeg" height="auto" width="600px"> | Warnings ignored, issue is with JSHint |


<h2 id="mobiletesting">Mobile Testing</h2>

## 1. Lighthouse

Preliminary mobile testing is undertaken with Chrome dev tools Lighthouse. This assesses the pages Performance, Accessibility, Best Practices and SEO

| Page      | Screenshot           | Notes              |
|-----------|----------------------|--------------------|
| index.html |<img src="assets/images/testing/indextestingmobile.jpg" width="400px" height="auto"> | SEO ignored - LEARN MORE button is specific enough for purpose in this instance. |
| about.html|<img src="assets/images/testing/abouttestingmobile.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |
| gallery.html|<img src="assets/images/testing/gallerymobiletesting.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |00
| contact.html|<img src="assets/images/testing/contactmobiletesting.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |
| 404.html |<img src="assets/images/testing/404testingmobile.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |

<h2 id="desktoptesting">Desktop Testing</h2>

## 1. Lighthouse

Preliminary mobile testing is undertaken with Chrome dev tools Lighthouse. This assesses the pages Performance, Accessibility, Best Practices and SEO

| Page      | Screenshot           | Notes              |
|-----------|----------------------|--------------------|
| index.html - before |<img src="assets/images/testing/homepagedesktoptestingbefore.jpg" width="400px" height="auto"> | Footer links increased to 16px to improve accessibility |
| index.html - after |<img src="assets/images/testing/indexdesktopafter.jpg" width="400px" height="auto"> | SEO ignored - LEARN MORE button is specific enough for purpose in this instance. |
| about.html|<img src="assets/images/testing/aboutdesktoptest.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |
| gallery.html|<img src="assets/images/testing/gallerydesktoptest.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |00
| contact.html|<img src="assets/images/testing/contactdesktoptest.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |
| 404.html |<img src="assets/images/testing/404desktoptesting.jpg" width="400px" height="auto"> | Good scores. No amendments needed. |

<h2 id="accessibility">Accessibility</h2>

More detailed accessibility testing was undertaken using [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool.


| Page      | URL                  | Screenshot           | Notes              |
|-----------|----------------------|----------------------|--------------------|
| index.html   | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/indexwaveresults.jpeg" height="auto" width="600px"> <img src="assets/images/testing/indexwavealerts.jpeg" height="auto" width="600px">| Redundant link warning ignored - the 'READ MORE' button appears stationary on the page and only ever appears once at a time. It appears redundant as it is found several times in the code in order to button appear consistently over all images in the carousel. <br><br>Small text ignored - this is for the copyright at the bottom of the footer. <br><br> Long aria-labels ignored - under 100 characters so still succinct. These appear on the 'piffy logos' which are Kim's own logos and the hyperlinks require more in depth explination to make sense to the user. |
| about.html   | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/aboutwaveresults.jpeg" height="auto" width="600px"> <img src="assets/images/testing/aboutpagewavedetails.jpeg" height="auto" width="600px"> | PDF button has clear labels, the PDF itself has been formatted with clear headings and the text in it is selectable to assist screen readers. <br><br> First paragaph left alone as it is less than 500 characters of justified text. Second paragraph has had break inserted to make the larger block of justified text more ledgible. <br><br> Small text ignored - this is for the copyright at the bottom of the footer.|
| gallery.html | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/gallerywaveresults.jpeg" height="auto" width="600px"> <img src="assets/images/testing/gallerywavedetails.jpeg" height="auto" width="600px"> <img src="assets/images/testing/gallerywavefixed.jpeg"> |ERROR RESOLVED <br><br> Added CSS class display:none to the h1 heading on gallery page to resolve the contrast error. Detailed descriptions of images required on the gallery page as this provides a richer user experience for sighted users. <br><br>Small text ignored - this is for the copyright at the bottom of the footer.|
| contact.html | [WAVE](https://wave.webaim.org/) | <img src="assets/images/testing/contactwave.jpeg" height="auto" width="600px"> <img src="assets/images/testing/contactwavedetails.jpeg" height="auto" width="600px"> <img src=""> |ERROR RESOLVED <br><br> Redundant link ignored: social icons only appear again after form submission and form part of a call to action. <br><br> Small text ignored - this is for the copyright at the bottom of the footer.|