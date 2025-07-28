<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dynamic Header Examples</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
    }

    section {
      padding: 3rem 1rem;
      min-height: 100vh;
      box-sizing: border-box;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }

    .nav a {
      margin-left: 1rem;
      text-decoration: none;
      color: inherit;
      font-weight: 500;
    }

    /* 1. Minimalist Transparent Header */
    .transparent-bg {
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;       /* Important to prevent horizontal overflow */
      width: 100vw;   /* Use viewport width */
      box-sizing: border-box;
      padding: 1rem 2rem;
      color: white;
      z-index: 10;
    }

    .hero {
      background: url('https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600') no-repeat center center/cover;
      color: white;
      position: relative;
      height: 100vh;
      overflow: hidden;
    }

    /* 2. Colorful Modern Header */
    .modern-bg {
      background-color: #6200ea;
      color: white;
    }

    /* 3. Light Mode Header */
    .light-bg {
      background-color: #f9f9f9;
      color: #333;
    }

    /* 4. Dark Mode Centered Header */
    .dark-bg {
      background-color: #121212;
      color: #f1f1f1;
      flex-direction: column;
      text-align: center;
    }

    .dark-bg .nav a {
      margin: 0 0.75rem;
    }

    .logo {
      font-weight: bold;
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        align-items: flex-start;
      }
      .nav {
        margin-top: 1rem;
      }
      .nav a {
        display: block;
        margin: 0.5rem 0;
      }
      .dark-bg .nav {
        align-items: center;
        text-align: center;
      }
    }
  </style>
</head>
<body>

  <!-- 1. Minimalist Transparent Header -->
  <div class="hero">
    <header class="header transparent-bg">
      <div class="logo">🚀</div>
      <nav class="nav">
        <a href="#">Home</a>
        <a href="#">Blog</a>
      </nav>
    </header>
    <div style="position:absolute; bottom: 20px; left: 20px; font-size: 2rem;">Hero Background Section</div>
  </div>

  <!-- 2. Modern Colorful Header -->
  <section class="modern-bg">
    <header class="header">
      <div class="logo"><img src="Images\logo_loc.png" alt="logo" /></div>
      <nav class="nav">
        <a href="#">Dashboard</a>
        <a href="#">Team</a>
        <a href="#">Contact</a>
      </nav>
    </header>
    <h2>Modern Colorful Header Content</h2>
    <p>Body content goes here...</p>
  </section>

  <!-- 3. Light Mode Header -->
  <section class="light-bg">
    <header class="header">
      <div class="logo">📘 MyBlog</div>
      <nav class="nav">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
      </nav>
    </header>
    <h2>Light Mode Section</h2>
    <p>Blog or article layout...</p>
  </section>

  <!-- 4. Dark Mode Centered Header -->
  <section class="dark-bg">
    <header class="header dark-bg">
      <div class="logo">
        <img src="Images\logo_loc.png" alt="Logo" />
      </div>
      <nav class="nav">
        <a href="#">Explore</a>
        <a href="#">Pricing</a>
        <a href="#">Login</a>
      </nav>
    </header>
    <h2>Dark Mode Header Section</h2>
    <p>Centered content with dark theme...</p>
  </section>

</body>
</html>
