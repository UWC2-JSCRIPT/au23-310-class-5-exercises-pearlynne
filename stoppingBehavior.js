// Do not change
document.getElementById('cat').addEventListener('click', () => {
	alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

document.querySelector('a#more-info').addEventListener('click', (e) => {
	alert(`Here's some info!`)
	// Stop deafault in html
	e.preventDefault();
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
document.getElementById('dog').addEventListener('click', (e) => {
	alert('Bow wow!');
	
	// Stop propagating meow alert
	e.stopPropagation()
});
