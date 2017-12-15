// // Train Station Object
// var trainStation = function(data) {
// 	this.name = ko.observable(data.name);
// 	this.line = ko.observable(data.line);
// 	this.address = ko.observable(data.address);
// };

// === This is the data (model) part ===
var allTrainStations = [
	{
		name : 'White Plains',
		line : 'Harlem Line',
		address : {lat: 41.035453, lng: -73.774714}
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
	}
];

var allTrainLines = [
	'Harlem Line',
	'Hudson Line'
];

 // ==== This is the octopus (view model) part ===
 // Google Map Layout
 function initMap() {
 	var map = new google.maps.Map(document.getElementById('map'), {
 		center: {lat: 41.033329, lng: -73.7751039},
 		zoom: 11
 	});
 	var markers = [];

	// Bind ViewModel to the View (html)
	var vm = new viewModel();
	console.log(vm);
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

	function addListing(dList) {
		console.log(dList);
		// Clear all markers at first, we restart from no markers
		clearMarkers();
		// Loop over the displayList to put the markers on map
		for (var i = 0; i < dList.length; i++) {
	 		var marker = new google.maps.Marker({
	 			position: dList[i].address,
	 			animation: google.maps.Animation.DROP,
	 			title: allTrainStations[i].name,
	 			map: map
	 		});
	 		console.log(marker);
	 		// Push the marker to our array of markers
	 		markers.push(marker);
	 		//console.log(markers.length);
	 		// Create an on-click event to open an infowindow at each marker
	 		// and center to the marker
	 		marker.addListener('click', function() {
	 			populateInfoWindow(this, largeInfowindow);
	 		});
 		};
 	}

 	// Function to clear all markers, will be called in another function
 	function clearMarkers () {
 		for (var i = 0 ; i < markers.length; i ++) {
 			markers[i].setMap(null);
 		}
 		markers = [];
 	}

 	// Function to populate the info window when a marker is clicked
 	function populateInfoWindow(marker, infowindow) {
 	// Check if infowindow is opened or not
	 	if (infowindow.marker != marker) {
	 		infowindow.marker = marker;
	 		infowindow.setContent('<div>' + marker.title + '</div>');
	 		infowindow.open(map, marker);
	 		//  Make sure the marker property is cleared if the infowindow is closed
	 		infowindow.addListener('closeclick', function() {
	 			infowindow.marker = null;
	 		});
	 	}
	 	map.setZoom(15);
	 	map.panTo(marker.getPosition());
 	}
 }

