<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header</title>
    <link rel="stylesheet" href="CSS\bootstrap.min.css">
    <!-- <link rel="stylesheet" href="CSS\meanmenu.css">
    <link rel="stylesheet" href="CSS\metisMenu.min.css"> -->
    <link rel="stylesheet" href="CSS\default.css">
    <!-- <link rel="stylesheet" href="CSS\animate.min.css"> -->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">

    <!-- <link rel="stylesheet" href="CSS/timepass.css"> -->

    <!-- <script>
    document.addEventListener("DOMContentLoaded", function () {
      const headerWrapper = document.querySelector('.header-bottom');
      if (!headerWrapper) {
        console.error("Could not find .header-bottom");
        return;
      }

      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          headerWrapper.classList.add('sticky');
          headerWrapper.style.position = 'fixed';
          headerWrapper.style.top = '0';
          headerWrapper.style.left = '0';
          headerWrapper.style.width = '100%';
        } else {
          headerWrapper.classList.remove('sticky');
          headerWrapper.style.position = 'sticky';
          headerWrapper.style.top = '0';
        }
      });
    });
  </script> -->



</head>

<body>
    <header>
        <div class="header-wrapper d-flex justify-content-center">
            <div class="container custom-container">
                <div class="row">
                    <div class="col">
                        <div class="header-transparent d-none d-lg-block">
                            <!-- <div class="row"> -->
                            <!-- <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12"> -->
                            <div class="header-top">
                                <div class="row g-0">
                                    <div class="col-xxl-2 col-xl-2 col-lg-2">
                                        <div class="header-left">
                                            <span>Emergency : 7411804876</span>
                                        </div>
                                    </div>
                                    <div class="col-xxl-7 col-xl-7 col-lg-7">
                                        <ul>
                                            <li class="mr-35"><a href="mailto:info@locmumbai.com"><i class="fas fa-envelope"></i> info@locmumbai.com</a></li>
                                            <li><a href="tel:7411804876"><i class="fas fa-phone"></i>+91-7411804876</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-xxl-3 col-xl-3 col-lg-3 d-flex align-items-center justify-content-end">
                                        <div class="header-social">
                                            <a href="https://www.facebook.com/Obesityasia/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                            <a href="https://twitter.com/drshashankshah" target="_blank" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
                                            <a href="https://www.instagram.com/loc_shashank_shah/?hl=en" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                                            <a href="https://www.youtube.com/channel/UCiUZGp41BNm6RxlRoGEwMvQ" target="_blank" class="social-icon"><i class="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- </div> -->
                            <!-- <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12"> -->
                            <div sticky="true" class="header-bottom">
                                <div class="row">
                                    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 d-flex align-items-center justify-content-center">
                                        <div class="logo">
                                            <a href="inguinal.php">
                                                <img src="Images\logo_loc.png" alt="">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 p-0 d-flex justify-content-start">
                                        <div class="sections">
                                            <ul>
                                                <li>
                                                    <a href="about-us.php" class="color-blue">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="best-bariatric-surgeon-in-mumbai.php">Obesity Treatment</a>
                                                </li>
                                                <li>
                                                    <a href="best-hernia-surgeon-in-mumbai.php">Hernia Treatment</a>
                                                </li>
                                                <li>
                                                    <a href="about-us.php">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="best-bariatric-surgeon-in-mumbai.php">Obesity Treatment</a>
                                                </li>
                                                <li>
                                                    <a href="best-hernia-surgeon-in-mumbai.php">Hernia Treatment</a>
                                                </li>
                                                <li>
                                                    <a href="about-us.php">About Us</a>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>

                                    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
                                        <!-- <div class="appointmentBtn"> -->
                                        <a href="#" data-bs-toggle="modal" class="appointmentBtn" data-bs-target="#appointmentModal">Get Appointment</a>
                                        <!-- </div> -->
                                    </div>

                                </div>
                            </div>
                            <!-- </div> -->
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="responsive-menu-tab d-block d-lg-none">
                <div class="responsive-menu">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-6">
                                <div class="logo">
                                    <a href="inguinal.php"><img src="Images\logo_loc.png" alt=""></a>
                                </div>
                            </div>
                            <div class="col-6 d-flex justify-content-end">
                                <div class="d-inline-block">
                                    <button class="toggle-btn">
                                        <i class="fas fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mobile-nav">
                <div>
                    <button class="mobile-nav-close text-white">
                        <i class="fas fa-times" style="color:#fff"></i>
                    </button>
                </div>
                <div class="nav-menu">
                    Menu
                </div>
                <div class="responsive-logo">
                    <a href="inguinal.php"><img src="Images\logo_loc.png" alt=""></a>
                </div>
                <div class="mobile-menu">
                    <nav>
                        <ul>
                            <li>
                                <a href="about-us.php">About Us</a>
                            </li>
                            <li>
                                <a href="best-bariatric-surgeon-in-mumbai.php">Obesity Treatment</a>
                            </li>
                            <li>
                                <a href="best-hernia-surgeon-in-mumbai.php">Hernia Treatment</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


        </div>
        </div>

        <div class="header-banner" HeaderOverlay="true" style="background-image: url(&quot;Images/SleeveGastrectomyBanner.png&quot;)" ;>

            <!-- <div class="responsive-banner d-block d-lg-none" style="background-image: url(&quot;Images/SleeveGastrectomyBanner.png&quot;)";></div> -->

    </header>

    <section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="timepass">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, omnis neque incidunt dignissimos deleniti ipsum corporis qui ut quo aspernatur fugiat dolores error excepturi eaque pariatur sapiente blanditiis, doloremque
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit et pariatur dolor quidem dolorem praesentium voluptate, quis blanditiis similique, nulla in maiores doloribus corrupti itaque voluptatibus rem, aperiam velit ut.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis accusamus eos assumenda dolorem corporis, debitis ipsam itaque hic ad asperiores illum necessitatibus nostrum nam consequuntur, non natus possimus veniam atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore quaerat incidunt doloremque harum molestias aperiam, quae fuga neque, at voluptatum amet laboriosam repellendus officia sit consectetur fugit debitis placeat!locale_filter_matcheslorem

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quae harum! Ea aut sapiente, repudiandae odio debitis provident? Quisquam iste ducimus eius asperiores illum at officia sapiente aliquam error Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatibus commodi sint officiis iusto perferendis ullam ipsam iure velit assumenda, ipsum consequatur dolorem. Eos rerum vitae velit similique, temporibus repellendus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, pariatur a veniam perspiciatis iusto dignissimos blanditiis ut accusamus et rem omnis perferendis voluptatem sit possimus corporis reprehenderit suscipit voluptates quam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, omnis neque incidunt dignissimos deleniti ipsum corporis qui ut quo aspernatur fugiat dolores error excepturi eaque pariatur sapiente blanditiis, doloremque
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit et pariatur dolor quidem dolorem praesentium voluptate, quis blanditiis similique, nulla in maiores doloribus corrupti itaque voluptatibus rem, aperiam velit ut.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis accusamus eos assumenda dolorem corporis, debitis ipsam itaque hic ad asperiores illum necessitatibus nostrum nam consequuntur, non natus possimus veniam atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore quaerat incidunt doloremque harum molestias aperiam, quae fuga neque, at voluptatum amet laboriosam repellendus officia sit consectetur fugit debitis placeat!locale_filter_matcheslorem

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quae harum! Ea aut sapiente, repudiandae odio debitis provident? Quisquam iste ducimus eius asperiores illum at officia sapiente aliquam error Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatibus commodi sint officiis iusto perferendis ullam ipsam iure velit assumenda, ipsum consequatur dolorem. Eos rerum vitae velit similique, temporibus repellendus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, pariatur a veniam perspiciatis iusto dignissimos blanditiis ut accusamus et rem omnis perferendis voluptatem sit possimus corporis reprehenderit suscipit voluptates quam?
                        <br><br><b><br></b>
                        <br><br><br>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, omnis neque incidunt dignissimos deleniti ipsum corporis qui ut quo aspernatur fugiat dolores error excepturi eaque pariatur sapiente blanditiis, doloremque
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit et pariatur dolor quidem dolorem praesentium voluptate, quis blanditiis similique, nulla in maiores doloribus corrupti itaque voluptatibus rem, aperiam velit ut.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis accusamus eos assumenda dolorem corporis, debitis ipsam itaque hic ad asperiores illum necessitatibus nostrum nam consequuntur, non natus possimus veniam atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore quaerat incidunt doloremque harum molestias aperiam, quae fuga neque, at voluptatum amet laboriosam repellendus officia sit consectetur fugit debitis placeat!locale_filter_matcheslorem

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quae harum! Ea aut sapiente, repudiandae odio debitis provident? Quisquam iste ducimus eius asperiores illum at officia sapiente aliquam error Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatibus commodi sint officiis iusto perferendis ullam ipsam iure velit assumenda, ipsum consequatur dolorem. Eos rerum vitae velit similique, temporibus repellendus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, pariatur a veniam perspiciatis iusto dignissimos blanditiis ut accusamus et rem omnis perferendis voluptatem sit possimus corporis reprehenderit suscipit voluptates quam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, omnis neque incidunt dignissimos deleniti ipsum corporis qui ut quo aspernatur fugiat dolores error excepturi eaque pariatur sapiente blanditiis, doloremque
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit et pariatur dolor quidem dolorem praesentium voluptate, quis blanditiis similique, nulla in maiores doloribus corrupti itaque voluptatibus rem, aperiam velit ut.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis accusamus eos assumenda dolorem corporis, debitis ipsam itaque hic ad asperiores illum necessitatibus nostrum nam consequuntur, non natus possimus veniam atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore quaerat incidunt doloremque harum molestias aperiam, quae fuga neque, at voluptatum amet laboriosam repellendus officia sit consectetur fugit debitis placeat!locale_filter_matcheslorem

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quae harum! Ea aut sapiente, repudiandae odio debitis provident? Quisquam iste ducimus eius asperiores illum at officia sapiente aliquam error Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatibus commodi sint officiis iusto perferendis ullam ipsam iure velit assumenda, ipsum consequatur dolorem. Eos rerum vitae velit similique, temporibus repellendus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, pariatur a veniam perspiciatis iusto dignissimos blanditiis ut accusamus et rem omnis perferendis voluptatem sit possimus corporis reprehenderit suscipit voluptates quam?
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <script>
        const toggleBtn = document.querySelector(".toggle-btn"); // Hamburger menu button
        const closeBtn = document.querySelector(".mobile-nav-close"); // Close button in the menu
        const mobileNav = document.querySelector(".mobile-nav"); // Mobile navigation menu

        // Set initial style for mobile menu
        mobileNav.style.display = "none";  // Equivalent to display: none; initially hide the menu

        // Toggle mobile menu when the hamburger button is clicked
        toggleBtn.onclick = () => {
            // Dynamically add the CSS to open the menu
            mobileNav.style.position = "absolute";  // Position the menu
            mobileNav.style.top = "0";              // Set the position
            mobileNav.style.right = "0";             // Align it to the left
            // mobileNav.style.width = "100%";         // Full width of the screen
            // mobileNav.style.height = "100vh";       // Full height of the viewport
            mobileNav.style.backgroundColor = "rgb(0, 0, 0)";  // Semi-transparent background
            mobileNav.style.display = "block";  // Make it visible
            mobileNav.style.zIndex = "1000";    // Ensure it appears on top
        };

        // Close the mobile menu when the close button is clicked
        closeBtn.onclick = () => {
            // Remove the styles and hide the menu
            mobileNav.style.display = "none";  // Hide the menu by setting display to none
        };
    </script> -->


    <script>
        const toggleBtn = document.querySelector(".toggle-btn");
        const closeBtn = document.querySelector(".mobile-nav-close");
        const mobileNav = document.querySelector(".mobile-nav");

        toggleBtn.onclick = () => {
            mobileNav.classList.add("show-nav");
        };

        closeBtn.onclick = () => {
            mobileNav.classList.remove("show-nav");
        };
    </script>

    <!-- <script src="JS\jquery.meanmenu.min.js"></script>
    <script src="JS\bootstrap.min.js"></script>
    <script src="JS\metisMenu.min.js"></script>
    <script src="JS\one-page-nav-min.js"></script> -->

    <script src="Components\StyleParser.js"></script>

    <script src="Components\header2.js"></script>


    <!-- <script>
    setCustomHeader('.header-transparent.timepass', {
      backgroundColor: 'black',
      color: 'yellow'
    });
</script> -->

    <!-- <script>
//   document.addEventListener('DOMContentLoaded', () => {
    setCustomHeader('.header-top, .timepass, .header-bottom, .sticky', {
      backgroundColor: 'black',
      color: 'yellow',
      padding: '10px'
    });
//   });
</script> -->

    <!-- <script>
    setCustomHeader('.sections a', {
        color: 'yellow'
    });

    setCustomHeader('.appointmentBtn', {
        color: 'yellow',
        background: 'blue'
    });

    setCustomHeader('.header-bottom', {
        '.sections a':{
            color: 'yellow'
        },
        '.appointmentBtn':{
            color: 'yellow',
            background: 'blue'
        }
    });

</script> -->

    <script>
        setCustomHeaderStyles('header', {
            '.sections a': {
                color: 'yellow'
            },
            '.appointmentBtn': {
                color: 'yellow',
                background: 'blue'
            }
        });

        // document.querySelectorAll('.sections a').forEach(el => {
        //     el.style.color = 'yellow';
        // });
    </script>


</body>

</html>