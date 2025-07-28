//try - done! working
// (function () {
//     class FormComponent {
//         constructor() {
//             this.defaultWrapperStyles = {
//                 boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)',
//                 borderRadius: '10px',
//                 padding: '20px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '20px',
//                 maxWidth: '600px',
//                 margin: 'auto',
//             };

//             this.defaultRowStyles = {
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '15px',
//             };

//             this.labelStyles = {
//                 width: '155px',
//                 textAlign: 'left',
//             };

//             this.inputStyles = {
//                 flex: 1,
//                 padding: '10px',
//                 border: '1px solid #ccc',
//                 borderRadius: '5px',
//             };

//             this.inputFocusStyles = {
//                 outline: 'none',
//                 borderColor: '#4A90E2',
//                 boxShadow: '0 0 5px rgba(74, 144, 226, 0.5)',
//             };

//             this.buttonStyles = {
//                 marginTop: '20px',
//             };

//             this.h2Styles = {
//                 width: '100%',
//                 textAlign: 'center',
//                 marginBottom: '20px'
//             };

//             const style = document.createElement('style');
//             style.textContent = `.form-wrapper h2 { display: inline; }`;
//             document.head.appendChild(style);
//         }

//         setupClearButtons() {
//             const clearButtons = document.querySelectorAll('.clear-btn');
//             clearButtons.forEach(button => {
//                 button.addEventListener('click', (e) => {
//                     e.preventDefault();
//                     const form = button.closest('form') || button.closest('.form-wrapper');
//                     if (!form) return;

//                     form.querySelectorAll('input, textarea, select').forEach(el => {
//                         if (el.type === 'checkbox' || el.type === 'radio') {
//                             el.checked = false;
//                         } else {
//                             el.value = '';
//                         }
//                         if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
//                             el.style.boxShadow = 'none';
//                             el.style.borderColor = '#ccc';
//                         }
//                     });
//                 });
//             });
//         }

//         // hasCustomClasses(el) {
//         //     const customPrefixes = [
//         //         'gap-', 'padding-', 'shadow-',
//         //         'borderRadius-', 'maxWidth-', 'margin-',
//         //         'bg-', 'color-', 'fontSize-',
//         //         'align-', 'textAlign-', 'marginBottom-'
//         //     ];
//         //     return customPrefixes.some(prefix =>
//         //         [...el.classList].some(c => c.startsWith(prefix))
//         //     );
//         // }

//         applyStyles(configOrElement, styles = null) {
//             if (typeof configOrElement === 'object' && !configOrElement.nodeType) {
//                 const forms = document.querySelectorAll('form');
//                 forms.forEach(form => {
//                     for (const key in configOrElement) {
//                         let elements;
//                         switch (key) {
//                             case 'form':
//                                 elements = [form];
//                                 break;
//                             case 'input':
//                                 elements = form.querySelectorAll('input[type="text"]');
//                                 break;
//                             case 'label':
//                                 elements = form.querySelectorAll('label');
//                                 break;
//                             case 'button':
//                                 elements = form.querySelectorAll('button');
//                                 break;
//                             case 'h2':
//                                 elements = form.parentElement.querySelectorAll('h2');
//                                 break;
//                             default:
//                                 elements = form.querySelectorAll(key);
//                         }

//                         elements.forEach(el => {
//                             for (const prop in configOrElement[key]) {
//                                 if (!el.style[prop]) {
//                                     el.style[prop] = configOrElement[key][prop];
//                                 }
//                             }
//                         });
//                     }
//                 });
//             } else if (configOrElement.nodeType) {
//                 for (const prop in styles) {
//                     if (!configOrElement.style[prop]) {
//                         configOrElement.style[prop] = styles[prop];
//                     }
//                 }
//             }
//         }

//         /**
//          * Helper: Adds 'px' if the value is numeric
//          */
//         ensureUnit(val) {
//             return (/^\d+$/.test(val)) ? val + 'px' : val;
//         }

//         /**
//          * Parse class-based styles dynamically
//          */
//         parseClassStyles(classList, el) {
//             if (!classList) return;

//             classList.forEach(cls => {
//                 // multi-value parser
//                 const getMultiValues = (prefix) => {
//                     return cls.replace(prefix, '').split('-').map(v => this.ensureUnit(v)).join(' ');
//                 };

//                 if (cls.startsWith('gap-')) {
//                     el.style.gap = this.ensureUnit(cls.replace('gap-', ''));
//                 }

//                 if (cls.startsWith('padding-')) {
//                     // supports padding-10 or padding-10-20-30-40
//                     el.style.padding = getMultiValues('padding-');
//                 }

//                 if (cls.startsWith('margin-') && !cls.startsWith('marginBottom-')) {
//                     el.style.margin = getMultiValues('margin-');
//                 }

//                 if (cls.startsWith('marginBottom-')) {
//                     el.style.marginBottom = this.ensureUnit(cls.replace('marginBottom-', ''));
//                 }

//                 if (cls.startsWith('borderRadius-')) {
//                     el.style.borderRadius = this.ensureUnit(cls.replace('borderRadius-', ''));
//                 }

//                 if (cls.startsWith('maxWidth-')) {
//                     el.style.maxWidth = this.ensureUnit(cls.replace('maxWidth-', ''));
//                 }

//                 if (cls.startsWith('bg-')) {
//                     el.style.backgroundColor = cls.replace('bg-', '');
//                 }

//                 if (cls.startsWith('color-')) {
//                     el.style.color = cls.replace('color-', '');
//                 }

//                 if (cls.startsWith('fontSize-')) {
//                     el.style.fontSize = this.ensureUnit(cls.replace('fontSize-', ''));
//                 }

//                 if (cls.startsWith('align-')) {
//                     el.style.alignItems = cls.replace('align-', '');
//                 }

//                 if (cls.startsWith('textAlign-')) {
//                     el.style.textAlign = cls.replace('textAlign-', '');
//                 }

//                 if (cls.startsWith('shadow-')) {
//                     const shadowValue = cls.substring(7);

//                     // Format: shadow-rgba-255-0-0-25 => rgba(255,0,0,0.25)
//                     if (shadowValue.startsWith('rgba-')) {
//                         const parts = shadowValue.split('-');
//                         if (parts.length >= 5) {
//                             const r = parts[1] || '0';
//                             const g = parts[2] || '0';
//                             const b = parts[3] || '0';
//                             let a = parts[4] || '1';
//                             if (a.startsWith('0') && a.length > 1) {
//                                 a = '0.' + a.substring(1);
//                             }
//                             el.style.boxShadow = `0 4px 8px 0 rgba(${r},${g},${b},${a})`;
//                         }
//                     }
//                     else if (shadowValue.startsWith('rgba(')) {
//                         el.style.boxShadow = `0 4px 8px 0 ${shadowValue}`;
//                     }
//                     else {
//                         // fallback for named colors or hex
//                         el.style.boxShadow = `0 4px 8px 0 ${shadowValue}`;
//                     }
//                 }
//             });
//         }

//         init() {
//             const elementsToStyle = document.querySelectorAll('.form-wrapper, .form-wrapper *');


//             // elementsToStyle.forEach(el => {
//             //     if (el.classList.contains('form-wrapper') || this.hasCustomClasses(el)) {
//             //         if (el.classList.contains('form-wrapper')) {
//             //             this.applyStyles(el, this.defaultWrapperStyles);
//             //         }

//             //         this.parseClassStyles(el.classList, el);

//             //         if (el.classList.contains('form-wrapper')) {
//             //             el.querySelectorAll(':scope > div').forEach(div => {
//             //                 this.applyStyles(div, this.defaultRowStyles);
//             //                 this.parseClassStyles(div.classList, div);
//             //             });

//             //             el.querySelectorAll('label').forEach(label => {
//             //                 this.applyStyles(label, this.labelStyles);
//             //                 this.parseClassStyles(label.classList, label);
//             //             });

//             //             el.querySelectorAll('input[type="text"]').forEach(input => {
//             //                 this.parseClassStyles(input.classList, input);
//             //                 for (const prop in this.inputStyles) {
//             //                     if (!input.style[prop]) {
//             //                         input.style[prop] = this.inputStyles[prop];
//             //                     }
//             //                 }

//             //                 input.addEventListener('focus', () => {
//             //                     this.applyStyles(input, this.inputFocusStyles);
//             //                     this.parseClassStyles(input.classList, input);
//             //                 });

//             //                 input.addEventListener('blur', () => {
//             //                     this.applyStyles(input, this.inputStyles);
//             //                     this.parseClassStyles(input.classList, input);
//             //                 });
//             //             });

//             //             el.querySelectorAll('button').forEach(button => {
//             //                 this.applyStyles(button, this.buttonStyles);
//             //                 this.parseClassStyles(button.classList, button);
//             //             });

//             //             el.parentElement.querySelectorAll('h2').forEach(h2 => {
//             //                 this.applyStyles(h2, this.h2Styles);
//             //                 this.parseClassStyles(h2.classList, h2);
//             //             });
//             //         }
//             //     }
//             // });


//             elementsToStyle.forEach(el => {
//                 // If it's the form wrapper, apply default styles
//                 if (el.classList.contains('form-wrapper')) {
//                     this.applyStyles(el, this.defaultWrapperStyles);
//                 }

//                 // Apply custom class styles (even if hasCustomClasses fails)
//                 this.parseClassStyles(el.classList, el);

//                 // Apply default per-element styles
//                 // if (el.tagName === 'DIV') {
//                 //     this.applyStyles(el, this.defaultRowStyles);
//                 // }
//                 // if (el.tagName === 'DIV' && el.parentElement?.classList.contains('form-wrapper')) {
//                 //     this.applyStyles(el, this.defaultRowStyles);
//                 // }

//                 if (
//                     el.tagName === 'DIV' &&
//                     el.parentElement?.classList.contains('form-wrapper') &&
//                     !el.classList.contains('row')
//                 ) {
//                     this.applyStyles(el, this.defaultRowStyles);
//                 }



//                 if (el.tagName === 'LABEL') {
//                     this.applyStyles(el, this.labelStyles);
//                 }

//                 if (el.tagName === 'INPUT' && el.type === 'text') {
//                     this.applyStyles(el, this.inputStyles);

//                     el.addEventListener('focus', () => {
//                         this.applyStyles(el, this.inputFocusStyles);
//                     });

//                     el.addEventListener('blur', () => {
//                         this.applyStyles(el, this.inputStyles);
//                     });
//                 }

//                 if (el.tagName === 'BUTTON') {
//                     this.applyStyles(el, this.buttonStyles);
//                 }

//                 if (el.tagName === 'H2') {
//                     this.applyStyles(el, this.h2Styles);
//                 }
//             });


//             document.querySelectorAll('.mydiv').forEach(div => {
//                 div.style.alignItems = 'center';
//                 div.style.justifyContent = 'space-around';
//                 this.parseClassStyles(div.classList, div);
//             });

//             this.setupClearButtons();
//         }
//     }

//     const FormLib = new FormComponent();
//     window.FormLib = FormLib;

//     if (document.readyState === 'loading') {
//         document.addEventListener('DOMContentLoaded', () => FormLib.init());
//     } else {
//         FormLib.init();
//     }
// })();




















//try
(function () {
    class FormComponent {
        constructor() {
            this.defaultWrapperStyles = {
                boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxWidth: '600px',
                margin: 'auto',
            };

            this.defaultRowStyles = {
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
            };

            this.labelStyles = {
                width: '155px',
                textAlign: 'left',
            };

            this.inputStyles = {
                flex: 1,
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '100%', // Add this to ensure full width within columns
                boxSizing: 'border-box' // Important for proper width calculation
            };

            this.inputFocusStyles = {
                outline: 'none',
                borderColor: '#4A90E2',
                boxShadow: '0 0 5px rgba(74, 144, 226, 0.5)',
            };

            // this.buttonStyles = {
            //     marginTop: '20px',
            // };

            this.h2Styles = {
                width: '100%',
                textAlign: 'center',
                marginBottom: '20px'
            };

            const style = document.createElement('style');
            style.textContent = `.form-wrapper h2 { display: inline; }`;
            document.head.appendChild(style);
        }

        setupClearButtons() {
            const clearButtons = document.querySelectorAll('.clear-btn');
            clearButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const form = button.closest('form') || button.closest('.form-wrapper');
                    if (!form) return;

                    form.querySelectorAll('input, textarea, select').forEach(el => {
                        if (el.type === 'checkbox' || el.type === 'radio') {
                            el.checked = false;
                        } else {
                            el.value = '';
                        }
                        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                            el.style.boxShadow = 'none';
                            el.style.borderColor = '#ccc';
                        }
                    });
                });
            });
        }

        // hasCustomClasses(el) {
        //     const customPrefixes = [
        //         'gap-', 'padding-', 'shadow-',
        //         'borderRadius-', 'maxWidth-', 'margin-',
        //         'bg-', 'color-', 'fontSize-',
        //         'align-', 'textAlign-', 'marginBottom-'
        //     ];
        //     return customPrefixes.some(prefix =>
        //         [...el.classList].some(c => c.startsWith(prefix))
        //     );
        // }

        applyStyles(configOrElement, styles = null) {
            if (typeof configOrElement === 'object' && !configOrElement.nodeType) {
                const forms = document.querySelectorAll('form');
                forms.forEach(form => {
                    for (const key in configOrElement) {
                        let elements;
                        switch (key) {
                            case 'form':
                                elements = [form];
                                break;
                            case 'input':
                                elements = form.querySelectorAll('input[type="text"]');
                                break;
                            case 'label':
                                elements = form.querySelectorAll('label');
                                break;
                            case 'button':
                                elements = form.querySelectorAll('button');
                                break;
                            case 'h2':
                                elements = form.parentElement.querySelectorAll('h2');
                                break;
                            default:
                                elements = form.querySelectorAll(key);
                        }

                        elements.forEach(el => {
                            for (const prop in configOrElement[key]) {
                                if (!el.style[prop]) {
                                    el.style[prop] = configOrElement[key][prop];
                                }
                            }
                        });
                    }
                });
            } else if (configOrElement.nodeType) {
                for (const prop in styles) {
                    if (!configOrElement.style[prop]) {
                        configOrElement.style[prop] = styles[prop];
                    }
                }
            }
        }

        /**
         * Helper: Adds 'px' if the value is numeric
         */
        ensureUnit(val) {
            return (/^\d+$/.test(val)) ? val + 'px' : val;
        }

        /**
         * Parse class-based styles dynamically
         */
        parseClassStyles(classList, el) {
            if (!classList) return;

            classList.forEach(cls => {
                // multi-value parser
                const getMultiValues = (prefix) => {
                    return cls.replace(prefix, '').split('-').map(v => this.ensureUnit(v)).join(' ');
                };

                if (cls.startsWith('gap-')) {
                    el.style.gap = this.ensureUnit(cls.replace('gap-', ''));
                }

                if (cls.startsWith('padding-')) {
                    // supports padding-10 or padding-10-20-30-40
                    el.style.padding = getMultiValues('padding-');
                }

                if (cls.startsWith('margin-') && !cls.startsWith('marginBottom-')) {
                    el.style.margin = getMultiValues('margin-');
                }

                if (cls.startsWith('marginBottom-')) {
                    el.style.marginBottom = this.ensureUnit(cls.replace('marginBottom-', ''));
                }

                if (cls.startsWith('borderRadius-')) {
                    el.style.borderRadius = this.ensureUnit(cls.replace('borderRadius-', ''));
                }

                if (cls.startsWith('maxWidth-')) {
                    el.style.maxWidth = this.ensureUnit(cls.replace('maxWidth-', ''));
                }

                if (cls.startsWith('bg-')) {
                    el.style.backgroundColor = cls.replace('bg-', '');
                }

                if (cls.startsWith('color-')) {
                    el.style.color = cls.replace('color-', '');
                }

                if (cls.startsWith('fontSize-')) {
                    el.style.fontSize = this.ensureUnit(cls.replace('fontSize-', ''));
                }

                if (cls.startsWith('align-')) {
                    el.style.alignItems = cls.replace('align-', '');
                }

                if (cls.startsWith('textAlign-')) {
                    el.style.textAlign = cls.replace('textAlign-', '');
                }

                if (cls.startsWith('shadow-')) {
                    const shadowValue = cls.substring(7);

                    // Format: shadow-rgba-255-0-0-25 => rgba(255,0,0,0.25)
                    if (shadowValue.startsWith('rgba-')) {
                        const parts = shadowValue.split('-');
                        if (parts.length >= 5) {
                            const r = parts[1] || '0';
                            const g = parts[2] || '0';
                            const b = parts[3] || '0';
                            let a = parts[4] || '1';
                            if (a.startsWith('0') && a.length > 1) {
                                a = '0.' + a.substring(1);
                            }
                            el.style.boxShadow = `0 4px 8px 0 rgba(${r},${g},${b},${a})`;
                        }
                    }
                    else if (shadowValue.startsWith('rgba(')) {
                        el.style.boxShadow = `0 4px 8px 0 ${shadowValue}`;
                    }
                    else {
                        // fallback for named colors or hex
                        el.style.boxShadow = `0 4px 8px 0 ${shadowValue}`;
                    }
                }
            });
        }

        init() {
            const elementsToStyle = document.querySelectorAll('.form-wrapper, .form-wrapper *');


            // elementsToStyle.forEach(el => {
            //     if (el.classList.contains('form-wrapper') || this.hasCustomClasses(el)) {
            //         if (el.classList.contains('form-wrapper')) {
            //             this.applyStyles(el, this.defaultWrapperStyles);
            //         }

            //         this.parseClassStyles(el.classList, el);

            //         if (el.classList.contains('form-wrapper')) {
            //             el.querySelectorAll(':scope > div').forEach(div => {
            //                 this.applyStyles(div, this.defaultRowStyles);
            //                 this.parseClassStyles(div.classList, div);
            //             });

            //             el.querySelectorAll('label').forEach(label => {
            //                 this.applyStyles(label, this.labelStyles);
            //                 this.parseClassStyles(label.classList, label);
            //             });

            //             el.querySelectorAll('input[type="text"]').forEach(input => {
            //                 this.parseClassStyles(input.classList, input);
            //                 for (const prop in this.inputStyles) {
            //                     if (!input.style[prop]) {
            //                         input.style[prop] = this.inputStyles[prop];
            //                     }
            //                 }

            //                 input.addEventListener('focus', () => {
            //                     this.applyStyles(input, this.inputFocusStyles);
            //                     this.parseClassStyles(input.classList, input);
            //                 });

            //                 input.addEventListener('blur', () => {
            //                     this.applyStyles(input, this.inputStyles);
            //                     this.parseClassStyles(input.classList, input);
            //                 });
            //             });

            //             el.querySelectorAll('button').forEach(button => {
            //                 this.applyStyles(button, this.buttonStyles);
            //                 this.parseClassStyles(button.classList, button);
            //             });

            //             el.parentElement.querySelectorAll('h2').forEach(h2 => {
            //                 this.applyStyles(h2, this.h2Styles);
            //                 this.parseClassStyles(h2.classList, h2);
            //             });
            //         }
            //     }
            // });


            elementsToStyle.forEach(el => {
                // If it's the form wrapper, apply default styles
                if (el.classList.contains('form-wrapper')) {
                    this.applyStyles(el, this.defaultWrapperStyles);
                }

                // Apply custom class styles (even if hasCustomClasses fails)
                this.parseClassStyles(el.classList, el);

                // Apply default per-element styles
                // if (el.tagName === 'DIV') {
                //     this.applyStyles(el, this.defaultRowStyles);
                // }
                // if (el.tagName === 'DIV' && el.parentElement?.classList.contains('form-wrapper')) {
                //     this.applyStyles(el, this.defaultRowStyles);
                // }

                if (
                    el.tagName === 'DIV' &&
                    el.parentElement?.classList.contains('form-wrapper') &&
                    !el.classList.contains('row')
                ) {
                    this.applyStyles(el, this.defaultRowStyles);
                }



                if (el.tagName === 'LABEL') {
                    this.applyStyles(el, this.labelStyles);
                }

                // if ((el.tagName === 'INPUT' && ['text', 'email', 'tel'].includes(el.type)) ||
                //     el.tagName === 'TEXTAREA') {

                //     // Apply base styles
                //     this.applyStyles(el, this.inputStyles);

                //     // Apply any custom class styles
                //     this.parseClassStyles(el.classList, el);

                //     // Focus/blur handlers
                //     el.addEventListener('focus', () => {
                //         this.applyStyles(el, this.inputFocusStyles);
                //     });

                //     el.addEventListener('blur', () => {
                //         this.applyStyles(el, this.inputStyles);
                //     });
                // }
                if ((el.tagName === 'INPUT' && !['checkbox', 'radio', 'submit', 'button'].includes(el.type)) ||
                    el.tagName === 'TEXTAREA' ||
                    el.tagName === 'SELECT') {

                    // Reset any Bootstrap styles first
                    el.style.width = '100%';
                    el.style.margin = '0';
                    el.style.boxSizing = 'border-box';

                    // Apply our styles
                    this.applyStyles(el, this.inputStyles);
                    this.parseClassStyles(el.classList, el);

                    // Focus/blur handlers
                    el.addEventListener('focus', () => {
                        this.applyStyles(el, this.inputFocusStyles);
                    });

                    el.addEventListener('blur', () => {
                        this.applyStyles(el, this.inputStyles);
                    });
                }


                if (el.tagName === 'BUTTON') {
                    this.applyStyles(el, this.buttonStyles);
                }

                if (el.tagName === 'H2') {
                    this.applyStyles(el, this.h2Styles);
                }
            });


            document.querySelectorAll('.mydiv').forEach(div => {
                div.style.alignItems = 'center';
                div.style.justifyContent = 'space-around';
                this.parseClassStyles(div.classList, div);
            });

            this.setupClearButtons();
        }
    }

    const FormLib = new FormComponent();
    window.FormLib = FormLib;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => FormLib.init());
    } else {
        FormLib.init();
    }
})();
