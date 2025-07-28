// /**
//  * StyleParser.js - Complete Utility-First CSS Parser
//  * Version 3.3 - Fully Fixed Implementation
//  */
// (function() {
//     'use strict';

//     class StyleParser {
//         constructor(config = {}) {
//             this.config = {
//                 prefixes: {
//                     // Layout
//                     'flex-': { property: 'display', value: 'flex' },
//                     'inline-flex-': { property: 'display', value: 'inline-flex' },
//                     'flex-dir-': 'flexDirection',
//                     'flex-wrap-': 'flexWrap',
//                     'justify-': 'justifyContent',
//                     'items-': 'alignItems',
//                     'content-': 'alignContent',
//                     'self-': 'alignSelf',
//                     'grid-': { property: 'display', value: 'grid' },

//                     // Sizing
//                     'w-': 'width',
//                     'h-': 'height',
//                     'min-w-': 'minWidth',
//                     'max-w-': 'maxWidth',
//                     'min-h-': 'minHeight',
//                     'max-h-': 'maxHeight',

//                     // Spacing
//                     'm-': 'margin',
//                     'mt-': 'marginTop',
//                     'mr-': 'marginRight',
//                     'mb-': 'marginBottom',
//                     'ml-': 'marginLeft',
//                     'mx-': ['marginLeft', 'marginRight'],
//                     'my-': ['marginTop', 'marginBottom'],
//                     'p-': 'padding',
//                     'pt-': 'paddingTop',
//                     'pr-': 'paddingRight',
//                     'pb-': 'paddingBottom',
//                     'pl-': 'paddingLeft',
//                     'px-': ['paddingLeft', 'paddingRight'],
//                     'py-': ['paddingTop', 'paddingBottom'],
//                     'gap-': 'gap',

//                     // Typography
//                     'text-': 'fontSize',
//                     'font-': 'fontWeight',
//                     'italic-': { property: 'fontStyle', value: 'italic' },
//                     'not-italic-': { property: 'fontStyle', value: 'normal' },
//                     'line-height-': 'lineHeight',
//                     'leading-': 'lineHeight',
//                     'color-': 'color',
//                     'align-': 'textAlign',
//                     'whitespace-': 'whiteSpace',
//                     'break-': 'wordBreak',

//                     // Background
//                     'bg-': 'backgroundColor',
//                     'bg-gradient-': 'backgroundImage',

//                     // Border
//                     'border-': 'borderWidth',
//                     'border-t-': 'borderTopWidth',
//                     'border-r-': 'borderRightWidth',
//                     'border-b-': 'borderBottomWidth',
//                     'border-l-': 'borderLeftWidth',
//                     'border-color-': 'borderColor',
//                     'rounded-': 'borderRadius',
//                     'rounded-t-': ['borderTopLeftRadius', 'borderTopRightRadius'],
//                     'rounded-r-': ['borderTopRightRadius', 'borderBottomRightRadius'],
//                     'rounded-b-': ['borderBottomLeftRadius', 'borderBottomRightRadius'],
//                     'rounded-l-': ['borderTopLeftRadius', 'borderBottomLeftRadius'],

//                     // Effects
//                     'shadow-': 'boxShadow',
//                     'opacity-': 'opacity',

//                     // Transform
//                     'rotate-': 'transform',
//                     'scale-': 'transform',
//                     'translate-': 'transform'
//                 },

//                 units: {
//                     width: 'px',
//                     height: 'px',
//                     minWidth: 'px',
//                     maxWidth: 'px',
//                     minHeight: 'px',
//                     maxHeight: 'px',
//                     margin: 'px',
//                     marginTop: 'px',
//                     marginRight: 'px',
//                     marginBottom: 'px',
//                     marginLeft: 'px',
//                     padding: 'px',
//                     paddingTop: 'px',
//                     paddingRight: 'px',
//                     paddingBottom: 'px',
//                     paddingLeft: 'px',
//                     fontSize: 'px',
//                     borderRadius: 'px',
//                     borderTopLeftRadius: 'px',
//                     borderTopRightRadius: 'px',
//                     borderBottomRightRadius: 'px',
//                     borderBottomLeftRadius: 'px',
//                     borderWidth: 'px',
//                     borderTopWidth: 'px',
//                     borderRightWidth: 'px',
//                     borderBottomWidth: 'px',
//                     borderLeftWidth: 'px',
//                     gap: 'px',
//                     lineHeight: 'px',
//                     rotate: 'deg',
//                     scale: '',
//                     translate: 'px'
//                 },

//                 customValues: {
//                     flexDirection: {
//                         'row': 'row',
//                         'col': 'column',
//                         'row-reverse': 'row-reverse',
//                         'col-reverse': 'column-reverse'
//                     },
//                     fontWeight: {
//                         'thin': '100',
//                         'extralight': '200',
//                         'light': '300',
//                         'normal': '400',
//                         'medium': '500',
//                         'semibold': '600',
//                         'bold': '700',
//                         'extrabold': '800',
//                         'black': '900'
//                     },
//                     textAlign: {
//                         'left': 'left',
//                         'center': 'center',
//                         'right': 'right',
//                         'justify': 'justify'
//                     },
//                     justifyContent: {
//                         'start': 'flex-start',
//                         'end': 'flex-end',
//                         'center': 'center',
//                         'between': 'space-between',
//                         'around': 'space-around',
//                         'evenly': 'space-evenly'
//                     },
//                     alignItems: {
//                         'start': 'flex-start',
//                         'end': 'flex-end',
//                         'center': 'center',
//                         'baseline': 'baseline',
//                         'stretch': 'stretch'
//                     },
//                     flexWrap: {
//                         'wrap': 'wrap',
//                         'nowrap': 'nowrap',
//                         'wrap-reverse': 'wrap-reverse'
//                     },
//                     boxShadow: {
//                         'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
//                         'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//                         'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
//                         'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
//                         '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
//                         'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
//                         'none': 'none'
//                     }
//                 },

//                 important: false,
//                 debug: true
//             };

//             Object.assign(this.config, config);
//             this._waitForDOM();
//         }

//         _waitForDOM() {
//             if (document.readyState === 'complete' || document.readyState === 'interactive') {
//                 setTimeout(() => this.init(), 0);
//             } else {
//                 document.addEventListener('DOMContentLoaded', () => this.init());
//             }
//         }

//         parse(element) {
//             if (!element || !element.classList) {
//                 this._log('warn', 'Invalid element:', element);
//                 return;
//             }

//             this._log('group', `Parsing ${element.tagName.toLowerCase()}`);
//             this._log('log', 'Element classes:', [...element.classList]);

//             Array.from(element.classList).forEach(className => {
//                 this._processClass(element, className);
//             });

//             this._log('log', 'Applied styles:', element.style.cssText);
//             this._log('groupEnd');
//         }

//         _processClass(element, className) {
//             for (const [prefix, propertyConfig] of Object.entries(this.config.prefixes)) {
//                 if (className.startsWith(prefix)) {
//                     const value = className.substring(prefix.length);

//                     // Handle object configuration (like { property: 'display', value: 'flex' })
//                     if (typeof propertyConfig === 'object' && propertyConfig !== null) {
//                         const parsedValue = propertyConfig.value || value;
//                         this._applyStyle(element, propertyConfig.property, parsedValue);
//                         return;
//                     }

//                     const parsedValue = this._parseValue(propertyConfig, value, className);

//                     this._log('log', `Processing: ${className}`, {
//                         prefix,
//                         property: propertyConfig,
//                         rawValue: value,
//                         parsedValue
//                     });

//                     this._applyStyle(element, propertyConfig, parsedValue);
//                     return;
//                 }
//             }

//             if (!className.startsWith('js-')) {
//                 this._log('warn', `Unmatched class: ${className}`);
//             }
//         }

//         _applyStyle(element, property, value) {
//             if (!value || value === 'undefined') {
//                 this._log('warn', `Invalid value for ${property}: ${value}`);
//                 return;
//             }

//             const important = this.config.important ? ' !important' : '';

//             if (Array.isArray(property)) {
//                 property.forEach(prop => {
//                     element.style[prop] = value + important;
//                 });
//                 return;
//             }

//             element.style[property] = value + important;
//         }

//         _parseValue(property, value) {
//             // Check custom values first
//             if (this.config.customValues[property] && this.config.customValues[property][value]) {
//                 return this.config.customValues[property][value];
//             }

//             // Special cases
//             switch (property) {
//                 case 'backgroundImage':
//                     if (value.startsWith('gradient-')) {
//                         const colors = value.substring(9).split('-');
//                         if (colors.length >= 2) {
//                             const formattedColors = colors.map(c => {
//                                 // Handle named colors
//                                 if (this.config.customValues.color && this.config.customValues.color[c]) {
//                                     return this.config.customValues.color[c];
//                                 }
//                                 // Handle hex colors
//                                 if (/^[0-9a-fA-F]{3,6}$/.test(c)) {
//                                     return `#${c}`;
//                                 }
//                                 return c;
//                             });
//                             return `linear-gradient(to right, ${formattedColors.join(', ')})`;
//                         }
//                     }
//                     return value;

//                 case 'boxShadow':
//                     if (value.startsWith('rgba-')) {
//                         const parts = value.substring(5).split('-');
//                         if (parts.length === 4) {
//                             const alpha = parts[3].startsWith('0') ? `0.${parts[3].substring(1)}` : parts[3];
//                             return `0 2px 8px rgba(${parts[0]},${parts[1]},${parts[2]},${alpha})`;
//                         }
//                     }
//                     return value.replace(/-/g, ' ');

//                 case 'transform':
//                     if (value.startsWith('rotate-')) {
//                         const degrees = value.substring(7);
//                         return `rotate(${degrees}${this.config.units.rotate || 'deg'})`;
//                     }
//                     if (value.startsWith('scale-')) {
//                         const scale = value.substring(6);
//                         return `scale(${scale})`;
//                     }
//                     if (value.startsWith('translate-')) {
//                         const translate = value.substring(10);
//                         return `translate(${translate}${this.config.units.translate || 'px'})`;
//                     }
//                     return value;

//                 default:
//                     // Handle numeric values with units
//                     if (this.config.units[property] && !isNaN(value)) {
//                         return value + this.config.units[property];
//                     }

//                     // Handle color properties
//                     if ((property.includes('color') || property.includes('background'))) {
//                         // If it's a named color (like 'red', 'blue', etc.)
//                         if (/^[a-z]+$/.test(value)) {
//                             return value;
//                         }
//                         // If it's a hex value without #
//                         else if (/^[0-9a-fA-F]{3,6}$/.test(value)) {
//                             return `#${value}`;
//                         }
//                     }
//                     return value;
//             }
//         }

//         init() {
//             this._log('log', 'Initializing StyleParser...');

//             if (!document.body) {
//                 this._log('error', 'document.body not available');
//                 return;
//             }

//             const elements = document.querySelectorAll('[class]');
//             elements.forEach(el => this.parse(el));

//             this._initObserver();
//             this._log('log', 'StyleParser initialized successfully');
//         }

//         _initObserver() {
//             try {
//                 this.observer = new MutationObserver(mutations => {
//                     mutations.forEach(mutation => {
//                         mutation.addedNodes.forEach(node => {
//                             if (node.nodeType === 1 && node.classList) {
//                                 this.parse(node);
//                             }
//                         });
//                     });
//                 });

//                 this.observer.observe(document.body, {
//                     subtree: true,
//                     childList: true
//                 });
//             } catch (e) {
//                 this._log('error', 'MutationObserver failed:', e);
//             }
//         }

//         _log(type, ...args) {
//             if (!this.config.debug && type === 'log') return;

//             const prefix = '[StyleParser]';
//             if (typeof console[type] === 'function') {
//                 console[type](prefix, ...args);
//             } else {
//                 console.log(prefix, ...args);
//             }
//         }

//         destroy() {
//             if (this.observer) {
//                 this.observer.disconnect();
//             }
//             this._log('log', 'Destroyed');
//         }
//     }

//     window.StyleParser = new StyleParser();
// })();















//try

// /**
//  * StyleParser.js - Final Working Version
//  * Version 6.1 - Fixed Gradients and Shadows
//  */
// (function() {
//     'use strict';

//     class StyleParser {
//         constructor(config = {}) {
//             this.config = {
//                 prefixes: {
//                     // Flex Utilities
//                     'flex-flex': { property: 'display', value: 'flex' },
//                     'flex-dir-col': { property: 'flexDirection', value: 'column' },
//                     'flex-dir-row': { property: 'flexDirection', value: 'row' },
//                     'flex-wrap': { property: 'flexWrap', value: 'wrap' },
//                     'gap-': 'gap',

//                     // Spacing
//                     'p-': 'padding',
//                     'px-': ['paddingLeft', 'paddingRight'],
//                     'py-': ['paddingTop', 'paddingBottom'],
//                     'pt-': 'paddingTop',
//                     'pr-': 'paddingRight',
//                     'pb-': 'paddingBottom',
//                     'pl-': 'paddingLeft',
//                     'm-': 'margin',
//                     'mt-': 'marginTop',
//                     'mr-': 'marginRight',
//                     'mb-': 'marginBottom',
//                     'ml-': 'marginLeft',
//                     'mx-': ['marginLeft', 'marginRight'],
//                     'my-': ['marginTop', 'marginBottom'],

//                     // Background
//                     'bg-': 'backgroundColor',
//                     'bg-gradient-': 'backgroundImage',

//                     // Borders
//                     'rounded-': 'borderRadius',
//                     'border-': 'borderWidth',
//                     'border-color-': 'borderColor',

//                     // Effects
//                     'shadow-': 'boxShadow',
//                     'opacity-': 'opacity',

//                     // Sizing
//                     'w-': 'width',
//                     'h-': 'height',
//                     'min-w-': 'minWidth',
//                     'max-w-': 'maxWidth',
//                     'min-h-': 'minHeight',
//                     'max-h-': 'maxHeight',

//                     // Typography
//                     'text-': 'fontSize',
//                     'font-': 'fontWeight',
//                     'italic': { property: 'fontStyle', value: 'italic' },
//                     'line-height-': 'lineHeight',
//                     'color-': 'color',
//                     'align-': 'textAlign'
//                 },

//                 units: {
//                     padding: 'px',
//                     paddingLeft: 'px',
//                     paddingRight: 'px',
//                     paddingTop: 'px',
//                     paddingBottom: 'px',
//                     margin: 'px',
//                     marginLeft: 'px',
//                     marginRight: 'px',
//                     marginTop: 'px',
//                     marginBottom: 'px',
//                     gap: 'px',
//                     borderRadius: 'px',
//                     borderWidth: 'px',
//                     width: 'px',
//                     height: 'px',
//                     fontSize: 'px',
//                     lineHeight: 'px'
//                 },

//                 colors: {
//                     'red': 'red',
//                     'blue': 'blue',
//                     'green': 'green',
//                     'black': 'black',
//                     'white': 'white',
//                     'gray': '#cccccc',
//                     'lightgray': '#f5f5f5',
//                     'lightblue': '#add8e6',
//                     'primary': '#3b82f6',
//                     'secondary': '#6b7280'
//                 },

//                 debug: true
//             };

//             Object.assign(this.config, config);
//             this._waitForDOM();
//         }

//         _waitForDOM() {
//             if (document.readyState === 'complete' || document.readyState === 'interactive') {
//                 setTimeout(() => this.init(), 0);
//             } else {
//                 document.addEventListener('DOMContentLoaded', () => this.init());
//             }
//         }

//         parse(element) {
//             if (!element || !element.classList) {
//                 this._log('warn', 'Invalid element:', element);
//                 return;
//             }

//             Array.from(element.classList).forEach(className => {
//                 this._processClass(element, className);
//             });
//         }

//         _processClass(element, className) {
//             // 1. Check for exact matches
//             for (const [prefix, config] of Object.entries(this.config.prefixes)) {
//                 if (typeof config === 'object' && !prefix.endsWith('-') && className === prefix) {
//                     this._applyStyle(element, config.property, config.value);
//                     return;
//                 }
//             }

//             // 2. Check for prefixed classes
//             for (const [prefix, property] of Object.entries(this.config.prefixes)) {
//                 if (prefix.endsWith('-') && className.startsWith(prefix)) {
//                     const value = className.substring(prefix.length);
//                     const parsedValue = this._parseValue(property, value);
//                     this._applyStyle(element, property, parsedValue);
//                     return;
//                 }
//             }
//         }

//         _applyStyle(element, property, value) {
//             if (value === undefined || value === null) return;

//             if (Array.isArray(property)) {
//                 property.forEach(prop => {
//                     element.style[prop] = value;
//                 });
//             } else {
//                 element.style[property] = value;
//             }
//         }

//         _parseValue(property, value) {
//             // Handle colors
//             if ((property === 'backgroundColor' || property === 'borderColor' || property === 'color') && this.config.colors[value]) {
//                 return this.config.colors[value];
//             }

//             // Handle hex colors without #
//             if ((property === 'backgroundColor' || property === 'borderColor' || property === 'color') && 
//                 /^[0-9a-fA-F]{3,6}$/.test(value)) {
//                 return `#${value}`;
//             }

//             // Handle gradients (FIXED)
//             if (property === 'backgroundImage' && value.startsWith('gradient-')) {
//                 const colors = value.substring(9).split('-');
//                 const gradientColors = colors.map(c => {
//                     // Check if it's a named color
//                     if (this.config.colors[c]) {
//                         return this.config.colors[c];
//                     }
//                     // Check if it's already a valid color
//                     if (/^(#|rgb|hsl)/.test(c)) {
//                         return c;
//                     }
//                     // Assume it's a hex value without #
//                     if (/^[0-9a-fA-F]{3,6}$/.test(c)) {
//                         return `#${c}`;
//                     }
//                     return c;
//                 }).join(', ');
//                 return `linear-gradient(to right, ${gradientColors})`;
//             }

//             // Handle shadows (FIXED)
//             if (property === 'boxShadow' && value.startsWith('rgba-')) {
//                 const parts = value.substring(5).split('-');
//                 if (parts.length === 4) {
//                     // Handle alpha values like 03 → 0.3, 05 → 0.5, etc.
//                     let alpha = parts[3];
//                     if (/^0\d+$/.test(alpha)) {
//                         alpha = `0.${alpha.substring(1)}`;
//                     } else if (/^[1-9]\d*$/.test(alpha)) {
//                         alpha = `${alpha}`;
//                     }
//                     return `0 2px 8px rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
//                 }
//             }

//             // Handle opacity (FIXED)
//             if (property === 'opacity') {
//                 // Handle values like 03 → 0.3, 5 → 0.5, 50 → 0.5
//                 if (/^0\d+$/.test(value)) {
//                     return `0.${value.substring(1)}`;
//                 } else if (/^[1-9]\d*$/.test(value)) {
//                     const num = parseInt(value);
//                     return num <= 100 ? (num / 100).toString() : '1';
//                 }
//             }

//             // Add units if needed
//             if (this.config.units[property] && !isNaN(value)) {
//                 return value + this.config.units[property];
//             }

//             return value;
//         }

//         init() {
//             if (!document.body) {
//                 this._log('error', 'document.body not available');
//                 return;
//             }

//             // Parse existing elements
//             document.querySelectorAll('[class]').forEach(el => this.parse(el));

//             // Set up observer for dynamic content
//             this._initObserver();

//             this._log('log', 'Initialized successfully');
//         }

//         _initObserver() {
//             try {
//                 this.observer = new MutationObserver(mutations => {
//                     mutations.forEach(mutation => {
//                         mutation.addedNodes.forEach(node => {
//                             if (node.nodeType === 1 && node.classList) {
//                                 this.parse(node);
//                             }
//                         });
//                     });
//                 });

//                 this.observer.observe(document.body, {
//                     subtree: true,
//                     childList: true
//                 });
//             } catch (e) {
//                 this._log('error', 'Observer failed:', e);
//             }
//         }

//         _log(type, ...args) {
//             if (!this.config.debug && type === 'log') return;

//             const prefix = '[StyleParser]';
//             if (typeof console[type] === 'function') {
//                 console[type](prefix, ...args);
//             } else {
//                 console.log(prefix, ...args);
//             }
//         }
//     }

//     // Initialize with debug on
//     window.StyleParser = new StyleParser({ debug: true });
// })();























//try2

// /**
//  * StyleParser.js - Complete Fixed Version
//  * Version 6.5 - Final Fixes for Gradients, Spacing and Shadows
//  */
// (function() {
//     'use strict';

//     class StyleParser {
//         constructor(config = {}) {
//             this.config = {
//                 prefixes: {
//                     // Flex Utilities
//                     'flex-flex': { property: 'display', value: 'flex' },
//                     'flex-dir-col': { property: 'flexDirection', value: 'column' },
//                     'flex-dir-row': { property: 'flexDirection', value: 'row' },
//                     'flex-wrap': { property: 'flexWrap', value: 'wrap' },
//                     'gap-': 'gap',

//                     // Spacing
//                     'p-': 'padding',
//                     'px-': ['paddingLeft', 'paddingRight'],
//                     'py-': ['paddingTop', 'paddingBottom'],
//                     'pt-': 'paddingTop',
//                     'pr-': 'paddingRight',
//                     'pb-': 'paddingBottom',
//                     'pl-': 'paddingLeft',
//                     'm-': 'margin',
//                     'mt-': 'marginTop',
//                     'mr-': 'marginRight',
//                     'mb-': 'marginBottom',
//                     'ml-': 'marginLeft',
//                     'mx-': ['marginLeft', 'marginRight'],
//                     'my-': ['marginTop', 'marginBottom'],

//                     // Background
//                     'bg-': 'backgroundColor',
//                     'bg-gradient-': 'backgroundImage',

//                     // Borders
//                     'rounded-': 'borderRadius',
//                     'border-': 'borderWidth',
//                     'border-color-': 'borderColor',

//                     // Effects
//                     'shadow-': 'boxShadow',
//                     'opacity-': 'opacity',

//                     // Sizing
//                     'w-': 'width',
//                     'h-': 'height',
//                     'min-w-': 'minWidth',
//                     'max-w-': 'maxWidth',
//                     'min-h-': 'minHeight',
//                     'max-h-': 'maxHeight',

//                     // Typography
//                     'text-': 'fontSize',
//                     'font-': 'fontWeight',
//                     'italic': { property: 'fontStyle', value: 'italic' },
//                     'line-height-': 'lineHeight',
//                     'color-': 'color',
//                     'align-': 'textAlign'
//                 },

//                 units: {
//                     padding: 'px',
//                     paddingLeft: 'px',
//                     paddingRight: 'px',
//                     paddingTop: 'px',
//                     paddingBottom: 'px',
//                     margin: 'px',
//                     marginLeft: 'px',
//                     marginRight: 'px',
//                     marginTop: 'px',
//                     marginBottom: 'px',
//                     gap: 'px',
//                     borderRadius: 'px',
//                     borderWidth: 'px',
//                     width: 'px',
//                     height: 'px',
//                     fontSize: 'px',
//                     lineHeight: 'px'
//                 },

//                 colors: {
//                     'red': 'red',
//                     'blue': 'blue',
//                     'green': 'green',
//                     'black': 'black',
//                     'white': 'white',
//                     'gray': 'gray',
//                     'yellow': 'yellow',
//                     'primary': '#3b82f6',
//                     'secondary': '#6b7280',
//                     'lightgray': '#f5f5f5',
//                     'lightblue': '#add8e6',
//                     'f5f5f5': '#f5f5f5',
//                     '3b8ee8': '#3b8ee8',
//                     '666': '#666666',
//                     '333': '#333333',
//                     'ccc': '#cccccc'
//                 },

//                 debug: true
//             };

//             Object.assign(this.config, config);
//             this._waitForDOM();
//         }

//         _waitForDOM() {
//             if (document.readyState === 'complete' || document.readyState === 'interactive') {
//                 setTimeout(() => this.init(), 0);
//             } else {
//                 document.addEventListener('DOMContentLoaded', () => this.init());
//             }
//         }

//         parse(element) {
//             if (!element || !element.classList) {
//                 this._log('warn', 'Invalid element:', element);
//                 return;
//             }

//             Array.from(element.classList).forEach(className => {
//                 this._processClass(element, className);
//             });
//         }

//         _processClass(element, className) {
//             // 1. Check for exact matches
//             for (const [prefix, config] of Object.entries(this.config.prefixes)) {
//                 if (typeof config === 'object' && !prefix.endsWith('-') && className === prefix) {
//                     this._applyStyle(element, config.property, config.value);
//                     return;
//                 }
//             }

//             // 2. Check for prefixed classes
//             for (const [prefix, property] of Object.entries(this.config.prefixes)) {
//                 if (prefix.endsWith('-') && className.startsWith(prefix)) {
//                     const value = className.substring(prefix.length);
//                     const parsedValue = this._parseValue(property, value);
//                     this._applyStyle(element, property, parsedValue);
//                     return;
//                 }
//             }
//         }

//         _applyStyle(element, property, value) {
//             if (value === undefined || value === null) return;

//             if (Array.isArray(property)) {
//                 property.forEach(prop => {
//                     element.style[prop] = value;
//                 });
//             } else {
//                 element.style[property] = value;
//             }
//         }

//         _parseValue(property, value) {
//             // Handle colors and backgrounds
//             if (property === 'backgroundColor' || property === 'borderColor' || property === 'color') {
//                 // Check named colors first
//                 if (this.config.colors[value]) {
//                     return this.config.colors[value];
//                 }

//                 // Handle hex values (with or without #)
//                 if (/^#?[0-9a-fA-F]{3,6}$/.test(value)) {
//                     return value.startsWith('#') ? value : `#${value}`;
//                 }

//                 // Handle 3-digit hex shorthand
//                 if (/^#?[0-9a-fA-F]{3}$/.test(value)) {
//                     const hex = value.startsWith('#') ? value.substring(1) : value;
//                     return `#${hex.split('').map(c => c + c).join('')}`;
//                 }
//             }

//             // Handle gradients - FIXED
//             if (property === 'backgroundImage' && value.startsWith('gradient-')) {
//                 const colors = value.substring(9).split('-');
//                 const gradientColors = colors.map(c => {
//                     // Check named colors
//                     if (this.config.colors[c]) return this.config.colors[c];

//                     // Handle hex values
//                     if (/^#?[0-9a-fA-F]{3,6}$/.test(c)) {
//                         return c.startsWith('#') ? c : `#${c}`;
//                     }

//                     // Fallback to original value
//                     return c;
//                 });
//                 return `linear-gradient(to right, ${gradientColors.join(', ')})`;
//             }

//             // Handle shadows - FIXED (03 → 0.3)
//             if (property === 'boxShadow' && value.startsWith('rgba-')) {
//                 const parts = value.substring(5).split('-');
//                 if (parts.length === 4) {
//                     let alpha = parts[3];
//                     // Convert 03 to 0.3, 5 to 0.5, etc.
//                     if (/^0[1-9]$/.test(alpha)) {
//                         alpha = `0.${alpha[1]}`;
//                     } else if (/^[1-9]\d*$/.test(alpha)) {
//                         alpha = Math.min(parseInt(alpha), 100) / 100;
//                     }
//                     return `0 2px 8px rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
//                 }
//             }

//             // Handle opacity
//             if (property === 'opacity') {
//                 if (/^\d+$/.test(value)) {
//                     const num = parseInt(value);
//                     return num <= 100 ? (num / 100).toString() : '1';
//                 }
//             }

//             // Ensure px values work for spacing properties - FIXED
//             if ((typeof property === 'string' && property.includes('padding')) || 
//                 (Array.isArray(property) && property.some(p => p.includes('padding')))) {
//                 if (!isNaN(value)) return value + 'px';
//             }

//             // Add units if needed
//             if (this.config.units[property] && !isNaN(value)) {
//                 return value + this.config.units[property];
//             }

//             return value;
//         }

//         init() {
//             if (!document.body) {
//                 this._log('error', 'document.body not available');
//                 return;
//             }

//             // Parse existing elements
//             document.querySelectorAll('[class]').forEach(el => this.parse(el));

//             // Set up observer for dynamic content
//             this._initObserver();

//             this._log('log', 'Initialized successfully');
//         }

//         _initObserver() {
//             try {
//                 this.observer = new MutationObserver(mutations => {
//                     mutations.forEach(mutation => {
//                         mutation.addedNodes.forEach(node => {
//                             if (node.nodeType === 1 && node.classList) {
//                                 this.parse(node);
//                             }
//                         });
//                     });
//                 });

//                 this.observer.observe(document.body, {
//                     subtree: true,
//                     childList: true
//                 });
//             } catch (e) {
//                 this._log('error', 'Observer failed:', e);
//             }
//         }

//         _log(type, ...args) {
//             if (!this.config.debug && type === 'log') return;

//             const prefix = '[StyleParser]';
//             if (typeof console[type] === 'function') {
//                 console[type](prefix, ...args);
//             } else {
//                 console.log(prefix, ...args);
//             }
//         }
//     }

//     // Initialize with debug on
//     window.StyleParser = new StyleParser({ debug: true });
// })();













//chatgpt -try - complete working code starts

// /**
//  * StyleParser.js - Complete Fixed Version
//  * Version 6.6.1 - Gradient Direction Support + Border Shorthand Support
//  */
// (function () {
//     'use strict';

//     class StyleParser {
//         constructor(config = {}) {
//             this.config = {
//                 prefixes: {
//                     // Flex Utilities
//                     'flex-flex': { property: 'display', value: 'flex' },
//                     'flex-dir-col': { property: 'flexDirection', value: 'column' },
//                     'flex-dir-row': { property: 'flexDirection', value: 'row' },
//                     'flex-wrap': { property: 'flexWrap', value: 'wrap' },
//                     'gap-': 'gap',

//                     // Spacing
//                     'p-': 'padding',
//                     'px-': ['paddingLeft', 'paddingRight'],
//                     'py-': ['paddingTop', 'paddingBottom'],
//                     'pt-': 'paddingTop',
//                     'pr-': 'paddingRight',
//                     'pb-': 'paddingBottom',
//                     'pl-': 'paddingLeft',
//                     'm-': 'margin',
//                     'mt-': 'marginTop',
//                     'mr-': 'marginRight',
//                     'mb-': 'marginBottom',
//                     'ml-': 'marginLeft',
//                     'mx-': ['marginLeft', 'marginRight'],
//                     'my-': ['marginTop', 'marginBottom'],

//                     // Background
//                     'bg-gradient-': 'backgroundImage',
//                     'bg-': 'backgroundColor',

//                     // Borders
//                     'rounded-': 'borderRadius',
//                     'border-': 'border',
//                     'border-color-': 'borderColor',

//                     // Effects
//                     'shadow-': 'boxShadow',
//                     'opacity-': 'opacity',

//                     // Sizing
//                     'w-': 'width',
//                     'h-': 'height',
//                     'min-w-': 'minWidth',
//                     'max-w-': 'maxWidth',
//                     'min-h-': 'minHeight',
//                     'max-h-': 'maxHeight',

//                     // Typography
//                     'text-': 'fontSize',
//                     'font-': 'fontWeight',
//                     'italic': { property: 'fontStyle', value: 'italic' },
//                     'line-height-': 'lineHeight',
//                     'color-': 'color',
//                     'align-': 'textAlign'
//                 },

//                 units: {
//                     padding: 'px',
//                     paddingLeft: 'px',
//                     paddingRight: 'px',
//                     paddingTop: 'px',
//                     paddingBottom: 'px',
//                     margin: 'px',
//                     marginLeft: 'px',
//                     marginRight: 'px',
//                     marginTop: 'px',
//                     marginBottom: 'px',
//                     gap: 'px',
//                     borderRadius: 'px',
//                     borderWidth: 'px',
//                     width: 'px',
//                     height: 'px',
//                     fontSize: 'px',
//                     lineHeight: 'px'
//                 },

//                 colors: {
//                     'red': 'red',
//                     'blue': 'blue',
//                     'green': 'green',
//                     'black': 'black',
//                     'white': 'white',
//                     'gray': 'gray',
//                     'yellow': 'yellow',
//                     'primary': '#3b82f6',
//                     'secondary': '#6b7280',
//                     'lightgray': '#f5f5f5',
//                     'lightblue': '#add8e6',
//                     'f5f5f5': '#f5f5f5',
//                     '3b8ee8': '#3b8ee8',
//                     '666': '#666666',
//                     '333': '#333333',
//                     'ccc': '#cccccc'
//                 },

//                 debug: true
//             };

//             Object.assign(this.config, config);
//             this._waitForDOM();
//         }

//         _waitForDOM() {
//             if (document.readyState === 'complete' || document.readyState === 'interactive') {
//                 setTimeout(() => this.init(), 0);
//             } else {
//                 document.addEventListener('DOMContentLoaded', () => this.init());
//             }
//         }

//         parse(element) {
//             if (!element || !element.classList) {
//                 this._log('warn', 'Invalid element:', element);
//                 return;
//             }

//             Array.from(element.classList).forEach(className => {
//                 this._processClass(element, className);
//             });
//         }

//         _processClass(element, className) {
//             for (const [prefix, config] of Object.entries(this.config.prefixes)) {
//                 if (typeof config === 'object' && !prefix.endsWith('-') && className === prefix) {
//                     this._applyStyle(element, config.property, config.value);
//                     return;
//                 }
//             }

//             for (const [prefix, property] of Object.entries(this.config.prefixes)) {
//                 if (prefix.endsWith('-') && className.startsWith(prefix)) {
//                     const value = className.substring(prefix.length);
//                     const parsedValue = this._parseValue(property, value);
//                     this._applyStyle(element, property, parsedValue);
//                     return;
//                 }
//             }
//         }

//         _applyStyle(element, property, value) {
//             if (value === undefined || value === null) return;

//             if (Array.isArray(property)) {
//                 property.forEach(prop => {
//                     element.style[prop] = value;
//                 });
//             } else {
//                 element.style[property] = value;
//             }
//         }

//         _parseValue(property, value) {
//             if (property === 'border') {
//                 return value.replace(/-/g, ' ');
//             }

//             if (property === 'backgroundColor' || property === 'borderColor' || property === 'color') {
//                 if (this.config.colors[value]) {
//                     return this.config.colors[value];
//                 }

//                 if (/^#?[0-9a-fA-F]{3,6}$/.test(value)) {
//                     return value.startsWith('#') ? value : `#${value}`;
//                 }

//                 if (/^[0-9a-fA-F]{3}$/.test(value)) {
//                     const hex = value.split('').map(c => c + c).join('');
//                     return `#${hex}`;
//                 }
//             }

//             // if (property === 'backgroundImage') {
//             //     const parts = value.split('-');
//             //     let direction = 'to right';
//             //     let colors = [];

//             //     const first = parts[0];
//             //     if (
//             //         /^(to|left|right|top|bottom)/.test(first) ||
//             //         /^\d+deg$/.test(first)
//             //     ) {
//             //         direction = first.replace(/_/g, ' ');
//             //         colors = parts.slice(1);
//             //     } else {
//             //         colors = parts;
//             //     }

//             //     const gradientColors = colors.map(c => {
//             //         if (this.config.colors[c]) return this.config.colors[c];
//             //         if (/^#?[0-9a-fA-F]{3,6}$/.test(c)) return c.startsWith('#') ? c : `#${c}`;
//             //         return c;
//             //     });

//             //     return `linear-gradient(${direction}, ${gradientColors.join(', ')})`;
//             // }


//             if (property === 'backgroundImage') {
//     // Split by dash
//     const parts = value.split('-');

//     // Possible directions recognized (you can expand this list)
//     const directions = [
//         'to left', 'to right', 'to top', 'to bottom',
//         'left', 'right', 'top', 'bottom',
//         '45deg', '135deg', '90deg', '180deg'
//     ];

//     // Try to detect direction at start
//     let direction = 'to right'; // default direction
//     let colorStartIndex = 0;

//     // Check if first two parts combined make a direction e.g. 'to-left'
//     if (parts.length > 1) {
//         let firstTwo = parts[0] + ' ' + parts[1];
//         if (directions.includes(firstTwo)) {
//             direction = firstTwo;
//             colorStartIndex = 2;
//         }
//     }

//     // Check if first part alone is direction
//     if (colorStartIndex === 0 && directions.includes(parts[0])) {
//         direction = parts[0];
//         colorStartIndex = 1;
//     }

//     // The rest are colors
//     const colors = parts.slice(colorStartIndex).map(c => {
//         if (this.config.colors[c]) return this.config.colors[c];
//         if (/^#?[0-9a-fA-F]{3,6}$/.test(c)) return c.startsWith('#') ? c : `#${c}`;
//         return c;
//     });

//     return `linear-gradient(${direction}, ${colors.join(', ')})`;
// }



//             if (property === 'boxShadow' && value.startsWith('rgba-')) {
//                 const parts = value.substring(5).split('-');
//                 if (parts.length === 4) {
//                     let alpha = parts[3];
//                     if (/^0[1-9]$/.test(alpha)) alpha = `0.${alpha[1]}`;
//                     else if (/^[1-9]\d*$/.test(alpha)) alpha = Math.min(parseInt(alpha), 100) / 100;
//                     return `0 2px 8px rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
//                 }
//             }

//             if (property === 'opacity') {
//                 if (/^\d+$/.test(value)) {
//                     const num = parseInt(value);
//                     return num <= 100 ? (num / 100).toString() : '1';
//                 }
//             }

//             if ((typeof property === 'string' && property.includes('padding')) ||
//                 (Array.isArray(property) && property.some(p => p.includes('padding')))) {
//                 if (!isNaN(value)) return value + 'px';
//             }

//             if (this.config.units[property] && !isNaN(value)) {
//                 return value + this.config.units[property];
//             }

//             return value;
//         }

//         init() {
//             if (!document.body) {
//                 this._log('error', 'document.body not available');
//                 return;
//             }

//             document.querySelectorAll('[class]').forEach(el => this.parse(el));
//             this._initObserver();

//             this._log('log', 'Initialized successfully');
//         }

//         _initObserver() {
//             try {
//                 this.observer = new MutationObserver(mutations => {
//                     mutations.forEach(mutation => {
//                         mutation.addedNodes.forEach(node => {
//                             if (node.nodeType === 1 && node.classList) {
//                                 this.parse(node);
//                             }
//                         });
//                     });
//                 });

//                 this.observer.observe(document.body, {
//                     subtree: true,
//                     childList: true
//                 });
//             } catch (e) {
//                 this._log('error', 'Observer failed:', e);
//             }
//         }

//         _log(level, ...args) {
//             if (this.config.debug) {
//                 console[level](...args);
//             }
//         }
//     }

//     window.StyleParser = new StyleParser();
// })();

//complete working code ends
















//completely working code - 360 lines of code
(function () {
    'use strict';

    class StyleParser {
        constructor(config = {}) {
            this.config = {
                prefixes: {
                    // Flex Utilities
                    'flex-flex': { property: 'display', value: 'flex' },
                    'flex-dir-col': { property: 'flexDirection', value: 'column' },
                    'flex-dir-row': { property: 'flexDirection', value: 'row' },
                    'flex-wrap': { property: 'flexWrap', value: 'wrap' },
                    'gap-': 'gap',

                    // Spacing
                    'p-': 'padding',
                    'px-': ['paddingLeft', 'paddingRight'],
                    'py-': ['paddingTop', 'paddingBottom'],
                    'pt-': 'paddingTop',
                    'pr-': 'paddingRight',
                    'pb-': 'paddingBottom',
                    'pl-': 'paddingLeft',
                    'm-': 'margin',
                    'mt-': 'marginTop',
                    'mr-': 'marginRight',
                    'mb-': 'marginBottom',
                    'ml-': 'marginLeft',
                    'mx-': ['marginLeft', 'marginRight'],
                    'my-': ['marginTop', 'marginBottom'],

                    // Background
                    'bg-gradient-': 'backgroundImage',
                    'bg-': 'backgroundColor',

                    // Borders
                    'rounded-': 'borderRadius',
                    'border-': 'border',
                    'border-color-': 'borderColor',

                    // Effects
                    'shadow-': 'boxShadow',
                    'opacity-': 'opacity',

                    // Sizing
                    'w-': 'width',
                    'h-': 'height',
                    'min-w-': 'minWidth',
                    'max-w-': 'maxWidth',
                    'min-h-': 'minHeight',
                    'max-h-': 'maxHeight',

                    // Typography
                    'text-': 'fontSize',
                    'font-': 'fontWeight',
                    'italic': { property: 'fontStyle', value: 'italic' },
                    'line-height-': 'lineHeight',
                    'color-': 'color',
                    'align-': 'textAlign',
                    'fontFamily-': 'fontFamily',

                    // Alignment
                    'items-start': { property: 'alignItems', value: 'start' },
                    'items-center': { property: 'alignItems', value: 'center' },
                    'items-end': { property: 'alignItems', value: 'end' },
                    'items-baseline': { property: 'alignItems', value: 'baseline' },
                    'items-stretch': { property: 'alignItems', value: 'stretch' },

                    'justify-start': { property: 'justifyContent', value: 'start' },
                    'justify-center': { property: 'justifyContent', value: 'center' },
                    'justify-end': { property: 'justifyContent', value: 'end' },
                    'justify-between': { property: 'justifyContent', value: 'space-between' },
                    'justify-around': { property: 'justifyContent', value: 'space-around' },
                    'justify-evenly': { property: 'justifyContent', value: 'space-evenly' },

                    // Transitions
                    'transition-all-': 'transition',
                    'transition-colors-': 'transition',
                    'transition-opacity-': 'transition',
                    'transition-transform-': 'transition',

                },

                units: {
                    padding: 'px',
                    paddingLeft: 'px',
                    paddingRight: 'px',
                    paddingTop: 'px',
                    paddingBottom: 'px',
                    margin: 'px',
                    marginLeft: 'px',
                    marginRight: 'px',
                    marginTop: 'px',
                    marginBottom: 'px',
                    gap: 'px',
                    borderRadius: 'px',
                    borderWidth: 'px',
                    width: 'px',
                    height: 'px',
                    fontSize: 'px',
                    lineHeight: 'px'
                },

                colors: {
                    'red': 'red',
                    'blue': 'blue',
                    'green': 'green',
                    'black': 'black',
                    'white': 'white',
                    'gray': 'gray',
                    'yellow': 'yellow',
                    'primary': '#3b82f6',
                    'secondary': '#6b7280',
                    'lightgray': '#f5f5f5',
                    'lightblue': '#add8e6',
                    'f5f5f5': '#f5f5f5',
                    '3b8ee8': '#3b8ee8',
                    '666': '#666666',
                    '333': '#333333',
                    'ccc': '#cccccc'
                },

                debug: true
            };

            Object.assign(this.config, config);
            this._waitForDOM();
        }

        _waitForDOM() {
            if (document.readyState === 'complete' || document.readyState === 'interactive') {
                setTimeout(() => this.init(), 0);
            } else {
                document.addEventListener('DOMContentLoaded', () => this.init());
            }
        }

        parse(element) {
            if (!element || !element.classList) {
                this._log('warn', 'Invalid element:', element);
                return;
            }

            const normal = [];
            const hover = [];

            Array.from(element.classList).forEach(className => {
                if (className.startsWith('hover-')) {
                    hover.push(className.slice(6));
                } else {
                    normal.push(className);
                }
            });

            normal.forEach(className => this._processClass(element, className));

            if (hover.length) {
                const original = {};
                element.addEventListener('mouseenter', () => {
                    hover.forEach(className => {
                        const changes = this._processClass(element, className, true);
                        Object.assign(original, changes);
                    });
                });

                element.addEventListener('mouseleave', () => {
                    for (let prop in original) {
                        element.style[prop] = original[prop];
                    }
                });
            }
        }

        _processClass(element, className, isHover = false) {
            const reverted = {};

            for (const [prefix, config] of Object.entries(this.config.prefixes)) {
                if (typeof config === 'object' && !prefix.endsWith('-') && className === prefix) {
                    if (isHover) reverted[config.property] = element.style[config.property];
                    this._applyStyle(element, config.property, config.value);
                    return reverted;
                }
            }

            for (const [prefix, property] of Object.entries(this.config.prefixes)) {
                if (prefix.endsWith('-') && className.startsWith(prefix)) {
                    const value = className.substring(prefix.length);
                    const parsedValue = this._parseValue(property, value);
                    if (isHover) {
                        if (Array.isArray(property)) {
                            property.forEach(p => reverted[p] = element.style[p]);
                        } else {
                            reverted[property] = element.style[property];
                        }
                    }
                    this._applyStyle(element, property, parsedValue);
                    return reverted;
                }
            }

            return reverted;
        }

        _applyStyle(element, property, value) {
            if (value === undefined || value === null) return;

            if (Array.isArray(property)) {
                property.forEach(prop => {
                    element.style[prop] = value;
                });
            } else {
                element.style[property] = value;
            }
        }

        _parseValue(property, value) {
            if (property === 'border') {
                return value.replace(/-/g, ' ');
            }

            if (property === 'backgroundColor' || property === 'borderColor' || property === 'color') {
                if (this.config.colors[value]) {
                    return this.config.colors[value];
                }

                if (/^#?[0-9a-fA-F]{3,6}$/.test(value)) {
                    return value.startsWith('#') ? value : `#${value}`;
                }

                if (/^[0-9a-fA-F]{3}$/.test(value)) {
                    const hex = value.split('').map(c => c + c).join('');
                    return `#${hex}`;
                }
            }

            if (property === 'backgroundImage') {
                const parts = value.split('-');
                const directions = [
                    'to left', 'to right', 'to top', 'to bottom',
                    'left', 'right', 'top', 'bottom',
                    '45deg', '135deg', '90deg', '180deg'
                ];

                let direction = 'to right';
                let colorStartIndex = 0;

                if (parts.length > 1) {
                    let firstTwo = parts[0] + ' ' + parts[1];
                    if (directions.includes(firstTwo)) {
                        direction = firstTwo;
                        colorStartIndex = 2;
                    }
                }

                if (colorStartIndex === 0 && directions.includes(parts[0])) {
                    direction = parts[0];
                    colorStartIndex = 1;
                }

                const colors = parts.slice(colorStartIndex).map(c => {
                    if (this.config.colors[c]) return this.config.colors[c];
                    if (/^#?[0-9a-fA-F]{3,6}$/.test(c)) return c.startsWith('#') ? c : `#${c}`;
                    return c;
                });

                return `linear-gradient(${direction}, ${colors.join(', ')})`;
            }

            if (property === 'boxShadow' && value.startsWith('rgba-')) {
                const parts = value.substring(5).split('-');
                if (parts.length === 4) {
                    let alpha = parts[3];
                    if (/^0[1-9]$/.test(alpha)) alpha = `0.${alpha[1]}`;
                    else if (/^[1-9]\d*$/.test(alpha)) alpha = Math.min(parseInt(alpha), 100) / 100;
                    return `0 2px 8px rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`;
                }
            }

            if (property === 'opacity') {
                if (/^\d+$/.test(value)) {
                    const num = parseInt(value);
                    return num <= 100 ? (num / 100).toString() : '1';
                }
            }

            if ((typeof property === 'string' && property.includes('padding')) ||
                (Array.isArray(property) && property.some(p => p.includes('padding')))) {
                if (!isNaN(value)) return value + 'px';
            }

            if (this.config.units[property] && !isNaN(value)) {
                return value + this.config.units[property];
            }

            if (property === 'transition') {
                const map = {
                    'all': 'all',
                    'colors': 'background-color, color',
                    'opacity': 'opacity',
                    'transform': 'transform'
                };

                // Check if value includes duration
                const match = value.match(/^([a-z]+)-(\d+(ms|s))$/); // e.g. 'all-1s' or 'colors-500ms'
                if (match) {
                    const [, type, duration] = match;
                    const target = map[type];
                    if (target) return `${target} ${duration} ease`;
                }

                // If just a basic keyword (e.g. 'all', 'colors')
                const target = map[value];
                if (target) return `${target} 0.3s ease`;
            }


            return value;

        }

        init() {
            if (!document.body) {
                this._log('error', 'document.body not available');
                return;
            }

            document.querySelectorAll('[class]').forEach(el => this.parse(el));
            this._initObserver();

            this._log('log', 'Initialized successfully');
        }

        _initObserver() {
            try {
                this.observer = new MutationObserver(mutations => {
                    mutations.forEach(mutation => {
                        mutation.addedNodes.forEach(node => {
                            if (node.nodeType === 1 && node.classList) {
                                this.parse(node);
                            }
                        });
                    });
                });

                this.observer.observe(document.body, {
                    subtree: true,
                    childList: true
                });
            } catch (e) {
                this._log('error', 'Observer failed:', e);
            }
        }

        _log(level, ...args) {
            if (this.config.debug) {
                console[level](...args);
            }
        }
    }

    window.StyleParser = new StyleParser();
})();


