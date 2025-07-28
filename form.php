<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <link rel="stylesheet" href="CSS\bootstrap.min.css">
    <!-- <link rel="stylesheet" href="CSS\form.css"> -->
</head>
<body>
    <!-- <script src="Components\StyleParser.js"></script> -->
    <form class="gap-30px padding-40px borderRadius-20px maxWidth-800px shadow-rgba(0,0,0,0.5) margin-50px">
        <h2 class="textAlign-left color-gray fontSize-28px marginBottom-40px">User Information</h2>

        <div class="form-wrapper gap-30px padding-40px borderRadius-20px maxWidth-800px shadow-rgba(0,0,0,0.5) margin-50px">
            <div>
                <label for="name1" class="textAlign-left color-gray fontSize-28 marginBottom-40"><h3>Name: </h3></label>
                <input type="text" id="name1" class="borderRadius-50 color-gray fontSize-28 marginBottom-40">
            </div>
            <div>
                <label for="name2"><h3>Address: </h3></label>
                <input type="text" id="name2">
            </div>
            <div>
                <label for="name3"><h3>Telephone No.: </h3></label>
                <input type="text" id="name3">
            </div>
            <div>
                <label for="name4"><h3>Email Address: </h3></label>
                <input type="text" id="name4">
            </div>
            <div class="mydiv">
                <button type="submit" data-component="button" class="bg-#3b8ee8 r-5 mybtn">Submit</button>
                <!-- <button type="clear" data-component="button" class="bg-#70de70 r-5 mybtn hover-bg-green">Clear</button>
                <button type="submit" data-component="button" class="bg-#ffff81 r-5 mybtn hover-bg-yellow">Save</button> -->
            </div>
        </div>
    </form>

    <br><br><br>
    <form action="#" class="form1">
        <h2>User Information</h2>

        <div class="form-wrapper">
            <div>
                <label for="name1"><h3>Name: </h3></label>
                <input type="text" id="name11">
            </div>
            <div>
                <label for="name2"><h3>Address: </h3></label>
                <input type="text" id="name22">
            </div>
            <div>
                <label for="name3"><h3>Telephone No.: </h3></label>
                <input type="text" id="name33">
            </div>
            <div>
                <label for="name4"><h3>Email Address: </h3></label>
                <input type="text" id="name44">
            </div>
            <div class="mydiv">
                <button type="submit" data-component="button" class="bg-#3b8ee8 r-5 mybtn">Submit</button>
                <button type="clear" data-component="button" class="bg-#70de70 r-5 mybtn hover-bg-green clear-btn">Clear</button>
                <button type="submit" data-component="button" class="bg-#ffff81 r-5 mybtn hover-bg-yellow">Save</button>
            </div>
        </div>
    </form>


    <!-- <section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <div class="form-group form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section> -->

    <br><br><br>
    <form action="#" class="form1">
        <h2>User Information</h2>

        <div class="form-wrapper">
            <div>
                <label for="name1"><h3>Name: </h3></label>
                <input type="text" id="name11">
            </div>
            <div>
                <label for="name2" class="gap-20 padding-20 bg-#f5f5f5 borderRadius-10"><h3>Address: </h3></label>
                <input type="text" id="name22">
            </div>
            <div>
                <label for="name3"><h3>Telephone No.: </h3></label>
                <input type="text" id="name33">
            </div>
            <div>
                <label for="name4"><h3>Email Address: </h3></label>
                <input type="text" id="name44">
            </div>
            <div class="mydiv">
                <button type="submit" data-component="button" class="bg-gray r-10 mybtn">Submit</button>
                <button type="clear" data-component="button" class="bg-lightblue r-0 mybtn hover-bg-green clear-btn">Clear</button>
                <button type="submit" data-component="button" class="bg-purple r-50 mybtn hover-bg-yellow">Save</button>
            </div>
        </div>
    </form>

    
    <!-- <script src="Components\StyleParser.js"></script> -->
    <script src="Components\form.js"></script>
    <script src="Components\button.js"></script>
    

    <script>
        ButtonLib.setCustomButton('.mybtn', {
            padding: "12px 30px",
            fontSize: "18px",
            transition: "transform 0.3s ease, background-color 0.2s ease",
             color: "white",
            // backgroundColor: "darkblue"   // this will not work bcz preference is first given to inline 
        })
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

<!-- <script>
    FormLib.applyStyles({
    form: { backgroundColor: '#eee' },
    input: { color: 'blue' },
    button: { backgroundColor: '#4A90E2' },
    // h2: { fontSize: '30px', color: 'darkgreen' }
    });
</script> -->

<!-- <script>
    FormLib.applyStyles({
  form: {
    backgroundColor: '#f8f8f8',
    border: '2px solid #ccc',
    padding: '30px'
  },
  input: {
    color: '#333',
    backgroundColor: '#fff8f8',
    borderRadius: "50px",
    fontSize: '26px',
    fontWeight: '900'
  },
  label: {
    fontWeight: 'bold',
    fontSize: '16px'
  },
//   button: {
//     backgroundColor: '#4A90E2',
//     color: 'white'
//   },
  h2: {
    fontSize: '26px',
    color: 'darkblue',
    fontWeight: '100'
  }
});
</script> -->

</body>
</html>