// ==== This is the octopus (view model) part ===
var ViewModel = function() {
	var self = this;

	self.trainLines = ko.observableArray(allTrainLines);
	// 'All MTA Line' is selected by default
	// 'All MTA Line' is actually an option text, returns null value
	self.selectedLine = ko.observable();

	// display a list of train stations based on filter, show all by default
	self.trainStationList = ko.computed(()=>{
		if (this.selectedLine() == 'Harlem Line' || this.selectedLine() == 'Hudson Line') {
			console.log('get here 1');
			displayList = allTrainStations.filter(station => station.line == this.selectedLine());
		} else {
			console.log('get here 2');
			displayList = allTrainStations;
		}
		return displayList;
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

// Google Map Layout
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 41.033329, lng: -73.7751039},
	zoom: 11
	});

	// loop over all train stations and display all the markers
	// for (i = 0; i < allTrainStations.length; i++) {
	// 	var marker = new google.maps.Marker({
	// 		position: allTrainStations[i].address,
	// 		map: map
	// 	});
	// };

	// test the on/off of markers
	for (i = 0; i < allTrainStations.length; i++) {
		var marker = new google.maps.Marker({
			position: ViewModel.trainStationList[i].address,
			map: map
		});
	};
}


// Bind ViewModel to the View (html)
ko.applyBindings(new ViewModel())