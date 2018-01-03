// ==== This is the octopus (view model) part ===

// create a blank list to take in all the to-be-displayed markers
var markers = [];

// bind ViewModel to the View (html)
ko.applyBindings(new ViewModel());

// create the View Model Class
function ViewModel() {
	var self = this;

	// use knockoutjs to listen on current available train lines
	// if a new train line added in allTrainLines in Data model, it will be updated automatically
	// through knockoutjs
	self.trainLines = ko.observableArray(allTrainLines);
	// 'All MTA Line' is selected by default
	// 'All MTA Line' is actually an option text, returns null value
	self.selectedLine = ko.observable();

	// display a list of train stations based on filter, show all by default
	self.trainStationList = ko.computed(function(){
		if (self.selectedLine() == 'Harlem Line' || self.selectedLine() == 'Hudson Line') {
			selectedStations = allTrainStations.filter(station => station.line[0] == self.selectedLine() || station.line[1] == self.selectedLine());
			showHideMarkersByLine(self.selectedLine())
			if (largeInfowindow) {
				largeInfowindow.close();
			};
			map.fitBounds(bounds);
		} else {
			selectedStations = allTrainStations;
			showHideMarkersByLine(self.selectedLine())
		}
		return selectedStations;
	});

	// function that listens and respond when a specific station is clicked in the left side bar
	self.oneStation = function (station) {
		if (largeInfowindow) {
			largeInfowindow.close();
		};
		// hide all other markers to focus on the selected station
		for (var i = 0; i < markers.length; i++) {
			// if (markers[i].getTitle() != station.name) {
			// 	markers[i].setVisible(false);
			// } else {
			// 	markers[i].setVisible(true);
			// 	map.panTo(markers[i].getPosition());
			// 	markers[i].setAnimation(google.maps.Animation.DROP);
			// 	google.maps.event.trigger(markers[i], 'click');
			// }
			if (markers[i].getTitle() == station.name) {
				map.panTo(markers[i].getPosition());
				markers[i].setAnimation(google.maps.Animation.DROP);
				google.maps.event.trigger(markers[i], 'click');
			} else {
				// restore to the default marker icon
				markers[i].setIcon();
			};
		};
		// get the NYT news for the selected station
		var nytKeyWords = 'metro north train ' + station.name;
		getNews(nytKeyWords);
	};

	// function that listens the reset button on the left side bar
	self.resetSelection = function () {
		self.selectedLine(null);
		for (var i = 0; i < markers.length; i++) {
 			markers[i].setVisible(true);
 		}
 		map.fitBounds(bounds);
 		if (largeInfowindow) {
			largeInfowindow.close();
		};
		getNews('metro north railroad');
	};

	// create a ko array to host the news of relevant station
	window.newsArray = ko.observableArray();
}



// show only stations on the selected train lines, all stations are shown by default
function showHideMarkersByLine(selectedLine) {
	for (var i = 0; i < markers.length; i++) {
		if (markers[i].line == selectedLine || selectedLine === undefined) {
			markers[i].setVisible(true);
		} else {
			markers[i].setVisible(false);
		};
	};
}

// retrieve news from New York Times
function getNews(nytKeyWords) {
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
		'api-key': "7734f8ba387f4a81abb8b82ff661e32a",
		'sort': "newest",
		'q': nytKeyWords,
		'fl': "headline,snippet,web_url,pub_date"
	});
	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(result) {
		articles = result.response.docs;
		// clear ko observable array to start with a blank right side bar
		newsArray.removeAll();
		// loop each article from the result and push them into newsArray
		for (var i = 0; i < articles.length; i++) {
			newsArray.push(articles[i]);
		}
	}).fail(function(err) {
		alert("NYT news could not be loaded, please try again later. " +
			"If still not resolved, please check your internet connection and API keys if you replaced the default API key with yorus.");
	});
}

// Google Map API Error Handling
function mapError() {
	alert("Google Map could not be loaded at this moment. Please check if you have a proper internet connection. " +
		"Also, you may want to check your API keys if you replaced the default API key with yours. " +
		"Otherwise, please notify the developer through GitHub and he will fix it as soon as possible.")
}

// initiate a Google Map Layout
function initMap() {
	window.map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.033329, lng: -73.7751039},
		zoom: 11,
		streetViewControl: false,
	});



	// create the info window object from google map api library
	window.largeInfowindow = new google.maps.InfoWindow();

	// Get all MTA related news by default
	getNews('metro north railroad');

 	// Function to clear all markers, will be called in another function
 	function clearMarkers () {
 		for (var i = 0 ; i < markers.length; i ++) {
 			markers[i].setVisible(false);
 		}
 		markers = [];
 	}
 	// Clear all markers at first, we restart from no markers
 	clearMarkers();
 	// loop over all train stations to put the markers on map
 	// have another function to turn on/off the markers instead of recreating them repeatedly
 	for (var i = 0; i < allTrainStations.length; i++) {
 		var position = allTrainStations[i].address;
 		window.marker = new google.maps.Marker({
 			position: position,
 			animation: google.maps.Animation.DROP,
 			title: allTrainStations[i].name,
 			line: allTrainStations[i].line,
 			map: map
 		});

 		// Push the marker to our array of markers
 		markers.push(marker);
 		// Create an on-click event to open an infowindow at each marker
	 	// and center to the marker
 		marker.addListener('click', function(){
 			this.setAnimation(google.maps.Animation.DROP);
 			this.setIcon('https://www.google.com/mapfiles/marker_green.png');
 			populateInfoWindow(this, largeInfowindow);
 			getNews('metro north train ' + this.title);
 		});
 	}

	// Fit the map to display all markers
	window.bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < markers.length; i++) {
		bounds.extend(markers[i].getPosition());
	}
	map.fitBounds(bounds);

 	// Function to populate the info window when a marker is clicked
 	// The infowindow has the title and street view
 	function populateInfoWindow(marker, infowindow) {
 	// Check if infowindow is opened or not
 		var infoContent = '<div><h6>' + marker.title + ' Train Station</h6></div>' +
	 			'<div id="pano" style="width:300px;height:300px;"></div>';
	 	if (infowindow.marker != marker) {
	 		// clear the infowindow content to give the streetview time to load
	 		infowindow.setContent('');
	 		infowindow.marker = marker;
	 		// Make sure the marker property is cleared if the infowwindow is closed
	 		infowindow.addListener('closeclick', function() {
	 			infowindow.marker = null;
	 			marker.setIcon();
	 			map.setZoom(10);
	 		});

	 		// Define a new street view service object
	 		var streetViewService = new google.maps.StreetViewService();
	 		// find the closest panorama within 100 meters
	 		var radius = 100;

	 		// handles the error message in the callback from streetViewService
	 		function handleError(data, status) {
	 			if (status != google.maps.StreetViewStatus.OK) {
	 				infowindow.setContent('<div>' + marker.title + '</div>' +
	 					'<div>No Street View Found</div>');
	 			}
	 		}

	 		// create the geo decoder object from google map api library
			// step 1, translate translate lattitude and longitude to unique place ids, push place ids to placeIds list
			// step 2, look up place ids in google map api library
			// step 3, find the formatted address
			var geocoder = new google.maps.Geocoder;
	 		geocoder.geocode({'location': marker.position}, function(results, status) {
 				if (status === google.maps.GeocoderStatus.OK) {
					if (results[1]) {
						placeId = results[1].place_id;
						addFormattedAddress(infoContent, placeId);
					}
 				} else {
 					window.alert("Error was: " + status);
 				}
	 		});

	 		// add formatted address to Infowindow
	 		function addFormattedAddress(infoContent, placeId) {
		 		var service = new google.maps.places.PlacesService(map);
		 		service.getDetails({'placeId': placeId}, function(place, status) {
		 			if (status === google.maps.places.PlacesServiceStatus.OK) {
		 				infoContent += '<br><div>' + place.formatted_address + '</div>'
		 				infowindow.setContent(infoContent);
		 			} else {
		 				infoContent += '<br><div>No Address Found</div>';
		 				infowindow.setContent(infoContent);
		 			}
		 		});
	 		};

	 		// Use streetview service to get the closest streetview image within
	 		// 100 meters of the markers position
	 		streetViewService.getPanoramaByLocation(marker.position, radius, handleError);

	 		// set the panorama options at first to save space later
	 		var panoramaOptions = {
	 			position: marker.position,
	 			pov: {
	 				heading: 34,
	 				pitch: 10,
	 				zoom: 1
	 			}
	 		};
	 		// Dom ready means that all the HTML has been received and parsed by the browser
	 		// into the DOM tree which can now be manipulated
	 		// it occurs BEFORE the page has been fully rendered (as external resources may have not yet fully downloaded)
	 		google.maps.event.addListener(infowindow, 'domready', function() {
	 			var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
	 			map.setStreetView(panorama);
	 		});

	 		// Open the infowindow on the correct marker
	 		infowindow.open(map, marker);
	 	}
	 	// adjust the map position relative to the marker to display all the info window
	 	map.setZoom(15);
	 	map.panTo(marker.getPosition());
	 	map.panBy(0, -150)
 	}
 }
