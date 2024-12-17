var map = L.map('map').setView([3.557428, 98.659372], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
    // L.popup(e.latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>'})
    // .openOn(map);
}

var myLines = [{
    "type": "LineString",
    "coordinates": [[98.660068, 3.56726], [98.660445, 3.556362]]
}]

L.geoJSON(myLines).addTo(map);
map.on('click', onMapClick);

// 3.567267, 98.660068
// 3.556362, 98.660445