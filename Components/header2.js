//completely working code

const defaultStyles = {
    '.header-top ul': {
        display: 'flex',
        listStyle: 'none',
        gap: '40px',
        margin: '0',
        padding: '4px',
        paddingLeft: '25px'
    },
    '.header-top .header-social': {
        display: 'flex',
        gap: '20px',
        marginRight: '10px'
    },
    '.header-top ul li a i': {
        color: '#217BB0',
        width: '40px',
        background: '#fff',
        textAlign: 'center',
        lineHeight: '40px',
        borderRadius: '50%',
        marginRight: '17px'
    },
    '.header-top ul li a': {
        color: 'white',
        textDecoration: 'none',
        fontWeight: '700'
    },
    '.header-social a i': {
        color: 'white',
        fontWeight: '700',
        fontSize: '18px'
    },
    '.header-top .header-left span': {
        alignSelf: 'start',
        padding: '8px 20px',
        background: '#005538',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        lineHeight: '1',
        color: 'white',
        fontSize: '14px'
    },
    '.custom-container': {
        maxWidth: '1430px',
        position: 'absolute'
    },
    '.header-left': {
        height: '100%',
        justifyContent: 'center',
        display: 'flex',
        background: 'white'
    },
    '.sections': {
        display: 'flex'
    },
    '.sections ul': {
        display: 'flex',
        listStyle: 'none',
        gap: '30px',
        alignItems: 'center',
        fontSize: '15px',
        marginBottom: '0',
        paddingLeft: '0'
    },
    '.header-bottom': {
        padding: '8px 25px',
        background: 'white',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px'
    },
    '.sections ul li a': {
        color: 'black',
        textDecoration: 'none'
    },
    '.sections ul li': {
        fontWeight: '500'
    },
    '.header-banner': {
        minHeight: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        zIndex: '0',
        position: 'relative'
    },
    '.appointmentBtn': {
        backgroundColor: '#005538',
        borderRadius: '10px',
        border: '2px solid transparent',
        padding: '10px 30px',
        color: 'white',
        textDecoration: 'none',
        fontSize: '17px',
        fontWeight: '700'
    },
    '.appointmentBtn:hover': {
        backgroundColor: 'white',
        color: '#005538',
        border: '2px solid #005538'
    },
    '.responsive-menu': {
        backgroundColor: 'white',
        padding: '10px'
    },
    '.responsive-menu-tab': {
        position: 'absolute',
        width: '100%'
    },
    '.responsive-banner': {
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    '.toggle-btn': {
        background: '#fff7ef',
        color: '#005538',
        width: '40px',
        border: '0',
        fontSize: '23px',
        outline: 'none'
    },
    '.mobile-nav': {
        position: 'fixed',
        background: '#152136',
        right: '-100%',
        transition: 'all 0.5s',
        width: '300px',
        height: '100%',
        overflowY: 'auto'
    },
    '.show-nav': {
        right: '0px'
    },
    'button.mobile-nav-close': {
        padding: '0',
        position: 'absolute',
        right: '10px',
        top: '-7px',
        fontSize: '15px',
        backgroundColor: 'transparent',
        lineHeight: '50px',
        border: '0'
    },
    '.nav-menu': {
        backgroundColor: '#111',
        width: '50%',
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: '15px',
        fontWeight: '600',
        letterSpacing: '0.8px',
        lineHeight: '1',
        padding: '10px 0'
    },
    '.responsive-logo': {
        padding: '30px 20px'
    },
    '.mobile-menu': {
        backgroundColor: 'transparent'
    },
    '.mobile-menu ul': {
        padding: '0',
        margin: '0',
        width: '100%',
        listStyleType: 'none'
    },
    '.mobile-menu ul li a': {
        borderTop: '1px solid rgba(255, 255, 255, 0.5)',
        color: '#fff',
        float: 'left',
        padding: '10px 5%',
        textDecoration: 'none',
        textTransform: 'uppercase',
        width: '90%',
        fontSize: '12px'
    },
    '.sticky': {
        backgroundColor: '#f0f0f0',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
        margin: '0 !important'
    },
    '.header-wrapper': {
        position: 'relative',
        zIndex: '2'
    }
};

function toKebab(str) {
    return str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
}

// ✅ Enhanced: reusable labeled style injector
function injectLabeledStyles(styles, componentName) {
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-component", componentName);
    let css = `/* Injected by ${componentName}.js */\n`;
    for (let selector in styles) {
        css += `${selector} {\n`;
        for (let prop in styles[selector]) {
            css += `  ${toKebab(prop)}: ${styles[selector][prop]};\n`;
        }
        css += '}\n';
    }
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
}

// ✅ Inject default styles with label
injectLabeledStyles(defaultStyles, "header");

// ✅ Inject sticky styles separately with label
function injectStickyStyles() {
    const style = document.createElement('style');
    style.setAttribute('data-component', 'header-sticky');
    style.textContent = `
        /* Sticky styles injected by header.js */
        .sticky {
            background-color: #f0f0f0 !important;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2) !important;
            margin: 0 !important;
        }
    `;
    document.head.appendChild(style);
}
injectStickyStyles();

// 🧠 User style updater (unchanged)
function applyUserStyles() {
    const socialColor = document.getElementById("socialIconColor").value;
    const headerBg = document.getElementById("headerBg").value;

    const userStyles = {
        '.header-top ul li a i': {
            color: socialColor
        },
        '.header-top': {
            backgroundColor: headerBg
        }
    };

    applyInlineStyles(userStyles);
}

// 🧠 Inline style applier (unchanged)
function applyInlineStyles(styleMap) {
    for (const selector in styleMap) {
        const elements = document.querySelectorAll(selector);
        const styles = styleMap[selector];
        elements.forEach(el => {
            for (const prop in styles) {
                el.style[prop] = styles[prop];
            }
        });
    }
}

// 🧠 Scoped user styles via selector remapping (unchanged)
function setCustomHeaderStyles(baseSelector, styleMap) {
    const finalStyles = {};
    for (const childSelector in styleMap) {
        let fullSelector = '';
        if (childSelector.startsWith('.') || childSelector.startsWith('#')) {
            fullSelector = childSelector;
        } else if (childSelector.includes('&')) {
            fullSelector = childSelector.replace(/&/g, baseSelector);
        } else {
            fullSelector = `${baseSelector} ${childSelector}`.trim();
        }
        finalStyles[fullSelector] = styleMap[childSelector];
    }
    applyInlineStyles(finalStyles);
}

// 🧠 Sticky header activation (unchanged)
function enableStickyHeader(selector) {
    const header = document.querySelector(selector);
    if (!header) {
        console.warn(`Sticky header: Element "${selector}" not found`);
        return;
    }

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0';
            header.style.width = '100%';
        } else {
            header.classList.remove('sticky');
            header.style.position = 'sticky';
            header.style.top = '0';
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

// 🧠 On DOM load: handle sticky and overlay (unchanged)
document.addEventListener('DOMContentLoaded', () => {
    const stickyElements = document.querySelectorAll('[sticky="true"]');
    stickyElements.forEach(el => {
        const selector = '.' + el.classList[0];
        enableStickyHeader(selector);
    });

    const banner = document.querySelector('.header-banner');
    if (banner) {
        const attr = banner.getAttribute('HeaderOverlay');
        if (attr) {
            const [flag, colorPart] = attr.split(' ');
            let finalColor = 'rgba(0, 0, 0, 0.5)';
            if (colorPart?.startsWith('bg-')) {
                let raw = colorPart.replace('bg-', '').replace(/_/g, ' ');
                if (!raw.includes('rgba')) {
                    finalColor = convertToRGBA(raw, 0.5);
                } else {
                    finalColor = raw;
                }
            }
            toggleHeaderOverlay({ enable: flag === 'true', color: finalColor });
        }
    }
});

// 🧠 Overlay logic (unchanged)
function toggleHeaderOverlay({ enable = true, color = 'rgba(0, 0, 0, 0.5)' } = {}) {
    const banner = document.querySelector('.header-banner');
    if (!banner) return;

    const existing = banner.querySelector('.header-overlay');
    if (existing) existing.remove();

    if (enable) {
        const overlay = document.createElement('div');
        overlay.className = 'header-overlay';
        Object.assign(overlay.style, {
            position: 'absolute',
            inset: '0',
            background: color,
            zIndex: '1',
            pointerEvents: 'none'
        });
        banner.style.position = 'relative';
        banner.appendChild(overlay);
    }
}

// 🧠 Convert any color to rgba (unchanged)
function convertToRGBA(color, opacity = 0.5) {
    const fakeDiv = document.createElement('div');
    fakeDiv.style.color = color;
    document.body.appendChild(fakeDiv);
    const computed = getComputedStyle(fakeDiv).color;
    document.body.removeChild(fakeDiv);

    const rgb = computed.match(/\d+/g);
    if (rgb) {
        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
    }
    return `rgba(0, 0, 0, ${opacity})`; // fallback
}
