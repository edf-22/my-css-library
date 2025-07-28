// function sayHello() {
//     document.write("Hello on the screen!");
//     console.log("Hello from JavaScript!");
//     alert("You clicked the button!");
// }

function sayHello() {
    document.getElementById("output").innerText = "Hello on the screen!";
    console.log("Hello from JavaScript!");
    alert("You clicked the button!");
}

const btn = document.getElementById("myBtn");

    // Set default styles using JS
    btn.style.backgroundColor = "yellow";
    btn.style.color = "black";
    btn.style.padding = "10px 20px";
    btn.style.border = "none";
    btn.style.fontSize = "16px";
    btn.style.cursor = "pointer";

    // Hover: when mouse goes over
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "red";
    });

    // Hover out: when mouse leaves
    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "yellow";
    });


    const box = document.getElementById("box");
box.style.backgroundColor = "yellow";
box.style.padding = "10px";
box.style.display = "inline-block";
box.style.fontFamily = "Arial";
box.style.fontSize = "16px";


    // Function to add red border
    function addRedBorder(id) {
      const element = document.getElementById(id);
      element.style.border = "2px solid red";
      element.style.borderRadius = "10px";
    }

    //use this for class
    const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  // box.style.border = "2px solid red";
  box.style.backgroundColor = "yellow";
});

function addRedBorderToClass(className) {
  const elements = document.querySelectorAll(`.${className}`);  // Select all elements with the given class
  elements.forEach(element => {
    element.style.border = "2px solid red";
    element.style.borderRadius = "10px";
  });
}


//for (this) element ---- that is if we want to use oncick function there on the element itself
function addRedBorder(element) {
  element.style.border = "2px solid red";
  element.style.borderRadius = "10px";
}



const cssLibrary = {
  setBackgroundColor: function(element, color) {
    element.style.backgroundColor = color;
  },

  setTextColor: function(element, color) {
    element.style.color = color;
  },

  setPadding: function(element, padding) {
    element.style.padding = padding;
  },

  setBorder: function(element, width, color, style = 'solid') {
    element.style.border = `${width} ${style} ${color}`;
  },

  setBorderRadius: function(element, radius) {
    element.style.borderRadius = radius;
  },

  addHoverEffect: function(element, hoverColor) {
    element.addEventListener('mouseover', () => {
      if (!element.dataset.originalBg) {
        element.dataset.originalBg = window.getComputedStyle(element).backgroundColor;
      }
      element.style.backgroundColor = hoverColor;
    });
  
    element.addEventListener('mouseout', () => {
      element.style.backgroundColor = element.dataset.originalBg || '';
    });
  },
  setFontSize: function(element, size) {
    element.style.fontSize = size;
  },  
  setFontFamily: function(element, font) {
    element.style.fontFamily = font;
  },
  setMargin: function(element, margin) {
    element.style.margin = margin;
  },  
  
  applyStyles: function(element, stylesObj) {
    for (let style in stylesObj) {
      element.style[style] = stylesObj[style];
    }
  },  
};

// Wait until page loads
window.onload = () => {
  const button = document.getElementById('myButton');


  cssLibrary.setBackgroundColor(button, 'yellow');
  cssLibrary.setTextColor(button, 'black');
  cssLibrary.setPadding(button, '10px 20px');
  cssLibrary.setBorder(button, '2px', 'red');
  cssLibrary.setBorderRadius(button, '5px');
  cssLibrary.addHoverEffect(button, 'orange');
  cssLibrary.setFontSize(button, "32px");
  cssLibrary.setFontFamily(button, 'Arial');
  cssLibrary.setMargin(button, '20px');

  cssLibrary.applyStyles(button, {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 30px',
    fontSize: '20px'
  });
  
};


const button = document.getElementById("heybtn");

Object.assign(button.style, {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  outline: "none"
});

// Hover effect (via JS)
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#0056b3";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#007bff";
});



// const DynamicCSS = (() => {
//   const defaultButtonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//     outline: "none"
//   };

//   const hoverButtonStyle = {
//     backgroundColor: "#0056b3"
//   };

//   function applyStyles(el, styles) {
//     for (const [key, value] of Object.entries(styles)) {
//       if (!el.style[key]) { // only apply if user hasn't defined it
//         el.style[key] = value;
//       }
//     }
//   }

//   function styleButton(el, customStyle = {}) {
//     if (!el) return;

//     const combinedStyles = { ...defaultButtonStyle, ...customStyle };
//     applyStyles(el, combinedStyles);

//     el.addEventListener("mouseenter", () => {
//       applyStyles(el, hoverButtonStyle);
//     });
//     el.addEventListener("mouseleave", () => {
//       applyStyles(el, combinedStyles);
//     });
//   }

//   return {
//     styleButton
//   };
// })();

// DynamicCSS.styleButton(document.getElementById("btn1"));
// DynamicCSS.styleButton(document.getElementById("btn2"), {
//   backgroundColor: "green",
//   color: "black"
// });


// const DynamicCSS = (() => {
//   const defaultButtonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "background-color 0.3s ease",
//     outline: "none"
//   };

//   const hoverButtonStyle = {
//     backgroundColor: "#0056b3"
//   };

//   // ✅ Add 'force' parameter to allow hover styles to override
//   function applyStyles(el, styles, force = false) {
//     for (const [key, value] of Object.entries(styles)) {
//       if (force || !el.style[key]) {
//         el.style[key] = value;
//       }
//     }
//   }

//   function styleButton(el, customStyle = {}) {
//     if (!el) return;

//     const combinedStyles = { ...defaultButtonStyle, ...customStyle };
//     applyStyles(el, combinedStyles); // Apply base style

//     // ✅ Use force = true to apply hover styles
//     el.addEventListener("mouseenter", () => {
//       applyStyles(el, hoverButtonStyle, true);
//     });

//     el.addEventListener("mouseleave", () => {
//       applyStyles(el, combinedStyles, true);
//     });
//   }

//   return {
//     styleButton
//   };
// })();

// ✅ Example usage
// DynamicCSS.styleButton(document.getElementById("btn1"));
// DynamicCSS.styleButton(document.getElementById("btn2"), {
//   backgroundColor: "green",
//   color: "black"
// });



class DynamicCSS {
  constructor() {
    this.defaultButtonStyle = {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      outline: "none"
    };

    this.hoverButtonStyle = {
      backgroundColor: "#0056b3"
    };
  }

  applyStyles(el, styles, force = false) {
    for (const [key, value] of Object.entries(styles)) {
      if (force || !el.style[key]) {
        el.style[key] = value;
      }
    }
  }

  styleButton(el, customStyle = {}, customHoverStyle = {}) {
    if (!el) return;
  
    const combinedStyles = { ...this.defaultButtonStyle, ...customStyle };
    const combinedHover = { ...this.hoverButtonStyle, ...customHoverStyle };
  
    this.applyStyles(el, combinedStyles);
  
    el.addEventListener("mouseenter", () => {
      this.applyStyles(el, combinedHover, true);
    });
  
    el.addEventListener("mouseleave", () => {
      this.applyStyles(el, combinedStyles, true);
    });
  }
}  

// const cssLib = new DynamicCSS();

// cssLib.styleButton(document.getElementById("btn1"));

// cssLib.styleButton(document.getElementById("btn2"), {
//   backgroundColor: "green",
//   color: "black"
// });

const cssLib = new DynamicCSS();

// 👇 Button with custom hover color (yellow)
cssLib.styleButton(
  document.getElementById("btn1"));

// 👇 Another button with default hover
cssLib.styleButton(
  document.getElementById("btn2"),
  { backgroundColor: "green", color: "white" },
  { backgroundColor: "darkgreen" }
);


// ✅ Base Class: CSSComponent
class CSSComponent {
  applyStyles(el, styles, force = false) {
    for (const [key, value] of Object.entries(styles)) {
      if (force || !el.style[key]) {
        el.style[key] = value;
      }
    }
  }
}

// ✅ Button Component
class ButtonComponent extends CSSComponent {
  constructor(config = {}) {
    super();
    this.defaultStyle = {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: config.borderRadius || "6px",
      fontSize: "16px",
      cursor: "pointer",
      transition: config.transition || "background-color 0.3s ease",
      outline: "none",
    };

    this.hoverStyle = {
      backgroundColor: "#0056b3"
    };
  }

  style(el, customStyle = {}, customHoverStyle = {}) {
    const finalStyle = { ...this.defaultStyle, ...customStyle };
    const finalHover = { ...this.hoverStyle, ...customHoverStyle };

    this.applyStyles(el, finalStyle);

    el.addEventListener("mouseenter", () => {
      this.applyStyles(el, finalHover, true);
    });

    el.addEventListener("mouseleave", () => {
      this.applyStyles(el, finalStyle, true);
    });
  }
}

// ✅ Global Library Object
const StyleLib = {
  config: {
    theme: "default",
    borderRadius: "6px",
    transition: "0.3s ease",
  },
  button: null,

  init() {
    this.button = new ButtonComponent(this.config);
  },

  autoApplyStyles() {
    document.querySelectorAll("[data-component]").forEach(el => {
      const type = el.dataset.component;
      if (this[type] && typeof this[type].style === "function") {
        this[type].style(el);
      }
    });
  }
};

// ✅ Initialize Library
document.addEventListener("DOMContentLoaded", () => {
  StyleLib.init();
  StyleLib.autoApplyStyles();
});


  document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("customBtn");

    StyleLib.button.style(el, {
      backgroundColor: "green",
      color: "black",
      borderRadius: "12px"
    }, {
      backgroundColor: "darkgreen"
    });
  });

