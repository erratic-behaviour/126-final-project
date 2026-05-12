import { addMarkersToMap } from "../dependencies/map_PARSE.js";

export default async function loadMap() {
  var map = L.map("map").setView([10.641829450305787, 122.2310323588079], 19);

  L.tileLayer(
    "https://api.maptiler.com/maps/base-v4/{z}/{x}/{y}.png?key=kW8621VxCh9lXrClbnw0",
    {
      zoomControl: false,
      maxZoom: 22,
      keepBuffer: 50,
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    },
  ).addTo(map);

  map.zoomControl.setPosition("bottomright");

  // Marker data - replace with data from JSON or database
  const markersFetch = await fetch("../public/markerdata.json");
  const markersData = await markersFetch.json();

  // Add all markers using parser
  addMarkersToMap(map, markersData);
}
