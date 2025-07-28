<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <link rel="stylesheet" href="CSS\bootstrap.min.css">
    <!-- <link rel="stylesheet" href="CSS\form.css"> -->

    <style>
        .my-form-wrapper  {
            box-shadow: none !important;
        }
    </style>
</head>

<body>

    <br><br><br>
    <form action="thank-you.php" class="form1">
        <!-- <h2>User Information</h2> -->

        <div class="form-wrapper">
            <h3 class="textAlign-center">User Information</h3>
            <div>
                <!-- <label for="name1"><h3>Name: </h3></label> -->
                <input type="text" id="name11" placeholder="Enter Name">
            </div>
            <div>
                <!-- <label for="name2" class="gap-20 padding-20 bg-#f5f5f5 borderRadius-10"><h3>Address: </h3></label> -->
                <input type="text" id="name22" placeholder="Enter Address">
            </div>
            <div>
                <!-- <label for="name3"><h3>Telephone No.: </h3></label> -->
                <input type="text" id="name33" placeholder="Enter Telephone">
            </div>
            <div>
                <!-- <label for="name4"><h3>Email Address: </h3></label> -->
                <input type="text" id="name44" placeholder="Enter Email Address">
            </div>
            <div class="mydiv">
                <button data-component="submit" class="bg-gray r-10 mybtn">Submit</button>

                <button type="button" data-component="button" class="bg-lightblue r-0 mybtn hover-bg-green clear-btn">Clear</button>
                <button type="button" data-component="button" class="bg-purple r-50 mybtn hover-bg-yellow">Save</button>
            </div>
        </div>
    </form>



    <br><br><br>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contactModal">
        Open Form Modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content padding-20 borderRadius-10">
                <div class="modal-header">
                    <h5 class="modal-title textAlign-center fontSize-24px" id="contactModalLabel">Contact Form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <form action="thank-you.php" class="form1">
                    <div class="modal-body">
                        <div class="form-wrapper gap-20 padding-20 my-form-wrapper">

                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" class="color-black fontSize-16px padding-10" placeholder="First Name">
                                </div>
                                <div class="col-md-6">
                                    <input type="text" class="color-black fontSize-16px padding-10" placeholder="Last Name">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <input type="email" class="color-black fontSize-16px padding-10" placeholder="Email">
                                </div>
                                <div class="col-md-6">
                                    <input type="tel" class="color-black fontSize-16px padding-10" placeholder="Phone">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <textarea class="color-black fontSize-16px padding-10 w-100" rows="4" placeholder="Your Message"></textarea>
                                </div>
                            </div>

                            <div class="mydiv row">
                                <div class="col d-flex justify-content-between">
                                    <button type="submit" class="bg-purple r-10 mybtn">Submit</button>
                                    <button type="button" class="bg-lightblue r-0 mybtn clear-btn hover-bg-green">Clear</button>
                                    <button type="button" class="bg-gray r-50 mybtn hover-bg-yellow" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>



    <!-- <script src="Components\StyleParser.js"></script> -->
    <script src="Components\form.js"></script>
    <script src="Components\button.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


    <!-- <script>
        ButtonLib.setCustomButton('.mybtn', {
            padding: "12px 30px",
            fontSize: "18px",
            transition: "transform 0.3s ease, background-color 0.2s ease",
             color: "white",
            // backgroundColor: "darkblue"   // this will not work bcz preference is first given to inline 
        })
    </script> -->

    <script>
        ButtonLib.setCustomButton('.mybtn', {
            padding: "12px 30px",
            fontSize: "18px",
            transition: "transform 0.3s ease, background-color 0.2s ease",
            color: "white"
        });


    </script>




    <!-- <script>
        ButtonLib.setCustomButton('button', {
            color: "white",
            backgroundColor: "darkblue"
        })
    </script> -->


    <!-- <script>
    function setupClearButtons() {
        const clearButtons = document.querySelectorAll('.clear-btn');

        clearButtons.forEach(button => {
            button.addEventListener('click', () => {
                const form = button.closest('form') || button.closest('.form-wrapper');
                if (!form) return;

                form.querySelectorAll('input, textarea, select').forEach(el => {
                    if (el.type === 'checkbox' || el.type === 'radio') {
                        el.checked = false;
                    } else {
                        el.value = '';
                    }

                    // Remove box-shadow and reset border color for input fields
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.style.boxShadow = 'none';
                        el.style.borderColor = '#ccc';
                    }
                });
            });
        });
    }

    // Auto-setup when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupClearButtons);
    } else {
        setupClearButtons();
    }
</script> -->


</body>

</html>