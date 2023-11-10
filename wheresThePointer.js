// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

document.addEventListener("click", (e) => {

	// Print coordinates to innerHTML only if td was selected
	if (e.target.nodeName.toLowerCase() == 'td') {
		e.target.innerHTML = `${e.clientX}, ${e.clientY}`;
	};
});


// Adding listener to each td element
// const td = document.querySelectorAll("td")
// td.forEach((x) => { cell.addEventListener...