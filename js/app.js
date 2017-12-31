// === This is the data (model) part ===
var allTrainStations = [
	{
		name : 'White Plains',
		line : ['Harlem Line'],
		address : {lat: 41.034394, lng: -73.775009}
	},
	{
		name: 'North White Plains',
		line : ['Harlem Line'],
		address: {lat: 41.051315, lng: -73.772475}
	},
	{
		name: 'Cold Spring',
		line: ['Hudson Line'],
		address: {lat: 41.415259, lng: -73.958101}
	},
	{
		name: 'Irvington',
		line: ['Hudson Line'],
		address: {lat: 41.040228, lng: -73.873104}
	},
	{
		name: 'Tarrytown',
		line: ['Hudson Line'],
		address: {lat: 41.076879, lng: -73.864582}
	},
	{
		name: 'Hartsdale',
		line: ['Harlem Line'],
		address: {lat: 41.011370, lng: -73.795767}
	},
	{
		name: 'Scarsdale',
		line: ['Harlem Line'],
		address: {lat: 40.990204, lng: -73.808159}
	},
	{
		name: 'Crestwood',
		line: ['Harlem Line'],
		address: {lat: 40.959248, lng: -73.820596}
	},
	{
		name: 'Tuckahoe',
		line: ['Harlem Line'],
		address: {lat: 40.951034, lng: -73.828534}
	},
	{
		name: 'Bronxville',
		line: ['Harlem Line'],
		address: {lat: 40.941487, lng: -73.835148}
	},
	{
		name: 'Fleetwood',
		line: ['Harlem Line'],
		address: {lat: 40.927992, lng: -73.839786}
	},
	{
		name: 'Mt Vernon West',
		line: ['Harlem Line'],
		address: {lat: 40.911857, lng: -73.851410}
	},
	{
		name: 'Wakefield',
		line: ['Harlem Line'],
		address: {lat: 40.907373, lng: -73.855304}
	},
	{
		name: 'Woodlawn',
		line: ['Harlem Line'],
		address: {lat: 40.895679, lng: -73.862894}
	},
	{
		name: 'Williams Bridge',
		line: ['Harlem Line'],
		address: {lat: 40.878279, lng: -73.871023}
	},
	{
		name: 'Botanical Garden',
		line: ['Harlem Line'],
		address: {lat: 40.866790, lng: -73.883077}
	},
	{
		name: 'Fordham',
		line: ['Harlem Line'],
		address: {lat: 40.862017, lng: -73.890550}
	},
	{
		name: 'Tremont',
		line: ['Harlem Line'],
		address: {lat: 40.847427, lng: -73.899704}
	},
	{
		name: 'Melrose',
		line: ['Harlem Line'],
		address: {lat: 40.825935, lng: -73.915232}
	},
	{
		name: 'Harlem - 125 Street',
		line: ['Harlem Line', 'Hudson Line'],
		address: {lat: 40.805425, lng: -73.939181}
	},
	{
		name: 'Grand Central',
		line: ['Harlem Line', 'Hudson Line'],
		address: {lat: 40.752962, lng: -73.977208}
	},
	{
		name: 'Valhalla',
		line: ['Harlem Line'],
		address: {lat: 41.073086, lng: -73.772578}
	},
	{
		name: 'Mt.Pleasant',
		line: ['Harlem Line'],
		address: {lat: 41.095083, lng: -73.793614}
	},
	{
		name: 'Hawthorne',
		line: ['Harlem Line'],
		address: {lat: 41.111332, lng: -73.795932}
	},
	{
		name: 'Pleasantville',
		line: ['Harlem Line'],
		address: {lat: 41.135089, lng: -73.792205}
	},
	{
		name: 'Chappaqua',
		line: ['Harlem Line'],
		address: {lat: 41.158273, lng: -73.774885}
	},
	{
		name: 'Mount Kisco',
		line: ['Harlem Line'],
		address: {lat: 41.208701, lng: -73.729597}
	},
	{
		name: 'Bedford Hills',
		line: ['Harlem Line'],
		address: {lat: 41.237582, lng: -73.699947}
	},
	{
		name: 'Katonah',
		line: ['Harlem Line'],
		address: {lat: 41.259794, lng: -73.684166}
	},
	{
		name: 'Goldens Bridges',
		line: ['Harlem Line'],
		address: {lat: 41.294747, lng: -73.677625}
	},
	{
		name: "Purdy's",
		line: ['Harlem Line'],
		address: {lat: 41.325811, lng: -73.659034}
	},
	{
		name: 'Croton Falls',
		line: ['Harlem Line'],
		address: {lat: 41.347980, lng: -73.662258}
	},
	{
		name: 'Brewster',
		line: ['Harlem Line'],
		address: {lat: 41.394970, lng: -73.619815}
	},
	{
		name: 'Southeast',
		line: ['Harlem Line'],
		address: {lat: 41.413211, lng: -73.623035}
	},
	{
		name: 'Patterson',
		line: ['Harlem Line'],
		address: {lat: 41.512100, lng: -73.604563}
	},
	{
		name: 'Pawling',
		line: ['Harlem Line'],
		address: {lat: 41.564478, lng: -73.600513}
	},
	{
		name: 'Appalachian Trail',
		line: ['Harlem Line'],
		address: {lat: 41.611051, lng: -73.578678}
	},
	{
		name: 'Harlem Valley-Wingdale',
		line: ['Harlem Line'],
		address: {lat: 41.637732, lng: -73.571577}
	},
	{
		name: 'Dover Plains',
		line: ['Harlem Line'],
		address: {lat: 41.742939, lng: -73.576172}
	},
	{
		name: 'Tenmile River',
		line: ['Harlem Line'],
		address: {lat: 41.780202, lng: -73.558204}
	},
	{
		name: 'Wassaic',
		line: ['Harlem Line'],
		address: {lat: 41.815096, lng: -73.562362}
	},
	{
		name: 'Yankees',
		line: ['Hudson Line'],
		address: {lat: 40.825881, lng: -73.930238}
	},
	{
		name: 'Morris Heights',
		line: ['Hudson Line'],
		address: {lat: 40.854055, lng: -73.920138}
	},
	{
		name: 'University Heights',
		line: ['Hudson Line'],
		address: {lat: 40.862204, lng: -73.913420}
	},
	{
		name: 'Marble Hill',
		line: ['Hudson Line'],
		address: {lat: 40.875033, lng: -73.912069}
	},
	{
		name: 'Spuyten Duyvil',
		line: ['Hudson Line'],
		address: {lat: 40.879155, lng: -73.922127}
	},
	{
		name: 'Riverdale',
		line: ['Hudson Line'],
		address: {lat: 40.904240, lng: -73.914190}
	},
	{
		name: 'Ludlow',
		line: ['Hudson Line'],
		address: {lat: 40.924389, lng: -73.904957}
	},
	{
		name: 'Yonkers',
		line: ['Hudson Line'],
		address: {lat: 40.935806, lng: -73.902402}
	},
	{
		name: 'Glenwood',
		line: ['Hudson Line'],
		address: {lat: 40.950804, lng: -73.899083}
	},
	{
		name: 'Greystone',
		line: ['Hudson Line'],
		address: {lat: 40.972826, lng: -73.889300}
	},
	{
		name: 'Hastings-on-Hudson',
		line: ['Hudson Line'],
		address: {lat: 40.994991, lng: -73.884227}
	},
	{
		name: 'Dobbs Ferry',
		line: ['Hudson Line'],
		address: {lat: 41.012573, lng: -73.879649}
	},
	{
		name: 'Ardsley-on-Hudson',
		line: ['Hudson Line'],
		address: {lat: 41.026457, lng: -73.876554}
	},
	{
		name: 'Irvington',
		line: ['Hudson Line'],
		address: {lat: 41.040236, lng: -73.873158}
	},
	{
		name: 'Philipse Manor',
		line: ['Hudson Line'],
		address: {lat: 41.095179, lng: -73.869809}
	},
	{
		name: 'Scarborough',
		line: ['Hudson Line'],
		address: {lat: 41.138813, lng: -73.866485}
	},
	{
		name: 'Ossining',
		line: ['Hudson Line'],
		address: {lat: 41.158473, lng: -73.869116}
	},
	{
		name: 'Croton-Harmon',
		line: ['Hudson Line'],
		address: {lat: 41.190104, lng: -73.882619}
	},
	{
		name: 'Cortlandt',
		line: ['Hudson Line'],
		address: {lat: 41.246761, lng: -73.922618}
	},
	{
		name: 'Peekskill',
		line: ['Hudson Line'],
		address: {lat: 41.285306, lng: -73.930899}
	},
	{
		name: 'Manitou',
		line: ['Hudson Line'],
		address: {lat: 41.332867, lng: -73.970494}
	},
	{
		name: 'Garrison',
		line: ['Hudson Line'],
		address: {lat: 41.382021, lng: -73.947256}
	},
	{
		name: 'Breakneck Ridge',
		line: ['Hudson Line'],
		address: {lat: 41.450430, lng: -73.982438}
	},
	{
		name: 'Beacon',
		line: ['Hudson Line'],
		address: {lat: 41.538065, lng: -73.983989}
	},
	{
		name: 'New Hamburg',
		line: ['Hudson Line'],
		address: {lat: 41.587016, lng: -73.947492}
	},
	{
		name: 'Poughkeepsie',
		line: ['Hudson Line'],
		address: {lat: 41.716944, lng: -73.939847}
	},
];

var allTrainLines = [
	'Harlem Line',
	'Hudson Line'
];

// ==== This is the octopus (view model) part ===
// bind ViewModel to the View (html)
ko.applyBindings(new viewModel());

// create the View Model
function viewModel() {
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
		} else {
			selectedStations = allTrainStations;
		}

		// putMarkers(selectedStations);
		// console.log(selectedStations)
		return selectedStations;
	});

	self.oneStation = function (station) {
		for (var i = 0 ; i < markers.length; i ++) {
			console.log(markers[i])
			if (markers[i].getTitle() != station.name) {
				markers[i].setVisible(false);
			} else {
				markers[i].setVisible(true);
			}
		}
		console.log(station.name);
	};

	self.resetSelection = function () {
		self.selectedLine(null);
		 for (var i = 0 ; i < markers.length; i ++) {
 			markers[i].setVisible(true);
 		}
	};

}

// create a blank list to take in all the to-be-displayed markers
var markers = [];

// initiate a Google Map Layout
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.033329, lng: -73.7751039},
		zoom: 11,
		streetViewControl: false,
	});

	// add an event listener to prevent too-close-zoom when there's only one marker
	google.maps.event.addListener(map, 'bounds_changed', function(event) {
		if (this.getZoom() > 15) {
			this.setZoom(15);
		}
	});

	// create the info window object from google map api library
	var largeInfowindow = new google.maps.InfoWindow();

	// retrieve news from NYT about MTA and put them on the info bar at the right side
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "7734f8ba387f4a81abb8b82ff661e32a",
	  'sort': "newest",
	  'q': "metro-north-railroad"
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);
	  articles = result.response.docs;
	  console.log(articles);
	  for (var i = 0; i < articles.length; i++) {
	  	var article = articles[i];
	  	$('#nytimes-articles').append('<li class="article">'+'<a class="news-title" href="'+article.web_url+'">'+article.headline.main+'</a>'+
	  			'<p class="news-date">Published Date: '+article.pub_date.substring(0,10)+'</p>'+
				'<p class="news-brief">'+article.snippet+'</p>'+'</li>');
	  }
	}).fail(function(err) {
	  throw err;
	});

	// // take in the current selected train station list and label them on the map
	// function putMarkers(dList) {
	// 	// Clear all markers at first, we restart from no markers
	// 	clearMarkers();
	// 	// Loop over the selectedStations to put the markers on map
	// 	for (var i = 0; i < dList.length; i++) {
	// 		var position = dList[i].address;
	//  		var marker = new google.maps.Marker({
	//  			position: position,
	//  			animation: google.maps.Animation.DROP,
	//  			title: dList[i].name,
	//  			map: map
	//  		});
	//  		// Push the marker to our array of markers
	//  		markers.push(marker);
	//  		// Create an on-click event to open an infowindow at each marker
	//  		// and center to the marker
	//  		marker.addListener('click', function() {
	//  			populateInfoWindow(this, largeInfowindow);
	//  		});
 // 		};

	// 	// Fit the map to display all markers
 // 		var bounds = new google.maps.LatLngBounds();
 // 		for (var i = 0; i < markers.length; i++) {
 // 			bounds.extend(markers[i].getPosition());
 // 		}
 // 		map.fitBounds(bounds);
 // 	}

 	// Clear all markers at first, we restart from no markers
 	clearMarkers();
 	// loop over all train stations to put the markers on map
 	// have another function to turn on/off the markers instead of recreating them repeatedly
 	for (var i = 0; i < allTrainStations.length; i++) {
 		var position = allTrainStations[i].address;
 		var marker = new google.maps.Marker({
 			position: position,
 			animation: google.maps.Animation.DROP,
 			title: allTrainStations[i].name,
 			map: map
 		});
 		// Push the marker to our array of markers
 		markers.push(marker);
 		// console.log(markers[i].getTitle());
 		// Create an on-click event to open an infowindow at each marker
	 	// and center to the marker
 		marker.addListener('click', function(){
 			populateInfoWindow(this, largeInfowindow);
 		});
 	}

	// Fit the map to display all markers
	var bounds = new google.maps.LatLngBounds();
	for (var i = 0; i < markers.length; i++) {
		bounds.extend(markers[i].getPosition());
	}
	map.fitBounds(bounds);

 	// Function to clear all markers, will be called in another function
 	function clearMarkers () {
 		for (var i = 0 ; i < markers.length; i ++) {
 			markers[i].setVisible(false);
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



