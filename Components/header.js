const header = document.querySelector('.header-transparent');

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
        document.body.style.overflowX = "hidden";
        document.documentElement.style.overflowX = "hidden";
        
        const swiperContainers = document.querySelectorAll('.swiper');
        swiperContainers.forEach(swiper => {
            swiper.style.width = '100%';
            swiper.style.overflow = 'hidden';
        });
        
        const swiperSlides = document.querySelectorAll('.swiper-slide');
        swiperSlides.forEach(slide => {
            slide.style.maxWidth = '100%';
            slide.style.boxSizing = 'border-box';
        });
    }
});


// const mobileNav = document.querySelector('.mobile-nav');
// if (mobileNav) {
//     mobileNav.classList.add('show-nav');
// }

// const mobileNav = document.querySelector('.mobile-nav');

// // Set initial hidden state for mobile-nav
// if (mobileNav) {
//     mobileNav.style.position = 'fixed';
//     mobileNav.style.top = '0';
//     mobileNav.style.right = '-100%'; // Initially hidden
//     mobileNav.style.transition = 'right 0.3s ease';
//     mobileNav.style.width = '300px';
//     mobileNav.style.height = '100%';
//     mobileNav.style.backgroundColor = '#152136';
// }

// // Function to toggle mobile-nav visibility
// const toggleButton = document.querySelector('.menu-toggle'); // The button that toggles the mobile nav
// if (toggleButton) {
//     toggleButton.addEventListener('click', () => {
//         // Only toggle for mobile size (768px or less)
//         if (window.innerWidth <= 768) {
//             if (mobileNav.style.right === '0px') {
//                 mobileNav.style.right = '-100%'; // Slide out the mobile nav
//             } else {
//                 mobileNav.style.right = '0'; // Slide in the mobile nav
//             }
//         }
//     });
// }

// // Optional: Close the menu when close button is clicked
// const closeBtn = document.querySelector('.close-nav'); // Close button inside the mobile nav
// if (closeBtn) {
//     closeBtn.addEventListener('click', () => {
//         mobileNav.style.right = '-100%'; // Slide out the mobile nav when close button is clicked
//     });
// }


header.style.position = "absolute";
header.style.left = "0";
header.style.right = "0";
header.style.top = "0";
header.style.zIndex = "99";
header.style.backgroundColor = "rgba(255, 255, 255, 0)";

function applyMediaQueryStyles() {
    const headerTop = document.querySelector('.header-top');
    
    // Check if the screen width is between 768px and 991px
    if (window.innerWidth >= 768 && window.innerWidth <= 991) {
        headerTop.style.marginTop = "10px";  // Apply the style
    } else {
        headerTop.style.marginTop = "";  // Reset the style if it's not within the range
    }
}

// Function to apply styles based on screen size
function applyResponsiveStyles() {
    const container = document.querySelector('.container');
    const container3 = document.querySelector('.container-3');

    if (window.matchMedia('(max-width: 1700px)').matches) {
        if (container3) container3.style.maxWidth = '95%';
    }

    if (window.matchMedia('(min-width: 1200px) and (max-width: 1600px)').matches) {
        if (container3) container3.style.maxWidth = '95%';
        if (container) container.style.maxWidth = '95%';
    }

    // Default styles
    if (container3 && !window.matchMedia('(max-width: 1700px)').matches) {
        container3.style.maxWidth = '1400px';
    }

    if (container && !window.matchMedia('(min-width: 1200px) and (max-width: 1600px)').matches) {
        container.style.maxWidth = '1430px';
    }
}

document.body.style.overflowX = 'hidden';


// Apply styles initially and on resize
applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);

// Static styles applied with JavaScript
document.querySelectorAll('.header__left-4').forEach(el => el.style.height = '100%');
document.querySelectorAll('ul').forEach(el => {
    el.style.margin = '0px';
    el.style.padding = '0px';
});
document.querySelectorAll('li').forEach(el => el.style.listStyle = 'none');
document.querySelectorAll('a').forEach(el => {
    el.style.textDecoration = 'none';
    // el.style.color = '#005538';
    el.style.color = '#fff';
    // el.style.color = '#000';
    el.style.outline = 'none';
    el.style.transition = 'all 0.3s ease-out 0s';
});
document.querySelectorAll('button').forEach(el => {
    // el.style.color = '#005538';
    el.style.color = '#000';
    el.style.outline = 'none';
    el.style.transition = 'all 0.3s ease-out 0s';
});

document.querySelectorAll('.show-nav').forEach(el => {
    el.style.right = '0';
});

function applyHeaderStyles() {
    const headerWrapper = document.querySelector('.header-wrapper');
    const headerWrapper3 = document.querySelector('.header-wrapper__3');
    const headerWrapper4 = document.querySelector('.header-wrapper__4');
    const innerPage = document.querySelector('.inner-page');
    const headerInner = document.querySelector('.header-wrapper__inner');
    const logoImg = document.querySelector('.logo img');
    const headerMenuWrapper = document.querySelector('.header-menu-wrapper');
    const fLefts = document.querySelectorAll('.f-left');
    const headerNav = document.querySelector('.header-nav');
    const headerNav3 = document.querySelector('.header-nav__3');

    // Basic styles
    if (headerWrapper) {
        // headerWrapper.style.backgroundColor = '#ffffff';
        headerWrapper.style.padding = '0 30px';
        headerWrapper.style.boxShadow = '0px 30px 100px 0px rgba(0, 0, 0, 0.2)';
    }

    if (headerWrapper3) {
        headerWrapper3.style.borderRadius = '0';
        headerWrapper3.style.boxShadow = 'none';
    }

    if (headerWrapper4) {
        headerWrapper4.style.borderRadius = '10px';
    }

    if (innerPage) {
        // innerPage.style.backgroundColor = 'rgba(173, 216, 230, 0.6)';
        innerPage.style.borderRadius = '10px';
        innerPage.style.padding = '5px';
        innerPage.style.color = '#000';
    }

    if (headerInner) {
        headerInner.style.padding = '0 15px';
    }

    if (logoImg) {
        logoImg.style.width = '155px';
    }

    if (headerMenuWrapper) {
        headerMenuWrapper.style.float = 'left';
    }

    fLefts.forEach(el => el.style.float = 'left');

    // Media query for max-width: 1700px
    if (window.matchMedia('(max-width: 1700px)').matches) {
        if (headerWrapper) {
            headerWrapper.style.padding = '0 34px';
        }
        if (headerNav) {
            headerNav.style.paddingLeft = '0';
        }
    }

    // Header nav list items
    document.querySelectorAll('.header-nav ul li').forEach(li => {
        li.style.display = 'inline-block';
        li.style.position = 'relative';
    });

    // Header nav__3 spacing
    document.querySelectorAll('.header-nav__3 ul li').forEach(li => {
        li.style.marginRight = '90px';
    });

    // Header nav link styling
    document.querySelectorAll('.header-nav ul li a').forEach(a => {
        // a.style.color = '#000000';
        a.style.color = '#ffffff';
        a.style.fontSize = '14px';
        a.style.lineHeight = '1';
        a.style.fontWeight = '700';
        a.style.display = 'inline-block';
        a.style.padding = '45px 0';
        a.style.paddingLeft = '50px';
    });

    // Override for header-nav__3 link padding
    document.querySelectorAll('.header-nav__3 ul li a').forEach(a => {
        a.style.padding = '32px 0px';
    });
}

// Apply styles initially and on resize
applyHeaderStyles();
window.addEventListener('resize', applyHeaderStyles);


function applyBreadcrumbStyles() {
    // Breadcrumb & Layout Styles
    document.querySelectorAll('.breadcrumb__height').forEach(el => el.style.minHeight = '500px');

    document.querySelectorAll('.breadcrumb-area').forEach(el => {
        el.style.zIndex = '1';
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center center';
        el.style.backgroundRepeat = 'no-repeat';
        el.style.height = '100vh';
        el.style.width = '100%';
    });

    document.querySelectorAll('.breadcrumb__text').forEach(el => {
        el.style.position = 'relative';
        el.style.zIndex = '99';
    });

    // Clearfix
    // document.querySelectorAll('.row').forEach(el => {
    //     el.style.display = 'table';
    // });

    // Responsive menu toggle
    document.querySelectorAll('.responsive-menu-3').forEach(el => el.style.padding = '30px 0');

    document.querySelectorAll('.responsive-menu-3 button.toggle-btn').forEach(btn => {
        // btn.style.color = '#005538';
        btn.style.color = '#000';
        btn.style.width = '40px';
        btn.style.height = '40px';
        btn.style.display = 'inline-block';
        btn.style.border = '0';
        btn.style.fontSize = '23px';
    });

    document.querySelectorAll('.mobile-toggle-bar button').forEach(btn => {
        btn.style.background = 'transparent';
        // btn.style.color = '#fff';
        // btn.style.border = '1px solid #fff';
        btn.style.width = '40px';
        btn.style.height = '40px';
        btn.style.zIndex = '9';
        btn.style.lineHeight = '35px';
        btn.style.padding = '0';
        btn.style.display = 'inline-block';
        btn.style.fontSize = '22px';
        btn.style.fontWeight = '600';
    });

    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.style.background = 'transparent';
        // btn.style.color = '#fff';
        // btn.style.border = '1px solid #fff';
        btn.style.width = '40px';
        btn.style.height = '40px';
        btn.style.zIndex = '9';
        btn.style.lineHeight = '35px';
        btn.style.padding = '0';
        btn.style.display = 'inline-block';
        btn.style.fontSize = '22px';
        btn.style.fontWeight = '600';
    });

    // Mobile Nav Styles
    document.querySelectorAll('.mobile-nav').forEach(nav => {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.background = '#152136';
        nav.style.right = '-100%';
        nav.style.transition = 'all 0.5s';
        nav.style.width = '300px';
        nav.style.zIndex = '999';
        nav.style.height = '100%';
        nav.style.paddingTop = '0';
        nav.style.overflowY = 'auto';
    });

    document.querySelectorAll('button.mobile-nav-close').forEach(btn => {
        btn.style.padding = '0';
        btn.style.position = 'absolute';
        btn.style.right = '10px';
        btn.style.top = '-7px';
        btn.style.fontSize = '15px';
        btn.style.backgroundColor = 'transparent';
        btn.style.lineHeight = '50px';
        btn.style.border = '0';
        btn.style.borderRadius = '50%';
    });

    document.querySelectorAll('.mobile-nav .nav a.nav-link.active').forEach(a => {
        a.style.backgroundColor = '#111';
    });

    document.querySelectorAll('.mobile-nav .nav a.nav-link').forEach(a => {
        a.style.width = '50%';
        a.style.color = '#fff';
        a.style.textTransform = 'uppercase';
        a.style.textAlign = 'center';
        a.style.fontSize = '15px';
        a.style.fontWeight = '600';
        a.style.letterSpacing = '0.8px';
        a.style.lineHeight = '1';
        a.style.padding = '10px 0';
    });

    // Mean Menu
    document.querySelectorAll('.mean-container .mean-nav').forEach(nav => {
        nav.style.backgroundColor = 'transparent';
    });

    document.querySelectorAll('.mean-nav>ul').forEach(ul => {
        ul.style.display = 'block';
    });

    document.querySelectorAll('.mean-container .mean-nav ul li a').forEach(a => {
        a.style.border = '0';
        a.style.color = '#fff';
    });

    // Show mobile nav class
    document.querySelectorAll('.show-nav').forEach(el => {
        el.style.right = '0px';
    });

    // Responsive Logo
    document.querySelectorAll('.responsive-logo img').forEach(img => {
        img.style.width = '140px';
    });




    // Breadcrumb title and inner text
    document.querySelectorAll('.breadcrumb__title').forEach(title => {
        title.style.color = 'white';
    });

    document.querySelectorAll('.breadcrumb__title > span > pre').forEach(pre => {
        // pre.style.marginLeft = '30px';
        pre.style.letterSpacing = '4px';
        pre.style.display = 'inline-block';
        pre.style.fontFamily = '"Inter", sans-serif';
        pre.style.fontOpticalSizing = 'auto';
        pre.style.fontWeight = '600';
        pre.style.fontStyle = 'normal';
        pre.style.fontSize = '30px';
        pre.style.whiteSpace = 'pre-line';
    });

    document.querySelectorAll('.breadcrumb__title p').forEach(p => {
        p.style.letterSpacing = '1.5px';
        p.style.display = 'inline-block';
        p.style.fontFamily = '"Inter", sans-serif';
        p.style.fontOpticalSizing = 'auto';
        p.style.fontWeight = '200';
        p.style.fontStyle = 'normal';
    });

    document.querySelectorAll('.breadcrumb-area.d-flex.align-items-center').forEach(el => {
        el.style.alignItems = 'flex-start';
    });

    document.querySelectorAll('.mt-50').forEach(el => {
        el.style.marginTop = '80px';
    });
}

// Apply styles on page load
applyBreadcrumbStyles();
window.addEventListener('resize', applyBreadcrumbStyles);


function applyResponsiveStyles() {
    // breadcrumb__text base style
    document.querySelectorAll('.breadcrumb__text').forEach(el => {
        el.style.position = 'relative';
        el.style.top = '0';
    });

    // Responsive adjustments
    if (window.matchMedia('(max-width: 991px)').matches) {
        document.querySelectorAll('.breadcrumb__text').forEach(el => {
            el.style.top = '-100px';
        });
    }

    if (window.matchMedia('(max-width: 768px)').matches) {
        document.querySelectorAll('.breadcrumb__text').forEach(el => {
            el.style.top = '-60px';
        });
    }

    // Overlay transparency
    document.querySelectorAll('[data-overlay]::before').forEach(el => {
        el.style.background = 'transparent'; // Note: ::before cannot be styled directly with JS
    });

    // #mobile-menu > ul font styling
    const mobileMenuUl = document.querySelector('#mobile-menu > ul');
    if (mobileMenuUl) {
        mobileMenuUl.style.fontFamily = '"Inter", sans-serif';
        mobileMenuUl.style.fontOpticalSizing = 'auto';
        mobileMenuUl.style.fontWeight = '400';
        mobileMenuUl.style.fontStyle = 'normal';
        mobileMenuUl.style.color = 'rgba(0, 0, 0, 0.898)';
        mobileMenuUl.style.fontSize = '40px';
    }

    // header-left flex styling
    document.querySelectorAll('.header-left').forEach(el => {
        el.style.justifyContent = 'space-around';
        el.style.width = '100%';
    });
}

// Apply on load and on resize
applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);

document.querySelectorAll('.logo img').forEach(img => {
    img.style.width = '155px';
});



// Run the function when the page loads
window.onload = applyMediaQueryStyles;

// Also, run the function when the window is resized
window.onresize = applyMediaQueryStyles;





/* */
// Apply styles for .header-top__inner-4
document.querySelector('.header-top__inner-4').style.backgroundColor = 'transparent';

// Apply styles for .header__left-4
document.querySelector('.header__left-4').style.height = '100%';

// Apply styles for .header__left-4 .emergency
const emergency = document.querySelector('.header__left-4 .emergency');
emergency.style.height = '50px';
emergency.style.display = 'flex';
emergency.style.justifyContent = 'center';
// emergency.style.backgroundColor = '#fff';

// Apply styles for .header__left-4 .emergency span
const emergencySpan = document.querySelector('.header__left-4 .emergency span');
emergencySpan.style.lineHeight = '1';
emergencySpan.style.color = '#fff';
// emergencySpan.style.backgroundColor = '#005538';
emergencySpan.style.display = 'inline-block';
emergencySpan.style.padding = '8px 15px';
emergencySpan.style.height = 'fit-content';
emergencySpan.style.borderBottomLeftRadius = '7px';
emergencySpan.style.maxHeight = '31px';
emergencySpan.style.borderBottomRightRadius = '7px';

// Apply styles for .header__list-4
document.querySelector('.header__list-4').style.paddingLeft = '40px';

// Apply styles for .header__list ul li
const listItems = document.querySelectorAll('.header__list ul li');
listItems.forEach((li) => {
    li.style.display = 'inline-block';
});

// Apply styles for .header__list ul li a
const listLinks = document.querySelectorAll('.header__list ul li a');
listLinks.forEach((a) => {
    a.style.fontSize = '14px';
    a.style.fontWeight = '700';
    a.style.color = '#fff';
    a.style.display = 'inline-block';
    a.style.marginRight = '27px';
});

// Apply styles for .header__list ul li i
const listIcons = document.querySelectorAll('.header__list ul li i');
listIcons.forEach((i) => {
    i.style.fontSize = '15px';
    // i.style.color = '#005538';
    // i.style.color = '#000';
    i.style.color = '#fff';
    i.style.display = 'inline-block';
    i.style.width = '40px';
    i.style.height = '40px';
    // i.style.backgroundColor = '#fff';
    i.style.textAlign = 'center';
    i.style.lineHeight = '40px';
    i.style.borderRadius = '50%';
    // i.style.marginRight = '17px';
});

// Apply styles for .header-social__4 a
const socialLinks = document.querySelectorAll('.header-social__4 a');
socialLinks.forEach((a) => {
    // a.style.color = '#fff';
    a.style.fontSize = '16px';
    a.style.paddingRight = '18px';
    a.style.display = 'inline-block';
    a.style.lineHeight = '1';
});


/*try*/
// const mobileMenu = document.querySelector(".mobile-nav"); // or ".responsive-menu-3"

// if (mobileMenu) {
//     if (window.innerWidth >= 768 && window.innerWidth <= 991) {
//         mobileMenu.style.marginTop = "10px";
//     } else {
//         mobileMenu.style.marginTop = "";
//     }
// }

// Function to handle mobile menu visibility based on window size
// function toggleMobileMenu() {
//     const mobileMenu = document.querySelector('.mobile-menu');
//     if (window.innerWidth <= 768) {
//         mobileMenu.style.display = 'block'; // Show mobile menu on mobile view
//     } else {
//         mobileMenu.style.display = 'none'; // Hide mobile menu on larger screens
//     }
// }

// // Run the function on page load and when the window is resized
// window.addEventListener('load', toggleMobileMenu);
// window.addEventListener('resize', toggleMobileMenu);

// // Get the swiper container element
// const swiperContainer = document.querySelector('.swiper-container');

// // Apply the CSS style using JavaScript
// swiperContainer.style.overflowX = 'hidden'; // Prevent horizontal overflow
