// to create marker HTML
function createMarkerHTML(markerData) {
  const imageMap = {
    Landmark: "../public/images/landmark.png",
    FoodPlace: "../public/images/foodplace.png",
    Trike: "../public/images/trike.png",
  };

  // fallback to landmark if type not found
  const imageSrc = imageMap[markerData.Type] || "../public/images/landmark.png";

  return (
    `<img class="my-div-image" src="${imageSrc}">` +
    `<span class="my-div-span">${markerData.Name}</span>`
  );
}

// parse marker data and add to map
export function addMarkersToMap(map, markersData) {
  markersData.forEach((markerData) => {
    const coords = markerData.Location.split(",").map((c) =>
      parseFloat(c.trim()),
    );

    const marker = L.marker(coords, {
      icon: new L.DivIcon({
        className: "my-div-icon",
        html: createMarkerHTML(markerData),
      }),
    }).addTo(map);
  });
}

// ty to https://stackoverflow.com/questions/34775308/leaflet-how-to-add-a-text-label-to-a-custom-marker-icon