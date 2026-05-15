// FILENAME: injectNavBar.js

export async function loadNavbar() {
    const navbar = `
        <img alt="logo here">
        <ul id="main-nav-list">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../pages/map.html">Map</a></li>
            <li><a href="../pages/about.html">About</a></li>
        </ul>
    `;

    const navElement = document.getElementById("main-nav-bar");
    if (navElement) {
        navElement.innerHTML = navbar;
    }

    const links = document.querySelectorAll("#main-nav-bar a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
}