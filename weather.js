$(document).ready(function) () {
	// declaring the variables i need here. Lat & Lng are the coordinates will get from the geolocation API to help find the location of the user. 
	var lat, lon, api_url;

	//Set this if statement to check if browser supports geolocation although most broswers now do :D
	if ("geolocation" in navigator) {
	
    $('#showTemp').on(click, function () {
    	//the getCurrentPosition() method needs a function as a pararmeter. pass in a got location-function in order to get coordinate positions
    	navigator.geolocation.getCurrentPosition(gotLocation);
		
		function gotLocation(position) {
			lat = position.coords.latitude; // get latitude 
			lon = position.coords.longitude; //get longitude
			console.log(position)
		}   


    });

	} else {
		alert("Your browser doesnt support geolocation");
	}
	

});