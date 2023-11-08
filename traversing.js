// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const main = body.getElementsByTagName('main');

// Get item from main
const mainItems = main[0];

console.log(mainItems);


// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');

// const ulBody = ul.closest("body");
// console.log(ulBody);

let current = ul;
while (current.parentNode){
 if (current.parentNode.nodeName.toLowerCase() == 'body'){
	foundIt = current.parentNode.nodeName;
	console.log(current.parentNode);
	break;
 }
 current = current.parentNode;
}


// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');

// List parents of p
const pParents = p.parentElement;

// Search for li tag
const li = pParents.getElementsByTagName('li');
const thirdLi = li[2];

console.log(thirdLi);