// // //try -- working
// class TableComponent {
//   static init() {
//     const tables = document.querySelectorAll('[data-component="table"]');
//     tables.forEach((table) => {
//       const config = this.extractInlineConfig(table);
//       this.applyStyle(table, config);
//     });
//   }

//   static getDefaultConfig() {
//     return {
//       backgroundColor: '#fff',
//       color: '#000',
//       border: '1px solid #ccc',
//       cellPadding: '8px',
//       cellFontSize: '14px',
//       headerFontSize: '16px',
//       textAlign: 'center',
//       striped: false,
//       stripedColor: '#f9f9f9',
//       hoverRowColor: null,
//       hoverTextColor: null,
//       headerStyle: {
//         backgroundColor: '',
//         color: '',
//         fontWeight: 'bold',
//         hoverBg: '',
//         hoverColor: '',
//       },
//       columnColors: {},
//       altColsColor: null,
//       lastRowBackground: '',
//       lastRowColor: '',
//     };
//   }

//   static extractInlineConfig(table) {
//     const config = this.getDefaultConfig();
//     const classList = table.className.split(' ').filter(Boolean);

//     classList.forEach((cls) => {
//       if (cls.startsWith('bg-')) config.backgroundColor = cls.slice(3);
//       else if (cls.startsWith('color-')) config.color = cls.slice(6);
//       else if (cls.startsWith('border-')) config.border = cls.slice(7).replace(/_/g, ' ');
//       else if (cls.startsWith('cellPad-')) config.cellPadding = cls.slice(8);
//       else if (cls.startsWith('cellPadding-')) config.cellPadding = cls.slice(12);
//       else if (cls.startsWith('cellFontSize-')) config.cellFontSize = cls.slice(13);
//       else if (cls.startsWith('header-fontSize-')) config.headerFontSize = cls.slice(16);
//       else if (cls.startsWith('textAlign-')) config.textAlign = cls.slice(10);
//       else if (cls === 'striped') config.striped = true;
//       else if (cls.startsWith('stripedColor-')) config.stripedColor = cls.slice(13);
//       else if (cls.startsWith('hoverRowColor-')) config.hoverRowColor = cls.slice(14);
//       else if (cls.startsWith('hoverTextColor-')) config.hoverTextColor = cls.slice(15);
//       else if (cls.startsWith('headerBg-')) config.headerStyle.backgroundColor = cls.slice(9);
//       else if (cls.startsWith('headerColor-')) config.headerStyle.color = cls.slice(12);
//       else if (cls.startsWith('headerHoverBg-')) config.headerStyle.hoverBg = cls.slice(14);
//       else if (cls.startsWith('headerHoverColor-')) config.headerStyle.hoverColor = cls.slice(17);
//       else if (cls.startsWith('headerFontWeight-')) config.headerStyle.fontWeight = cls.slice(17);
//       else if (cls.startsWith('col-') && cls.includes('-bgcolor-')) {
//         const match = cls.match(/^col-(\d+)-bgcolor-(.+)$/);
//         if (match) {
//           const [, index, color] = match;
//           config.columnColors[+index] = color;
//         }
//       } else if (cls.startsWith('altColsColor-')) {
//         const parts = cls.split('-');
//         if (parts.length >= 3) config.altColsColor = [parts[1], parts[2]];
//       } else if (cls.startsWith('lastRowBg-')) {
//         config.lastRowBackground = cls.slice(11);
//       } else if (cls.startsWith('lastRowColor-')) {
//         config.lastRowColor = cls.slice(13);
//       }
//     });

//     return config;
//   }

//   static deepMerge(target, source) {
//     for (const key in source) {
//       if (
//         source[key] &&
//         typeof source[key] === 'object' &&
//         !Array.isArray(source[key])
//       ) {
//         if (!target[key]) target[key] = {};
//         this.deepMerge(target[key], source[key]);
//       } else {
//         target[key] = source[key];
//       }
//     }
//     return target;
//   }

//   static applyStyle(table, customConfig) {
//     const config = this.deepMerge(this.getDefaultConfig(), customConfig);

//     Object.assign(table.style, {
//       borderCollapse: 'collapse',
//       width: '100%',
//       backgroundColor: config.backgroundColor,
//       color: config.color,
//       fontSize: config.cellFontSize,
//       border: config.border,
//     });

//     const rows = table.querySelectorAll('tr');
//     rows.forEach((row, rowIndex) => {
//       const cells = row.querySelectorAll('th, td');
//       const isHeaderRow = rowIndex === 0;

//       // Store original styles before any modifications
//       const originalRowBg = row.style.backgroundColor;
//       const originalRowColor = row.style.color;

//       if (!isHeaderRow && config.striped && rowIndex % 2 !== 0) {
//         row.style.backgroundColor = config.stripedColor;
//       } else if (!isHeaderRow) {
//         row.style.backgroundColor = config.backgroundColor;
//       }

//       cells.forEach((cell, cellIndex) => {
//         const isHeader = cell.tagName.toLowerCase() === 'th';
//         const columnColor = config.columnColors[cellIndex];
//         const altColColor = config.altColsColor ? config.altColsColor[cellIndex % 2] : null;

//         const cellStyles = {
//           border: config.border,
//           padding: config.cellPadding,
//           fontSize: isHeader ? config.headerFontSize : config.cellFontSize,
//           fontWeight: isHeader ? (config.headerStyle.fontWeight || 'bold') : 'normal',
//           textAlign: config.textAlign,
//         };

//         if (isHeader) {
//           if (config.headerStyle.backgroundColor) cellStyles.backgroundColor = config.headerStyle.backgroundColor;
//           if (config.headerStyle.color) cellStyles.color = config.headerStyle.color;
//         } else {
//           if (columnColor) cellStyles.backgroundColor = columnColor;
//           else if (altColColor) cellStyles.backgroundColor = altColColor;
//         }

//         Object.assign(cell.style, cellStyles);
//       });

//       if (!isHeaderRow) {
//         const currentBg = window.getComputedStyle(row).backgroundColor;
//         const currentColor = window.getComputedStyle(row).color;

//         const hasHoverRow = config.hoverRowColor && config.hoverRowColor.toLowerCase() !== 'none';
//         const hasHoverText = config.hoverTextColor && config.hoverTextColor.toLowerCase() !== 'none';

//         if (hasHoverRow || hasHoverText) {
//           row.addEventListener('mouseenter', () => {
//             if (hasHoverRow) row.style.backgroundColor = config.hoverRowColor;
//             if (hasHoverText) row.style.color = config.hoverTextColor;
//           });

//           row.addEventListener('mouseleave', () => {
//             row.style.backgroundColor = currentBg;
//             row.style.color = currentColor;
//           });
//         } else {
//           // Ensure no hover effects interfere
//           row.onmouseenter = row.onmouseleave = null;
//           row.style.backgroundColor = currentBg;
//           row.style.color = currentColor;
//         }
//       }
//     });

//     if (rows.length > 1) {
//       const lastRow = rows[rows.length - 1];
//       if (config.lastRowBackground && config.lastRowBackground.toLowerCase() !== 'none') {
//         lastRow.style.backgroundColor = config.lastRowBackground;
//       }
//       if (config.lastRowColor && config.lastRowColor.toLowerCase() !== 'none') {
//         lastRow.style.color = config.lastRowColor;
//       }
//     }

//     const headerRow = table.querySelector('tr');
//     if (headerRow) {
//       const headerCells = headerRow.querySelectorAll('th');
//       const originalBg = [], originalColor = [];

//       headerCells.forEach((cell, i) => {
//         originalBg[i] = cell.style.backgroundColor;
//         originalColor[i] = cell.style.color;
//       });

//       const hasHeaderHoverBg = config.headerStyle.hoverBg && config.headerStyle.hoverBg.toLowerCase() !== 'none';
//       const hasHeaderHoverColor = config.headerStyle.hoverColor && config.headerStyle.hoverColor.toLowerCase() !== 'none';

//       if (hasHeaderHoverBg || hasHeaderHoverColor) {
//         headerRow.addEventListener('mouseenter', () => {
//           headerCells.forEach((cell) => {
//             if (hasHeaderHoverBg) cell.style.backgroundColor = config.headerStyle.hoverBg;
//             if (hasHeaderHoverColor) cell.style.color = config.headerStyle.hoverColor;
//           });
//         });

//         headerRow.addEventListener('mouseleave', () => {
//           headerCells.forEach((cell, i) => {
//             cell.style.backgroundColor = originalBg[i];
//             cell.style.color = originalColor[i];
//           });
//         });
//       }
//     }
//   }
// }

// const TableLib = (() => {
//   const customConfigs = [];

//   function applyCustomStyles() {
//     customConfigs.forEach(({ selector, config }) => {
//       document.querySelectorAll(selector).forEach((table) => {
//         TableComponent.applyStyle(table, config);
//       });
//     });
//   }

//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', () => {
//       TableComponent.init();
//       applyCustomStyles();
//     });
//   } else {
//     TableComponent.init();
//     applyCustomStyles();
//   }

//   return {
//     setCustomTable(selector, userConfig) {
//       const convertedConfig = {
//         ...userConfig,
//         lastRowBackground: userConfig.lastRowBg || userConfig.lastRowBackground,
//         lastRowColor: userConfig.lastRowColor,
//         hoverRowColor: userConfig.hoverLastRow || userConfig.hoverRowColor,
//         hoverTextColor: userConfig.hoverLastRowText || userConfig.hoverTextColor,
//         altColsColor: userConfig.altColsColor ?
//           (Array.isArray(userConfig.altColsColor) ?
//             userConfig.altColsColor :
//             userConfig.altColsColor.split('-')) :
//           null,
//         columnColors: userConfig.colColor ?
//           { 0: userConfig.colColor } :
//           (userConfig.columnColors || {})
//       };

//       delete convertedConfig.lastRowBg;
//       delete convertedConfig.hoverLastRow;
//       delete convertedConfig.hoverLastRowText;
//       delete convertedConfig.colColor;

//       customConfigs.push({
//         selector,
//         config: TableComponent.deepMerge(TableComponent.getDefaultConfig(), convertedConfig)
//       });

//       if (document.readyState === 'complete') {
//         document.querySelectorAll(selector).forEach((table) => {
//           TableComponent.applyStyle(table, convertedConfig);
//         });
//       }
//     }
//   };
// })();

// // --- PATCH START ---
// // Fix for hover issues when hover styles aren't defined
// //if the below part is commented then too the code will run smoothly
// (function fixHoverBehavior() {
//   const tables = document.querySelectorAll('\[data-component="table"]');

//   tables.forEach(table => {
//     const config = TableComponent.extractInlineConfig(table);
//     const rows = table.querySelectorAll('tr');

//     rows.forEach((row, rowIndex) => {
//       if (rowIndex === 0) return; // Skip header row

//       const hasHover = (config.hoverRowColor && config.hoverRowColor !== 'none') ||
//         (config.hoverTextColor && config.hoverTextColor !== 'none');

//       if (!hasHover) {
//         // Capture current computed styles
//         const bgColor = window.getComputedStyle(row).backgroundColor;
//         const textColor = window.getComputedStyle(row).color;

//         // Prevent any hover effects
//         row.onmouseenter = function () {
//           this.style.backgroundColor = bgColor;
//           this.style.color = textColor;
//         };
//         row.onmouseleave = function () {
//           this.style.backgroundColor = bgColor;
//           this.style.color = textColor;
//         };
//       }
//     });

//   });
// })();
// //comment till here if wanted

// // Fix for last row styling
// document.addEventListener('DOMContentLoaded', function () {
//   setTimeout(function () {
//     const tables = document.querySelectorAll('\[data-component="table"]');

//     tables.forEach(function (table) {
//       const classes = table.className.split(' ');
//       const config = {
//         lastRowBg: getValueFromClass(classes, 'lastRowBg-'),
//         lastRowColor: getValueFromClass(classes, 'lastRowColor-'),
//         hasBorder: classes.includes('border-solid') || table.style.border,
//         hoverLastRow: getValueFromClass(classes, 'hoverLastRow-'),
//         hoverLastRowText: getValueFromClass(classes, 'hoverLastRowText-')
//       };

//       const rows = table.querySelectorAll('tr');
//       if (rows.length < 2) return;

//       const lastRow = rows[rows.length - 1];
//       const cells = lastRow.querySelectorAll('td, th');

//       if (config.hasBorder) {
//         const computedBorder = window.getComputedStyle(table).border;
//         cells.forEach(cell => {
//           cell.style.border = computedBorder;
//         });
//       }

//       if (config.lastRowBg) {
//         lastRow.style.backgroundColor = config.lastRowBg;
//       }
//       if (config.lastRowColor) {
//         lastRow.style.color = config.lastRowColor;
//       }

//       // --- NEW ADDITION START: hoverLastRow and hoverLastRowText ---
//       if (config.hoverLastRow || config.hoverLastRowText) {
//         const originalBg = window.getComputedStyle(lastRow).backgroundColor;
//         const originalText = window.getComputedStyle(lastRow).color;

//         lastRow.addEventListener('mouseenter', function () {
//           if (config.hoverLastRow) this.style.backgroundColor = config.hoverLastRow;
//           if (config.hoverLastRowText) this.style.color = config.hoverLastRowText;
//         });

//         lastRow.addEventListener('mouseleave', function () {
//           this.style.backgroundColor = originalBg;
//           this.style.color = originalText;
//         });
//       }
//       // --- NEW ADDITION END ---

//     });

//     function getValueFromClass(classes, prefix) {
//       const classMatch = classes.find(c => c.startsWith(prefix));
//       return classMatch ? classMatch.replace(prefix, '') : null;
//     }

//   }, 100);             // 100 means , run after 100 milliseconds
// });
// // --- PATCH END ---


// // --- TABLE WRAPPER: SCROLL ONLY THIS SECTION ---
// // Inject CSS styles dynamically for table wrapper and table
// (function addTableWrapperStyles() {
//   const style = document.createElement('style');
//   style.innerHTML = `
//     * {
//       box-sizing: border-box;
//     }
//     .table-wrapper {
//       overflow-x: auto;
//       width: 100%;
//     }
//     [data-component="table"] {
//       width: max-content;
//       min-width: 100%;
//       display: table;
//       border-collapse: collapse;
//     }
//   `;
//   document.head.appendChild(style);
// })();

// // Wrap tables with wrapper div having horizontal scroll
// document.addEventListener('DOMContentLoaded', function () {
//   const tables = document.querySelectorAll('[data-component="table"]');

//   tables.forEach(table => {
//     // Skip if already wrapped
//     if (table.parentElement && table.parentElement.classList.contains('table-wrapper')) return;

//     // Create wrapper div
//     const wrapper = document.createElement('div');
//     wrapper.classList.add('table-wrapper');

//     // Insert wrapper and move table inside it
//     table.parentNode.insertBefore(wrapper, table);
//     wrapper.appendChild(table);
//   });
// });

// // --- Sticky Table Features (works without separate CSS) ---
// // Add this at the end of your table.js file



// (function () {
//   function initializeStickyFeatures() {
//     document.querySelectorAll('table[data-component="table"]').forEach(table => {
//       if (table.dataset.stickyInitialized) return;
//       table.dataset.stickyInitialized = "true";

//       // Get the table's style configuration
//       const config = TableComponent.extractInlineConfig(table);

//       Object.assign(table.style, {
//         borderCollapse: 'separate',
//         borderSpacing: '0',
//         width: '100%'
//       });

//       // Wrapper creation remains unchanged
//       let wrapper = table.parentElement;
//       if (!wrapper.classList.contains('sticky-table-wrapper')) {
//         const newWrapper = document.createElement('div');
//         Object.assign(newWrapper.style, {
//           overflow: 'auto',
//           maxHeight: '500px',
//           position: 'relative',
//           display: 'block'
//         });
//         newWrapper.className = 'sticky-table-wrapper';
//         table.parentNode.insertBefore(newWrapper, table);
//         newWrapper.appendChild(table);
//         wrapper = newWrapper;
//       }

//       // Sticky header with proper color handling
//       if (table.getAttribute('data-sticky-header')) {
//         const headerRow = table.querySelector('tr:first-child');
//         if (headerRow) {
//           // Use header background from config if specified, otherwise computed style
//           const headerBg = config.headerStyle.backgroundColor ||
//             window.getComputedStyle(headerRow).backgroundColor;

//           Object.assign(headerRow.style, {
//             position: 'sticky',
//             top: '0',
//             zIndex: '10',
//             backgroundColor: headerBg === 'rgba(0, 0, 0, 0)' ? '#fff' : headerBg
//           });

//           // Cell width matching remains unchanged
//           const dataRows = Array.from(table.querySelectorAll('tr')).slice(1);
//           if (dataRows.length) {
//             const headerCells = headerRow.querySelectorAll('th, td');
//             dataRows.forEach(row => {
//               const cells = row.querySelectorAll('td');
//               cells.forEach((cell, i) => {
//                 if (headerCells[i]) {
//                   headerCells[i].style.minWidth = `${cell.offsetWidth}px`;
//                 }
//               });
//             });
//           }
//         }
//       }

//       // Sticky column with proper color handling
//       if (table.hasAttribute('data-sticky-col')) {
//         const rows = table.querySelectorAll('tr');
//         rows.forEach(row => {
//           const firstCell = row.querySelector('th, td');
//           if (firstCell) {
//             // Use column color from config if specified, otherwise computed style
//             const colIndex = Array.from(row.children).indexOf(firstCell);
//             const colBg = config.columnColors[colIndex] ||
//               config.altColsColor?.[colIndex % 2] ||
//               window.getComputedStyle(firstCell).backgroundColor;

//             Object.assign(firstCell.style, {
//               position: 'sticky',
//               left: '0',
//               zIndex: '9',
//               backgroundColor: colBg === 'rgba(0, 0, 0, 0)' ? '#fff' : colBg
//             });
//           }
//         });
//       }
//     });
//   }

//   // Rest of the code remains exactly the same
//   function init() {
//     initializeStickyFeatures();
//     window.addEventListener('resize', initializeStickyFeatures);
//   }

//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', init);
//   } else {
//     init();
//   }

//   const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       mutation.addedNodes.forEach((node) => {
//         if (node.nodeType === 1) {
//           const tables = node.querySelectorAll
//             ? node.querySelectorAll('table[data-component="table"]')
//             : [];
//           if (node.matches('table[data-component="table"]')) {
//             tables.push(node);
//           }
//           if (tables.length) {
//             initializeStickyFeatures();
//           }
//         }
//       });
//     });
//   });

//   observer.observe(document.body, {
//     childList: true,
//     subtree: true
//   });
// })();

// // //try -- working ends











// //try - sorting, filtering, pagination
// // [Previous code remains exactly the same until this point - all your original code is preserved]

// // ====================
// // NEW FUNCTIONALITY ADDED BELOW
// // ====================

// // Sorting functionality
// TableComponent.addSorting = function (table) {
//   const headers = table.querySelectorAll('th[data-sortable]');

//   headers.forEach(header => {
//     header.style.cursor = 'pointer';
//     header.addEventListener('click', () => {
//       const columnIndex = Array.from(header.parentNode.children).indexOf(header);
//       const isAscending = header.classList.contains('sorted-asc');
//       const sortType = header.getAttribute('data-sort-type') || 'text';

//       // Remove previous sort indicators
//       headers.forEach(h => {
//         h.classList.remove('sorted-asc', 'sorted-desc');
//       });

//       // Set new sort indicator
//       header.classList.add(isAscending ? 'sorted-desc' : 'sorted-asc');

//       // Sort the table
//       this.sortTable(table, columnIndex, !isAscending, sortType);
//     });
//   });
// };

// TableComponent.sortTable = function (table, columnIndex, ascending, sortType) {
//   const tbody = table.querySelector('tbody');
//   const rows = Array.from(tbody.querySelectorAll('tr'));

//   rows.sort((a, b) => {
//     const aCell = a.cells[columnIndex];
//     const bCell = b.cells[columnIndex];

//     let aValue = aCell.textContent.trim();
//     let bValue = bCell.textContent.trim();

//     if (sortType === 'number') {
//       aValue = parseFloat(aValue) || 0;
//       bValue = parseFloat(bValue) || 0;
//       return ascending ? aValue - bValue : bValue - aValue;
//     } else if (sortType === 'date') {
//       aValue = new Date(aValue);
//       bValue = new Date(bValue);
//       return ascending ? aValue - bValue : bValue - aValue;
//     } else {
//       return ascending
//         ? aValue.localeCompare(bValue)
//         : bValue.localeCompare(aValue);
//     }
//   });

//   // Reattach sorted rows
//   rows.forEach(row => tbody.appendChild(row));
// };

// // Filtering functionality
// TableComponent.addFiltering = function (table) {
//   const config = this.extractInlineConfig(table);
//   const filterRow = document.createElement('tr');
//   filterRow.className = 'table-filter-row';

//   const headers = table.querySelectorAll('th');
//   headers.forEach((header, index) => {
//     const filterCell = document.createElement('td');
//     const filterable = header.hasAttribute('data-filterable');

//     if (filterable) {
//       const input = document.createElement('input');
//       input.type = 'text';
//       input.placeholder = 'Filter...';
//       input.style.width = '100%';
//       input.style.boxSizing = 'border-box';
//       input.style.padding = config.cellPadding;
//       input.style.fontSize = config.cellFontSize;
//       input.style.border = config.border;

//       input.addEventListener('input', () => {
//         this.filterTable(table, index, input.value);
//       });

//       filterCell.appendChild(input);
//     }

//     filterRow.appendChild(filterCell);
//   });

//   table.querySelector('thead').appendChild(filterRow);
// };

// TableComponent.filterTable = function (table, columnIndex, filterValue) {
//   const rows = table.querySelectorAll('tbody tr');
//   const filterLower = filterValue.toLowerCase();

//   rows.forEach(row => {
//     const cell = row.cells[columnIndex];
//     const cellText = cell.textContent.toLowerCase();
//     row.style.display = cellText.includes(filterLower) ? '' : 'none';
//   });
// };


// // Pagination functionality
// TableComponent.addPagination = function (table) {
//   const config = this.extractPaginationConfig(table);
//   if (!config.enabled) return;

//   const wrapper = table.closest('.table-wrapper') || table.parentNode;
//   const paginationContainer = document.createElement('div');
//   paginationContainer.className = 'table-pagination';

//   // Create pagination controls
//   const prevButton = document.createElement('button');
//   prevButton.textContent = 'Previous';
//   prevButton.className = 'pagination-prev';

//   const nextButton = document.createElement('button');
//   nextButton.textContent = 'Next';
//   nextButton.className = 'pagination-next';

//   const pageInfo = document.createElement('span');
//   pageInfo.className = 'pagination-info';

//   // Create rows per page selector
//   const rowsPerPageSelect = document.createElement('select');
//   rowsPerPageSelect.className = 'rows-per-page-select';
//   [5, 10, 15, 20, 25].forEach(option => {
//     const opt = document.createElement('option');
//     opt.value = option;
//     opt.textContent = `${option}`;
//     if (option === config.rowsPerPage) {
//       opt.selected = true;
//     }
//     rowsPerPageSelect.appendChild(opt);
//   });

//   const rowsPerPageContainer = document.createElement('div');
//   rowsPerPageContainer.className = 'rows-per-page-container';
//   // rowsPerPageContainer.appendChild(document.createTextNode('Show: '));
//   rowsPerPageContainer.appendChild(rowsPerPageSelect);

//   paginationContainer.appendChild(prevButton);
//   paginationContainer.appendChild(pageInfo);
//   paginationContainer.appendChild(nextButton);
//   paginationContainer.appendChild(rowsPerPageContainer);
//   wrapper.appendChild(paginationContainer);

//   // Initialize pagination
//   const rows = Array.from(table.querySelectorAll('tbody tr'));
//   let currentPage = 1;
//   let rowsPerPage = config.rowsPerPage;
//   let totalPages = Math.ceil(rows.length / rowsPerPage);

//   const updatePagination = () => {
//     // Recalculate total pages when rows per page changes
//     totalPages = Math.ceil(rows.length / rowsPerPage);

//     // Reset to first page if current page would be out of bounds
//     if (currentPage > totalPages && totalPages > 0) {
//       currentPage = totalPages;
//     }

//     // Update page info
//     pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

//     // Show/hide rows based on current page
//     const startIndex = (currentPage - 1) * rowsPerPage;
//     const endIndex = startIndex + rowsPerPage;

//     rows.forEach((row, index) => {
//       row.style.display = (index >= startIndex && index < endIndex) ? '' : 'none';
//     });

//     // Update button states
//     prevButton.disabled = currentPage === 1;
//     nextButton.disabled = currentPage === totalPages || totalPages === 0;
//   };

//   // Event listeners
//   prevButton.addEventListener('click', () => {
//     if (currentPage > 1) {
//       currentPage--;
//       updatePagination();
//     }
//   });

//   nextButton.addEventListener('click', () => {
//     if (currentPage < totalPages) {
//       currentPage++;
//       updatePagination();
//     }
//   });

//   rowsPerPageSelect.addEventListener('change', (e) => {
//     rowsPerPage = parseInt(e.target.value);
//     currentPage = 1; // Reset to first page when changing rows per page
//     updatePagination();
//   });

//   // Initial update
//   updatePagination();
// };


// TableComponent.extractPaginationConfig = function (table) {
//   const defaultConfig = {
//     enabled: table.hasAttribute('data-paginate'),
//     rowsPerPage: parseInt(table.getAttribute('data-rows-per-page')) || 10
//   };

//   return defaultConfig;
// };

// // Enhanced init function to include new features
// // const originalInit = TableComponent.init;
// TableComponent.init = function () {
//   originalInit.call(this);

//   const tables = document.querySelectorAll('[data-component="table"]');
//   tables.forEach(table => {
//     // Add sorting if any sortable headers
//     if (table.querySelector('th[data-sortable]')) {
//       this.addSorting(table);
//     }

//     // Add filtering if any filterable headers
//     if (table.querySelector('th[data-filterable]')) {
//       this.addFiltering(table);
//     }

//     // Add pagination if enabled
//     if (table.hasAttribute('data-paginate')) {
//       this.addPagination(table);
//     }
//   });
// };

// // Add CSS for new features
// (function addFeatureStyles() {
//   const style = document.createElement('style');
//   style.innerHTML = `
//     th[data-sortable]::after {
//       content: ' ↕';
//       font-size: 0.8em;
//     }
//     th.sorted-asc::after {
//       content: ' ↑';
//     }
//     th.sorted-desc::after {
//       content: ' ↓';
//     }
//     .table-filter-row input {
//       margin: 0;
//     }
//     .table-pagination {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 10px;
//       margin-top: 10px;
//     }
//     .table-pagination button {
//       padding: 5px 10px;
//       cursor: pointer;
//     }
//     .table-pagination button:disabled {
//       opacity: 0.5;
//       cursor: not-allowed;
//     }
//   `;
//   document.head.appendChild(style);
// })();

// // [All remaining original code stays exactly the same - including TableLib, patches, and sticky features]





































// // [Previous code remains exactly the same until this point]

// // ====================
// // NEW EDITABLE TABLE FUNCTIONALITY
// // ====================

// TableComponent.addEditableFeatures = function(table) {
//   const config = this.extractInlineConfig(table);
//   const isEditable = table.hasAttribute('data-editable');
//   const isViewOnly = table.hasAttribute('data-view-only');

//   if (!isEditable && !isViewOnly) return;

//   // Add action column if needed
//   if (isEditable && !table.querySelector('th[data-action-column]')) {
//     this.addActionColumn(table);
//   }

//   // Add select checkboxes if needed
//   if (isEditable && table.hasAttribute('data-selectable')) {
//     this.addSelectCheckboxes(table);
//   }

//   // Add "Add Row" button if editable
//   if (isEditable) {
//     this.addAddRowButton(table);
//   }

//   // Make cells editable if not view-only
//   if (isEditable && !isViewOnly) {
//     this.makeCellsEditable(table);
//   }
// };

// TableComponent.addActionColumn = function(table) {
//   // Add header for action column
//   const headerRow = table.querySelector('tr');
//   if (headerRow) {
//     const actionHeader = document.createElement('th');
//     actionHeader.setAttribute('data-action-column', 'true');
//     actionHeader.textContent = 'Actions';
//     headerRow.appendChild(actionHeader);
//   }

//   // Add action buttons to each row
//   const rows = table.querySelectorAll('tbody tr');
//   rows.forEach(row => {
//     const actionCell = document.createElement('td');

//     const editButton = document.createElement('button');
//     editButton.className = 'table-edit-btn';
//     editButton.textContent = 'Edit';

//     const deleteButton = document.createElement('button');
//     deleteButton.className = 'table-delete-btn';
//     deleteButton.textContent = 'Delete';

//     actionCell.appendChild(editButton);
//     actionCell.appendChild(deleteButton);
//     row.appendChild(actionCell);

//     // Set up event listeners
//     editButton.addEventListener('click', () => this.toggleEditRow(row));
//     deleteButton.addEventListener('click', () => this.deleteRow(table, row));
//   });
// };

// TableComponent.addSelectCheckboxes = function(table) {
//   // Add header checkbox
//   const headerRow = table.querySelector('tr');
//   if (headerRow) {
//     const selectHeader = document.createElement('th');
//     selectHeader.style.width = '30px';

//     const headerCheckbox = document.createElement('input');
//     headerCheckbox.type = 'checkbox';
//     headerCheckbox.className = 'table-select-all';

//     selectHeader.appendChild(headerCheckbox);
//     headerRow.insertBefore(selectHeader, headerRow.firstChild);

//     // Select all/none functionality
//     headerCheckbox.addEventListener('change', (e) => {
//       const checkboxes = table.querySelectorAll('tbody .table-row-selector');
//       checkboxes.forEach(checkbox => {
//         checkbox.checked = e.target.checked;
//       });
//     });
//   }

//   // Add row checkboxes
//   const rows = table.querySelectorAll('tbody tr');
//   rows.forEach(row => {
//     const selectCell = document.createElement('td');

//     const rowCheckbox = document.createElement('input');
//     rowCheckbox.type = 'checkbox';
//     rowCheckbox.className = 'table-row-selector';

//     selectCell.appendChild(rowCheckbox);
//     row.insertBefore(selectCell, row.firstChild);
//   });

//   // Add bulk actions container if it doesn't exist
//   if (!table.parentNode.querySelector('.table-bulk-actions')) {
//     const bulkActions = document.createElement('div');
//     bulkActions.className = 'table-bulk-actions';
//     bulkActions.style.display = 'none';
//     bulkActions.style.margin = '10px 0';

//     const deleteSelectedButton = document.createElement('button');
//     deleteSelectedButton.className = 'table-bulk-delete-btn';
//     deleteSelectedButton.textContent = 'Delete Selected';

//     bulkActions.appendChild(deleteSelectedButton);
//     table.parentNode.insertBefore(bulkActions, table.nextSibling);

//     // Set up event listeners
//     deleteSelectedButton.addEventListener('click', () => this.deleteSelectedRows(table));

//     // Show/hide bulk actions based on selections
//     table.addEventListener('change', (e) => {
//       if (e.target.classList.contains('table-row-selector')) {
//         const selectedCount = table.querySelectorAll('tbody .table-row-selector:checked').length;
//         bulkActions.style.display = selectedCount > 0 ? 'block' : 'none';
//       }
//     });
//   }
// };

// TableComponent.addAddRowButton = function(table) {
//   if (table.parentNode.querySelector('.table-add-row')) return;

//   const addRowContainer = document.createElement('div');
//   addRowContainer.className = 'table-add-row';
//   addRowContainer.style.margin = '10px 0';

//   const addRowButton = document.createElement('button');
//   addRowButton.className = 'table-add-row-btn';
//   addRowButton.textContent = 'Add New Row';

//   addRowContainer.appendChild(addRowButton);
//   table.parentNode.insertBefore(addRowContainer, table);

//   addRowButton.addEventListener('click', () => this.addNewRow(table));
// };

// TableComponent.makeCellsEditable = function(table) {
//   const cells = table.querySelectorAll('td[data-editable="true"]');

//   cells.forEach(cell => {
//     if (!cell.hasAttribute('contenteditable')) {
//       cell.setAttribute('contenteditable', 'true');

//       cell.addEventListener('focus', () => {
//         cell.style.backgroundColor = '#fff9c4';
//         cell.dataset.originalValue = cell.textContent;
//       });

//       cell.addEventListener('blur', () => {
//         cell.style.backgroundColor = '';

//         if (cell.textContent !== cell.dataset.originalValue) {
//           // Cell value changed - trigger change event
//           const event = new Event('cell-change', { bubbles: true });
//           cell.dispatchEvent(event);
//         }
//       });

//       // Prevent line breaks in editable cells
//       cell.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter') {
//           e.preventDefault();
//           cell.blur();
//         }
//       });
//     }
//   });
// };

// TableComponent.toggleEditRow = function(row) {
//   const editButton = row.querySelector('.table-edit-btn');
//   const isEditing = row.classList.toggle('editing');

//   if (isEditing) {
//     editButton.textContent = 'Save';

//     // Make all editable cells contenteditable
//     const cells = row.querySelectorAll('td[data-editable="true"]');
//     cells.forEach(cell => {
//       cell.setAttribute('contenteditable', 'true');
//       cell.focus();
//     });
//   } else {
//     editButton.textContent = 'Edit';

//     // Save changes and make cells non-editable
//     const cells = row.querySelectorAll('td[data-editable="true"]');
//     cells.forEach(cell => {
//       cell.removeAttribute('contenteditable');

//       // Trigger save event if content changed
//       if (cell.dataset.originalValue !== cell.textContent) {
//         const event = new Event('row-save', { bubbles: true });
//         row.dispatchEvent(event);
//       }
//     });
//   }
// };

// TableComponent.deleteRow = function(table, row) {
//   if (confirm('Are you sure you want to delete this row?')) {
//     row.remove();

//     // Trigger delete event
//     const event = new Event('row-delete', { bubbles: true });
//     table.dispatchEvent(event);
//   }
// };

// TableComponent.deleteSelectedRows = function(table) {
//   const selectedRows = table.querySelectorAll('tbody .table-row-selector:checked');

//   if (selectedRows.length === 0) return;

//   if (confirm(`Are you sure you want to delete ${selectedRows.length} selected rows?`)) {
//     selectedRows.forEach(checkbox => {
//       checkbox.closest('tr').remove();
//     });

//     // Uncheck "select all" checkbox
//     table.querySelector('.table-select-all').checked = false;

//     // Hide bulk actions
//     table.parentNode.querySelector('.table-bulk-actions').style.display = 'none';

//     // Trigger delete event
//     const event = new Event('rows-delete', { bubbles: true });
//     table.dispatchEvent(event);
//   }
// };

// TableComponent.addNewRow = function(table) {
//   const tbody = table.querySelector('tbody');
//   if (!tbody) return;

//   const newRow = document.createElement('tr');
//   const headerCells = table.querySelector('thead tr').cells;
//   const hasSelectColumn = table.hasAttribute('data-selectable');
//   const hasActionColumn = table.querySelector('th[data-action-column]');

//   // Create cells based on header structure
//   for (let i = 0; i < headerCells.length; i++) {
//     const headerCell = headerCells[i];

//     // Skip select and action columns (we'll add them separately)
//     if (headerCell.classList.contains('table-select-all') || 
//         headerCell.hasAttribute('data-action-column')) {
//       continue;
//     }

//     const newCell = document.createElement('td');

//     // If cell should be editable
//     if (headerCell.hasAttribute('data-editable')) {
//       newCell.setAttribute('data-editable', 'true');
//       newCell.textContent = 'New Value';
//     } else {
//       newCell.textContent = '-';
//     }

//     newRow.appendChild(newCell);
//   }

//   // Add select checkbox if needed
//   if (hasSelectColumn) {
//     const selectCell = document.createElement('td');
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.className = 'table-row-selector';
//     selectCell.appendChild(checkbox);
//     newRow.insertBefore(selectCell, newRow.firstChild);
//   }

//   // Add action buttons if needed
//   if (hasActionColumn) {
//     const actionCell = document.createElement('td');

//     const editButton = document.createElement('button');
//     editButton.className = 'table-edit-btn';
//     editButton.textContent = 'Edit';

//     const deleteButton = document.createElement('button');
//     deleteButton.className = 'table-delete-btn';
//     deleteButton.textContent = 'Delete';

//     actionCell.appendChild(editButton);
//     actionCell.appendChild(deleteButton);
//     newRow.appendChild(actionCell);

//     // Set up event listeners
//     editButton.addEventListener('click', () => this.toggleEditRow(newRow));
//     deleteButton.addEventListener('click', () => this.deleteRow(table, newRow));
//   }

//   tbody.appendChild(newRow);

//   // Make cells editable if needed
//   if (!table.hasAttribute('data-view-only')) {
//     this.makeCellsEditable(table);
//   }

//   // Trigger add event
//   const event = new Event('row-add', { bubbles: true });
//   table.dispatchEvent(event);
// };

// // Enhanced init function to include editable features
// const originalInit = TableComponent.init;
// TableComponent.init = function() {
//   originalInit.call(this);

//   const tables = document.querySelectorAll('[data-component="table"]');
//   tables.forEach(table => {
//     // Add editable features if needed
//     if (table.hasAttribute('data-editable') || table.hasAttribute('data-view-only')) {
//       this.addEditableFeatures(table);
//     }

//     // [Previous feature initialization remains the same]
//     if (table.querySelector('th[data-sortable]')) {
//       this.addSorting(table);
//     }

//     if (table.querySelector('th[data-filterable]')) {
//       this.addFiltering(table);
//     }

//     if (table.hasAttribute('data-paginate')) {
//       this.addPagination(table);
//     }
//   });
// };

// // Add CSS for editable features
// (function addEditableStyles() {
//   const style = document.createElement('style');
//   style.innerHTML = `
//     /* Action buttons */
//     .table-edit-btn, .table-delete-btn {
//       padding: 3px 8px;
//       margin: 0 2px;
//       cursor: pointer;
//       font-size: 0.9em;
//     }

//     .table-delete-btn {
//       background-color: #ffebee;
//       color: #c62828;
//       border: 1px solid #ef9a9a;
//     }

//     .table-delete-btn:hover {
//       background-color: #ef9a9a;
//     }

//     .table-edit-btn {
//       background-color: #e8f5e9;
//       color: #2e7d32;
//       border: 1px solid #a5d6a7;
//     }

//     .table-edit-btn:hover {
//       background-color: #a5d6a7;
//     }

//     /* Bulk actions */
//     .table-bulk-delete-btn {
//       padding: 5px 10px;
//       background-color: #ffebee;
//       color: #c62828;
//       border: 1px solid #ef9a9a;
//       cursor: pointer;
//     }

//     .table-bulk-delete-btn:hover {
//       background-color: #ef9a9a;
//     }

//     /* Add row button */
//     .table-add-row-btn {
//       padding: 5px 10px;
//       background-color: #e3f2fd;
//       color: #1565c0;
//       border: 1px solid #90caf9;
//       cursor: pointer;
//     }

//     .table-add-row-btn:hover {
//       background-color: #90caf9;
//     }

//     /* Editable cells */
//     td[contenteditable="true"] {
//       outline: 2px dashed #bbdefb;
//     }

//     /* Select checkboxes */
//     .table-row-selector {
//       margin: 0 auto;
//       display: block;
//     }

//     /* Editing state */
//     tr.editing td {
//       background-color: #fff9c4 !important;
//     }
//   `;
//   document.head.appendChild(style);
// })();

// // [All remaining original code stays exactly the same]









































































// try2  -- working.. just header-sticky not working
// class TableComponent {
//   static init() {
//     const tables = document.querySelectorAll('[data-component="table"]');
//     tables.forEach((table) => {
//       const config = this.extractInlineConfig(table);
//       this.applyStyle(table, config);

//       // Initialize all rows as non-editable
//       table.querySelectorAll('tbody tr').forEach(row => {
//         this.disableEditing(row);

//         // Set up edit button if exists
//         const editButton = row.querySelector('.table-edit-btn');
//         if (editButton) {
//           editButton.addEventListener('click', () => this.toggleEditing(row));
//         }
//       });

//       this.initFeatures(table);
//     });
//   }

//   static toggleEditing(row) {
//     const isCurrentlyEditing = row.classList.contains('editing');

//     if (isCurrentlyEditing) {
//       this.disableEditing(row);
//       const event = new Event('row-save', { bubbles: true });
//       row.dispatchEvent(event);
//     } else {
//       this.enableEditing(row);
//     }
//   }

//   static enableEditing(row) {
//     // Make cells editable only when enabling edit mode
//     const cells = row.querySelectorAll('td[data-editable="true"]');
//     cells.forEach(cell => {
//       cell.setAttribute('contenteditable', 'true');
//       cell.style.outline = '2px dashed #bbdefb';

//       cell.addEventListener('focus', () => {
//         cell.style.backgroundColor = '#fff9c4';
//         cell.dataset.originalValue = cell.textContent;
//       });

//       cell.addEventListener('blur', () => {
//         cell.style.backgroundColor = '';
//       });

//       cell.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter') {
//           e.preventDefault();
//           cell.blur();
//         }
//       });
//     });

//     row.classList.add('editing');
//     const editButton = row.querySelector('.table-edit-btn');
//     if (editButton) {
//       editButton.textContent = 'Save';
//     }
//   }

//   static disableEditing(row) {
//     // Make cells non-editable when disabling edit mode
//     const cells = row.querySelectorAll('td[data-editable="true"]');
//     cells.forEach(cell => {
//       cell.removeAttribute('contenteditable');
//       cell.style.outline = 'none';
//       cell.style.backgroundColor = '';

//       // Remove all editable-related event listeners
//       const newCell = cell.cloneNode(true);
//       cell.parentNode.replaceChild(newCell, cell);
//     });

//     row.classList.remove('editing');
//     const editButton = row.querySelector('.table-edit-btn');
//     if (editButton) {
//       editButton.textContent = 'Edit';
//     }
//   }

//   static toggleEditing(row) {
//     if (row.classList.contains('editing')) {
//       this.disableEditing(row);
//       const event = new Event('row-save', { bubbles: true });
//       row.dispatchEvent(event);
//     } else {
//       this.enableEditing(row);
//       const firstEditableCell = row.querySelector('td[data-editable="true"]');
//       if (firstEditableCell) firstEditableCell.focus();
//     }
//   }


//   static initFeatures(table) {
//     // Sorting
//     if (table.querySelector('th[data-sortable]')) {
//       this.addSorting(table);
//     }

//     // Filtering
//     if (table.querySelector('th[data-filterable]')) {
//       this.addFiltering(table);
//     }

//     // Pagination
//     if (table.hasAttribute('data-paginate')) {
//       this.addPagination(table);
//     }

//     // Editable features
//     if (table.hasAttribute('data-editable') || table.hasAttribute('data-view-only')) {
//       this.addEditableFeatures(table);
//     }
//   }

//   /* ========== ORIGINAL STYLING METHODS ========== */
//   static getDefaultConfig() {
//     return {
//       backgroundColor: '#fff',
//       color: '#000',
//       border: '1px solid #ccc',
//       cellPadding: '8px',
//       cellFontSize: '14px',
//       headerFontSize: '16px',
//       textAlign: 'center',
//       striped: false,
//       stripedColor: '#f9f9f9',
//       hoverRowColor: null,
//       hoverTextColor: null,
//       headerStyle: {
//         backgroundColor: '',
//         color: '',
//         fontWeight: 'bold',
//         hoverBg: '',
//         hoverColor: '',
//       },
//       columnColors: {},
//       altColsColor: null,
//       lastRowBackground: '',
//       lastRowColor: '',
//     };
//   }

//   static extractInlineConfig(table) {
//     const config = this.getDefaultConfig();
//     const classList = table.className.split(' ').filter(Boolean);

//     classList.forEach((cls) => {
//       if (cls.startsWith('bg-')) config.backgroundColor = cls.slice(3);
//       else if (cls.startsWith('color-')) config.color = cls.slice(6);
//       else if (cls.startsWith('border-')) config.border = cls.slice(7).replace(/_/g, ' ');
//       else if (cls.startsWith('cellPad-')) config.cellPadding = cls.slice(8);
//       else if (cls.startsWith('cellPadding-')) config.cellPadding = cls.slice(12);
//       else if (cls.startsWith('cellFontSize-')) config.cellFontSize = cls.slice(13);
//       else if (cls.startsWith('header-fontSize-')) config.headerFontSize = cls.slice(16);
//       else if (cls.startsWith('textAlign-')) config.textAlign = cls.slice(10);
//       else if (cls === 'striped') config.striped = true;
//       else if (cls.startsWith('stripedColor-')) config.stripedColor = cls.slice(13);
//       else if (cls.startsWith('hoverRowColor-')) config.hoverRowColor = cls.slice(14);
//       else if (cls.startsWith('hoverTextColor-')) config.hoverTextColor = cls.slice(15);
//       else if (cls.startsWith('headerBg-')) config.headerStyle.backgroundColor = cls.slice(9);
//       else if (cls.startsWith('headerColor-')) config.headerStyle.color = cls.slice(12);
//       else if (cls.startsWith('headerHoverBg-')) config.headerStyle.hoverBg = cls.slice(14);
//       else if (cls.startsWith('headerHoverColor-')) config.headerStyle.hoverColor = cls.slice(17);
//       else if (cls.startsWith('headerFontWeight-')) config.headerStyle.fontWeight = cls.slice(17);
//       else if (cls.startsWith('col-') && cls.includes('-bgcolor-')) {
//         const match = cls.match(/^col-(\d+)-bgcolor-(.+)$/);
//         if (match) {
//           const [, index, color] = match;
//           config.columnColors[+index] = color;
//         }
//       } else if (cls.startsWith('altColsColor-')) {
//         const parts = cls.split('-');
//         if (parts.length >= 3) config.altColsColor = [parts[1], parts[2]];
//       } else if (cls.startsWith('lastRowBg-')) {
//         config.lastRowBackground = cls.slice(11);
//       } else if (cls.startsWith('lastRowColor-')) {
//         config.lastRowColor = cls.slice(13);
//       }
//     });

//     return config;
//   }

//   static deepMerge(target, source) {
//     for (const key in source) {
//       if (
//         source[key] &&
//         typeof source[key] === 'object' &&
//         !Array.isArray(source[key])
//       ) {
//         if (!target[key]) target[key] = {};
//         this.deepMerge(target[key], source[key]);
//       } else {
//         target[key] = source[key];
//       }
//     }
//     return target;
//   }

//   static applyStyle(table, customConfig) {
//     const config = this.deepMerge(this.getDefaultConfig(), customConfig);

//     Object.assign(table.style, {
//       borderCollapse: 'collapse',
//       width: '100%',
//       backgroundColor: config.backgroundColor,
//       color: config.color,
//       fontSize: config.cellFontSize,
//       border: config.border,
//     });

//     const rows = table.querySelectorAll('tr');
//     rows.forEach((row, rowIndex) => {
//       const cells = row.querySelectorAll('th, td');
//       const isHeaderRow = rowIndex === 0;

//       // Store original styles before any modifications
//       const originalRowBg = row.style.backgroundColor;
//       const originalRowColor = row.style.color;

//       if (!isHeaderRow && config.striped && rowIndex % 2 !== 0) {
//         row.style.backgroundColor = config.stripedColor;
//       } else if (!isHeaderRow) {
//         row.style.backgroundColor = config.backgroundColor;
//       }

//       cells.forEach((cell, cellIndex) => {
//         const isHeader = cell.tagName.toLowerCase() === 'th';
//         const columnColor = config.columnColors[cellIndex];
//         const altColColor = config.altColsColor ? config.altColsColor[cellIndex % 2] : null;

//         const cellStyles = {
//           border: config.border,
//           padding: config.cellPadding,
//           fontSize: isHeader ? config.headerFontSize : config.cellFontSize,
//           fontWeight: isHeader ? (config.headerStyle.fontWeight || 'bold') : 'normal',
//           textAlign: config.textAlign,
//         };

//         if (isHeader) {
//           if (config.headerStyle.backgroundColor) cellStyles.backgroundColor = config.headerStyle.backgroundColor;
//           if (config.headerStyle.color) cellStyles.color = config.headerStyle.color;
//         } else {
//           if (columnColor) cellStyles.backgroundColor = columnColor;
//           else if (altColColor) cellStyles.backgroundColor = altColColor;
//         }

//         Object.assign(cell.style, cellStyles);
//       });

//       if (!isHeaderRow) {
//         const currentBg = window.getComputedStyle(row).backgroundColor;
//         const currentColor = window.getComputedStyle(row).color;

//         const hasHoverRow = config.hoverRowColor && config.hoverRowColor.toLowerCase() !== 'none';
//         const hasHoverText = config.hoverTextColor && config.hoverTextColor.toLowerCase() !== 'none';

//         if (hasHoverRow || hasHoverText) {
//           row.addEventListener('mouseenter', () => {
//             if (hasHoverRow) row.style.backgroundColor = config.hoverRowColor;
//             if (hasHoverText) row.style.color = config.hoverTextColor;
//           });

//           row.addEventListener('mouseleave', () => {
//             row.style.backgroundColor = currentBg;
//             row.style.color = currentColor;
//           });
//         } else {
//           // Ensure no hover effects interfere
//           row.onmouseenter = row.onmouseleave = null;
//           row.style.backgroundColor = currentBg;
//           row.style.color = currentColor;
//         }
//       }
//     });

//     if (rows.length > 1) {
//       const lastRow = rows[rows.length - 1];
//       if (config.lastRowBackground && config.lastRowBackground.toLowerCase() !== 'none') {
//         lastRow.style.backgroundColor = config.lastRowBackground;
//       }
//       if (config.lastRowColor && config.lastRowColor.toLowerCase() !== 'none') {
//         lastRow.style.color = config.lastRowColor;
//       }
//     }

//     const headerRow = table.querySelector('tr');
//     if (headerRow) {
//       const headerCells = headerRow.querySelectorAll('th');
//       const originalBg = [], originalColor = [];

//       headerCells.forEach((cell, i) => {
//         originalBg[i] = cell.style.backgroundColor;
//         originalColor[i] = cell.style.color;
//       });

//       const hasHeaderHoverBg = config.headerStyle.hoverBg && config.headerStyle.hoverBg.toLowerCase() !== 'none';
//       const hasHeaderHoverColor = config.headerStyle.hoverColor && config.headerStyle.hoverColor.toLowerCase() !== 'none';

//       if (hasHeaderHoverBg || hasHeaderHoverColor) {
//         headerRow.addEventListener('mouseenter', () => {
//           headerCells.forEach((cell) => {
//             if (hasHeaderHoverBg) cell.style.backgroundColor = config.headerStyle.hoverBg;
//             if (hasHeaderHoverColor) cell.style.color = config.headerStyle.hoverColor;
//           });
//         });

//         headerRow.addEventListener('mouseleave', () => {
//           headerCells.forEach((cell, i) => {
//             cell.style.backgroundColor = originalBg[i];
//             cell.style.color = originalColor[i];
//           });
//         });
//       }
//     }
//   }

//   /* ========== NEW EDITABLE FEATURES ========== */
//   // static addEditableFeatures(table) {
//   //   const isEditable = table.hasAttribute('data-editable');
//   //   const isViewOnly = table.hasAttribute('data-view-only');

//   //   if (!isEditable && !isViewOnly) return;

//   //   if (isEditable && !table.querySelector('th[data-action-column]')) {
//   //     this.addActionColumn(table);
//   //   }

//   //   if (isEditable && table.hasAttribute('data-selectable')) {
//   //     this.addSelectCheckboxes(table);
//   //   }

//   //   if (isEditable) {
//   //     this.addAddRowButton(table);
//   //   }

//   //   if (isEditable && !isViewOnly) {
//   //     this.makeCellsEditable(table);
//   //   }
//   // }

//   static addEditableFeatures(table) {
//     const isEditable = table.hasAttribute('data-editable');
//     const isViewOnly = table.hasAttribute('data-view-only');

//     if (!isEditable && !isViewOnly) return;

//     if (isEditable && !table.querySelector('th[data-action-column]')) {
//       this.addActionColumn(table);
//     }

//     if (isEditable && table.hasAttribute('data-selectable')) {
//       this.addSelectCheckboxes(table);
//     }

//     if (isEditable) {
//       this.addAddRowButton(table);
//     }

//     // REMOVED THIS LINE: if (isEditable && !isViewOnly) {
//     //   this.makeCellsEditable(table);
//     // }
//   }



//   static addActionColumn(table) {
//     const headerRow = table.querySelector('tr');
//     if (headerRow) {
//       const actionHeader = document.createElement('th');
//       actionHeader.setAttribute('data-action-column', 'true');
//       actionHeader.textContent = 'Actions';
//       headerRow.appendChild(actionHeader);
//     }

//     const rows = table.querySelectorAll('tbody tr');
//     rows.forEach(row => {
//       const actionCell = document.createElement('td');

//       const editButton = document.createElement('button');
//       editButton.className = 'table-edit-btn';
//       editButton.textContent = 'Edit';

//       const deleteButton = document.createElement('button');
//       deleteButton.className = 'table-delete-btn';
//       deleteButton.textContent = 'Delete';

//       actionCell.appendChild(editButton);
//       actionCell.appendChild(deleteButton);
//       row.appendChild(actionCell);

//       editButton.addEventListener('click', () => this.toggleEditRow(row));
//       deleteButton.addEventListener('click', () => this.deleteRow(table, row));
//     });
//   }

//   static addSelectCheckboxes(table) {
//     const headerRow = table.querySelector('tr');
//     if (headerRow) {
//       const selectHeader = document.createElement('th');
//       selectHeader.style.width = '30px';

//       const headerCheckbox = document.createElement('input');
//       headerCheckbox.type = 'checkbox';
//       headerCheckbox.className = 'table-select-all';

//       selectHeader.appendChild(headerCheckbox);
//       headerRow.insertBefore(selectHeader, headerRow.firstChild);

//       headerCheckbox.addEventListener('change', (e) => {
//         const checkboxes = table.querySelectorAll('tbody .table-row-selector');
//         checkboxes.forEach(checkbox => {
//           checkbox.checked = e.target.checked;
//         });
//       });
//     }

//     const rows = table.querySelectorAll('tbody tr');
//     rows.forEach(row => {
//       const selectCell = document.createElement('td');

//       const rowCheckbox = document.createElement('input');
//       rowCheckbox.type = 'checkbox';
//       rowCheckbox.className = 'table-row-selector';

//       selectCell.appendChild(rowCheckbox);
//       row.insertBefore(selectCell, row.firstChild);
//     });

//     if (!table.parentNode.querySelector('.table-bulk-actions')) {
//       const bulkActions = document.createElement('div');
//       bulkActions.className = 'table-bulk-actions';
//       bulkActions.style.display = 'none';
//       bulkActions.style.margin = '10px 0';

//       const deleteSelectedButton = document.createElement('button');
//       deleteSelectedButton.className = 'table-bulk-delete-btn';
//       deleteSelectedButton.textContent = 'Delete Selected';

//       bulkActions.appendChild(deleteSelectedButton);
//       table.parentNode.insertBefore(bulkActions, table.nextSibling);

//       deleteSelectedButton.addEventListener('click', () => this.deleteSelectedRows(table));

//       table.addEventListener('change', (e) => {
//         if (e.target.classList.contains('table-row-selector')) {
//           const selectedCount = table.querySelectorAll('tbody .table-row-selector:checked').length;
//           bulkActions.style.display = selectedCount > 0 ? 'block' : 'none';
//         }
//       });
//     }
//   }

//   static addAddRowButton(table) {
//     if (table.parentNode.querySelector('.table-add-row')) return;

//     const addRowContainer = document.createElement('div');
//     addRowContainer.className = 'table-add-row';
//     addRowContainer.style.margin = '10px 0';

//     const addRowButton = document.createElement('button');
//     addRowButton.className = 'table-add-row-btn';
//     addRowButton.textContent = 'Add New Row';

//     addRowContainer.appendChild(addRowButton);
//     table.parentNode.insertBefore(addRowContainer, table);

//     addRowButton.addEventListener('click', () => this.addNewRow(table));
//   }

//   static makeCellsEditable(row) {
//     const cells = row.querySelectorAll('td[data-editable="true"]');

//     cells.forEach(cell => {
//       cell.setAttribute('contenteditable', 'true');
//       cell.style.outline = '2px dashed #bbdefb';

//       cell.addEventListener('focus', () => {
//         cell.style.backgroundColor = '#fff9c4';
//         cell.dataset.originalValue = cell.textContent;
//       });

//       cell.addEventListener('blur', () => {
//         cell.style.backgroundColor = '';
//       });

//       cell.addEventListener('keydown', (e) => {
//         if (e.key === 'Enter') {
//           e.preventDefault();
//           cell.blur();
//         }
//       });
//     });
//   }

//   static makeCellsNonEditable(row) {
//     const cells = row.querySelectorAll('td[data-editable="true"]');

//     cells.forEach(cell => {
//       cell.removeAttribute('contenteditable');
//       cell.style.outline = 'none';
//       cell.style.backgroundColor = '';

//       // Remove all editable-related event listeners
//       const newCell = cell.cloneNode(true);
//       cell.parentNode.replaceChild(newCell, cell);
//     });
//   }

//   static toggleEditRow(row) {
//     const editButton = row.querySelector('.table-edit-btn');
//     const isEditing = !row.classList.contains('editing');

//     row.classList.toggle('editing', isEditing);
//     editButton.textContent = isEditing ? 'Save' : 'Edit';

//     if (isEditing) {
//       this.makeCellsEditable(row);
//       const firstEditableCell = row.querySelector('td[data-editable="true"]');
//       if (firstEditableCell) firstEditableCell.focus();
//     } else {
//       this.makeCellsNonEditable(row);
//       const event = new Event('row-save', { bubbles: true });
//       row.dispatchEvent(event);
//     }
//   }

//   static init() {
//     const tables = document.querySelectorAll('[data-component="table"]');
//     tables.forEach((table) => {
//       const config = this.extractInlineConfig(table);
//       this.applyStyle(table, config);

//       // Make all existing rows non-editable by default
//       const rows = table.querySelectorAll('tbody tr');
//       rows.forEach(row => {
//         this.makeCellsNonEditable(row);

//         // Set up edit button if exists
//         const editButton = row.querySelector('.table-edit-btn');
//         if (editButton) {
//           editButton.addEventListener('click', () => this.toggleEditRow(row));
//         }
//       });

//       this.initFeatures(table);
//     });
//   }

//   static deleteRow(table, row) {
//     if (confirm('Are you sure you want to delete this row?')) {
//       row.remove();
//       const event = new Event('row-delete', { bubbles: true });
//       table.dispatchEvent(event);
//     }
//   }

//   static deleteSelectedRows(table) {
//     const selectedRows = table.querySelectorAll('tbody .table-row-selector:checked');

//     if (selectedRows.length === 0) return;

//     if (confirm(`Are you sure you want to delete ${selectedRows.length} selected rows?`)) {
//       selectedRows.forEach(checkbox => {
//         checkbox.closest('tr').remove();
//       });

//       table.querySelector('.table-select-all').checked = false;
//       table.parentNode.querySelector('.table-bulk-actions').style.display = 'none';

//       const event = new Event('rows-delete', { bubbles: true });
//       table.dispatchEvent(event);
//     }
//   }

//   // static addNewRow(table) {
//   //   const tbody = table.querySelector('tbody');
//   //   if (!tbody) return;

//   //   const newRow = document.createElement('tr');
//   //   const headerCells = table.querySelector('thead tr').cells;
//   //   const hasSelectColumn = table.hasAttribute('data-selectable');
//   //   const hasActionColumn = table.querySelector('th[data-action-column]');

//   //   for (let i = 0; i < headerCells.length; i++) {
//   //     const headerCell = headerCells[i];

//   //     if (headerCell.classList.contains('table-select-all') || 
//   //         headerCell.hasAttribute('data-action-column')) {
//   //       continue;
//   //     }

//   //     const newCell = document.createElement('td');

//   //     if (headerCell.hasAttribute('data-editable')) {
//   //       newCell.setAttribute('data-editable', 'true');
//   //       newCell.textContent = 'New Value';
//   //     } else {
//   //       newCell.textContent = '-';
//   //     }

//   //     newRow.appendChild(newCell);
//   //   }

//   //   if (hasSelectColumn) {
//   //     const selectCell = document.createElement('td');
//   //     const checkbox = document.createElement('input');
//   //     checkbox.type = 'checkbox';
//   //     checkbox.className = 'table-row-selector';
//   //     selectCell.appendChild(checkbox);
//   //     newRow.insertBefore(selectCell, newRow.firstChild);
//   //   }

//   //   if (hasActionColumn) {
//   //     const actionCell = document.createElement('td');

//   //     const editButton = document.createElement('button');
//   //     editButton.className = 'table-edit-btn';
//   //     editButton.textContent = 'Edit';

//   //     const deleteButton = document.createElement('button');
//   //     deleteButton.className = 'table-delete-btn';
//   //     deleteButton.textContent = 'Delete';

//   //     actionCell.appendChild(editButton);
//   //     actionCell.appendChild(deleteButton);
//   //     newRow.appendChild(actionCell);

//   //     editButton.addEventListener('click', () => this.toggleEditRow(newRow));
//   //     deleteButton.addEventListener('click', () => this.deleteRow(table, newRow));
//   //   }

//   //   tbody.appendChild(newRow);

//   //   if (!table.hasAttribute('data-view-only')) {
//   //     this.makeCellsEditable(table);
//   //   }

//   //   const event = new Event('row-add', { bubbles: true });
//   //   table.dispatchEvent(event);
//   // }

//   // [Previous code remains exactly the same until the addNewRow method]

//   static addNewRow(table) {
//     const tbody = table.querySelector('tbody');
//     if (!tbody) return;

//     const config = this.extractInlineConfig(table);
//     const newRow = document.createElement('tr');
//     const headerCells = table.querySelector('thead tr').cells;
//     const hasSelectColumn = table.hasAttribute('data-selectable');
//     const hasActionColumn = table.querySelector('th[data-action-column]');

//     // Calculate number of data columns (excluding select and action columns)
//     const dataColumnCount = headerCells.length - (hasSelectColumn ? 1 : 0) - (hasActionColumn ? 1 : 0);

//     // Create data cells
//     for (let i = 0; i < dataColumnCount; i++) {
//       const newCell = document.createElement('td');

//       // Apply original styling
//       Object.assign(newCell.style, {
//         padding: config.cellPadding,
//         textAlign: config.textAlign,
//         fontSize: config.cellFontSize,
//         border: config.border
//       });

//       // Make cell editable
//       newCell.setAttribute('data-editable', 'true');
//       newCell.textContent = '';
//       newCell.setAttribute('contenteditable', 'true');
//       newCell.style.outline = '2px dashed #bbdefb';

//       newCell.addEventListener('focus', () => {
//         newCell.style.backgroundColor = '#fff9c4';
//         newCell.dataset.originalValue = newCell.textContent;
//       });

//       newCell.addEventListener('blur', () => {
//         newCell.style.backgroundColor = '';
//       });

//       newRow.appendChild(newCell);
//     }

//     // Add select checkbox column if needed
//     if (hasSelectColumn) {
//       const selectCell = document.createElement('td');
//       Object.assign(selectCell.style, {
//         padding: config.cellPadding,
//         textAlign: 'center',
//         border: config.border
//       });

//       const checkbox = document.createElement('input');
//       checkbox.type = 'checkbox';
//       checkbox.className = 'table-row-selector';
//       selectCell.appendChild(checkbox);
//       newRow.insertBefore(selectCell, newRow.firstChild);
//     }

//     // Add action buttons column if needed (with NO additional styling)
//     if (hasActionColumn) {
//       const actionCell = document.createElement('td');
//       // No styling applied here - will inherit from table styles

//       const editButton = document.createElement('button');
//       editButton.className = 'table-edit-btn';
//       editButton.textContent = 'Save';

//       const deleteButton = document.createElement('button');
//       deleteButton.className = 'table-delete-btn';
//       deleteButton.textContent = 'Delete';

//       // Proper event binding for delete
//       deleteButton.addEventListener('click', (e) => {
//         e.stopPropagation();
//         this.deleteRow(table, newRow);
//       });

//       actionCell.appendChild(editButton);
//       actionCell.appendChild(deleteButton);
//       newRow.appendChild(actionCell);
//     }

//     // New row starts in edit mode
//     newRow.classList.add('editing');

//     // Focus first editable cell
//     const firstEditableCell = newRow.querySelector('td[data-editable]');
//     if (firstEditableCell) {
//       setTimeout(() => firstEditableCell.focus(), 0);
//     }

//     // Set up edit/save toggle
//     const editButton = newRow.querySelector('.table-edit-btn');
//     if (editButton) {
//       editButton.addEventListener('click', () => {
//         const isEditing = newRow.classList.toggle('editing');
//         editButton.textContent = isEditing ? 'Save' : 'Edit';

//         const cells = newRow.querySelectorAll('td[data-editable]');
//         cells.forEach(cell => {
//           cell.setAttribute('contenteditable', isEditing ? 'true' : 'false');
//           cell.style.outline = isEditing ? '2px dashed #bbdefb' : 'none';
//         });

//         if (!isEditing) {
//           const event = new Event('row-save', { bubbles: true });
//           newRow.dispatchEvent(event);
//         }
//       });
//     }

//     tbody.appendChild(newRow);

//     const event = new Event('row-add', { bubbles: true });
//     table.dispatchEvent(event);
//   }

//   static deleteRow(table, row) {
//     if (confirm('Are you sure you want to delete this row?')) {
//       row.remove();
//       const event = new Event('row-delete', { bubbles: true });
//       table.dispatchEvent(event);
//     }
//   }
//   // [Rest of the code remains exactly the same]


//   /* ========== SORTING, FILTERING, PAGINATION ========== */
//   static addSorting(table) {
//     const headers = table.querySelectorAll('th[data-sortable]');

//     headers.forEach(header => {
//       header.style.cursor = 'pointer';
//       header.addEventListener('click', () => {
//         const columnIndex = Array.from(header.parentNode.children).indexOf(header);
//         const isAscending = header.classList.contains('sorted-asc');
//         const sortType = header.getAttribute('data-sort-type') || 'text';

//         headers.forEach(h => {
//           h.classList.remove('sorted-asc', 'sorted-desc');
//         });

//         header.classList.add(isAscending ? 'sorted-desc' : 'sorted-asc');
//         this.sortTable(table, columnIndex, !isAscending, sortType);
//       });
//     });
//   }

//   static sortTable(table, columnIndex, ascending, sortType) {
//     const tbody = table.querySelector('tbody');
//     const rows = Array.from(tbody.querySelectorAll('tr'));

//     rows.sort((a, b) => {
//       const aCell = a.cells[columnIndex];
//       const bCell = b.cells[columnIndex];

//       let aValue = aCell.textContent.trim();
//       let bValue = bCell.textContent.trim();

//       if (sortType === 'number') {
//         aValue = parseFloat(aValue) || 0;
//         bValue = parseFloat(bValue) || 0;
//         return ascending ? aValue - bValue : bValue - aValue;
//       } else if (sortType === 'date') {
//         aValue = new Date(aValue);
//         bValue = new Date(bValue);
//         return ascending ? aValue - bValue : bValue - aValue;
//       } else {
//         return ascending
//           ? aValue.localeCompare(bValue)
//           : bValue.localeCompare(aValue);
//       }
//     });

//     rows.forEach(row => tbody.appendChild(row));
//   }

//   static addFiltering(table) {
//     const config = this.extractInlineConfig(table);
//     const filterRow = document.createElement('tr');
//     filterRow.className = 'table-filter-row';

//     const headers = table.querySelectorAll('th');
//     headers.forEach((header, index) => {
//       const filterCell = document.createElement('td');
//       const filterable = header.hasAttribute('data-filterable');

//       if (filterable) {
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.placeholder = 'Filter...';
//         input.style.width = '100%';
//         input.style.boxSizing = 'border-box';
//         input.style.padding = config.cellPadding;
//         input.style.fontSize = config.cellFontSize;
//         input.style.border = config.border;

//         input.addEventListener('input', () => {
//           this.filterTable(table, index, input.value);
//         });

//         filterCell.appendChild(input);
//       }

//       filterRow.appendChild(filterCell);
//     });

//     table.querySelector('thead').appendChild(filterRow);
//   }

//   static filterTable(table, columnIndex, filterValue) {
//     const rows = table.querySelectorAll('tbody tr');
//     const filterLower = filterValue.toLowerCase();

//     rows.forEach(row => {
//       const cell = row.cells[columnIndex];
//       const cellText = cell.textContent.toLowerCase();
//       row.style.display = cellText.includes(filterLower) ? '' : 'none';
//     });
//   }

//   static addPagination(table) {
//     const config = this.extractPaginationConfig(table);
//     if (!config.enabled) return;

//     // Create container for table + pagination
//     const container = document.createElement('div');
//     container.className = 'table-pagination-container';
//     table.parentNode.insertBefore(container, table);
//     container.appendChild(table);

//     // Create pagination controls
//     const paginationContainer = document.createElement('div');
//     paginationContainer.className = 'table-pagination';

//     const prevButton = document.createElement('button');
//     prevButton.textContent = 'Previous';
//     prevButton.className = 'pagination-prev';

//     const nextButton = document.createElement('button');
//     nextButton.textContent = 'Next';
//     nextButton.className = 'pagination-next';

//     const pageInfo = document.createElement('span');
//     pageInfo.className = 'pagination-info';

//     const rowsPerPageSelect = document.createElement('select');
//     rowsPerPageSelect.className = 'rows-per-page-select';
//     [5, 10, 15, 20, 25].forEach(option => {
//       const opt = document.createElement('option');
//       opt.value = option;
//       opt.textContent = `${option}`;
//       if (option === config.rowsPerPage) opt.selected = true;
//       rowsPerPageSelect.appendChild(opt);
//     });

//     const rowsPerPageContainer = document.createElement('div');
//     rowsPerPageContainer.className = 'rows-per-page-container';
//     rowsPerPageContainer.appendChild(rowsPerPageSelect);

//     paginationContainer.appendChild(prevButton);
//     paginationContainer.appendChild(pageInfo);
//     paginationContainer.appendChild(nextButton);
//     paginationContainer.appendChild(rowsPerPageContainer);
//     container.appendChild(paginationContainer);

//     const rows = Array.from(table.querySelectorAll('tbody tr'));
//     let currentPage = 1;
//     let rowsPerPage = config.rowsPerPage;
//     let totalPages = Math.ceil(rows.length / rowsPerPage);

//     const updatePagination = () => {
//       totalPages = Math.ceil(rows.length / rowsPerPage);
//       if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;

//       pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
//       const startIndex = (currentPage - 1) * rowsPerPage;
//       const endIndex = startIndex + rowsPerPage;

//       rows.forEach((row, index) => {
//         row.style.display = (index >= startIndex && index < endIndex) ? '' : 'none';
//       });

//       prevButton.disabled = currentPage === 1;
//       nextButton.disabled = currentPage === totalPages || totalPages === 0;
//     };

//     prevButton.addEventListener('click', () => {
//       if (currentPage > 1) {
//         currentPage--;
//         updatePagination();
//       }
//     });

//     nextButton.addEventListener('click', () => {
//       if (currentPage < totalPages) {
//         currentPage++;
//         updatePagination();
//       }
//     });

//     rowsPerPageSelect.addEventListener('change', (e) => {
//       rowsPerPage = parseInt(e.target.value);
//       currentPage = 1;
//       updatePagination();
//     });

//     updatePagination();
//   }

//   static extractPaginationConfig(table) {
//     return {
//       enabled: table.hasAttribute('data-paginate'),
//       rowsPerPage: parseInt(table.getAttribute('data-rows-per-page')) || 10
//     };
//   }
// }

// const TableLib = (() => {
//   const customConfigs = [];

//   function applyCustomStyles() {
//     customConfigs.forEach(({ selector, config }) => {
//       document.querySelectorAll(selector).forEach((table) => {
//         TableComponent.applyStyle(table, config);
//       });
//     });
//   }

//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', () => {
//       TableComponent.init();
//       applyCustomStyles();
//     });
//   } else {
//     TableComponent.init();
//     applyCustomStyles();
//   }

//   return {
//     setCustomTable(selector, userConfig) {
//       const convertedConfig = {
//         ...userConfig,
//         lastRowBackground: userConfig.lastRowBg || userConfig.lastRowBackground,
//         lastRowColor: userConfig.lastRowColor,
//         hoverRowColor: userConfig.hoverLastRow || userConfig.hoverRowColor,
//         hoverTextColor: userConfig.hoverLastRowText || userConfig.hoverTextColor,
//         altColsColor: userConfig.altColsColor ?
//           (Array.isArray(userConfig.altColsColor) ?
//             userConfig.altColsColor :
//             userConfig.altColsColor.split('-')) :
//           null,
//         columnColors: userConfig.colColor ?
//           { 0: userConfig.colColor } :
//           (userConfig.columnColors || {})
//       };

//       delete convertedConfig.lastRowBg;
//       delete convertedConfig.hoverLastRow;
//       delete convertedConfig.hoverLastRowText;
//       delete convertedConfig.colColor;

//       customConfigs.push({
//         selector,
//         config: TableComponent.deepMerge(TableComponent.getDefaultConfig(), convertedConfig)
//       });

//       if (document.readyState === 'complete') {
//         document.querySelectorAll(selector).forEach((table) => {
//           TableComponent.applyStyle(table, convertedConfig);
//         });
//       }
//     }
//   };
// })();

// // --- PATCH START ---
// (function fixHoverBehavior() {
//   const tables = document.querySelectorAll('[data-component="table"]');

//   tables.forEach(table => {
//     const config = TableComponent.extractInlineConfig(table);
//     const rows = table.querySelectorAll('tr');

//     rows.forEach((row, rowIndex) => {
//       if (rowIndex === 0) return;

//       const hasHover = (config.hoverRowColor && config.hoverRowColor !== 'none') ||
//         (config.hoverTextColor && config.hoverTextColor !== 'none');

//       if (!hasHover) {
//         const bgColor = window.getComputedStyle(row).backgroundColor;
//         const textColor = window.getComputedStyle(row).color;

//         row.onmouseenter = function () {
//           this.style.backgroundColor = bgColor;
//           this.style.color = textColor;
//         };
//         row.onmouseleave = function () {
//           this.style.backgroundColor = bgColor;
//           this.style.color = textColor;
//         };
//       }
//     });
//   });
// })();

// document.addEventListener('DOMContentLoaded', function () {
//   setTimeout(function () {
//     const tables = document.querySelectorAll('[data-component="table"]');

//     tables.forEach(function (table) {
//       const classes = table.className.split(' ');
//       const config = {
//         lastRowBg: getValueFromClass(classes, 'lastRowBg-'),
//         lastRowColor: getValueFromClass(classes, 'lastRowColor-'),
//         hasBorder: classes.includes('border-solid') || table.style.border,
//         hoverLastRow: getValueFromClass(classes, 'hoverLastRow-'),
//         hoverLastRowText: getValueFromClass(classes, 'hoverLastRowText-')
//       };

//       const rows = table.querySelectorAll('tr');
//       if (rows.length < 2) return;

//       const lastRow = rows[rows.length - 1];
//       const cells = lastRow.querySelectorAll('td, th');

//       if (config.hasBorder) {
//         const computedBorder = window.getComputedStyle(table).border;
//         cells.forEach(cell => {
//           cell.style.border = computedBorder;
//         });
//       }

//       if (config.lastRowBg) {
//         lastRow.style.backgroundColor = config.lastRowBg;
//       }
//       if (config.lastRowColor) {
//         lastRow.style.color = config.lastRowColor;
//       }

//       if (config.hoverLastRow || config.hoverLastRowText) {
//         const originalBg = window.getComputedStyle(lastRow).backgroundColor;
//         const originalText = window.getComputedStyle(lastRow).color;

//         lastRow.addEventListener('mouseenter', function () {
//           if (config.hoverLastRow) this.style.backgroundColor = config.hoverLastRow;
//           if (config.hoverLastRowText) this.style.color = config.hoverLastRowText;
//         });

//         lastRow.addEventListener('mouseleave', function () {
//           this.style.backgroundColor = originalBg;
//           this.style.color = originalText;
//         });
//       }
//     });

//     function getValueFromClass(classes, prefix) {
//       const classMatch = classes.find(c => c.startsWith(prefix));
//       return classMatch ? classMatch.replace(prefix, '') : null;
//     }
//   }, 100);
// });
// // --- PATCH END ---

// // --- TABLE WRAPPER: SCROLL ONLY THIS SECTION ---
// (function addTableWrapperStyles() {
//   const style = document.createElement('style');
//   style.innerHTML = `
//     * {
//       box-sizing: border-box;
//     }
//     .table-wrapper {
//       overflow-x: auto;
//       width: 100%;
//     }
//     [data-component="table"] {
//       width: max-content;
//       min-width: 100%;
//       display: table;
//       border-collapse: collapse;
//     }
//     th[data-sortable]::after {
//       content: ' ↕';
//       font-size: 0.8em;
//     }
//     th.sorted-asc::after {
//       content: ' ↑';
//     }
//     th.sorted-desc::after {
//       content: ' ↓';
//     }
//     .table-filter-row input {
//       margin: 0;
//     }
//     .table-pagination {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 10px;
//       margin-top: 10px;
//     }
//     .table-pagination button {
//       padding: 5px 10px;
//       cursor: pointer;
//     }
//     .table-pagination button:disabled {
//       opacity: 0.5;
//       cursor: not-allowed;
//     }
//     .table-edit-btn, .table-delete-btn {
//       padding: 3px 8px;
//       margin: 0 2px;
//       cursor: pointer;
//       font-size: 0.9em;
//     }
//     .table-delete-btn {
//       background-color: #ffebee;
//       color: #c62828;
//       border: 1px solid #ef9a9a;
//     }
//     .table-delete-btn:hover {
//       background-color: #ef9a9a;
//     }
//     .table-edit-btn {
//       background-color: #e8f5e9;
//       color: #2e7d32;
//       border: 1px solid #a5d6a7;
//     }
//     .table-edit-btn:hover {
//       background-color: #a5d6a7;
//     }
//     .table-bulk-delete-btn {
//       padding: 5px 10px;
//       background-color: #ffebee;
//       color: #c62828;
//       border: 1px solid #ef9a9a;
//       cursor: pointer;
//     }
//     .table-bulk-delete-btn:hover {
//       background-color: #ef9a9a;
//     }
//     .table-add-row-btn {
//       padding: 5px 10px;
//       background-color: #e3f2fd;
//       color: #1565c0;
//       border: 1px solid #90caf9;
//       cursor: pointer;
//     }
//     .table-add-row-btn:hover {
//       background-color: #90caf9;
//     }
//     td[contenteditable="true"] {
//       outline: 2px dashed #bbdefb;
//     }
//     .table-row-selector {
//       margin: 0 auto;
//       display: block;
//     }
//     tr.editing td {
//       background-color: #fff9c4 !important;
//     }
//   `;
//   document.head.appendChild(style);
// })();

// document.addEventListener('DOMContentLoaded', function () {
//   const tables = document.querySelectorAll('[data-component="table"]');

//   tables.forEach(table => {
//     if (table.parentElement && table.parentElement.classList.contains('table-wrapper')) return;

//     const wrapper = document.createElement('div');
//     wrapper.classList.add('table-wrapper');

//     table.parentNode.insertBefore(wrapper, table);
//     wrapper.appendChild(table);
//   });
// });

// // --- Sticky Table Features ---
// // --- Enhanced Sticky Table Features ---
// // --- Sticky Table Features ---
// (function () {
//   function initializeStickyFeatures() {
//     document.querySelectorAll('table[data-component="table"]').forEach(table => {
//       if (table.dataset.stickyInitialized) return;
//       table.dataset.stickyInitialized = "true";

//       const config = TableComponent.extractInlineConfig(table);

//       // Create wrapper if needed
//       let wrapper = table.parentElement;
//       if (!wrapper.classList.contains('sticky-table-wrapper')) {
//         const newWrapper = document.createElement('div');
//         newWrapper.className = 'sticky-table-wrapper';
//         table.parentNode.insertBefore(newWrapper, table);
//         newWrapper.appendChild(table);
//         wrapper = newWrapper;
//       }

//       // Apply necessary styles to the wrapper
//       Object.assign(wrapper.style, {
//         overflow: 'auto',
//         maxHeight: table.getAttribute('data-sticky-max-height') || '500px',
//         position: 'relative',
//         display: 'block'
//       });

//       // Apply necessary table styles for sticky headers
//       Object.assign(table.style, {
//         borderCollapse: 'separate',
//         borderSpacing: '0',
//         width: '100%'
//       });

//       // STICKY HEADER FUNCTIONALITY
//       if (table.hasAttribute('data-sticky-header')) {
//         const headerRow = table.querySelector('thead tr') || table.querySelector('tr:first-child');
//         if (headerRow) {
//           // Use configured header background or computed style
//           const headerBg = config.headerStyle.backgroundColor ||
//             window.getComputedStyle(headerRow).backgroundColor;

//           // Apply sticky styles to header row
//           Object.assign(headerRow.style, {
//             position: 'sticky',
//             top: '0',
//             zIndex: '100',
//             backgroundColor: headerBg === 'rgba(0, 0, 0, 0)' ?
//               config.backgroundColor || '#fff' :
//               headerBg
//           });

//           // Make sure header cells have proper background
//           const headerCells = headerRow.querySelectorAll('th, td');
//           headerCells.forEach(cell => {
//             if (!cell.style.backgroundColor) {
//               cell.style.backgroundColor = 'inherit';
//             }
//           });

//           // Set min-widths to prevent column shifting
//           const dataRows = Array.from(table.querySelectorAll('tbody tr'));
//           if (dataRows.length) {
//             const headerCells = headerRow.querySelectorAll('th, td');
//             dataRows.forEach(row => {
//               const cells = row.querySelectorAll('td');
//               cells.forEach((cell, i) => {
//                 if (headerCells[i]) {
//                   headerCells[i].style.minWidth = `${cell.offsetWidth}px`;
//                 }
//               });
//             });
//           }
//         }
//       }

//       // STICKY COLUMN FUNCTIONALITY
//       if (table.hasAttribute('data-sticky-col')) {
//         const rows = table.querySelectorAll('tr');
//         rows.forEach(row => {
//           const firstCell = row.querySelector('th, td');
//           if (firstCell) {
//             const colIndex = Array.from(row.children).indexOf(firstCell);
//             const colBg = config.columnColors[colIndex] ||
//               config.altColsColor?.[colIndex % 2] ||
//               window.getComputedStyle(firstCell).backgroundColor;

//             Object.assign(firstCell.style, {
//               position: 'sticky',
//               left: '0',
//               zIndex: '50',
//               backgroundColor: colBg === 'rgba(0, 0, 0, 0)' ?
//                 config.backgroundColor || '#fff' :
//                 colBg
//             });
//           }
//         });
//       }
//     });
//   }

//   function init() {
//     initializeStickyFeatures();
//     window.addEventListener('resize', initializeStickyFeatures);
//   }

//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', init);
//   } else {
//     init();
//   }

//   const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       mutation.addedNodes.forEach((node) => {
//         if (node.nodeType === 1) {
//           const tables = node.querySelectorAll
//             ? node.querySelectorAll('table[data-component="table"]')
//             : [];
//           if (node.matches('table[data-component="table"]')) {
//             tables.push(node);
//           }
//           if (tables.length) {
//             initializeStickyFeatures();
//           }
//         }
//       });
//     });
//   });

//   observer.observe(document.body, {
//     childList: true,
//     subtree: true
//   });
// })();
























// try3 
class TableComponent {
  static init() {
    const tables = document.querySelectorAll('[data-component="table"]');
    tables.forEach((table) => {
      const config = this.extractInlineConfig(table);
      this.applyStyle(table, config);

      // Initialize all rows as non-editable
      table.querySelectorAll('tbody tr').forEach(row => {
        this.disableEditing(row);

        // Set up edit button if exists
        const editButton = row.querySelector('.table-edit-btn');
        if (editButton) {
          editButton.addEventListener('click', () => this.toggleEditing(row));
        }
      });

      this.initFeatures(table);
    });
  }

  static toggleEditing(row) {
    const isCurrentlyEditing = row.classList.contains('editing');

    if (isCurrentlyEditing) {
      this.disableEditing(row);
      const event = new Event('row-save', { bubbles: true });
      row.dispatchEvent(event);
    } else {
      this.enableEditing(row);
    }
  }

  static enableEditing(row) {
    // Make cells editable only when enabling edit mode
    const cells = row.querySelectorAll('td[data-editable="true"]');
    cells.forEach(cell => {
      cell.setAttribute('contenteditable', 'true');
      cell.style.outline = '2px dashed #bbdefb';

      cell.addEventListener('focus', () => {
        cell.style.backgroundColor = '#fff9c4';
        cell.dataset.originalValue = cell.textContent;
      });

      cell.addEventListener('blur', () => {
        cell.style.backgroundColor = '';
      });

      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          cell.blur();
        }
      });
    });

    row.classList.add('editing');
    const editButton = row.querySelector('.table-edit-btn');
    if (editButton) {
      editButton.textContent = 'Save';
    }
  }

  static disableEditing(row) {
    // Make cells non-editable when disabling edit mode
    const cells = row.querySelectorAll('td[data-editable="true"]');
    cells.forEach(cell => {
      cell.removeAttribute('contenteditable');
      cell.style.outline = 'none';
      cell.style.backgroundColor = '';

      // Remove all editable-related event listeners
      const newCell = cell.cloneNode(true);
      cell.parentNode.replaceChild(newCell, cell);
    });

    row.classList.remove('editing');
    const editButton = row.querySelector('.table-edit-btn');
    if (editButton) {
      editButton.textContent = 'Edit';
    }
  }

  static toggleEditing(row) {
    if (row.classList.contains('editing')) {
      this.disableEditing(row);
      const event = new Event('row-save', { bubbles: true });
      row.dispatchEvent(event);
    } else {
      this.enableEditing(row);
      const firstEditableCell = row.querySelector('td[data-editable="true"]');
      if (firstEditableCell) firstEditableCell.focus();
    }
  }


  static initFeatures(table) {
    // Sorting
    if (table.querySelector('th[data-sortable]')) {
      this.addSorting(table);
    }

    // Filtering
    if (table.querySelector('th[data-filterable]')) {
      this.addFiltering(table);
    }

    // Pagination
    if (table.hasAttribute('data-paginate')) {
      this.addPagination(table);
    }

    // Editable features
    if (table.hasAttribute('data-editable') || table.hasAttribute('data-view-only')) {
      this.addEditableFeatures(table);
    }
  }

  /* ========== ORIGINAL STYLING METHODS ========== */
  static getDefaultConfig() {
    return {
      backgroundColor: '#fff',
      color: '#000',
      border: '1px solid #ccc',
      cellPadding: '8px',
      cellFontSize: '14px',
      headerFontSize: '16px',
      textAlign: 'center',
      striped: false,
      stripedColor: '#f9f9f9',
      hoverRowColor: null,
      hoverTextColor: null,
      headerStyle: {
        backgroundColor: '',
        color: '',
        fontWeight: 'bold',
        hoverBg: '',
        hoverColor: '',
      },
      columnColors: {},
      altColsColor: null,
      lastRowBackground: '',
      lastRowColor: '',
    };
  }

  static extractInlineConfig(table) {
    const config = this.getDefaultConfig();
    const classList = table.className.split(' ').filter(Boolean);

    classList.forEach((cls) => {
      if (cls.startsWith('bg-')) config.backgroundColor = cls.slice(3);
      else if (cls.startsWith('color-')) config.color = cls.slice(6);
      else if (cls.startsWith('border-')) config.border = cls.slice(7).replace(/_/g, ' ');
      else if (cls.startsWith('cellPad-')) config.cellPadding = cls.slice(8);
      else if (cls.startsWith('cellPadding-')) config.cellPadding = cls.slice(12);
      else if (cls.startsWith('cellFontSize-')) config.cellFontSize = cls.slice(13);
      else if (cls.startsWith('header-fontSize-')) config.headerFontSize = cls.slice(16);
      else if (cls.startsWith('textAlign-')) config.textAlign = cls.slice(10);
      else if (cls === 'striped') config.striped = true;
      else if (cls.startsWith('stripedColor-')) config.stripedColor = cls.slice(13);
      else if (cls.startsWith('hoverRowColor-')) config.hoverRowColor = cls.slice(14);
      else if (cls.startsWith('hoverTextColor-')) config.hoverTextColor = cls.slice(15);
      else if (cls.startsWith('headerBg-')) config.headerStyle.backgroundColor = cls.slice(9);
      else if (cls.startsWith('headerColor-')) config.headerStyle.color = cls.slice(12);
      else if (cls.startsWith('headerHoverBg-')) config.headerStyle.hoverBg = cls.slice(14);
      else if (cls.startsWith('headerHoverColor-')) config.headerStyle.hoverColor = cls.slice(17);
      else if (cls.startsWith('headerFontWeight-')) config.headerStyle.fontWeight = cls.slice(17);
      else if (cls.startsWith('col-') && cls.includes('-bgcolor-')) {
        const match = cls.match(/^col-(\d+)-bgcolor-(.+)$/);
        if (match) {
          const [, index, color] = match;
          config.columnColors[+index] = color;
        }
      } else if (cls.startsWith('altColsColor-')) {
        const parts = cls.split('-');
        if (parts.length >= 3) config.altColsColor = [parts[1], parts[2]];
      } else if (cls.startsWith('lastRowBg-')) {
        config.lastRowBackground = cls.slice(11);
      } else if (cls.startsWith('lastRowColor-')) {
        config.lastRowColor = cls.slice(13);
      }
    });

    return config;
  }

  static deepMerge(target, source) {
    for (const key in source) {
      if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key])
      ) {
        if (!target[key]) target[key] = {};
        this.deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }

  static applyStyle(table, customConfig) {
    const config = this.deepMerge(this.getDefaultConfig(), customConfig);

    Object.assign(table.style, {
      borderCollapse: 'collapse',
      width: '100%',
      backgroundColor: config.backgroundColor,
      color: config.color,
      fontSize: config.cellFontSize,
      border: config.border,
    });

    const rows = table.querySelectorAll('tr');
    rows.forEach((row, rowIndex) => {
      const cells = row.querySelectorAll('th, td');
      const isHeaderRow = rowIndex === 0;

      // Store original styles before any modifications
      const originalRowBg = row.style.backgroundColor;
      const originalRowColor = row.style.color;

      if (!isHeaderRow && config.striped && rowIndex % 2 !== 0) {
        row.style.backgroundColor = config.stripedColor;
      } else if (!isHeaderRow) {
        row.style.backgroundColor = config.backgroundColor;
      }

      cells.forEach((cell, cellIndex) => {
        const isHeader = cell.tagName.toLowerCase() === 'th';
        const columnColor = config.columnColors[cellIndex];
        const altColColor = config.altColsColor ? config.altColsColor[cellIndex % 2] : null;

        const cellStyles = {
          border: config.border,
          padding: config.cellPadding,
          fontSize: isHeader ? config.headerFontSize : config.cellFontSize,
          fontWeight: isHeader ? (config.headerStyle.fontWeight || 'bold') : 'normal',
          textAlign: config.textAlign,
        };

        if (isHeader) {
          if (config.headerStyle.backgroundColor) cellStyles.backgroundColor = config.headerStyle.backgroundColor;
          if (config.headerStyle.color) cellStyles.color = config.headerStyle.color;
        } else {
          if (columnColor) cellStyles.backgroundColor = columnColor;
          else if (altColColor) cellStyles.backgroundColor = altColColor;
        }

        Object.assign(cell.style, cellStyles);
      });

      if (!isHeaderRow) {
        const currentBg = window.getComputedStyle(row).backgroundColor;
        const currentColor = window.getComputedStyle(row).color;

        const hasHoverRow = config.hoverRowColor && config.hoverRowColor.toLowerCase() !== 'none';
        const hasHoverText = config.hoverTextColor && config.hoverTextColor.toLowerCase() !== 'none';

        if (hasHoverRow || hasHoverText) {
          row.addEventListener('mouseenter', () => {
            if (hasHoverRow) row.style.backgroundColor = config.hoverRowColor;
            if (hasHoverText) row.style.color = config.hoverTextColor;
          });

          row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = currentBg;
            row.style.color = currentColor;
          });
        } else {
          // Ensure no hover effects interfere
          row.onmouseenter = row.onmouseleave = null;
          row.style.backgroundColor = currentBg;
          row.style.color = currentColor;
        }
      }
    });

    if (rows.length > 1) {
      const lastRow = rows[rows.length - 1];
      if (config.lastRowBackground && config.lastRowBackground.toLowerCase() !== 'none') {
        lastRow.style.backgroundColor = config.lastRowBackground;
      }
      if (config.lastRowColor && config.lastRowColor.toLowerCase() !== 'none') {
        lastRow.style.color = config.lastRowColor;
      }
    }

    const headerRow = table.querySelector('tr');
    if (headerRow) {
      const headerCells = headerRow.querySelectorAll('th');
      const originalBg = [], originalColor = [];

      headerCells.forEach((cell, i) => {
        originalBg[i] = cell.style.backgroundColor;
        originalColor[i] = cell.style.color;
      });

      const hasHeaderHoverBg = config.headerStyle.hoverBg && config.headerStyle.hoverBg.toLowerCase() !== 'none';
      const hasHeaderHoverColor = config.headerStyle.hoverColor && config.headerStyle.hoverColor.toLowerCase() !== 'none';

      if (hasHeaderHoverBg || hasHeaderHoverColor) {
        headerRow.addEventListener('mouseenter', () => {
          headerCells.forEach((cell) => {
            if (hasHeaderHoverBg) cell.style.backgroundColor = config.headerStyle.hoverBg;
            if (hasHeaderHoverColor) cell.style.color = config.headerStyle.hoverColor;
          });
        });

        headerRow.addEventListener('mouseleave', () => {
          headerCells.forEach((cell, i) => {
            cell.style.backgroundColor = originalBg[i];
            cell.style.color = originalColor[i];
          });
        });
      }
    }
  }

  /* ========== NEW EDITABLE FEATURES ========== */
  // static addEditableFeatures(table) {
  //   const isEditable = table.hasAttribute('data-editable');
  //   const isViewOnly = table.hasAttribute('data-view-only');

  //   if (!isEditable && !isViewOnly) return;

  //   if (isEditable && !table.querySelector('th[data-action-column]')) {
  //     this.addActionColumn(table);
  //   }

  //   if (isEditable && table.hasAttribute('data-selectable')) {
  //     this.addSelectCheckboxes(table);
  //   }

  //   if (isEditable) {
  //     this.addAddRowButton(table);
  //   }

  //   if (isEditable && !isViewOnly) {
  //     this.makeCellsEditable(table);
  //   }
  // }

  static addEditableFeatures(table) {
    const isEditable = table.hasAttribute('data-editable');
    const isViewOnly = table.hasAttribute('data-view-only');

    if (!isEditable && !isViewOnly) return;

    if (isEditable && !table.querySelector('th[data-action-column]')) {
      this.addActionColumn(table);
    }

    if (isEditable && table.hasAttribute('data-selectable')) {
      this.addSelectCheckboxes(table);
    }

    if (isEditable) {
      this.addAddRowButton(table);
    }

    // REMOVED THIS LINE: if (isEditable && !isViewOnly) {
    //   this.makeCellsEditable(table);
    // }
  }



  static addActionColumn(table) {
    const headerRow = table.querySelector('tr');
    if (headerRow) {
      const actionHeader = document.createElement('th');
      actionHeader.setAttribute('data-action-column', 'true');
      actionHeader.textContent = 'Actions';
      headerRow.appendChild(actionHeader);
    }

    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const actionCell = document.createElement('td');

      const editButton = document.createElement('button');
      editButton.className = 'table-edit-btn';
      editButton.textContent = 'Edit';

      const deleteButton = document.createElement('button');
      deleteButton.className = 'table-delete-btn';
      deleteButton.textContent = 'Delete';

      actionCell.appendChild(editButton);
      actionCell.appendChild(deleteButton);
      row.appendChild(actionCell);

      editButton.addEventListener('click', () => this.toggleEditRow(row));
      deleteButton.addEventListener('click', () => this.deleteRow(table, row));
    });
  }

  static addSelectCheckboxes(table) {
    const headerRow = table.querySelector('tr');
    if (headerRow) {
      const selectHeader = document.createElement('th');
      selectHeader.style.width = '30px';

      const headerCheckbox = document.createElement('input');
      headerCheckbox.type = 'checkbox';
      headerCheckbox.className = 'table-select-all';

      selectHeader.appendChild(headerCheckbox);
      headerRow.insertBefore(selectHeader, headerRow.firstChild);

      headerCheckbox.addEventListener('change', (e) => {
        const checkboxes = table.querySelectorAll('tbody .table-row-selector');
        checkboxes.forEach(checkbox => {
          checkbox.checked = e.target.checked;
        });
      });
    }

    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const selectCell = document.createElement('td');

      const rowCheckbox = document.createElement('input');
      rowCheckbox.type = 'checkbox';
      rowCheckbox.className = 'table-row-selector';

      selectCell.appendChild(rowCheckbox);
      row.insertBefore(selectCell, row.firstChild);
    });

    if (!table.parentNode.querySelector('.table-bulk-actions')) {
      const bulkActions = document.createElement('div');
      bulkActions.className = 'table-bulk-actions';
      bulkActions.style.display = 'none';
      bulkActions.style.margin = '10px 0';

      const deleteSelectedButton = document.createElement('button');
      deleteSelectedButton.className = 'table-bulk-delete-btn';
      deleteSelectedButton.textContent = 'Delete Selected';

      bulkActions.appendChild(deleteSelectedButton);
      table.parentNode.insertBefore(bulkActions, table.nextSibling);

      deleteSelectedButton.addEventListener('click', () => this.deleteSelectedRows(table));

      table.addEventListener('change', (e) => {
        if (e.target.classList.contains('table-row-selector')) {
          const selectedCount = table.querySelectorAll('tbody .table-row-selector:checked').length;
          bulkActions.style.display = selectedCount > 0 ? 'block' : 'none';
        }
      });
    }
  }

  static addAddRowButton(table) {
    if (table.parentNode.querySelector('.table-add-row')) return;

    const addRowContainer = document.createElement('div');
    addRowContainer.className = 'table-add-row';
    addRowContainer.style.margin = '10px 0';

    const addRowButton = document.createElement('button');
    addRowButton.className = 'table-add-row-btn';
    addRowButton.textContent = 'Add New Row';

    addRowContainer.appendChild(addRowButton);
    table.parentNode.insertBefore(addRowContainer, table);

    addRowButton.addEventListener('click', () => this.addNewRow(table));
  }

  static makeCellsEditable(row) {
    const cells = row.querySelectorAll('td[data-editable="true"]');

    cells.forEach(cell => {
      cell.setAttribute('contenteditable', 'true');
      cell.style.outline = '2px dashed #bbdefb';

      cell.addEventListener('focus', () => {
        cell.style.backgroundColor = '#fff9c4';
        cell.dataset.originalValue = cell.textContent;
      });

      cell.addEventListener('blur', () => {
        cell.style.backgroundColor = '';
      });

      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          cell.blur();
        }
      });
    });
  }

  static makeCellsNonEditable(row) {
    const cells = row.querySelectorAll('td[data-editable="true"]');

    cells.forEach(cell => {
      cell.removeAttribute('contenteditable');
      cell.style.outline = 'none';
      cell.style.backgroundColor = '';

      // Remove all editable-related event listeners
      const newCell = cell.cloneNode(true);
      cell.parentNode.replaceChild(newCell, cell);
    });
  }

  static toggleEditRow(row) {
    const editButton = row.querySelector('.table-edit-btn');
    const isEditing = !row.classList.contains('editing');

    row.classList.toggle('editing', isEditing);
    editButton.textContent = isEditing ? 'Save' : 'Edit';

    if (isEditing) {
      this.makeCellsEditable(row);
      const firstEditableCell = row.querySelector('td[data-editable="true"]');
      if (firstEditableCell) firstEditableCell.focus();
    } else {
      this.makeCellsNonEditable(row);
      const event = new Event('row-save', { bubbles: true });
      row.dispatchEvent(event);
    }
  }

  static init() {
    const tables = document.querySelectorAll('[data-component="table"]');
    tables.forEach((table) => {
      const config = this.extractInlineConfig(table);
      this.applyStyle(table, config);

      // Make all existing rows non-editable by default
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach(row => {
        this.makeCellsNonEditable(row);

        // Set up edit button if exists
        const editButton = row.querySelector('.table-edit-btn');
        if (editButton) {
          editButton.addEventListener('click', () => this.toggleEditRow(row));
        }
      });

      this.initFeatures(table);
    });
  }

  static deleteRow(table, row) {
    if (confirm('Are you sure you want to delete this row?')) {
      row.remove();
      const event = new Event('row-delete', { bubbles: true });
      table.dispatchEvent(event);
    }
  }

  static deleteSelectedRows(table) {
    const selectedRows = table.querySelectorAll('tbody .table-row-selector:checked');

    if (selectedRows.length === 0) return;

    if (confirm(`Are you sure you want to delete ${selectedRows.length} selected rows?`)) {
      selectedRows.forEach(checkbox => {
        checkbox.closest('tr').remove();
      });

      table.querySelector('.table-select-all').checked = false;
      table.parentNode.querySelector('.table-bulk-actions').style.display = 'none';

      const event = new Event('rows-delete', { bubbles: true });
      table.dispatchEvent(event);
    }
  }

  // static addNewRow(table) {
  //   const tbody = table.querySelector('tbody');
  //   if (!tbody) return;

  //   const newRow = document.createElement('tr');
  //   const headerCells = table.querySelector('thead tr').cells;
  //   const hasSelectColumn = table.hasAttribute('data-selectable');
  //   const hasActionColumn = table.querySelector('th[data-action-column]');

  //   for (let i = 0; i < headerCells.length; i++) {
  //     const headerCell = headerCells[i];

  //     if (headerCell.classList.contains('table-select-all') || 
  //         headerCell.hasAttribute('data-action-column')) {
  //       continue;
  //     }

  //     const newCell = document.createElement('td');

  //     if (headerCell.hasAttribute('data-editable')) {
  //       newCell.setAttribute('data-editable', 'true');
  //       newCell.textContent = 'New Value';
  //     } else {
  //       newCell.textContent = '-';
  //     }

  //     newRow.appendChild(newCell);
  //   }

  //   if (hasSelectColumn) {
  //     const selectCell = document.createElement('td');
  //     const checkbox = document.createElement('input');
  //     checkbox.type = 'checkbox';
  //     checkbox.className = 'table-row-selector';
  //     selectCell.appendChild(checkbox);
  //     newRow.insertBefore(selectCell, newRow.firstChild);
  //   }

  //   if (hasActionColumn) {
  //     const actionCell = document.createElement('td');

  //     const editButton = document.createElement('button');
  //     editButton.className = 'table-edit-btn';
  //     editButton.textContent = 'Edit';

  //     const deleteButton = document.createElement('button');
  //     deleteButton.className = 'table-delete-btn';
  //     deleteButton.textContent = 'Delete';

  //     actionCell.appendChild(editButton);
  //     actionCell.appendChild(deleteButton);
  //     newRow.appendChild(actionCell);

  //     editButton.addEventListener('click', () => this.toggleEditRow(newRow));
  //     deleteButton.addEventListener('click', () => this.deleteRow(table, newRow));
  //   }

  //   tbody.appendChild(newRow);

  //   if (!table.hasAttribute('data-view-only')) {
  //     this.makeCellsEditable(table);
  //   }

  //   const event = new Event('row-add', { bubbles: true });
  //   table.dispatchEvent(event);
  // }

  // [Previous code remains exactly the same until the addNewRow method]

  static addNewRow(table) {
    const tbody = table.querySelector('tbody');
    if (!tbody) return;

    const config = this.extractInlineConfig(table);
    const newRow = document.createElement('tr');
    const headerCells = table.querySelector('thead tr').cells;
    const hasSelectColumn = table.hasAttribute('data-selectable');
    const hasActionColumn = table.querySelector('th[data-action-column]');

    // Calculate number of data columns (excluding select and action columns)
    const dataColumnCount = headerCells.length - (hasSelectColumn ? 1 : 0) - (hasActionColumn ? 1 : 0);

    // Create data cells
    for (let i = 0; i < dataColumnCount; i++) {
      const newCell = document.createElement('td');

      // Apply original styling
      Object.assign(newCell.style, {
        padding: config.cellPadding,
        textAlign: config.textAlign,
        fontSize: config.cellFontSize,
        border: config.border
      });

      // Make cell editable
      newCell.setAttribute('data-editable', 'true');
      newCell.textContent = '';
      newCell.setAttribute('contenteditable', 'true');
      newCell.style.outline = '2px dashed #bbdefb';

      newCell.addEventListener('focus', () => {
        newCell.style.backgroundColor = '#fff9c4';
        newCell.dataset.originalValue = newCell.textContent;
      });

      newCell.addEventListener('blur', () => {
        newCell.style.backgroundColor = '';
      });

      newRow.appendChild(newCell);
    }

    // Add select checkbox column if needed
    if (hasSelectColumn) {
      const selectCell = document.createElement('td');
      Object.assign(selectCell.style, {
        padding: config.cellPadding,
        textAlign: 'center',
        border: config.border
      });

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'table-row-selector';
      selectCell.appendChild(checkbox);
      newRow.insertBefore(selectCell, newRow.firstChild);
    }

    // Add action buttons column if needed (with NO additional styling)
    if (hasActionColumn) {
      const actionCell = document.createElement('td');
      // No styling applied here - will inherit from table styles

      const editButton = document.createElement('button');
      editButton.className = 'table-edit-btn';
      editButton.textContent = 'Save';

      const deleteButton = document.createElement('button');
      deleteButton.className = 'table-delete-btn';
      deleteButton.textContent = 'Delete';

      // Proper event binding for delete
      deleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deleteRow(table, newRow);
      });

      actionCell.appendChild(editButton);
      actionCell.appendChild(deleteButton);
      newRow.appendChild(actionCell);
    }

    // New row starts in edit mode
    newRow.classList.add('editing');

    // Focus first editable cell
    const firstEditableCell = newRow.querySelector('td[data-editable]');
    if (firstEditableCell) {
      setTimeout(() => firstEditableCell.focus(), 0);
    }

    // Set up edit/save toggle
    const editButton = newRow.querySelector('.table-edit-btn');
    if (editButton) {
      editButton.addEventListener('click', () => {
        const isEditing = newRow.classList.toggle('editing');
        editButton.textContent = isEditing ? 'Save' : 'Edit';

        const cells = newRow.querySelectorAll('td[data-editable]');
        cells.forEach(cell => {
          cell.setAttribute('contenteditable', isEditing ? 'true' : 'false');
          cell.style.outline = isEditing ? '2px dashed #bbdefb' : 'none';
        });

        if (!isEditing) {
          const event = new Event('row-save', { bubbles: true });
          newRow.dispatchEvent(event);
        }
      });
    }

    tbody.appendChild(newRow);

    const event = new Event('row-add', { bubbles: true });
    table.dispatchEvent(event);
  }

  static deleteRow(table, row) {
    if (confirm('Are you sure you want to delete this row?')) {
      row.remove();
      const event = new Event('row-delete', { bubbles: true });
      table.dispatchEvent(event);
    }
  }
  // [Rest of the code remains exactly the same]


  /* ========== SORTING, FILTERING, PAGINATION ========== */
  static addSorting(table) {
    const headers = table.querySelectorAll('th[data-sortable]');

    headers.forEach(header => {
      header.style.cursor = 'pointer';
      header.addEventListener('click', () => {
        const columnIndex = Array.from(header.parentNode.children).indexOf(header);
        const isAscending = header.classList.contains('sorted-asc');
        const sortType = header.getAttribute('data-sort-type') || 'text';

        headers.forEach(h => {
          h.classList.remove('sorted-asc', 'sorted-desc');
        });

        header.classList.add(isAscending ? 'sorted-desc' : 'sorted-asc');
        this.sortTable(table, columnIndex, !isAscending, sortType);
      });
    });
  }

  static sortTable(table, columnIndex, ascending, sortType) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const aCell = a.cells[columnIndex];
      const bCell = b.cells[columnIndex];

      let aValue = aCell.textContent.trim();
      let bValue = bCell.textContent.trim();

      if (sortType === 'number') {
        aValue = parseFloat(aValue) || 0;
        bValue = parseFloat(bValue) || 0;
        return ascending ? aValue - bValue : bValue - aValue;
      } else if (sortType === 'date') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
        return ascending ? aValue - bValue : bValue - aValue;
      } else {
        return ascending
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
    });

    rows.forEach(row => tbody.appendChild(row));
  }

  static addFiltering(table) {
    const config = this.extractInlineConfig(table);
    const filterRow = document.createElement('tr');
    filterRow.className = 'table-filter-row';

    const headers = table.querySelectorAll('th');
    headers.forEach((header, index) => {
      const filterCell = document.createElement('td');
      const filterable = header.hasAttribute('data-filterable');

      if (filterable) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Filter...';
        input.style.width = '100%';
        input.style.boxSizing = 'border-box';
        input.style.padding = config.cellPadding;
        input.style.fontSize = config.cellFontSize;
        input.style.border = config.border;

        input.addEventListener('input', () => {
          this.filterTable(table, index, input.value);
        });

        filterCell.appendChild(input);
      }

      filterRow.appendChild(filterCell);
    });

    table.querySelector('thead').appendChild(filterRow);
  }

  static filterTable(table, columnIndex, filterValue) {
    const rows = table.querySelectorAll('tbody tr');
    const filterLower = filterValue.toLowerCase();

    rows.forEach(row => {
      const cell = row.cells[columnIndex];
      const cellText = cell.textContent.toLowerCase();
      row.style.display = cellText.includes(filterLower) ? '' : 'none';
    });
  }

  static addPagination(table) {
  const config = this.extractPaginationConfig(table);
  if (!config.enabled) return;

  // Create pagination container
  const paginationContainer = document.createElement('div');
  Object.assign(paginationContainer.style, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
    width: '100%'
  });

  // Create pagination controls
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.className = 'pagination-prev';
  Object.assign(prevButton.style, {
    padding: '5px 10px',
    cursor: 'pointer'
  });

  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.className = 'pagination-next';
  Object.assign(nextButton.style, {
    padding: '5px 10px',
    cursor: 'pointer'
  });

  const pageInfo = document.createElement('span');
  pageInfo.className = 'pagination-info';

  const rowsPerPageSelect = document.createElement('select');
  rowsPerPageSelect.className = 'rows-per-page-select';
  [5, 10, 15, 20, 25].forEach(option => {
    const opt = document.createElement('option');
    opt.value = option;
    opt.textContent = `${option}`;
    if (option === config.rowsPerPage) opt.selected = true;
    rowsPerPageSelect.appendChild(opt);
  });

  const rowsPerPageContainer = document.createElement('div');
  rowsPerPageContainer.className = 'rows-per-page-container';
  rowsPerPageContainer.appendChild(rowsPerPageSelect);

  // Build pagination container
  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(pageInfo);
  paginationContainer.appendChild(nextButton);
  paginationContainer.appendChild(rowsPerPageContainer);

  // Find the best position to insert the pagination
  const existingWrapper = table.closest('.table-wrapper, .sticky-table-wrapper');
  const tableParent = table.parentNode;
  
  if (existingWrapper) {
    // If there's a wrapper, insert after it
    existingWrapper.parentNode.insertBefore(paginationContainer, existingWrapper.nextSibling);
  } else {
    // If no wrapper, insert after the table
    tableParent.insertBefore(paginationContainer, table.nextSibling);
  }

  // Pagination logic
  const rows = Array.from(table.querySelectorAll('tbody tr'));
  let currentPage = 1;
  let rowsPerPage = config.rowsPerPage;
  let totalPages = Math.ceil(rows.length / rowsPerPage);

  const updatePagination = () => {
    totalPages = Math.ceil(rows.length / rowsPerPage);
    if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
    
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    
    rows.forEach((row, index) => {
      row.style.display = (index >= startIndex && index < endIndex) ? '' : 'none';
    });

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages || totalPages === 0;
  };

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
  });

  rowsPerPageSelect.addEventListener('change', (e) => {
    rowsPerPage = parseInt(e.target.value);
    currentPage = 1;
    updatePagination();
  });

  updatePagination();
}

  static extractPaginationConfig(table) {
    return {
      enabled: table.hasAttribute('data-paginate'),
      rowsPerPage: parseInt(table.getAttribute('data-rows-per-page')) || 10
    };
  }
}

const TableLib = (() => {
  const customConfigs = [];

  function applyCustomStyles() {
    customConfigs.forEach(({ selector, config }) => {
      document.querySelectorAll(selector).forEach((table) => {
        TableComponent.applyStyle(table, config);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      TableComponent.init();
      applyCustomStyles();
    });
  } else {
    TableComponent.init();
    applyCustomStyles();
  }

  return {
    setCustomTable(selector, userConfig) {
      const convertedConfig = {
        ...userConfig,
        lastRowBackground: userConfig.lastRowBg || userConfig.lastRowBackground,
        lastRowColor: userConfig.lastRowColor,
        hoverRowColor: userConfig.hoverLastRow || userConfig.hoverRowColor,
        hoverTextColor: userConfig.hoverLastRowText || userConfig.hoverTextColor,
        altColsColor: userConfig.altColsColor ?
          (Array.isArray(userConfig.altColsColor) ?
            userConfig.altColsColor :
            userConfig.altColsColor.split('-')) :
          null,
        columnColors: userConfig.colColor ?
          { 0: userConfig.colColor } :
          (userConfig.columnColors || {})
      };

      delete convertedConfig.lastRowBg;
      delete convertedConfig.hoverLastRow;
      delete convertedConfig.hoverLastRowText;
      delete convertedConfig.colColor;

      customConfigs.push({
        selector,
        config: TableComponent.deepMerge(TableComponent.getDefaultConfig(), convertedConfig)
      });

      if (document.readyState === 'complete') {
        document.querySelectorAll(selector).forEach((table) => {
          TableComponent.applyStyle(table, convertedConfig);
        });
      }
    }
  };
})();

// --- PATCH START ---
(function fixHoverBehavior() {
  const tables = document.querySelectorAll('[data-component="table"]');

  tables.forEach(table => {
    const config = TableComponent.extractInlineConfig(table);
    const rows = table.querySelectorAll('tr');

    rows.forEach((row, rowIndex) => {
      if (rowIndex === 0) return;

      const hasHover = (config.hoverRowColor && config.hoverRowColor !== 'none') ||
        (config.hoverTextColor && config.hoverTextColor !== 'none');

      if (!hasHover) {
        const bgColor = window.getComputedStyle(row).backgroundColor;
        const textColor = window.getComputedStyle(row).color;

        row.onmouseenter = function () {
          this.style.backgroundColor = bgColor;
          this.style.color = textColor;
        };
        row.onmouseleave = function () {
          this.style.backgroundColor = bgColor;
          this.style.color = textColor;
        };
      }
    });
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    const tables = document.querySelectorAll('[data-component="table"]');

    tables.forEach(function (table) {
      const classes = table.className.split(' ');
      const config = {
        lastRowBg: getValueFromClass(classes, 'lastRowBg-'),
        lastRowColor: getValueFromClass(classes, 'lastRowColor-'),
        hasBorder: classes.includes('border-solid') || table.style.border,
        hoverLastRow: getValueFromClass(classes, 'hoverLastRow-'),
        hoverLastRowText: getValueFromClass(classes, 'hoverLastRowText-')
      };

      const rows = table.querySelectorAll('tr');
      if (rows.length < 2) return;

      const lastRow = rows[rows.length - 1];
      const cells = lastRow.querySelectorAll('td, th');

      if (config.hasBorder) {
        const computedBorder = window.getComputedStyle(table).border;
        cells.forEach(cell => {
          cell.style.border = computedBorder;
        });
      }

      if (config.lastRowBg) {
        lastRow.style.backgroundColor = config.lastRowBg;
      }
      if (config.lastRowColor) {
        lastRow.style.color = config.lastRowColor;
      }

      if (config.hoverLastRow || config.hoverLastRowText) {
        const originalBg = window.getComputedStyle(lastRow).backgroundColor;
        const originalText = window.getComputedStyle(lastRow).color;

        lastRow.addEventListener('mouseenter', function () {
          if (config.hoverLastRow) this.style.backgroundColor = config.hoverLastRow;
          if (config.hoverLastRowText) this.style.color = config.hoverLastRowText;
        });

        lastRow.addEventListener('mouseleave', function () {
          this.style.backgroundColor = originalBg;
          this.style.color = originalText;
        });
      }
    });

    function getValueFromClass(classes, prefix) {
      const classMatch = classes.find(c => c.startsWith(prefix));
      return classMatch ? classMatch.replace(prefix, '') : null;
    }
  }, 100);
});
// --- PATCH END ---

// --- TABLE WRAPPER: SCROLL ONLY THIS SECTION ---
(function addTableWrapperStyles() {
  const style = document.createElement('style');
  // Inside the addTableWrapperStyles function
style.innerHTML = `
  * {
    box-sizing: border-box;
  }
  .table-wrapper {
    overflow-x: auto;
    width: 100%;
  }
  [data-component="table"] {
    width: max-content;
    min-width: 100%;
    display: table;
    border-collapse: collapse;
  }
  th[data-sortable]::after {
    content: ' ↕';
    font-size: 0.8em;
  }
  th.sorted-asc::after {
    content: ' ↑';
  }
  th.sorted-desc::after {
    content: ' ↓';
  }
  .table-filter-row input {
    margin: 0;
  }
  .table-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
  .table-pagination button {
    padding: 5px 10px;
    cursor: pointer;
  }
  .table-pagination button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .table-edit-btn, .table-delete-btn {
    padding: 3px 8px;
    margin: 0 2px;
    cursor: pointer;
    font-size: 0.9em;
  }
  .table-delete-btn {
    background-color: #ffebee;
    color: #c62828;
    border: 1px solid #ef9a9a;
  }
  .table-delete-btn:hover {
    background-color: #ef9a9a;
  }
  .table-edit-btn {
    background-color: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #a5d6a7;
  }
  .table-edit-btn:hover {
    background-color: #a5d6a7;
  }
  .table-bulk-delete-btn {
    padding: 5px 10px;
    background-color: #ffebee;
    color: #c62828;
    border: 1px solid #ef9a9a;
    cursor: pointer;
  }
  .table-bulk-delete-btn:hover {
    background-color: #ef9a9a;
  }
  .table-add-row-btn {
    padding: 5px 10px;
    background-color: #e3f2fd;
    color: #1565c0;
    border: 1px solid #90caf9;
    cursor: pointer;
  }
  .table-add-row-btn:hover {
    background-color: #90caf9;
  }
  td[contenteditable="true"] {
    outline: 2px dashed #bbdefb;
  }
  .table-row-selector {
    margin: 0 auto;
    display: block;
  }
  tr.editing td {
    background-color: #fff9c4 !important;
  }
  
  /* Sticky header fixes */
  .sticky-table-wrapper {
    overflow: auto;
    max-height: 500px;
    position: relative;
    display: block;
  }
  
  /* Header row */
  // .sticky-table-wrapper thead tr:first-child th {
  //   position: sticky;
  //   top: 0;
  //   z-index: 30; 
  // }
  
  /* First header cell - needs to be above other headers */
  .sticky-table-wrapper thead tr:first-child th:first-child {
    z-index: 3; /* Higher than other headers */
    left: 0;
  }
  
  /* Body cells - first column */
  .sticky-table-wrapper tbody tr td:first-child {
    position: sticky;
    left: 0;
    // z-index: 20; 
  }
  
  /* Fix for header cell stacking */
  .sticky-table-wrapper th {
    background-color: inherit; /* Ensure background covers content */
    box-shadow: 1px 0 0 #ccc; /* Visual separator */
  }
`;
  // Inside addTableWrapperStyles
// style.innerHTML += `
//   .sticky-table-wrapper {
//     overflow: auto;
//     max-height: 500px;
//     position: relative;
//     display: block;
//   }
  
//   .sticky-table-wrapper thead tr:first-child th {
//     position: sticky;
//     top: 0;
//     z-index: 10;
//   }
  
//   .sticky-table-wrapper tbody tr td:first-child {
//     position: sticky;
//     left: 0;
//     z-index: 9;
//   }
  
//   .table-pagination-container {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     margin-top: 10px;
//   }
// `;
  document.head.appendChild(style);
})();

document.addEventListener('DOMContentLoaded', function () {
  const tables = document.querySelectorAll('[data-component="table"]');

  tables.forEach(table => {
    if (table.parentElement && table.parentElement.classList.contains('table-wrapper')) return;

    const wrapper = document.createElement('div');
    wrapper.classList.add('table-wrapper');

    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
});

// --- Sticky Table Features ---
(function () {
  function initializeStickyFeatures() {
    document.querySelectorAll('table[data-component="table"]').forEach(table => {
      if (table.dataset.stickyInitialized) return;
      table.dataset.stickyInitialized = "true";

      const config = TableComponent.extractInlineConfig(table);

      Object.assign(table.style, {
        borderCollapse: 'separate',
        borderSpacing: '0',
        width: '100%'
      });

      let wrapper = table.parentElement;
      if (!wrapper.classList.contains('sticky-table-wrapper')) {
        const newWrapper = document.createElement('div');
        Object.assign(newWrapper.style, {
          overflow: 'auto',
          maxHeight: '500px',
          position: 'relative',
          display: 'block'
        });
        newWrapper.className = 'sticky-table-wrapper';
        table.parentNode.insertBefore(newWrapper, table);
        newWrapper.appendChild(table);
        wrapper = newWrapper;
      }

      if (table.getAttribute('data-sticky-header')) {
        const headerRow = table.querySelector('tr:first-child');
        if (headerRow) {
          const headerBg = config.headerStyle.backgroundColor ||
            window.getComputedStyle(headerRow).backgroundColor;

          Object.assign(headerRow.style, {
            position: 'sticky',
            top: '0',
            zIndex: '2',
            backgroundColor: headerBg === 'rgba(0, 0, 0, 0)' ? '#fff' : headerBg
          });

          const dataRows = Array.from(table.querySelectorAll('tr')).slice(1);
          if (dataRows.length) {
            const headerCells = headerRow.querySelectorAll('th, td');
            dataRows.forEach(row => {
              const cells = row.querySelectorAll('td');
              cells.forEach((cell, i) => {
                // if (headerCells[i]) {
                //   headerCells[i].style.minWidth = `${cell.offsetWidth}px`;
                // }
              });
            });
          }
        }
      }

      if (table.hasAttribute('data-sticky-col')) {
        const rows = table.querySelectorAll('tr');
        rows.forEach(row => {
          const firstCell = row.querySelector('th, td');
          if (firstCell) {
            const colIndex = Array.from(row.children).indexOf(firstCell);
            const colBg = config.columnColors[colIndex] ||
              config.altColsColor?.[colIndex % 2] ||
              window.getComputedStyle(firstCell).backgroundColor;

            Object.assign(firstCell.style, {
              position: 'sticky',
              left: '0',
              zIndex: '1',
              backgroundColor: colBg === 'rgba(0, 0, 0, 0)' ? '#fff' : colBg
            });
          }
        });
      }
    });
  }

  function init() {
    initializeStickyFeatures();
    window.addEventListener('resize', initializeStickyFeatures);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          const tables = node.querySelectorAll
            ? node.querySelectorAll('table[data-component="table"]')
            : [];
          if (node.matches('table[data-component="table"]')) {
            tables.push(node);
          }
          if (tables.length) {
            initializeStickyFeatures();
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
