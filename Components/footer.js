function applyFooterStyles() {
    const styleElements = {
        footer: {
            // backgroundImage: 'url("Images/end3.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '1px',
            position: 'relative',
            zIndex: '1'
        },
        'ul': {
        listStyle: 'none'
        },
        '.footer__top': {
            paddingTop: '40px',
            paddingBottom: '10px',
            position: 'relative'
        },
        '.icon-footer img': {
            width: '250px'
        },
        '.social__icon a': {
            width: '50px',
            height: '50px',
            lineHeight: '50px',
            display: 'inline-block',
            textAlign: 'center',
            borderRadius: '10px',
            // color: '#fff',
            color: '#000',
            marginRight: '10px',
            border: '2px solid #217BB0'
        },
        '.footer h4': {
            fontSize: '20px',
            lineHeight: '1',
            marginBottom: '30px',
            marginTop: '30px',
            color: '#217BB0'
        },
        '.footer p': {
            color: '#999999'
        },
        '.footer__left p': {
            fontFamily: '"Roboto"',
            fontSize: '16px'
        },
        '.contact__list': {
            marginTop: '15px'
        },
        '.contact__list ul li': {
            marginBottom: '10px'
        },
        '.contact__list ul li i': {
            width: '40px',
            height: '40px',
            display: 'inline-block',
            lineHeight: '40px',
            textAlign: 'center',
            marginRight: '15px',
            color: '#2481b8'
        },
        '.fa-phone': {
            transform: 'rotate(92deg)'
        },
        '.contact__list ul li span': {
            fontSize: '14px',
            lineHeight: '30px',
            display: 'inline-block',
            color: 'gray'
        },
        '.medium-bold': {
            fontWeight: '300'
        },
        '.footer__list ul': {
            overflow: 'hidden'
        },
        // '.footer__list ul li': {
        //     float: 'left'
        // },
        '.footer__list ul li a': {
            color: '#999999',
            fontSize: '16px',
            marginBottom: '10px',
            lineHeight: '25px',
            display: 'block'
        },
        '.footer__right': {
            overflow: 'hidden'
        },
        '.news__sm--box': {
            overflow: 'hidden'
        },
        '.news__sm--text': {
            overflow: 'hidden',
            paddingLeft: '16px'
        },
        '.footer-overlay-glass': {
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            width: '100%',
            padding: '50px 20px',
            position: 'relative',
            zIndex: '2'
        },
        '.news__sm--text .add a': {
            color: '#999999'
        },
        '.text-white': {
            color: 'black'
        },
        '.image-change-size': {
            width: '150px',
            height: '80px'
        },
        '.contact__list li a': {
            color: '#000'
        },
        '.copyright-area i': {
            color: '#2481b8'
        },
        '.copyright-area': {
            justifyContent: 'end'
        }
    };

    // Apply all the above styles
    for (const [selector, styles] of Object.entries(styleElements)) {
        document.querySelectorAll(selector).forEach(el => {
            Object.assign(el.style, styles);
        });
    }

    // Add simulated ::after line to .footer__top (Ensure it's only added once)
    document.querySelectorAll('.footer__top').forEach(el => {
        // Check if the line already exists
        if (!el.querySelector('.footer-line')) {
            const line = document.createElement('div');
            line.classList.add('footer-line');  // Assign a class to track the div
            Object.assign(line.style, {
                position: 'absolute',
                left: '0',
                bottom: '0',
                width: '100%',
                zIndex: '99',
                height: '1px',
                // backgroundImage: 'url(../img/bg/line.png)'
            });
            el.appendChild(line);
        }
    });

    // Add vertical line to .footer__left (Ensure it's only added once)
    // document.querySelectorAll('.footer__left').forEach(el => {
    //     if (!el.querySelector('.footer-vertical-line')) {
    //         const verticalLine = document.createElement('div');
    //         verticalLine.classList.add('footer-vertical-line'); // Track the div with a class
    //         Object.assign(verticalLine.style, {
    //             position: 'absolute',
    //             top: '0',
    //             right: '-15px',
    //             width: '2px',
    //             height: '106%',
    //             backgroundColor: '#b5b0b0'
    //         });
    //         el.appendChild(verticalLine);
    //         el.style.position = 'relative';
    //     }
    // });




// Set position: relative to .footer__left
const footerLeft = document.querySelector('.footer__left');
if (footerLeft) {
  footerLeft.style.position = 'relative';
}

// Style the .vertical_line div
const verticalLine = document.querySelector('.vertical_line');
if (verticalLine) {
  verticalLine.style.position = 'absolute';
  verticalLine.style.top = '0';
  verticalLine.style.right = '-15px';
  verticalLine.style.width = '2px';
  verticalLine.style.height = '106%';
  verticalLine.style.backgroundColor = '#b5b0b0';
}






    // Add horizontal divider in .copyright-area (Ensure it's only added once)
    document.querySelectorAll('.copyright-area').forEach(el => {
        if (!el.querySelector('.copyright-line')) {
            const line = document.createElement('div');
            line.classList.add('copyright-line');
            Object.assign(line.style, {
                width: '95%',
                height: '2px',
                backgroundColor: '#b5b0b0',
                margin: '20px auto 0',
                display: 'block'
            });
            el.appendChild(line);
        }
    });

   
      
}

const footerElements = document.querySelectorAll('footer *');

    // Loop through each and set the text color to black
    footerElements.forEach(element => {
      element.style.color = 'black';
    });


//This is specific for the footer list which is lengthy
// const footerItems = document.querySelectorAll('.footer__list ul li');

// footerItems.forEach((li) => {
//     li.style.width = '50%';
//     li.style.float = 'left';
// });


// Run styles on load and on resize
document.addEventListener("DOMContentLoaded", applyFooterStyles);
window.addEventListener("resize", applyFooterStyles);

