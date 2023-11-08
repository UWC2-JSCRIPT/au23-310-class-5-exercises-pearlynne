// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const td = document.getElementsByTagName("td")

let cellIndex = 0

const clickTable = function (e) {
	// get mouse coordinates
	let xCoord = e.clientX;
	let yCoord = e.clientY;

	// To fix: remove current innerHTML via eventlistener instead
	td[cellIndex].innerHTML = "";

	// Loop to find which cell was clicked
	for (i = 0; i < td.length; i++) {
		// Add to inner HTML to cell
		if (e.target == td[i]) {
			let clickedCell = td[i];
			cellIndex = i;
			clickedCell.innerHTML = `${xCoord}, ${yCoord}`;
			break;
		}
	}
}

document.addEventListener("click", clickTable);
