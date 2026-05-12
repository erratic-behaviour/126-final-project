// FILENAME: main.js
/*
    imports the other JavaScript files so HTML wouldn't be cluttered with multiple lines of <script> tags
*/

// IMPORT FOR COMPONENT LOGICS
import { loadNavbar } from "./components/injectNavBar.js";
import { default as loadMap } from "./components/map.js";

// FUNCTION CALLS
loadNavbar();
loadMap(); // i might move it to another file as this wastes resources