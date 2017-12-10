// ==== This is the octopus (view model) part ===
var ViewModel = function() {
	var self = this;

	self.trainLines = ko.observableArray(allTrainLines);
	// No line is selected by default
	self.selectedLine = ko.observable();

	self.trainStationList = ko.computed(()=>{
		if (this.selectedLine() != 'All MTA Lines') {
			console.log('get here 1');
			return allTrainStations.filter(station => station.line == this.selectedLine());
		} else {
			console.log('get here 2');
			return allTrainStations();
		}
	}, this);
};


// Train Station Object
var trainStation = function(data) {
	this.name = ko.observable(data.name);
	this.line = ko.observable(data.line);
	this.address = ko.observable(data.address);
};

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
	}
];

var allTrainLines = [
	'Harlem Line',
	'Hudson Line'
];

// Google Map Layout
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.033329, lng: -73.7751039},
    zoom: 11
  });
}


// Bind ViewModel to the View (html)
ko.applyBindings(new ViewModel())