// If an li element is clicked, toggle the class "done" on the <li>

let toDoList = document.querySelector('ul.today-list');

toDoList.addEventListener(('click'), (e) => {
		if (e.target.nodeName.toLowerCase() == 'li' ) {
			e.target.classList.toggle('done');
		};

		// Span needs to be included (find way to include parent)
		if (e.target.nodeName.toLowerCase() == 'span' ) {
			e.target.parentNode.classList.toggle('done');
		};
	});

// Selecting only list elements will not work for 
// new items as function was loaded after


// If a delete link is clicked, delete the li element / remove from the DOM

toDoList.addEventListener('click', (e) => {
	if(e.target.className == 'delete' )		
		e.target.parentElement.remove();
		// e.stopPropagation();
	});


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

	// Append <span> and a.delete elements to <li> element
	newLiItem.append(newSpanItem, newAItem);

	// Append new list element to unordered list
	toDoList.appendChild(newLiItem);

	// Reset value
	input.value = '';
};

// Add eventlistener to add-item class
const add = document.querySelector('a.add-item');
add.addEventListener('click', addListItem);
