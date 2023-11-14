// If an li element is clicked, toggle the class "done" on the <li>

let toDoList = document.querySelector('ul.today-list');

toDoList.addEventListener(('click'), (e) => {
	if (e.target.nodeName.toLowerCase() == 'li') {
		e.target.classList.toggle('done');
	}

	// Span needs to be included (find way to include parent)
	if (e.target.nodeName.toLowerCase() == 'span') {
		e.target.parentNode.classList.toggle('done');
	}
})

// Selecting only list elements will not work for 
// new items as function was loaded after 
// unlesss we add event listener in function


// If a delete link is clicked, delete the li element / remove from the DOM
toDoList.addEventListener('click', (e) => {
	if (e.target.className == 'delete') {
		e.target.parentElement.remove();
	}
})


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function (e) {
	e.preventDefault();
	const input = this.parentNode.getElementsByTagName('input')[0];
	const text = input.value; // use this text to create a new <li>

	// Create new <li> element
	const newLiItem = document.createElement('li');

	// Create new a.delete element
	const newAItem = document.createElement('a');
	newAItem.setAttribute('class', 'delete');
	newAItem.textContent = 'Delete'; 	// innerHTML prints tags as well

	// Create new <span> element with text value.
	const newSpanItem = document.createElement('span');
	newSpanItem.textContent = `${text}\n`;

	// Extra Credit: Create new sorting buttons
	const sortButtons = createButtons();

	// Append <span> and a.delete and moving buttons to <li> element
	newLiItem.append(newSpanItem, newAItem, sortButtons.upLink, sortButtons.downLink);

	// Append new list element to unordered list
	toDoList.appendChild(newLiItem);

	// Reset value
	input.value = '';
}

// Add eventlistener to add-item class
const add = document.querySelector('a.add-item');
add.addEventListener('click', addListItem);


/* -------------------- Extra Credit -------------------- */

//  Create new move up/down buttons
const createButtons = (function () {
	// Create new Move Up button
	const upLink = document.createElement('button');
	upLink.setAttribute("class", "sortUp");
	upLink.textContent = `Move up \n`;

	// Create new Move Down button
	const downLink = document.createElement('button');
	downLink.setAttribute("class", 'sortDown');
	downLink.textContent = `Move down \n`;

	return { upLink: upLink, downLink: downLink };
})


// Add buttons to current list (to fix: more efficient)
let liEl = document.querySelectorAll('li');
liEl.forEach((item) => {
	let sortButtons = createButtons();
	item.append(sortButtons.upLink, sortButtons.downLink);
})


// Functions to reorder buttons 
toDoList.addEventListener('click', (e) => {
	// Get list item
	let item = e.target.parentNode;

	// Move list item up or down 
	if (e.target.className == 'sortUp') {
		// Insert if there is a previous sibling
		if (item.previousElementSibling) {
			item.parentNode.insertBefore(item, item.previousElementSibling);
		}
	} else if (e.target.className == 'sortDown') {
		// Insert if there is a next sibling
		if (item.nextElementSibling) {
			item.parentNode.insertBefore(item.nextElementSibling, item);
		}
	}
})
