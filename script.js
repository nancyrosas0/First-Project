
// $.ajax({
// 	url: "api.openweathermap.org/data/2.5/forecast?q=Houston&appid=f5e6a8834c3cbd57c3eddd220306aea4",
// 	method: "GET"
// }).done(function (response) {
// 	console.log(response);
// });

//GLOBAL VARIABLES
var cityTemp = document.getElementById("temperature")
var tempEl = document.getElementsByClassName("temp");

var url = "http://api.openweathermap.org/data/2.5/forecast?q=Houston&appid=37d6caef678ad3d803cf7eac3907b758"

fetch(url)
.then(response => {
	return response.json()
})
.then(data => {
	console.log(data)
	cityTemp = data.list[0].main.temp;
	tempEl.textContent(`Temperature: ${cityTemp} °F`)
	//the document and .textcontent goes in this line -- remember SCOPE
	
	//document.getElementById("temperature").textContent = data.list[0].main.temp;
	//document.getElementById("description").textContent = data.list[0].main.temp;
	//document.getElementById("description").textContent = data.city.uv;
	
})

