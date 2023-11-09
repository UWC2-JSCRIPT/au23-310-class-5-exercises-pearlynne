// If an li element is clicked, toggle the class "done" on the <li>

let liEl = document.querySelector('li');

liEl.addEventListener('click', () => {
	liEl.classList.toggle("done");
});


// If a delete link is clicked, delete the li element / remove from the DOM
let deleteEl = document.querySelector('a.delete')

deleteEl.addEventListener('click', (e) => {
	let task = deleteEl.parentElement; 		// might backfire unless it's immediate parent.
	task.remove();
	e.stopPropagation();
});


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function (e) {
	e.preventDefault();
	const input = this.parentNode.getElementsByTagName('input')[0];
	const text = input.value; // use this text to create a new <li>

	// Create new element li 				(!! Can we reuse element?)
	const newLiItem = document.createElement("li");

	//Create new text node with text
	let newTask = document.createTextNode(text);

	// how to add delete?

	//Append new textnode to List element
	newLiItem.appendChild(newTask);

	//Append new list element to unordered list
	document.querySelector("ul.today-list").appendChild(newLiItem);

	// Reset value
	input.value = "";
};

const add = document.querySelector("a.add-item")
add.addEventListener('click', addListItem)
