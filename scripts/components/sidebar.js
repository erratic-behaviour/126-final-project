// FILENAME: sidebar.js

export function openSidebar(markerData) {
    document.getElementById("sidebar-placename").textContent = markerData.Name;
    document.getElementById("sidebar-placetype").textContent = markerData.Type;
    document.getElementById("sidebar-place").classList.remove("sidebar--closed");
}

export function closeSidebar() {
    document.getElementById("sidebar-place").classList.add("sidebar--closed");
}

document.getElementById("sidebar-button-close").addEventListener("click", closeSidebar);