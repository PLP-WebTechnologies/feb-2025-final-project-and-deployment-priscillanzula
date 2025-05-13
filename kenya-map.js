// Initialize the map
const map = L.map("map").setView([-1.286389, 36.817223], 6); // Centered on Nairobi, Kenya

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Load GeoJSON data for Kenya's counties
fetch("https://raw.githubusercontent.com/deldersveld/topojson/master/countries/kenya/kenya-counties.json")
    .then((response) => response.json())
    .then((data) => {
        // Add GeoJSON layer to the map
        L.geoJSON(data, {
            style: {
                color: "#3388ff",
                weight: 1,
                fillOpacity: 0.2,
            },
            onEachFeature: (feature, layer) => {
                layer.bindPopup(`<h3>${feature.properties.COUNTY}</h3>`);
            },
        }).addTo(map);
    });

// Add markers for major towns and water sources
const waterSources = [
    { name: "Lake Victoria", location: [-0.091702, 34.767956] },
    { name: "Lake Naivasha", location: [-0.717556, 36.431025] },
    { name: "Lake Turkana", location: [3.453056, 35.989444] },
    { name: "Nairobi River", location: [-1.286389, 36.817223] },
    { name: "Tana River", location: [-1.083333, 40.000000] },
];

waterSources.forEach((source) => {
    L.marker(source.location)
        .addTo(map)
        .bindPopup(`<b>${source.name}</b>`);
});