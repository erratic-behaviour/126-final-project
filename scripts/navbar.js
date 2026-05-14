function loadNavbar() {
  const navbar = `
    <nav class="navbar">

      <div class="logo-container">
        <div class="logo-circle"></div>
        <h1 class="logo-text">EatSkolar</h1>
      </div>

      <ul class="nav-links">
        <li><a href="index.html" class="active">HOME</a></li>
        <li><a href="map.html">MAP</a></li>
        <li><a href="about.html">ABOUT US</a></li>
      </ul>

      <div class="auth-buttons">
        <a href="login.html" class="login-btn">LOG IN</a>
        <a href="signup.html" class="signup-btn">SIGN UP</a>
      </div>

    </nav>
  `;

  document.getElementById("navbar-container").innerHTML = navbar;
}

loadNavbar();