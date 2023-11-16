// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');

const bodyItems = body.children;
// body.firstElementChild or body.querySelector("main")

for (child of body.children){
	if (child.nodeName.toLowerCase() == "main"){
		console.log(child);
	}
};


// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');

let current = ul;
while (current.parentNode){
 if (current.parentNode.nodeName.toLowerCase() == "body"){
	foundIt = current.parentNode.nodeName;
	console.log(current.parentNode);
	break;
 }
 current = current.parentNode;
}

// ul.closest("body") works


// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');

// Find previous sibling 
const pPrevSib = p.previousElementSibling

// Get third child (index of 2)
const thirdLi = pPrevSib.children[2]
// pPrevSib.lastElementChild is the 3rd li 

console.log(thirdLi);
