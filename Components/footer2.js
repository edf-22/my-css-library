//complete working code

(function () {
  const defaultStyles = {
    '.footer-social a': {
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      display: 'inline-block',
      textAlign: 'center',
      background: '#212121',
      borderRadius: '10px',
      color: '#fff',
      marginRight: '10px'
    },
    '.footer-bottom': {
      color: 'white'
    },
    '.footer-bottom a': {
      textDecoration: 'none',
      color: '#999999'
    },
    '.footer-bottom ul': {
      listStyle: 'none',
      padding: '0'
    },
    '.container': {
      maxWidth: '1430px'
    },
    '.footer-bottom ul li a': {
      marginBottom: '10px',
      lineHeight: '25px',
      display: 'block'
    },
    '.footer-list li': {
      width: '50%',
      float: 'left'
    },
    '.footer-list ul': {
      margin: '0'
    },
    '.footer-bottom h4': {
      marginBottom: '30px'
    },
    '.contact-list ul li i': {
      width: '40px',
      height: '40px',
      display: 'inline-block',
      borderRadius: '50%',
      lineHeight: '40px',
      textAlign: 'center',
      border: '1px solid #414141',
      marginRight: '15px',
      color: '#fff'
    },
    '.contact-list ul li': {
      marginBottom: '10px'
    },
    '.footer-bottom p': {
      color: '#999999'
    },
    '.copyright-area': {
      borderTop: '1px solid #7c7c7c',
      color: '#999999',
      padding: '10px 0'
    },
    '.copyright-area p': {
      marginBottom: '0',
      margin: '0 50px'
    },
    '.footer-overlay': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '0',
      background: 'rgba(0,0,0,0.5)',
      pointerEvents: 'none'
    },
    '.footer-banner': {
        minHeight: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        zIndex: '0',
        position: 'relative'
    },
  };

  function applyStyles(scopeSelector, styles) {
    for (const subSelector in styles) {
      let fullSelector = subSelector;
      if (scopeSelector && !subSelector.startsWith(scopeSelector)) {
        fullSelector = `${scopeSelector} ${subSelector}`;
      }
      const elements = document.querySelectorAll(fullSelector);
      elements.forEach(el => {
        Object.entries(styles[subSelector]).forEach(([prop, val]) => {
          el.style[prop] = val;
        });
      });
    }
  }

  function mergeStyles(defaults, overrides) {
    const merged = { ...defaults };
    for (const key in overrides) {
      if (merged[key]) {
        merged[key] = { ...merged[key], ...overrides[key] };
      } else {
        merged[key] = overrides[key];
      }
    }
    return merged;
  }

  const styleQueue = [];

  function handleQueuedStyles() {
    styleQueue.forEach(({ selector, styles }) => {
      const merged = mergeStyles(defaultStyles, styles);
      applyStyles(selector, merged);
    });
    styleQueue.length = 0;
  }

   // Robust overlay injection that works in all cases
  function injectOverlay() {
    const processFooter = (footer) => {
      if (!footer || footer.dataset.overlayApplied) return;
      
      footer.dataset.overlayApplied = 'true';
      
      // Create container if not exists
      let container = footer.querySelector('.footer-overlay-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'footer-overlay-container';
        container.style.cssText = `
          position: relative;
          width: 100%;
          height: 100%;
        `;
        
        // Move all children into container
        while (footer.firstChild) {
          container.appendChild(footer.firstChild);
        }
        footer.appendChild(container);
      }

      // Create or update overlay
      let overlay = container.querySelector('.footer-overlay-bg');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'footer-overlay-bg';
        container.prepend(overlay);
      }

      // Apply styles
      const attrs = (footer.getAttribute('FooterOverlay') || '').split(' ');
      const bgClass = attrs.find(attr => attr.startsWith('bg-'));
      
      overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        ${bgClass ? '' : 'background: rgba(0,0,0,0.5);'}
      `;
      
      if (bgClass) {
        overlay.className = `footer-overlay-bg ${bgClass}`;
        overlay.style.opacity = '0.5';
      }
    };

    // Process all footers
    document.querySelectorAll('footer[FooterOverlay]').forEach(processFooter);
    return true;
  }

  // Initialization with multiple fallbacks
  function init() {
    try {
      applyStyles(null, defaultStyles);
      
      // First attempt
      let success = injectOverlay();
      
      // Second attempt if needed
      if (!success) {
        setTimeout(() => {
          injectOverlay();
        }, 100);
      }
      
      // Final backup
      window.addEventListener('load', () => {
        if (!document.querySelector('footer[FooterOverlay] .footer-overlay-bg')) {
          injectOverlay();
        }
      });

      // Mutation observer for dynamic content
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.addedNodes) {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === 1) {
                if (node.matches('footer[FooterOverlay]')) {
                  injectOverlay();
                } else if (node.querySelector) {
                  const footer = node.querySelector('footer[FooterOverlay]');
                  if (footer) injectOverlay();
                }
              }
            });
          }
        });
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
    } catch (e) {
      console.error('Footer overlay error:', e);
    }
  }

  // Start initialization
  if (document.readyState === 'complete') {
    setTimeout(init, 0);
  } else {
    document.addEventListener('DOMContentLoaded', init);
    // Safety net
    setTimeout(init, 1000);
  }
  


  // Safe version of setCustomFooter
  window.setCustomFooter = function(scopeSelector, userStyles = {}) {
    try {
      const merged = mergeStyles(defaultStyles, userStyles);
      applyStyles(scopeSelector, merged);
    } catch (e) {
      console.error('setCustomFooter error:', e);
      // Queue styles if DOM isn't ready
      if (!window.styleQueue) window.styleQueue = [];
      window.styleQueue.push({ selector: scopeSelector, styles: userStyles });
    }
  };
})();