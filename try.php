<!-- Header -->
<!-- <header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header> -->

<!-- Header Start -->
<!-- <header class="header-transparent pt-40">
  <div class="header-area d-none d-lg-block">
    <div class="container-fluid container-3">
      <div class="header-wrapper inner-page header-wrapper__3 header-wrapper__4">
        <div class="header-wrapper__inner">
          <div class="row align-items-center">
            <div class="col-xxl-2 col-xl-2 col-lg-3">
              <div class="logo">
                <a href="index.php">
                  <img src="Images/logo.png" alt="Website Logo">
                </a>
              </div>
            </div>
            <div class="col-xxl-10 col-xl-10 col-lg-9">
              <div class="header-left d-flex align-items-center justify-content-end">
                <div class="header-menu-wrapper">
                  <nav class="header-nav header-nav__3 f-left">
                    <ul>
                      <li><a href="about-us.php">About Us</a></li>
                      <li><a href="services.php">Services</a></li>
                      <li><a href="solutions.php">Solutions</a></li>
                      <li><a href="training-courses.php">Training</a></li>
                      <li><a href="career.php">Career</a></li>
                      <li><a href="contact.php">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>

  Mobile Header
  <div class="responsive-menu-3 inner-page d-block d-lg-none">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <div class="logo">
            <a href="index.php">
              <img src="Images/logo.png" alt="Website Logo">
            </a>
          </div>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <div class="mobile-toggle-bar">
            <button class="toggle-btn p-static">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mobile-nav">
    <div class="mobile-nav-header d-flex justify-content-between align-items-center">
      <div class="responsive-logo">
        <a href="index.php">
          <img src="Images/logo.png" alt="Website Logo">
        </a>
      </div>
      <button class="mobile-nav-close">
        <i class="fas fa-times" style="color: #fff;"></i>
      </button>
    </div>

    <nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="menu-tab-1" role="tabpanel">
          <div class="mobile-menu mean-container">
            <nav class="mean-nav">
              <ul>
                <li><a href="about-us.php">About Us</a></li>
                <li><a href="services.php">Services</a></li>
                <li><a href="solutions.php">Solutions</a></li>
                <li><a href="training-courses.php">Training</a></li>
                <li><a href="career.php">Career</a></li>
                <li><a href="contact.php">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header> -->
<!-- Header End -->


<!-- Footer -->
<!-- <footer>
  <p>&copy; 2025 My Website. All rights reserved.</p>
  <nav>
    <ul>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
</footer> -->

<!-- <script src="Components\header.js"></script>
<script src="Components\footer.js"></script> -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Theme Switcher</title>
  <!-- <link rel="stylesheet" href="CSS\timepass.css"> -->
  <link rel="stylesheet" href="CSS\bootstrap.min.css">
</head>
<body data-theme="dark">

  <!-- Button to toggle the theme -->
  <!-- <button onclick="toggleTheme()" class="toggle-button">Toggle Theme</button> -->
  
  <!-- Button to test theme on -->
  <!-- <button class="my-button">Click Me</button> -->

  <br><br>

  <!-- <button onclick="setCustomTheme('lightblue', 'darkmagenta', 'lightyellow')">
  Apply Custom Theme
  </button> -->


  <!-- Object oriented theme code -->
   <!-- Buttons to trigger actions -->
  <button id="toggleButton">Toggle Theme</button>
  
  <!-- Other content -->
  <!-- <button class="my-button">Button 1</button>
  <button class="my-button">Button 2</button> -->

  <script src="Components\theme.js"></script>

  <!--For object oriented code, the custom_theme can be added using javascript.. it is shown in theme.js--> 

  <!--The following needs to be added for using data-theme="dark" in object oriented approach--> 
  <script>
    theme.toggleTheme();
  </script>

  <!--Way for calling like this (bracket me) - not recommended by chatgpt in object oriented code--> 
  <!-- <script defer>
    theme.setCustomTheme("lightblue", "darkmagenta", "lightyellow");
  </script> -->

  <!--How user can customize the theme--> 
  <!-- Way 1 -->
  <!-- <script defer>
    setCustomTheme({
      backgroundColor: "lightblue",
      textColor: "darkmagenta",
      buttonColor: "lightyellow",
      fontFamily: "Arial",
      borderRadius: "10px"
    });
  </script> -->

  <!-- Way 2 -->
  <!-- <script defer>
  setCustomTheme("lightblue", "darkmagenta", "lightyellow");
</script> -->


<!--Button try--> 
<!-- <button data-component="button" data-style="bg-red color-white radius-12 hoverbg-darkred">
  Delete
</button>

<button data-component="button" data-style="bg-green color-black radius-6 hoverbg-darkgreen">
  Submit
</button>

<button data-component="button" data-style="bg-lightblue color-darkmagenta">Hello!</button>
<button data-component="button">Click Here</button> -->

<!--BackgroundColor-borderRadius-Color-hoverBgColor-hoverColor--> 
<br><br>
<button data-component="button" class="p-10 fs-20">
  Delete
</button>
<button data-component="button" class="bg-red r-10 color-white hover-bg-darkred">
  Delete
</button>

<br><br>
<button data-component="button">
  Submit
</button>
<button data-component="button" class="bg-green r-20 color-black">
  Submit
</button>

<br><br>
<button data-component="button">hi</button>
<button data-component="button" class="bg-yellow r-50 color-blue hover-bg-darkmagenta hover-color-red">hi</button>
<br><br>
<button data-component="button" class="r-10">Hii!</button>
<br><br>
<button data-component="button" id="specialBtn">Default</button>

<br><br><br>
<button data-component="button" class="bg-black">GoodNight!</button>
<button data-component="button" class="bg-black r-0 color-white">GoodNight!</button>

<br><br><br>
<button class="my-btn">Styled Button</button>
hello How Are You?

<br><br><br>
<button data-component="button">Hello</button>
<button data-component="button" class="bg-pink r-5 color-black hover-bg-none hover-color-none">Hello</button>

<button data-component="button" class="bg-pink r-5 color-black hover-bg-none hover-color-none">No Hover</button>

<button data-component="button" class="bg-purple about_us r-5 color-black hover-bg-none hover-color-none">No Hover</button>

<button data-component="button" class="bg-green r-8 color-white hover-bg-darkgreen hover-color-yellow">With Hover</button>
<button class="mybtn2">With Hover</button>




<script src="Components\button.js"></script>
<script>
  ButtonLib.setCustomButton(".my-btn", {
    backgroundColor: "#217BB0",
    fontSize: "16px",
    border: "1px solid white",
    hoverBackgroundColor: "#004B87",
    hoverColor: "yellow",
    borderRadius: "10px"
  });
</script>

<!-- <script>
  ButtonLib.setCustomButton(".mybtn2", {
    backgroundColor: "green",
    color: "white",
    fontSize: "16px",
    border: "1px solid blue",
    hoverBackgroundColor: "darkgreen",
    hoverColor: "yellow",
    borderRadius: "8px"
  });
</script> -->

<script>
  window.customButtonStyles = {
    "#specialBtn, .mybn2": {
    backgroundColor: "green",
    color: "white",
    fontSize: "16px",
    border: "1px solid blue",
    hoverBackgroundColor: "darkgreen",
    hoverColor: "yellow",
    borderRadius: "8px"
  }
};
</script>


<!-- <script defer>
  theme.setCustomTheme({
    backgroundColor: "lightblue",
    // textColor: "darkmagenta",
    // buttonColor: "lightyellow",
    // fontFamily: "Arial",
    // borderRadius: "10px"
  });
</script> -->

<!-- <script>
  theme.setCustomTheme("darkmagenta")
</script> -->



</body>
</html>