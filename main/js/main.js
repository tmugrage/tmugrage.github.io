function dateTime() {
	const date = new Date();
	let today = date.toDateString();
	let time = date.toLocaleTimeString();
	document.getElementById('date-time').innerHTML = '<p id="date">' + today + '</p><p id="time">' + time + '</p>';
	setTimeout(dateTime, 1000);
}

function weatherBalloon(cityID) {
	var apiKey = '469c36f0b0eeb2b09439c9ec144fd4a2'; //OpenWeather API key
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + apiKey)
		.then(function(resp) {
			return resp.json()
		})
		.then(function(data) {
			let weatherIcon = data.weather[0].icon;
			let tempK = parseFloat(data.main.temp);
			let tempC = Math.round(tempK - 273.15);
			let tempF = Math.round((tempK - 273.15) * 1.8) + 32;
			document.getElementById('weather').innerHTML = '<p id="location">' + data.name + '</p><p id="details" ' + 'title="' + tempF + '&deg;F">' + '<img src="https://openweathermap.org/img/wn/' + weatherIcon + '.png">' + data.weather[0].description + '<span class="separator">|</span>' + tempF + '&deg;F</p>';
		});
}

function traichu() {
	dateTime();
	weatherBalloon(4519497); //OpenWeather city ID
}
