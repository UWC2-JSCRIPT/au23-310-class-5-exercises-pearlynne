// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const aEl = document.createElement('a');

const aTextNode = document.createTextNode(`Buy Now!`);

aEl.setAttribute('id',"cta");
aEl.appendChild(aTextNode);

const paragraph = document.querySelector('p');
paragraph.after(aEl);


// Access (read) the data-color attribute of the <img>,
// log to the console

const imgClass= document.querySelector("img");
imgColor = imgClass.getAttribute('data-color');

console.log(imgColor);


// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

const li = document.getElementsByTagName('li');

li[2].setAttribute('class',"highlight");


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const main = document.getElementsByTagName('main');

// Got this from getting path
main[0].removeChild(paragraph);

// paragraph.remove() also works