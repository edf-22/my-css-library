// //Object oriented code for theme
class Theme {
    constructor() {
      // Define the default light and dark theme styles
      this.lightTheme = {
        backgroundColor: 'white',
        textColor: 'black',
        buttonColor: 'lightblue',
        fontFamily: 'Arial',
        borderRadius: '10px'
      };
  
      this.darkTheme = {
        backgroundColor: '#121212',
        textColor: 'white',
        buttonColor: '#333',
        fontFamily: 'Arial',
        borderRadius: '10px'
      };
    }

    
  
    // Method to add the CSS styles for themes (light/dark)
    addThemeStyles() {
      const style = document.createElement('style');
      style.innerHTML = `
        /* Default light theme */
        body {
          background-color: ${this.lightTheme.backgroundColor};
          color: ${this.lightTheme.textColor};
          font-family: ${this.lightTheme.fontFamily};
        }
  
        // .my-button {
        //   background-color: ${this.lightTheme.buttonColor};
        //   color: ${this.lightTheme.textColor};
        // }
  
        // .toggle-button {
        //   background-color: rgb(89, 165, 232);
        //   color: black;
        // }
  
        /* Dark theme */
        body[data-theme="dark"] {
          background-color: ${this.darkTheme.backgroundColor};
          color: ${this.darkTheme.textColor};
        }
  
        // body[data-theme="dark"] .my-button {
        //   background-color: #333;
        //   color: #ccc;
        // }
  
        // body[data-theme="dark"] .toggle-button {
        //   background-color: #fff;
        //   color: #000;
        // }
      `;
      document.head.appendChild(style);
    }
  
    // Method to toggle between light and dark theme
    toggleTheme() {
      const body = document.body;
  
      // Check if 'data-theme="dark"' exists
      if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme'); // Switch to light theme
      } else {
        body.setAttribute('data-theme', 'dark'); // Switch to dark theme
      }
    }

    setCustomTheme(configOrBg, textColor, buttonColor, fontFamily, borderRadius) {
          let config;
      
          // Check if the first argument is an object (for dynamic theme)
          if (typeof configOrBg === "object") {
            config = configOrBg;
          } else {
            // Otherwise, use the first argument as backgroundColor and set the rest dynamically
            config = {
              backgroundColor: configOrBg,
              textColor,
              buttonColor,
              fontFamily,
              borderRadius,
            };
          }
      
          // Apply custom theme without affecting light/dark toggle
          document.body.style.backgroundColor = config.backgroundColor;
          document.body.style.color = config.textColor;
          document.body.style.fontFamily = config.fontFamily;
      
          const buttons = document.querySelectorAll("button");
          buttons.forEach((btn) => {
            btn.style.backgroundColor = config.buttonColor;
            btn.style.color = config.textColor;
            btn.style.borderRadius = config.borderRadius;
          });
        }
  }


  
  // Usage Example:
  
  // Create an instance of Theme class
  const theme = new Theme();
  
  // Add the default theme styles when the page loads
  theme.addThemeStyles();
  
  // Set an initial theme (either light or dark)
  theme.toggleTheme();
  
//   // Example of setting a custom theme dynamically (e.g., user input)
//   //how user can set custom theme
// //   theme.setCustomTheme({
// //     backgroundColor: 'lightblue',
// //     textColor: 'darkmagenta',
// //     buttonColor: 'lightyellow',
// //     fontFamily: 'Arial',
// //     borderRadius: '10px'
// //   });
  
  // Toggle theme based on button click
  document.querySelector("#toggleButton").addEventListener("click", () => {
    theme.toggleTheme();
  });
  
