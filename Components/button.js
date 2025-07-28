// button.js (Standalone Version) - 100% working
(function () {
  class CSSComponent {
    applyStyles(el, styles, force = false) {
      for (const [key, value] of Object.entries(styles)) {
        if (force || !el.style[key]) {
          el.style[key] = value;
        }
      }
    }

    parseShortcutStyle(styleString) {
      const styles = {};
      const tokens = styleString.trim().split(/\s+/);

      tokens.forEach(token => {
        if (token.startsWith("bg-")) {
          const value = token.slice(3);
          if (value) styles.backgroundColor = value;
        } else if (token.startsWith("r-")) {
          const value = token.slice(2);
          if (value) styles.borderRadius = value + "px";
        } else if (token.startsWith("text-")) {
          const value = token.slice(5);
          if (value) styles.color = value;
        } else if (token.startsWith("hover-bg-")) {
          const value = token.slice(9);
          styles._hoverBackgroundColor = value;
        } else if (token.startsWith("hover-text-")) {
          const value = token.slice(11);
          styles._hoverTextColor = value;
        }
      });

      return styles;
    }
  }

  class ButtonComponent extends CSSComponent {
    constructor(config = {}) {
      super();
      this.defaultStyle = {
        backgroundColor: "#E5F9FF",
        padding: "10px 20px",
        border: "none",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s ease, color 0.3s ease",
        outline: "none",
        color: ""
      };

      this.defaultHoverStyle = {
        backgroundColor: "#0056b3",
        color: "white"
      };
    }

    style(el) {
      const styleAttr = el.dataset.style || el.className || "";
      const parsed = this.parseShortcutStyle(styleAttr);
      const {
        _hoverBackgroundColor,
        _hoverTextColor,
        ...customStyle
      } = parsed;

      const finalStyle = {
        ...this.defaultStyle,
        ...customStyle
      };

      this.applyStyles(el, finalStyle);
      
      // Modified: Better original color storage
      el.dataset.originalBackgroundColor = finalStyle.backgroundColor || 
                                        el.style.backgroundColor || 
                                        this.defaultStyle.backgroundColor;
      el.dataset.originalColor = finalStyle.color || 
                               el.style.color || 
                               this.defaultStyle.color;

      const applyHoverBg = _hoverBackgroundColor !== "none";
      const applyHoverColor = _hoverTextColor !== "none";

      if (applyHoverBg || applyHoverColor) {
        const hoverBg = _hoverBackgroundColor || this.defaultHoverStyle.backgroundColor;
        const hoverColor = _hoverTextColor || this.defaultHoverStyle.color;

        el.addEventListener("mouseenter", () => {
          if (!el.classList.contains("active-btn")) {
            const hoverStyles = {};
            if (applyHoverBg) hoverStyles.backgroundColor = hoverBg;
            if (applyHoverColor) hoverStyles.color = hoverColor || el.dataset.originalColor;
            this.applyStyles(el, hoverStyles, true);
          }
        });

        el.addEventListener("mouseleave", () => {
          if (!el.classList.contains("active-btn")) {
            const restoreStyles = {};
            if (applyHoverBg) restoreStyles.backgroundColor = el.dataset.originalBackgroundColor;
            if (applyHoverColor) restoreStyles.color = el.dataset.originalColor;
            this.applyStyles(el, restoreStyles, true);
          }
        });
      }
    }

    setCustomButton(selector, styles) {
      document.querySelectorAll(selector).forEach(el => {
        const newEl = el.cloneNode(true);
        el.parentNode.replaceChild(newEl, el);
        el = newEl;

        const baseStyles = { ...styles };
        delete baseStyles.hoverBackgroundColor;
        delete baseStyles.hoverColor;
        
        this.applyStyles(el, { ...this.defaultStyle, ...baseStyles }, true);

        // Modified: Better original color storage
        el.dataset.originalBackgroundColor = styles.backgroundColor || 
                                           el.style.backgroundColor || 
                                           this.defaultStyle.backgroundColor;
        el.dataset.originalColor = styles.color || 
                                 el.style.color || 
                                 this.defaultStyle.color;

        const disableHover = styles.hoverBackgroundColor === "none" ||
                           styles.hoverColor === "none";

        if (!disableHover) {
          const hoverBg = styles.hoverBackgroundColor || this.defaultHoverStyle.backgroundColor;
          const hoverColor = styles.hoverColor || this.defaultHoverStyle.color;

          el.addEventListener("mouseenter", () => {
            if (!el.classList.contains("active-btn")) {
              this.applyStyles(el, {
                backgroundColor: hoverBg,
                color: hoverColor || el.dataset.originalColor
              }, true);
            }
          });

          el.addEventListener("mouseleave", () => {
            if (!el.classList.contains("active-btn")) {
              this.applyStyles(el, {
                backgroundColor: el.dataset.originalBackgroundColor,
                color: el.dataset.originalColor
              }, true);
            }
          });
        }
      });
    }
  }

  const initButtonSystem = function () {
    const buttonComponent = new ButtonComponent();

    window.ButtonLib = {
      component: buttonComponent,

      init: function () {
        document.querySelectorAll("[data-component='button']").forEach(el => {
          if (!el.dataset.style && !el.classList.contains('my-btn')) {
            this.component.style(el);
          }
        });
      },

      setCustomButton: function (selector, styles) {
        document.querySelectorAll(selector).forEach(el => {
          const inlineParsed = this.component.parseShortcutStyle(el.dataset.style || el.className || "");
          const {
            _hoverBackgroundColor: inlineHoverBg,
            _hoverTextColor: inlineHoverColor,
            ...inlineBase
          } = inlineParsed;

          const {
            hoverBackgroundColor: scriptHoverBg,
            hoverColor: scriptHoverColor,
            ...scriptBase
          } = styles;

          const mergedBase = {
            ...this.component.defaultStyle,
            ...inlineBase,
            ...scriptBase
          };

          this.component.applyStyles(el, mergedBase, true);

          // Modified: Better original color storage
          el.dataset.originalBackgroundColor = mergedBase.backgroundColor || 
                                            this.component.defaultStyle.backgroundColor;
          el.dataset.originalColor = mergedBase.color || 
                                   this.component.defaultStyle.color;

          const hoverBg = scriptHoverBg ?? inlineHoverBg ?? this.component.defaultHoverStyle.backgroundColor;
          const hoverColor = scriptHoverColor ?? inlineHoverColor ?? this.component.defaultHoverStyle.color;

          const disableHover = hoverBg === "none" && hoverColor === "none";

          if (!disableHover) {
            el.addEventListener("mouseenter", () => {
              if (!el.classList.contains("active-btn")) {
                const hoverStyles = {};
                if (hoverBg !== "none") hoverStyles.backgroundColor = hoverBg;
                if (hoverColor !== "none") hoverStyles.color = hoverColor || el.dataset.originalColor;
                this.component.applyStyles(el, hoverStyles, true);
              }
            });

            el.addEventListener("mouseleave", () => {
              if (!el.classList.contains("active-btn")) {
                const restoreStyles = {};
                if (hoverBg !== "none") restoreStyles.backgroundColor = el.dataset.originalBackgroundColor;
                if (hoverColor !== "none") restoreStyles.color = el.dataset.originalColor;
                this.component.applyStyles(el, restoreStyles, true);
              }
            });
          }
        });
      }
    };

    window.activeStyles = {};
    window.setCustomActiveButton = function (styles) {
      window.activeStyles = styles;
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        ButtonLib.init();
      });
    } else {
      ButtonLib.init();
    }
  };

  initButtonSystem();
})();


//try  --  bootstrap clash
// (function () {
//   class CSSComponent {
//     applyStyles(el, styles, force = false) {
//       for (const [key, value] of Object.entries(styles)) {
//         if (force || !el.style[key]) {
//           el.style[key] = value;
//         }
//       }
//     }

//     parseShortcutStyle(styleString) {
//       const styles = {};
//       const tokens = styleString.trim().split(/\s+/);

//       tokens.forEach(token => {
//         if (token.startsWith("bg-")) {
//           const value = token.slice(3);
//           if (value) styles.backgroundColor = value;
//         } else if (token.startsWith("r-")) {
//           const value = token.slice(2);
//           if (value) styles.borderRadius = value + "px";
//         } else if (token.startsWith("color-")) {
//           const value = token.slice(6);
//           if (value) styles.color = value;
//         } else if (token.startsWith("hover-bg-")) {
//           const value = token.slice(9);
//           styles._hoverBackgroundColor = value;
//         } else if (token.startsWith("hover-text-")) {
//           const value = token.slice(11);
//           styles._hoverTextColor = value;
//         }
//       });

//       return styles;
//     }
//   }

//   class ButtonComponent extends CSSComponent {
//     constructor(config = {}) {
//       super();
//       this.defaultStyle = {
//         backgroundColor: "#E5F9FF",
//         padding: "10px 20px",
//         border: "none",
//         fontSize: "16px",
//         cursor: "pointer",
//         transition: "background-color 0.3s ease, color 0.3s ease",
//         outline: "none",
//         color: ""
//       };

//       this.defaultHoverStyle = {
//         backgroundColor: "#0056b3",
//         color: "white"
//       };
//     }

//     style(el) {
//       const styleAttr = el.dataset.style || el.className || "";
//       const parsed = this.parseShortcutStyle(styleAttr);
//       const {
//         _hoverBackgroundColor,
//         _hoverTextColor,
//         ...customStyle
//       } = parsed;

//       const finalStyle = {
//         ...this.defaultStyle,
//         ...customStyle
//       };

//       this.applyStyles(el, finalStyle);
      
//       // Modified: Better original color storage
//       el.dataset.originalBackgroundColor = finalStyle.backgroundColor || 
//                                         el.style.backgroundColor || 
//                                         this.defaultStyle.backgroundColor;
//       el.dataset.originalColor = finalStyle.color || 
//                                el.style.color || 
//                                this.defaultStyle.color;

//       const applyHoverBg = _hoverBackgroundColor !== "none";
//       const applyHoverColor = _hoverTextColor !== "none";

//       if (applyHoverBg || applyHoverColor) {
//         const hoverBg = _hoverBackgroundColor || this.defaultHoverStyle.backgroundColor;
//         const hoverColor = _hoverTextColor || this.defaultHoverStyle.color;

//         el.addEventListener("mouseenter", () => {
//           if (!el.classList.contains("active-btn")) {
//             const hoverStyles = {};
//             if (applyHoverBg) hoverStyles.backgroundColor = hoverBg;
//             if (applyHoverColor) hoverStyles.color = hoverColor || el.dataset.originalColor;
//             this.applyStyles(el, hoverStyles, true);
//           }
//         });

//         el.addEventListener("mouseleave", () => {
//           if (!el.classList.contains("active-btn")) {
//             const restoreStyles = {};
//             if (applyHoverBg) restoreStyles.backgroundColor = el.dataset.originalBackgroundColor;
//             if (applyHoverColor) restoreStyles.color = el.dataset.originalColor;
//             this.applyStyles(el, restoreStyles, true);
//           }
//         });
//       }
//     }

//     setCustomButton(selector, styles) {
//       document.querySelectorAll(selector).forEach(el => {
//         const newEl = el.cloneNode(true);
//         el.parentNode.replaceChild(newEl, el);
//         el = newEl;

//         const baseStyles = { ...styles };
//         delete baseStyles.hoverBackgroundColor;
//         delete baseStyles.hoverColor;
        
//         this.applyStyles(el, { ...this.defaultStyle, ...baseStyles }, true);

//         // Modified: Better original color storage
//         el.dataset.originalBackgroundColor = styles.backgroundColor || 
//                                            el.style.backgroundColor || 
//                                            this.defaultStyle.backgroundColor;
//         el.dataset.originalColor = styles.color || 
//                                  el.style.color || 
//                                  this.defaultStyle.color;

//         const disableHover = styles.hoverBackgroundColor === "none" ||
//                            styles.hoverColor === "none";

//         if (!disableHover) {
//           const hoverBg = styles.hoverBackgroundColor || this.defaultHoverStyle.backgroundColor;
//           const hoverColor = styles.hoverColor || this.defaultHoverStyle.color;

//           el.addEventListener("mouseenter", () => {
//             if (!el.classList.contains("active-btn")) {
//               this.applyStyles(el, {
//                 backgroundColor: hoverBg,
//                 color: hoverColor || el.dataset.originalColor
//               }, true);
//             }
//           });

//           el.addEventListener("mouseleave", () => {
//             if (!el.classList.contains("active-btn")) {
//               this.applyStyles(el, {
//                 backgroundColor: el.dataset.originalBackgroundColor,
//                 color: el.dataset.originalColor
//               }, true);
//             }
//           });
//         }
//       });
//     }
//   }

//   const initButtonSystem = function () {
//     const buttonComponent = new ButtonComponent();

//     window.ButtonLib = {
//       component: buttonComponent,

//       init: function () {
//         document.querySelectorAll("[data-component='button']").forEach(el => {
//           if (!el.dataset.style && !el.classList.contains('my-btn')) {
//             this.component.style(el);
//           }
//         });
//       },

//       setCustomButton: function (selector, styles) {
//         document.querySelectorAll(selector).forEach(el => {
//           const inlineParsed = this.component.parseShortcutStyle(el.dataset.style || el.className || "");
//           const {
//             _hoverBackgroundColor: inlineHoverBg,
//             _hoverTextColor: inlineHoverColor,
//             ...inlineBase
//           } = inlineParsed;

//           const {
//             hoverBackgroundColor: scriptHoverBg,
//             hoverColor: scriptHoverColor,
//             ...scriptBase
//           } = styles;

//           const mergedBase = {
//             ...this.component.defaultStyle,
//             ...inlineBase,
//             ...scriptBase
//           };

//           this.component.applyStyles(el, mergedBase, true);

//           // Modified: Better original color storage
//           el.dataset.originalBackgroundColor = mergedBase.backgroundColor || 
//                                             this.component.defaultStyle.backgroundColor;
//           el.dataset.originalColor = mergedBase.color || 
//                                    this.component.defaultStyle.color;

//           const hoverBg = scriptHoverBg ?? inlineHoverBg ?? this.component.defaultHoverStyle.backgroundColor;
//           const hoverColor = scriptHoverColor ?? inlineHoverColor ?? this.component.defaultHoverStyle.color;

//           const disableHover = hoverBg === "none" && hoverColor === "none";

//           if (!disableHover) {
//             el.addEventListener("mouseenter", () => {
//               if (!el.classList.contains("active-btn")) {
//                 const hoverStyles = {};
//                 if (hoverBg !== "none") hoverStyles.backgroundColor = hoverBg;
//                 if (hoverColor !== "none") hoverStyles.color = hoverColor || el.dataset.originalColor;
//                 this.component.applyStyles(el, hoverStyles, true);
//               }
//             });

//             el.addEventListener("mouseleave", () => {
//               if (!el.classList.contains("active-btn")) {
//                 const restoreStyles = {};
//                 if (hoverBg !== "none") restoreStyles.backgroundColor = el.dataset.originalBackgroundColor;
//                 if (hoverColor !== "none") restoreStyles.color = el.dataset.originalColor;
//                 this.component.applyStyles(el, restoreStyles, true);
//               }
//             });
//           }
//         });
//       }
//     };

//     window.activeStyles = {};
//     window.setCustomActiveButton = function (styles) {
//       window.activeStyles = styles;
//     };

//     if (document.readyState === "loading") {
//       document.addEventListener("DOMContentLoaded", () => {
//         ButtonLib.init();
//       });
//     } else {
//       ButtonLib.init();
//     }
//   };

//   initButtonSystem();
// })();