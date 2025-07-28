<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header</title>
    <link rel="stylesheet" href="CSS\bootstrap.min.css">
    <!-- <link rel="stylesheet" href="CSS\meanmenu.css">
    <link rel="stylesheet" href="CSS\metisMenu.min.css"> -->
    <!-- <link rel="stylesheet" href="CSS\default.css"> -->
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
                                <!-- <div class="header-top">
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
                                            <a href="https://twitter.com/drshashankshah" target="_blank" class="social-icon" target="_blank"><i    class="fab fa-twitter"></i></a>
                                            <a href="https://www.instagram.com/loc_shashank_shah/?hl=en" target="_blank" class="social-icon"><i    class="fab fa-instagram"></i></a>
                                            <a href="https://www.youtube.com/channel/UCiUZGp41BNm6RxlRoGEwMvQ" target="_blank" class="social-icon"><i  class="fab fa-youtube"></i></a>
                                        </div>
                                    </div> 
                                    </div>
                                </div> -->
                            <!-- </div> -->
                            <!-- <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12"> -->
                                <div sticky="true" class="header-bottom mt-40">
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

     <div class="header-banner" HeaderOverlay="true bg-gray" style="background-image: url(&quot;Images/SleeveGastrectomyBanner.png&quot;)";>
    
    <!-- <div class="responsive-banner d-block d-lg-none" style="background-image: url(&quot;Images/SleeveGastrectomyBanner.png&quot;)";></div> -->

</header>

<section>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At velit sunt perspiciatis incidunt cupiditate! Explicabo, totam nostrum iste molestiae eius iure deleniti distinctio at nesciunt quaerat quae voluptatum omnis <recusandae class="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum temporibus tempore excepturi consequatur repudiandae, perspiciatis deserunt quidem dignissimos laudantium labore doloribus assumenda unde fugit facere velit nisi odio, voluptate vero!</recusandae>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ex amet enim modi deleniti. Ipsam sed sit voluptates aperiam minus. Cum aspernatur laudantium assumenda neque deserunt quis voluptas quidem eaque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem harum tempora sed? Aut velit error accusantium? Assumenda nam quam nobis, rerum labore repudiandae, dolor porro ipsum magni commodi minus itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, deserunt qui est recusandae iusto eligendi? Vero delectus similique dicta, veritatis omnis aperiam, eum sed corporis unde ea neque, quisquam itaque.
        <br><br><br><br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem ab unde quam natus sint explicabo eos blanditiis accusantium rem neque distinctio accusamus, possimus veniam ea laudantium repellat illum. Adipisci?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates possimus repellat, vitae deserunt deleniti odit consequatur ut dolorum fuga quod? Dignissimos officia, qui non debitis explicabo optio eligendi? Iste. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quae odit nam, expedita rem quidem accusantium atque perspiciatis laboriosam reiciendis enim iusto fugiat error libero beatae minus nihil aspernatur! Voluptas?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto optio non, explicabo quibusdam voluptatem illo distinctio amet ipsam aut provident nesciunt tempora nam quod? Soluta corrupti aliquam dolore odio?
    </p>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At velit sunt perspiciatis incidunt cupiditate! Explicabo, totam nostrum iste molestiae eius iure deleniti distinctio at nesciunt quaerat quae voluptatum omnis <recusandae class="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum temporibus tempore excepturi consequatur repudiandae, perspiciatis deserunt quidem dignissimos laudantium labore doloribus assumenda unde fugit facere velit nisi odio, voluptate vero!</recusandae>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ex amet enim modi deleniti. Ipsam sed sit voluptates aperiam minus. Cum aspernatur laudantium assumenda neque deserunt quis voluptas quidem eaque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem harum tempora sed? Aut velit error accusantium? Assumenda nam quam nobis, rerum labore repudiandae, dolor porro ipsum magni commodi minus itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, deserunt qui est recusandae iusto eligendi? Vero delectus similique dicta, veritatis omnis aperiam, eum sed corporis unde ea neque, quisquam itaque.
        <br><br><br><br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem ab unde quam natus sint explicabo eos blanditiis accusantium rem neque distinctio accusamus, possimus veniam ea laudantium repellat illum. Adipisci?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates possimus repellat, vitae deserunt deleniti odit consequatur ut dolorum fuga quod? Dignissimos officia, qui non debitis explicabo optio eligendi? Iste. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quae odit nam, expedita rem quidem accusantium atque perspiciatis laboriosam reiciendis enim iusto fugiat error libero beatae minus nihil aspernatur! Voluptas?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto optio non, explicabo quibusdam voluptatem illo distinctio amet ipsam aut provident nesciunt tempora nam quod? Soluta corrupti aliquam dolore odio?
    </p>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At velit sunt perspiciatis incidunt cupiditate! Explicabo, totam nostrum iste molestiae eius iure deleniti distinctio at nesciunt quaerat quae voluptatum omnis <recusandae class="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum temporibus tempore excepturi consequatur repudiandae, perspiciatis deserunt quidem dignissimos laudantium labore doloribus assumenda unde fugit facere velit nisi odio, voluptate vero!</recusandae>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ex amet enim modi deleniti. Ipsam sed sit voluptates aperiam minus. Cum aspernatur laudantium assumenda neque deserunt quis voluptas quidem eaque!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem harum tempora sed? Aut velit error accusantium? Assumenda nam quam nobis, rerum labore repudiandae, dolor porro ipsum magni commodi minus itaque.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, deserunt qui est recusandae iusto eligendi? Vero delectus similique dicta, veritatis omnis aperiam, eum sed corporis unde ea neque, quisquam itaque.
        <br><br><br><br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem ab unde quam natus sint explicabo eos blanditiis accusantium rem neque distinctio accusamus, possimus veniam ea laudantium repellat illum. Adipisci?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptates possimus repellat, vitae deserunt deleniti odit consequatur ut dolorum fuga quod? Dignissimos officia, qui non debitis explicabo optio eligendi? Iste. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quae odit nam, expedita rem quidem accusantium atque perspiciatis laboriosam reiciendis enim iusto fugiat error libero beatae minus nihil aspernatur! Voluptas?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iusto optio non, explicabo quibusdam voluptatem illo distinctio amet ipsam aut provident nesciunt tempora nam quod? Soluta corrupti aliquam dolore odio?
    </p>
</section>

<script src="Components\StyleParser.js"></script>
<script src="Components\header2.js"></script>

<!-- <script>
    setCustomHeader('.header-bottom', {
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px'
    });
    // setCustomHeader('.sticky', {
    //     margin: '40px !important'
    // }); 
</script>

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

</script> -->

</body>
</html>