/**
 * Set up the map
 */
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map);

// Function to display the affected area on the map
function displayAffectedArea(alert) {
  const geoJson = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: alert.affectedArea,
    },
    properties: {
      name: alert.name,
    },
  };

  // Add the geojson to the map
  L.geoJSON(geoJson).addTo(map);
}

// Example weather alert data
const alert = {
  name: 'Severe Thunderstorm Warning',
  affectedArea: [
    [
      [-74.05, 40.71],
      [-74.05, 40.73],
      [-74.03, 40.73],
      [-74.03, 40.71],
      [-74.05, 40.71],
    ],
  ],
};

// Display the affected area on the map
displayAffectedArea(alert);
