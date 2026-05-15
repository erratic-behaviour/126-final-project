// FILENAME: main.js
/*
    imports the other JavaScript files so HTML wouldn't be cluttered with multiple lines of <script> tags
*/

// IMPORT FOR COMPONENT LOGICS
import { loadNavbar } from "./components/injectNavBar.js";
import { default as loadMap } from "./components/map.js";

// FUNCTION CALLS
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
});

// condition to ensure loadMap function only loads inside map.html
if ( window.location.pathname.includes("map.html") ) {
    import("./components/map.js").then(module => module.default());
}