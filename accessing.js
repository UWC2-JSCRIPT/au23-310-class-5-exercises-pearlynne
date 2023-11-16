// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

const weatherHead = document.getElementById("weather-head");

weatherHead.innerText = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"

const sun = document.getElementsByClassName("sun");

for (i = 0; i < sun.length; i++) {
	sun[i].style.color = "orange";
}

// Change the class of the second <li> from to "sun" to "cloudy"

// Resubmission: second <li>
sun[0].className = "cloudy";