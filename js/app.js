// // Train Station Object
// var trainStation = function(data) {
// 	this.name = ko.observable(data.name);
// 	this.line = ko.observable(data.line);
// 	this.address = ko.observable(data.address);
// };


var placeIds = []

 // ==== This is the octopus (view model) part ===
 // Google Map Layout
 function initMap() {
 	var map = new google.maps.Map(document.getElementById('map'), {
 		center: {lat: 41.033329, lng: -73.7751039},
 		zoom: 11
 	});

 	// create a list to take in all the to-be-displayed markers
 	var markers = [];

 	// Add an event listener to prevent too-close-zoom when there's only one marker
 	google.maps.event.addListener(map, 'bounds_changed', function(event) {
 		if (this.getZoom() > 15) {
 			this.setZoom(15);
 		}
 	});

	// Bind ViewModel to the View (html)
	var vm = new viewModel();
 	ko.applyBindings(vm);
 	function viewModel() {
		var self = this;
		// var googleMap = map;

		self.trainLines = ko.observableArray(allTrainLines);
		// 'All MTA Line' is selected by default
		// 'All MTA Line' is actually an option text, returns null value
		self.selectedLine = ko.observable();

		// display a list of train stations based on filter, show all by default
		self.trainStationList = ko.computed(function(){
			if (self.selectedLine() == 'Harlem Line' || self.selectedLine() == 'Hudson Line') {
				console.log('get here 1');
				displayList = allTrainStations.filter(station => station.line == self.selectedLine());
			} else {
				console.log('get here 2');
				displayList = allTrainStations;
			}
			addListing(displayList);
			return displayList;
		});

		self.selectStation = function (station) {
			addListing([station]);
		}

		// self.googleMap = map;
	};

	var largeInfowindow = new google.maps.InfoWindow();

	var geocoder = new google.maps.Geocoder;
 	for (var i = 0; i < allTrainStations.length; i++){
 		var position = allTrainStations[i].address;
		geocoder.geocode({'location': position}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				if (results[1]) {
					placeIds.push({id: results[1].place_id});
					console.log(placeIds)
				}
			}
		});
	};


	function addListing(dList) {
		console.log('well' + placeIds);
		// Clear all markers at first, we restart from no markers
		clearMarkers();
		// var geocoder = new google.maps.Geocoder;
		// Loop over the displayList to put the markers on map
		for (var i = 0; i < dList.length; i++) {
			// var geocoder = new google.maps.Geocoder;
			// geocoder.geocode({'location': position}, function(results, status) {
			// 	if (status === google.maps.GeocoderStatus.OK) {
			// 		if (results[1]) {
			// 			placeIds.push(results[1].place_id);
			// 			console.log(placeIds)
			// 		}
			// 	}
			// });
			console.log('get here??');
			var position = dList[i].address;
	 		var marker = new google.maps.Marker({
	 			position: position,
	 			animation: google.maps.Animation.DROP,
	 			title: allTrainStations[i].name,
	 			// id: placeIds[i],
	 			map: map
	 		});
	 		// console.log(marker.title, placeIds[i])
	 		// Push the marker to our array of markers
	 		markers.push(marker);
	 		//console.log(markers.length);
	 		// Create an on-click event to open an infowindow at each marker
	 		// and center to the marker
	 		marker.addListener('click', function() {
	 			populateInfoWindow(this, largeInfowindow);
	 		});
 		};

		// Fit the map to display all markers
 		var bounds = new google.maps.LatLngBounds();
 		for (var i = 0; i < markers.length; i++) {
 			bounds.extend(markers[i].getPosition());
 		}
 		map.fitBounds(bounds);
 	}

 	// Find place Id for each station in dList
 	// function findPlaceId(dList) {
 	// 	var geocoder = new google.maps.Geocoder;
 	// 	for (var i = 0; i < markers.length; i++){
 	// 		geocoder.geocode({'location': position}, function(results, status) {
		// 		if (status === google.maps.GeocoderStatus.OK) {
		// 			if (results[1]) {
		// 				placeIds.push(results[1].place_id);
		// 				console.log(placeIds)
		// 			}
		// 		}
		// 	});
		// 	console.log('get here?');
		// 	var position = dList[i].address;			
 	// 	};
 	// };

 	// Function to clear all markers, will be called in another function
 	function clearMarkers () {
 		for (var i = 0 ; i < markers.length; i ++) {
 			markers[i].setMap(null);
 		}
 		markers = [];
 	}

 	// Function to populate the info window when a marker is clicked
 	// The infowindow has the title and street view
 	function populateInfoWindow(marker, infowindow) {
 	// Check if infowindow is opened or not
 		var infoContent = '<div><h6>' + marker.title + ' Train Station</h6></div>' +
	 			'<div id="pano" style="width:300px;height:300px;"></div>';
	 	if (infowindow.marker != marker) {
	 		infowindow.setContent('');
	 		infowindow.marker = marker;
	 		// Make sure the marker property is cleared if the infowwindow is closed
	 		infowindow.addListener('closeclick', function() {
	 			infowindow.marker = null;
	 			map.setZoom(10);
	 		});
	 		var streetViewService = new google.maps.StreetViewService();
	 		var radius = 100;
	 		// var infoContent = '<div><h6>' + marker.title + ' Train Station</h6></div>' +
	 		// 	'<div id="pano" style="width:300px;height:300px;"></div>';
	 		// In case the status is OK, which means the pano was found, compute the
	 		// position of the streetview image, then calculate the heading, then get a
	 		// panorama from that and set the options
	 		var placeId = '';
	 		// var geocoder = new google.maps.Geocoder;
				// geocoder.geocode({'location': marker.position}, function(results, status) {
				// 	if (status === google.maps.GeocoderStatus.OK) {
				// 		if (results[1]) {
				// 			placeId = results[1].place_id;
				// 			addFormattedAddress(placeId);
				// 		}
				// 	}
	 		// });

	 		// below function handles the callback from streetViewService
	 		function getStreetViewAndDetail(data, status) {
	 			console.log('get here 4')
	 			// infowindow.setContent(infoContent)
	 			if (status == google.maps.StreetViewStatus.OK) {
	 				// var infoContent = '<div><h6>' + marker.title + ' Train Station</h6></div>';
	 				// infoContent += '<br><div id="pano" style="width:300px;height:300px;"></div>'
	 				console.log(infoContent);
	 				var nearStreetViewLocation = data.location.latLng;
	 				var heading = google.maps.geometry.spherical.computeHeading(
	 					nearStreetViewLocation, marker.position);
		 			// infowindow.setContent('<div><h6>' + marker.title + ' Train Station </h6></div><div id="pano" style="width:300px;height:300px;"></div>');
	 				infowindow.setContent(infoContent)
	 				var panoramaOptions = {
	 					position: nearStreetViewLocation,
	 					pov: {
	 						heading: heading,
	 						pitch: 30
	 					}
	 				};
	 				console.log('get here 6');
	 				// var panorama = new google.maps.StreetViewPanorama(
	 				// 	document.getElementById('pano'), panoramaOptions);
	 				
	 				var geocoder = new google.maps.Geocoder;
	 				geocoder.geocode({'location': marker.position}, function(results, status) {
	 					if (status === google.maps.GeocoderStatus.OK) {
	 						if (results[1]) {
	 							placeId = results[1].place_id;
	 							addFormattedAddress(infoContent, placeId);
	 							console.log('get here 8');
	 							// panorama.setVisible(true);
	 							// streetViewService.getPanoramaByLocation(marker.position, radius, getStreetViewAndDetail);
	 						}
	 					}
	 				});
	 			} else {
	 				infowindow.setContent('<div>' + marker.title + '</div>' +
	 					'<div>No Street View Found</div>');
	 			// infowindow.setContent('fuck2', infoContent)
	 			}
	 			// streetViewService.getPanoramaByLocation(marker.position, radius, getStreetViewAndDetail);
	 		}


	 		// var geocoder = new google.maps.Geocoder;
	 		// console.log('attention' + marker.position)
	 		// geocoder.geocode({'location': marker.position}, function(results, status) {
	 		// 	if (status === google.maps.GeocoderStatus.OK) {
	 		// 		if (results[1]) {
	 		// 			marker['id'] = results[1].place_id;
	 		// 			console.log(marker.id)
	 		// 		}
	 		// 	}
	 		// })
	 		// for (var i = 0; i < markers.length; i++){
	 		// 	geocoder.geocode({'location': position}, function(results, status) {
				// 	if (status === google.maps.GeocoderStatus.OK) {
				// 		if (results[1]) {
				// 			placeIds.push(results[1].place_id);
				// 			console.log(placeIds)
				// 		}
				// 	}
				// });
				// console.log('get here?');
				// var position = dList[i].address;			
	 		// };

	 		// Add Address to Infowindow
	 		function addFormattedAddress(infoContent, placeId) {
	 			console.log('get here 7');
		 		var service = new google.maps.places.PlacesService(map);
		 		service.getDetails({'placeId': placeId}, function(place, status) {
		 			if (status === google.maps.places.PlacesServiceStatus.OK) {
		 				infoContent += '<br><div>' + place.formatted_address + '</div>'
		 				console.log(infoContent);
		 				infowindow.setContent(infoContent);
		 				// streetViewService.getPanoramaByLocation(marker.position, radius, getStreetViewAndDetail);
		 				console.log(infoContent);
		 			} else {
		 				infoContent += '<br><div>No Address Found</div>';
		 				infowindow.setContent(infoContent);
		 			}
		 		});
	 		};

	 		// Use streetview service to get the closest streetview image within
	 		// 100 meters of the markers position
	 		console.log('get here 5');
	 		streetViewService.getPanoramaByLocation(marker.position, radius, getStreetViewAndDetail);
	 		// streetViewService.getPanorama(marker.position, radius);
	 		// infowindow.setContent(infoContent);
	 		// Open the infowindow on the correct marker
	 		// infowindow.open(map, marker);
	 		// infowindow.setContent('<div><strong>' + marker.title + '</strong><br>' + '</div>' +
	 		// 	'<div id="pano"></div');
	 		infowindow.open(map, marker);
	 		// //  Make sure the marker property is cleared if the infowindow is closed
	 		// infowindow.addListener('closeclick', function() {
	 		// 	infowindow.marker = null;
	 		// 	map.setZoom(10);
	 		// });
	 		console.log('check', infoContent);
	 	}
	 	map.setZoom(15);
	 	map.panTo(marker.getPosition());
 	};
 }

// === This is the data (model) part ===
var allTrainStations = [
	{
		name : 'White Plains',
		line : 'Harlem Line',
		address : {lat: 41.034394, lng: -73.775009}
	},
	{
		name: 'North White Plains',
		line : 'Harlem Line',
		address: {lat: 41.051315, lng: -73.772475}
	},
	{
		name: 'Cold Spring',
		line: 'Hudson Line',
		address: {lat: 41.415259, lng: -73.958101}
	},
	{
		name: 'Irvington',
		line: 'Hudson Line',
		address: {lat: 41.040228, lng: -73.873104}
	},
	{
		name: 'Tarrytown',
		line: 'Hudson Line',
		address: {lat: 41.076879, lng: -73.864582}
	},
	{
		name: 'Hartsdale',
		line: 'Harlem Line',
		address: {lat: 41.011370, lng: -73.795767}
	},
	{
		name: 'Scarsdale',
		line: 'Harlem Line',
		address: {lat: 40.990204, lng: -73.808159}
	},
	{
		name: 'Crestwood',
		line: 'Harlem Line',
		address: {lat: 40.959248, lng: -73.820596}
	},
	{
		name: 'Tuckahoe',
		line: 'Harlem Line',
		address: {lat: 40.951034, lng: -73.828534}
	},
	{
		name: 'Bronxville',
		line: 'Harlem Line',
		address: {lat: 40.941487, lng: -73.835148}
	},
	{
		name: 'Fleetwood',
		line: 'Harlem Line',
		address: {lat: 40.927992, lng: -73.839786}
	},
	{
		name: 'Mt Vernon West',
		line: 'Harlem Line',
		address: {lat: 40.911857, lng: -73.851410}
	},
	{
		name: 'Wakefield',
		line: 'Harlem Line',
		address: {lat: 40.907373, lng: -73.855304}
	},
	{
		name: 'Woodlawn',
		line: 'Harlem Line',
		address: {lat: 40.895679, lng: -73.862894}
	},
	{
		name: 'Williams Bridge',
		line: 'Harlem Line',
		address: {lat: 40.878279, lng: -73.871023}
	},
	{
		name: 'Botanical Garden',
		line: 'Harlem Line',
		address: {lat: 40.866790, lng: -73.883077}
	},
	{
		name: 'Fordham',
		line: 'Harlem Line',
		address: {lat:40.863124, lng: -73.901085}
	},
	{
		name: 'Tremont',
		line: 'Harlem Line',
		address: {lat: 40.847427, lng: -73.899704}
	},
	{
		name: 'Melrose',
		line: 'Harlem Line',
		address: {lat: 40.825935, lng: -73.915232}
	},
	{
		name: 'Harlem - 125 Street',
		line: 'Harlem Line',
		address: {lat: 40.805425, lng: -73.939181}
	},
	{
		name: 'Grand Central',
		line: 'Harlem Line',
		address: {lat: 40.752962, lng: -73.977208}
	}
];

var allTrainLines = [
	'Harlem Line',
	'Hudson Line'
];
