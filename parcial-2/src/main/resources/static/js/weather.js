var city;
var openWeatherMapKey = "c5d0d45f9dc4e3bf488c0316e2ca2364"
function actualizar() {
	$("#tb1").empty();
	
		var name = city.name;
		var lat = city.lat;
		var tmp = city.temp;
		var hum = city.hum;
		window.console.log( "name=" + name + " temp = " + tmp + "hum =" +hum)
			
		var funcion = "<tr><td>" + name + "</td><td>" + tmp
				+ "</td><td>" + hum + "</td></tr>";
		$("#tb1").append(funcion);  

	
}



function crearciudad(data){
    console.log(data);
    let city ={
        
    }
    
}

 function getWeather(city,callback) {
   console.log("eefdewfewfwe");

  $.post("/city/"+city, function(data, status){
    console.log(JSON.stringify(data))
    
    let city ={
      name : data.name,
      weather: data.weather.description,
      temp:data.main.temp.value


    }
    alert(city);
  });
     

     


        };
       





weather =(function(){
    var nombre;
	var functiones = [];

	return {
		obtenerClima : function() {

			nombre = document.getElementById("name").value;

      var data = getWeather(nombre)
      

		}
		

	}


})();


/*
var map;
        var geoJSON;
        var request;
        var gettingData = false;
        var openWeatherMapKey = "c5d0d45f9dc4e3bf488c0316e2ca2364"
        var geocoder = new google.maps.Geocoder();
          
          
          
        function initialize() {
          var mapOptions = {
            zoom: 7,
            center: new google.maps.LatLng(50,-50)
          };
          map = new google.maps.Map(document.getElementById('map-canvas'),
              mapOptions);
          // Add interaction listeners to make weather requests
          google.maps.event.addListener(map, 'idle', checkIfDataRequested);
          // Sets up and populates the info window with details
          map.data.addListener('click', function(event) {
            infowindow.setContent(
             "<img src=" + event.feature.getProperty("icon") + ">"
             + "<br /><strong>" + event.feature.getProperty("city") + "</strong>"
             + "<br />" + event.feature.getProperty("temperature") + "&deg;C"
             + "<br />" + event.feature.getProperty("weather")
             );
            infowindow.setOptions({
                position:{
                  lat: event.latLng.lat(),
                  lng: event.latLng.lng()
                },
                pixelOffset: {
                  width: 0,
                  height: -15
                }
              });
            infowindow.open(map);
          });
          codeAddress("Bogota", map);  
        }
        var checkIfDataRequested = function() {
          // Stop extra requests being sent
          while (gettingData === true) {
            request.abort();
            gettingData = false;
          }
          getCoords();
        };
        // Get the coordinates from the Map bounds
        var getCoords = function() {
          var bounds = map.getBounds();
          var NE = bounds.getNorthEast();
          var SW = bounds.getSouthWest();
          getWeather(NE.lat(), NE.lng(), SW.lat(), SW.lng());
        };
        // Make the weather request
        var getWeather = function(northLat, eastLng, southLat, westLng) {
          gettingData = true;
          var requestString = "http://api.openweathermap.org/data/2.5/box/city?bbox="
                              + westLng + "," + northLat + "," //left top
                              + eastLng + "," + southLat + "," //right bottom
                              + map.getZoom()
                              + "&cluster=yes&format=json"
                              + "&APPID=" + openWeatherMapKey;
          request = new XMLHttpRequest();
          request.onload = proccessResults;
          request.open("get", requestString, true);
          request.send();
        };
        // Take the JSON results and proccess them
        var proccessResults = function() {
          console.log(this);
          var results = JSON.parse(this.responseText);
          if (results.list.length > 0) {
              resetData();
              for (var i = 0; i < results.list.length; i++) {
                geoJSON.features.push(jsonToGeoJson(results.list[i]));
              }
              drawIcons(geoJSON);
          }
        };
        var infowindow = new google.maps.InfoWindow();
        // For each result that comes back, convert the data to geoJSON
        var jsonToGeoJson = function (weatherItem) {
          var feature = {
            type: "Feature",
            properties: {
              city: weatherItem.name,
              weather: weatherItem.weather[0].main,
              temperature: weatherItem.main.temp,
              min: weatherItem.main.temp_min,
              max: weatherItem.main.temp_max,
              humidity: weatherItem.main.humidity,
              pressure: weatherItem.main.pressure,
              windSpeed: weatherItem.wind.speed,
              windDegrees: weatherItem.wind.deg,
              windGust: weatherItem.wind.gust,
              icon: "http://openweathermap.org/img/w/"
                    + weatherItem.weather[0].icon  + ".png",
              coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat]
            },
            geometry: {
              type: "Point",
              coordinates: [weatherItem.coord.Lon, weatherItem.coord.Lat]
            }
          };
          // Set the custom marker icon
          map.data.setStyle(function(feature) {
            return {
              icon: {
                url: feature.getProperty('icon'),
                anchor: new google.maps.Point(25, 25)
              }
            };
          });
          // returns object
          return feature;
        };
        // Add the markers to the map
        var drawIcons = function (weather) {
           map.d let city = {
            name:$("#category").val(),
            title:$("#title").val(),
            keyWords:[],
            description:$("#description").val()
        }ata.addGeoJson(geoJSON);
           // Set the flag to finished
           gettingData = false;
        };
        // Clear data layer and geoJSON
        var resetData = function () {
          geoJSON = {
            type: "FeatureCollection",
            features: []
          };
          map.data.forEach(function(feature) {
            map.data.remove(feature);
          });
        };
          
        function codeAddress(addr, map) {
          geocoder.geocode( { 'address': addr}, function(results, status) {
            if (status == 'OK') {
              map.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
                  map: map,
                  position: results[0].geometry.location
              });
            } else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
          });
        }
          
        google.maps.event.addDomListener(window, 'load', initialize);
          
        */