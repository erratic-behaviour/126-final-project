const styles = `
<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #f5f5f5;
}

.navbar {
  width: 100%;
  height: 100px;
  background-color: #d9d9d9;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;

  border: 2px solid black;
}

.logo-container {
  position: relative;
  display: flex;
  align-items: center;
}

.logo-circle {
  width: 70px;
  height: 70px;
  background-color: #e85b4f;
  border-radius: 50%;

  position: absolute;
  left: 35px;
  z-index: 0;
}

.logo-text {
  position: relative;
  font-size: 48px;
  color: black;
  z-index: 1;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 40px;
}

.nav-links li a {
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: bold;
  transition: 0.3s;
}

.nav-links li a:hover {
  color: #8eb14a;
}

.nav-links .active {
  color: #8eb14a;
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.login-btn {
  text-decoration: none;
  color: black;
  font-size: 22px;
}

.signup-btn {
  text-decoration: none;
  background-color: #a8cf5a;
  color: black;

  padding: 10px 20px;
  border-radius: 8px;

  font-size: 22px;
  font-weight: bold;
}
</style>
`;

const navbar = `
<nav class="navbar">

  <div class="logo-container">
    <div class="logo-circle"></div>
    <h1 class="logo-text">EatSkolar</h1>
  </div>

  <ul class="nav-links">
    <li><a href="index.html" class="active">Home</a></li>
    <li><a href="map.html">Map</a></li>
    <li><a href="about.html">About Us</a></li>
  </ul>

  <div class="auth-buttons">
    <a href="login.html" class="login-btn">LOG IN</a>
    <a href="signup.html" class="signup-btn">SIGN UP</a>
  </div>

</nav>
`;

document.head.insertAdjacentHTML("beforeend", styles);

document.body.insertAdjacentHTML("afterbegin", navbar);