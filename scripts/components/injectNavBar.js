// FILENAME: injectNavBar.js

export async function loadNavbar() {
    const navbar = `
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="../pages/map.html">Map</a></li>
            <li><a href="../pages/about.html">About</a></li>
        </ul>
    `;

    document.querySelector("header").innerHTML = navbar;

    const links = document.querySelectorAll("#main-nav-bar a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
}