<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery</title>

  <!-- <link rel="stylesheet" href="CSS\bootstrap.min.css"> -->

  <!-- <style>
    .media-content img {
      display: none;
    }
    .subfolder h3 {
      display: none;
    }
  </style> -->

</head>

<body>
  <!-- <link rel="stylesheet" href="Components\deccan_hardikar-css.css"> -->

  <br><br>


  <br><br>

  <section>
    <div class="container">

      <div class="row align-items-center pl-40">
        <div class="col-lg-12 align-self-center">
          <button data-component="button" class="my-btn" id="homeBtn">Hospital</button>
          <button data-component="button" class="my-btn" id="eventBtn">Event</button>
        </div>
      </div>

    </div>
  </section>


  <section id="homeSection"
         data-folder-label="Our Gallery Collection"
         data-folder-label-color="#2c3e50">
    <div class="container">
      <div class="row align-items-center pl-40">
        <div class="col-lg-12 align-self-center">
          <div class="media-content">
            <img src="Images\backgroung_img.jpg" alt="">
            <img src="Images\bg2.jpg" alt="">
            <img src="Images\bg3.jpg" alt="">
            <img src="Images\bg4.jpg" alt="">
            <img src="Images\bg5.jpg" alt="">
            <img src="Images\bg6.jpg" alt="">
            <img src="Images\end3.png" alt="">
            <img src="Images\logo_loc.png" alt="">
            <img src="Images\logo.png" alt="">
            <img src="Images\SleeveGastrectomyBanner.png" alt="">
          </div>
        </div>
      </div>
    </div>


    <!-- if there is subfolder, then no other images than sub-folder will be seen..  -->
    <!-- <div class="container">
      <div class="row align-items-center pl-40">
        <div class="col-lg-12 align-self-center">
          <div class="subfolder" data-folder="mothers-day">
            <h3>Mothers Day </h3>
            <div class="media-content">
              <img src="Images/backgroung_img.jpg" alt="">
              <img src="Images/bg2.jpg" alt="">
              <img src="Images/bg3.jpg" alt="">
              <img src="Images/bg4.jpg" alt="">
              <img src="Images/bg5.jpg" alt="">
              <img src="Images/bg6.jpg" alt="">
              <img src="Images/end3.png" alt="">
              <img src="Images/logo_loc.png" alt="">
              <img src="Images/logo.png" alt="">
              <img src="Images/SleeveGastrectomyBanner.png" alt="">
            </div>
          </div>
        </div>
      </div> -->
    </div>


  </section>

  <section id="eventSection" style="display: none;">
    <div class="container event-container">
      <div class="row align-items-center pl-40">
        <div class="col-lg-12 align-self-center">
          <div class="subfolder" 
     data-folder-label="Mom's Special Day (8 Photos)"
     data-folder-label-color="#e74c3c"
     data-folder-label-size="1.1rem"
     data-folder-label-weight="600">

            <h3>Foundation Day </h3>
            <div class="media-content">
              <img src="Images/backgroung_img.jpg" alt="" data-folder-label-color="#ff0000" data-folder-label="Our Mom's Day 2023">
              <img src="Images/bg2.jpg" alt="" data-folder-label-color="#2be912ff">
              <img src="Images/bg3.jpg" alt="">
              <img src="Images/bg4.jpg" alt="">
              <img src="Images/bg5.jpg" alt="">
              <img src="Images/bg6.jpg" alt="">
              <img src="Images/end3.png" alt="">
              <img src="Images/logo_loc.png" alt="">
              <img src="Images/logo.png" alt="">
              <img src="Images/SleeveGastrectomyBanner.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row align-items-center pl-40">
        <div class="col-lg-12 align-self-center">
          <div class="subfolder" data-folder="mothers-day">
            <h3>Father's Day </h3>
            <div class="media-content">
              <img src="Images/backgroung_img.jpg" alt="">
              <img src="Images/bg2.jpg" alt="">
              <img src="Images/bg3.jpg" alt="">
              <img src="Images/bg4.jpg" alt="">
              <img src="Images/bg5.jpg" alt="">
              <img src="Images/bg6.jpg" alt="">
              <img src="Images/end3.png" alt="">
              <img src="Images/logo_loc.png" alt="">
              <img src="Images/logo.png" alt="">
              <img src="Images/SleeveGastrectomyBanner.png" alt="">

              <img src="Images/end3.png" alt="">
              <img src="Images/logo_loc.png" alt="">
              <img src="Images/logo.png" alt="">
              <img src="Images/SleeveGastrectomyBanner.png" alt="">
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="row align-items-center pl-40">
        <div class="col-lg-12 align-self-center">
          <div class="subfolder" data-folder="world-heart-day">
            <h3>World Heart Day </h3>
            <div class="media-content">
              <img src="Images/backgroung_img.jpg" alt="">
              <img src="Images/bg2.jpg" alt="">
              <img src="Images/bg3.jpg" alt="">
              <img src="Images/bg4.jpg" alt="">
              <img src="Images/bg5.jpg" alt="">
              <img src="Images/bg6.jpg" alt="">
              <img src="Images/end3.png" alt="">
              <img src="Images/logo_loc.png" alt="">
              <img src="Images/logo.png" alt="">
              <img src="Images/SleeveGastrectomyBanner.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div> -->

  </section>

  <button data-component="button" class="bg-#E7F3F4 r-10 color-#087F8F hover-bg-darkgreen hover-text-white">Trial</button>

  <!-- <script src="custom-script-queue.js"></script> -->



  <script src="Components\button.js"></script>
  <!-- <script src="custom-script-queue.js"></script> -->
  <!-- <script src="Components\init.js"></script> -->
  <script src="Components\gallery.js"></script>


  <script>
    ButtonLib.setCustomButton(".my-btn", {
      backgroundColor: "#E7F3F4",
      fontSize: "18px",
      border: "1px solid white",
      hoverBackgroundColor: "none",
      hoverColor: "none",
      borderRadius: "10px",
      fontWeight: "600",
      padding: "12px 30px",
      color: "#087F8F"
    });
  </script>



  <!-- <script>
  ButtonLib.setCustomButton(".my-btn", {
    backgroundColor: "#E7F3F4",
    // fontSize: "18px",
    // border: "1px solid white",
    hoverBackgroundColor: "none",
    hoverColor: "none",
    // borderRadius: "10px",
    // fontWeight: "600",
    // padding: "12px 30px",
    color: "#087F8F"
  });
</script> -->


  <!-- <script>
  setCustomActiveButton({
    backgroundColor: "pink",
    color: "#fff",
    fontSize: "16px"
  });

  setCustomImageStyle({
    height: "300px",
    width: "250px",
    border: "2px solid #ccc",
    borderRadius: "8px"
  });
  //image style not working

  setCustomGalleryH3({
    color: "#e91e63",
    fontSize: "1.3rem"
  });
  // h3 style not working

</script> -->




  <!-- Should get default hover -->
  <button class="btn-a">Default Hover</button>

  <!-- Should get custom hover -->
  <button class="btn-b">Custom Hover</button>

  <!-- Should have NO hover -->
  <button class="btn-c">No Hover</button>


  <!-- <script src="Components/button.js"></script> -->
  <script>
    ButtonLib.setCustomButton(".btn-a", {
      backgroundColor: "#ccc",
      color: "#000"
    });

    ButtonLib.setCustomButton(".btn-b", {
      backgroundColor: "#e0f7fa",
      color: "#004d40",
      hoverBackgroundColor: "blue",
      hoverColor: "white"
    });

    ButtonLib.setCustomButton(".btn-c", {
      backgroundColor: "#f8f9fa",
      color: "#333",
      hoverBackgroundColor: "none",
      hoverColor: "none"
    });
  </script>






  <!-- <script src="custom-script-queue.js"></script> Load the dynamic script loader

Load the scripts
<script src="Components/button.js"></script> Button library
<script src="Components/gallery.js"></script> Gallery library
Add other JS libraries as needed

<script>
  // Apply active button styles when the page loads (directly executed)
  applyActiveButtonStyle(".my-btn", {
    backgroundColor: "pink",
    color: "#fff",
    fontSize: "16px"
  });

  // Dynamically set button styles (automatically queued)
  ButtonLib.setCustomButton(".my-btn", {
    backgroundColor: "#E7F3F4",
    fontSize: "18px",
    border: "1px solid white",
    hoverBackgroundColor: "none",
    hoverColor: "none",
    borderRadius: "10px",
    fontWeight: "600",
    padding: "12px 30px",
    color: "#087F8F"
  });

  // Dynamically set image styles (automatically queued)
  setCustomImageStyle({
    height: "300px",
    width: "250px",
    border: "2px solid #ccc",
    borderRadius: "8px"
  });
</script> -->








</body>

</html>