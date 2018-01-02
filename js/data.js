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