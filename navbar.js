const navbar = `
<nav class="navbar">

  <div class="logo-container">
    <div class="logo-circle"></div>
    <h1 class="logo-text">EatSkolar</h1>
  </div>

  <ul class="nav-links">
    <li><a href="index.html" class="active">Home</a></li>
    <li><a href="pages/map.html">Map</a></li>
    <li><a href="pages/about.html">About Us</a></li>
  </ul>

  <div class="auth-buttons">
    <a href="pages/login.html" class="login-btn">LOG IN</a>
    <a href="pages/signup.html" class="signup-btn">SIGN UP</a>
  </div>

</nav>
`;

document.head.insertAdjacentHTML("beforeend", styles);

document.body.insertAdjacentHTML("afterbegin", navbar);