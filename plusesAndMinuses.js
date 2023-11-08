// When a user clicks the + element, the count should increase by 1 on screen.
let counter = 0;

const plusEl = document.getElementById('plus')

plusEl.addEventListener('click', () => {
	counter++;
	document.getElementById('count').innerHTML = counter;
	console.log(`counter is ${counter}`);
});


// When a user clicks the – element, the count should decrease by 1 on screen.

const minusEl = document.getElementById('minus')

minusEl.addEventListener('click', () => {
	counter--;
	document.getElementById('count').innerHTML = counter;
	console.log(`counter is ${counter}`)
});