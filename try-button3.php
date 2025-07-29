<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Button Customization Example</title>
  <style>
    section {
      padding: 40px;
      text-align: center;
    }
    button {
      margin: 10px;
    }
  </style>
</head>
<body>

  <section id="cta-section">
    <button data-component="button">Learn More</button>
    <button data-component="button">Subscribe</button>
    <button data-component="button">Get Started</button>
    <button data-component="button">Contact Us</button>
  </section>

  <!-- Include your button.js script here -->
  <script src="Components\button.js"></script>

  <script>
  window.customButtonStyles = {
    "#cta-section button": {
      backgroundColor: "#ffcc00",
      color: "#333",
      borderRadius: "12px",
      hoverBackgroundColor: "#ffaa00",
      hoverColor: "#000"
    }
  };
</script>


</body>
</html>
