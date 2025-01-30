// JavaScript for displaying the map with Leaflet
var map = L.map('map').setView([42.8746, 74.6126], 12);  // Bishkek coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker1 = L.marker([42.8767, 74.6124]).addTo(map);
marker1.bindPopup("<b>Пункт замены батареи 1</b>").openPopup();

var marker2 = L.marker([42.8700, 74.5918]).addTo(map);
marker2.bindPopup("<b>Пункт замены батареи 2</b>");
