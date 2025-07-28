// // gallery.js (Updated with Lightbox functionality while preserving original code)
// (function() {
//   // Style configurations
//   const customActiveButtonStyles = {
//     backgroundColor: "#087F8F",
//     color: "#fff"
//   };

//   const customImageStyles = {
//     height: "220px",
//     width: "265px",
//     margin: "3px"
//   };

//   const customGalleryH3Styles = {
//     marginBottom: "0",
//     color: "#097788",
//     lineHeight: "1.5",
//     fontWeight: "500",
//     fontFamily: "'Poppins', sans-serif",
//     letterSpacing: "1px",
//     fontSize: "1.1rem"
//   };

//   // Lightbox variables
//   let currentImageIndex = 0;
//   let lightboxImages = [];
//   let activeSectionImages = [];
//   let isFirstOpen = true;

//   // Create lightbox HTML
//   function createLightbox() {
//     const lightboxHTML = `
//       <div id="galleryLightbox" style="
//         display: none;
//         position: fixed;
//         z-index: 1000;
//         left: 0;
//         top: 0;
//         width: 100%;
//         height: 100%;
//         background-color: rgba(0,0,0,0.9);
//         justify-content: center;
//       ">
//         <span id="lightboxClose" style="
//           position: absolute;
//           top: 20px;
//           right: 30px;
//           color: white;
//           font-size: 35px;
//           font-weight: bold;
//           cursor: pointer;
//           z-index: 1001;
//         ">&times;</span>
        
//         <a id="lightboxPrev" style="
//           position: absolute;
//           top: 50%;
//           left: 20px;
//           transform: translateY(-50%);
//           color: white;
//           font-size: 40px;
//           font-weight: bold;
//           cursor: pointer;
//           user-select: none;
//           padding: 15px;
//           z-index: 1001;
//         ">&#10094;</a>
        
//         <div id="lightboxImageContainer" style="
//           position: relative;
//           max-width: 80%;
//           max-height: 80vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         ">
//           <img id="lightboxImage" style="
//             width: 700px;
//             height: 500px;
//             margin-top: 30px;
//           ">
//         </div>
        
//         <a id="lightboxNext" style="
//           position: absolute;
//           top: 50%;
//           right: 20px;
//           transform: translateY(-50%);
//           color: white;
//           font-size: 40px;
//           font-weight: bold;
//           cursor: pointer;
//           user-select: none;
//           padding: 15px;
//           z-index: 1001;
//         ">&#10095;</a>
        
//         <div id="lightboxCaption" style="
//           position: absolute;
//           bottom: 60px;
//           left: 0;
//           right: 0;
//           color: white;
//           text-align: center;
//           padding: 10px;
//           font-family: 'Poppins', sans-serif;
//         "></div>
        
//         <div id="lightboxThumbnails" style="
//           position: absolute;
//           bottom: 20px;
//           left: 0;
//           right: 0;
//           display: flex;
//           justify-content: center;
//           flex-wrap: wrap;
//           padding: 10px;
//           background-color: rgba(255,255,255,0.1);
//         "></div>
//       </div>
//     `;

//     document.body.insertAdjacentHTML('beforeend', lightboxHTML);

//     // Add event listeners
//     document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
//     document.getElementById('lightboxPrev').addEventListener('click', showPrevImage);
//     document.getElementById('lightboxNext').addEventListener('click', showNextImage);
//     document.getElementById('galleryLightbox').addEventListener('click', function(e) {
//       if (e.target === this) closeLightbox();
//     });

//     // Keyboard navigation
//     document.addEventListener('keydown', function(e) {
//       const lightbox = document.getElementById('galleryLightbox');
//       if (lightbox.style.display === 'none') return;

//       if (e.key === 'Escape') {
//         closeLightbox();
//       } else if (e.key === 'ArrowLeft') {
//         showPrevImage();
//       } else if (e.key === 'ArrowRight') {
//         showNextImage();
//       }
//     });
//   }

//   // Lightbox functions with animations
//   function openLightbox(index) {
//     if (!activeSectionImages.length) return;
    
//     currentImageIndex = index;
//     const lightbox = document.getElementById('galleryLightbox');
//     const lightboxImg = document.getElementById('lightboxImage');
//     const thumbnailsContainer = document.getElementById('lightboxThumbnails');
//     const captionContainer = document.getElementById('lightboxCaption');

//     // ✅ Responsive size
//     if (window.innerWidth <= 576) {
//       lightboxImg.style.width = "430px";
//       lightboxImg.style.height = "auto"; // Keep aspect ratio
//     } else {
//       lightboxImg.style.width = "700px";
//       lightboxImg.style.height = "500px";
//     }

//     // Set content
//     lightboxImg.src = activeSectionImages[index].src;
//     lightboxImg.alt = activeSectionImages[index].alt;
//     captionContainer.textContent = activeSectionImages[index].alt || '';

//     // Show lightbox
//     lightbox.style.display = 'flex';
    
//       // Set initial state for animation
//       lightbox.style.opacity = '0';
//       lightboxImg.style.transform = 'scale(0.8)';
//       lightboxImg.style.opacity = '0';
      
//       // Animate in
//       setTimeout(() => {
//         lightbox.style.transition = 'opacity 0.3s ease-out';
//         lightbox.style.opacity = '1';
        
//         lightboxImg.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
//         lightboxImg.style.transform = 'scale(1)';
//         lightboxImg.style.opacity = '1';
//       }, 10);
      

//     // Update thumbnails
//     updateThumbnails();
//   }

//   function closeLightbox() {
//     const lightbox = document.getElementById('galleryLightbox');
//     const lightboxImg = document.getElementById('lightboxImage');
    
//     // Animate out
//     lightbox.style.transition = 'opacity 0.3s ease-out';
//     lightbox.style.opacity = '0';
    
//     lightboxImg.style.transition = 'all 0.3s ease-in';
//     lightboxImg.style.transform = 'scale(0.8)';
//     lightboxImg.style.opacity = '0';
    
//     // Hide after animation completes
//     setTimeout(() => {
//       lightbox.style.display = 'none';
//       // Reset transforms for next open
//       lightbox.style.opacity = '1';
//       lightboxImg.style.transform = 'scale(1)';
//       lightboxImg.style.opacity = '1';
//     }, 300);
//   }

//   function showPrevImage(e) {
//     if (e) e.stopPropagation();
//     const lightboxImg = document.getElementById('lightboxImage');
//     const captionContainer = document.getElementById('lightboxCaption');
    
//     currentImageIndex = (currentImageIndex - 1 + activeSectionImages.length) % activeSectionImages.length;
//     lightboxImg.src = activeSectionImages[currentImageIndex].src;
//     lightboxImg.alt = activeSectionImages[currentImageIndex].alt;
//     captionContainer.textContent = activeSectionImages[currentImageIndex].alt || '';
    
//     updateThumbnails();
//   }

//   function showNextImage(e) {
//     if (e) e.stopPropagation();
//     const lightboxImg = document.getElementById('lightboxImage');
//     const captionContainer = document.getElementById('lightboxCaption');
    
//     currentImageIndex = (currentImageIndex + 1) % activeSectionImages.length;
//     lightboxImg.src = activeSectionImages[currentImageIndex].src;
//     lightboxImg.alt = activeSectionImages[currentImageIndex].alt;
//     captionContainer.textContent = activeSectionImages[currentImageIndex].alt || '';
    
//     updateThumbnails();
//   }

//   function updateThumbnails() {
//     const thumbnailsContainer = document.getElementById('lightboxThumbnails');
//     thumbnailsContainer.innerHTML = '';
    
//     activeSectionImages.forEach((img, idx) => {
//       const thumb = document.createElement('img');
//       thumb.src = img.src;
//       thumb.style.height = '50px';
//       thumb.style.width = '60px';
//       thumb.style.margin = '5px';
//       thumb.style.cursor = 'pointer';
//       thumb.style.objectFit = 'cover';
//       thumb.style.border = idx === currentImageIndex ? '2px solid #087F8F' : 'none';
//       thumb.style.opacity = idx === currentImageIndex ? '1' : '0.6';
//       thumb.style.transition = 'all 0.3s';

//       thumb.addEventListener('click', () => {
//         if (idx === currentImageIndex) return;
//         currentImageIndex = idx;
//         const lightboxImg = document.getElementById('lightboxImage');
//         lightboxImg.src = activeSectionImages[idx].src;
//         lightboxImg.alt = activeSectionImages[idx].alt;
//         document.getElementById('lightboxCaption').textContent = activeSectionImages[idx].alt || '';
//         updateThumbnails();
//       });

//       thumbnailsContainer.appendChild(thumb);
//     });
//   }

//   // Style update functions
//   function updateImageStyles() {
//     document.querySelectorAll(".media-content img").forEach(img => {
//       Object.entries(customImageStyles).forEach(([prop, value]) => {
//         img.style[prop] = value;
//       });
//     });
//   }

//   function updateH3Styles() {
//     document.querySelectorAll(".subfolder h3").forEach(h3 => {
//       Object.entries(customGalleryH3Styles).forEach(([prop, value]) => {
//         h3.style[prop] = value;
//       });
//     });
//   }

//   // Create image folder element
//   function createImageFolder(folderName, images, isSubfolder = false) {
//     const folder = document.createElement('div');
//     folder.className = 'image-folder' + (isSubfolder ? ' subfolder' : '');
//     folder.style.position = 'relative';
//     folder.style.display = 'inline-block';
//     folder.style.margin = isSubfolder ? '5px' : '10px';
//     folder.style.cursor = 'pointer';
//     folder.style.verticalAlign = 'top';
//     folder.style.textAlign = 'center';
    
//     if (isSubfolder) {
//       folder.style.width = '180px';
//     }

//     // Create stacked images effect
//     const imagesToShow = Math.min(3, images.length);
//     for (let i = 0; i < imagesToShow; i++) {
//       const img = document.createElement('img');
//       img.src = images[i].src;
//       img.style.position = i > 0 ? 'absolute' : 'relative';
//       img.style.top = i > 0 ? `${i * 3}px` : '0';
//       img.style.left = i > 0 ? `${i * 3}px` : '0';
//       img.style.zIndex = i;
//       img.style.width = isSubfolder ? '150px' : '220px';
//       img.style.height = isSubfolder ? '120px' : '180px';
//       img.style.objectFit = 'cover';
//       img.style.borderRadius = '4px';
//       img.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
//       img.style.transform = i > 0 ? 'rotate(' + (i * 2) + 'deg)' : 'none';
//       folder.appendChild(img);
//     }
    
//     // Add folder label
//     const label = document.createElement('div');
//     label.textContent = folderName + (images.length ? ` (${images.length})` : '');
//     label.style.textAlign = 'center';
//     label.style.marginTop = '8px';
//     label.style.color = isSubfolder ? '#5a9ca5' : '#097788';
//     label.style.fontWeight = '500';
//     label.style.fontSize = isSubfolder ? '0.9rem' : '1rem';
//     folder.appendChild(label);
    
//     return folder;
//   }

//   // Image display with folder view
//   // function addLightboxToImages() {
//   //   // Clear previous containers
//   //   document.querySelectorAll('.image-folder-container').forEach(container => {
//   //     container.remove();
//   //   });

//   //   // Get the currently active section
//   //   const activeSection = document.querySelector('[id$="Section"]:not([style*="display: none"])');
    
//   //   if (!activeSection) return;

//   //   // Create main folder container
//   //   const folderContainer = document.createElement('div');
//   //   folderContainer.className = 'image-folder-container';
//   //   folderContainer.style.display = 'flex';
//   //   folderContainer.style.flexWrap = 'wrap';
//   //   folderContainer.style.justifyContent = 'center';
//   //   folderContainer.style.margin = '20px 0';
//   //   folderContainer.style.gap = '15px';

//   //   if (activeSection.id === 'homeSection') {
//   //     // Handle home section (single folder)
//   //     const images = activeSection.querySelectorAll('.media-content img');
//   //     activeSectionImages = Array.from(images);
      
//   //     if (images.length > 0) {
//   //       const folder = createImageFolder('All Images', activeSectionImages);
//   //       folder.addEventListener('click', () => {
//   //         openLightbox(0);
//   //       });
//   //       folderContainer.appendChild(folder);
//   //     }
//   //   } 
//   //   else if (activeSection.id === 'eventSection') {
//   //     // Handle event section with subfolders
//   //     const subfolders = activeSection.querySelectorAll('.subfolder');
      
//   //     subfolders.forEach(subfolder => {
//   //       const title = subfolder.querySelector('h3')?.textContent.trim() || 'Event';
//   //       const images = subfolder.querySelectorAll('.media-content img');
        
//   //       if (images.length > 0) {
//   //         const folder = createImageFolder(title, Array.from(images), true);
//   //         folder.addEventListener('click', () => {
//   //           activeSectionImages = Array.from(images);
//   //           openLightbox(0);
//   //         });
//   //         folderContainer.appendChild(folder);
//   //       }
//   //     });
//   //   }

//   //   // Add folder container to section
//   //   activeSection.insertBefore(folderContainer, activeSection.firstChild);
//   // }





//   function addLightboxToImages() {
//   // Clear old containers
//   document.querySelectorAll('.image-folder-container').forEach(container => {
//     container.remove();
//   });

//   const activeSection = document.querySelector('[id$="Section"]:not([style*="display: none"])');
//   if (!activeSection) return;

//   const folderContainer = document.createElement('div');
//   folderContainer.className = 'image-folder-container';
//   folderContainer.style.display = 'flex';
//   folderContainer.style.flexWrap = 'wrap';
//   folderContainer.style.justifyContent = 'center';

//   // Check if section has subfolders
//   const subfolders = activeSection.querySelectorAll('.subfolder');
  
//   if (subfolders.length > 0) {
//     // Case 1: Has subfolders -> create folders for each
//     subfolders.forEach(subfolder => {
//       const title = subfolder.querySelector('h3')?.textContent.trim() || 'Untitled';
//       const images = subfolder.querySelectorAll('.media-content img');
//       if (images.length > 0) {
//         const folder = createImageFolder(title, Array.from(images), true);
//         folder.addEventListener('click', () => {
//           activeSectionImages = Array.from(images);
//           openLightbox(0);
//         });
//         folderContainer.appendChild(folder);
//       }
//     });
//   } else {
//     // Case 2: No subfolders -> create single folder for all images
//     const images = activeSection.querySelectorAll('.media-content img');
//     if (images.length > 0) {
//       activeSectionImages = Array.from(images);
//       const folder = createImageFolder(
//         activeSection.id === 'homeSection' ? 'All Images' : 'Event Images',
//         activeSectionImages
//       );
//       folder.addEventListener('click', () => openLightbox(0));
//       folderContainer.appendChild(folder);
//     }
//   }

//   activeSection.insertBefore(folderContainer, activeSection.firstChild);
// }






//   // Button handling
//   function handleButtons() {
//     const homeBtn = document.getElementById("homeBtn");
//     const eventBtn = document.getElementById("eventBtn");
//     const homeSection = document.getElementById("homeSection");
//     const eventSection = document.getElementById("eventSection");

//     if (!homeBtn || !eventBtn) return;

//     if (window.ButtonLib) {
//       [homeBtn, eventBtn].forEach(btn => {
//         btn.dataset.originalBackgroundColor = btn.style.backgroundColor;
//         btn.dataset.originalColor = btn.style.color;
//       });
//     }

//     function setActiveButton(active, inactive) {
//       active.classList.remove("active-btn");
//       inactive.classList.remove("active-btn");
      
//       active.classList.add("active-btn");
//       Object.entries(customActiveButtonStyles).forEach(([prop, value]) => {
//         active.style[prop] = value;
//       });

//       if (window.ButtonLib) {
//         inactive.style.backgroundColor = inactive.dataset.originalBackgroundColor;
//         inactive.style.color = inactive.dataset.originalColor;
//       } else {
//         inactive.style.backgroundColor = "";
//         inactive.style.color = "";
//       }
//     }

//     function switchSection(showSection, hideSection, activeBtn, inactiveBtn) {
//       showSection.style.display = "block";
//       hideSection.style.display = "none";
//       setActiveButton(activeBtn, inactiveBtn);
//       addLightboxToImages();
//     }

//     // Initial state
//     switchSection(homeSection, eventSection, homeBtn, eventBtn);

//     // Event handlers
//     homeBtn.addEventListener("click", () => {
//       switchSection(homeSection, eventSection, homeBtn, eventBtn);
//     });

//     eventBtn.addEventListener("click", () => {
//       switchSection(eventSection, homeSection, eventBtn, homeBtn);
//     });
//   }

//   // Initialize everything
//   document.addEventListener("DOMContentLoaded", () => {
//     createLightbox();
//     updateImageStyles();
//     updateH3Styles();
//     addLightboxToImages();

//     // Add CSS to hide media images and subfolder h3 elements
//     const style = document.createElement('style');
//     style.textContent = `
//       .media-content img {
//         display: none;
//       }
//       .subfolder h3 {
//         visibility: hidden;
//       }
//     `;
//     document.head.appendChild(style);

//     document.querySelectorAll("ul").forEach(ul => ul.style.listStyle = "none");
//     document.querySelectorAll(".align-self-center").forEach(el => el.style.alignSelf = "center");
//     document.querySelectorAll(".align-items-center").forEach(el => el.style.alignItems = "center");
//     document.querySelectorAll(".pl-40").forEach(el => el.style.paddingLeft = "40px");
//     document.querySelectorAll("button").forEach(btn => btn.style.cursor = "pointer");
//     document.querySelectorAll(".media-content").forEach(el => el.style.marginTop = "20px");

//     const containers = [
//       ".container", ".container-fluid", ".container-lg", ".container-md",
//       ".container-sm", ".container-xl", ".container-xxl"
//     ];
//     containers.forEach(cls => {
//       document.querySelectorAll(cls).forEach(el => {
//         el.style.width = "100%";
//         el.style.paddingRight = "var(--bs-gutter-x, .75rem)";
//         el.style.paddingLeft = "var(--bs-gutter-x, .75rem)";
//         el.style.marginRight = "auto";
//         el.style.marginLeft = "auto";
//       });
//     });

//     if (window.matchMedia("(min-width: 1400px)").matches) {
//       document.querySelectorAll(containers.join(", ")).forEach(el => {
//         el.style.maxWidth = "1320px";
//       });
//     }

//     handleButtons();
//   });

//   // Public API
//   window.setCustomActiveButton = function(styles = {}) {
//     Object.assign(customActiveButtonStyles, styles);
//     document.querySelectorAll(".active-btn").forEach(btn => {
//       Object.entries(customActiveButtonStyles).forEach(([prop, value]) => {
//         btn.style[prop] = value;
//       });
//     });
//   };

//   window.setCustomImageStyle = function(styles = {}) {
//     Object.assign(customImageStyles, styles);
//     updateImageStyles();
//   };

//   window.setCustomGalleryH3 = function(styles = {}) {
//     Object.assign(customGalleryH3Styles, styles);
//     updateH3Styles();
//   };
// })();
























//try
// gallery.js (Updated with Lightbox functionality while preserving original code)
// (function() {
//   // Style configurations
//   const customActiveButtonStyles = {
//     backgroundColor: "#087F8F",
//     color: "#fff"
//   };

//   const customImageStyles = {
//     height: "220px",
//     width: "265px",
//     margin: "3px"
//   };

//   const customGalleryH3Styles = {
//     marginBottom: "0",
//     color: "#097788",
//     lineHeight: "1.5",
//     fontWeight: "500",
//     fontFamily: "'Poppins', sans-serif",
//     letterSpacing: "1px",
//     fontSize: "1.1rem"
//   };

//   // Lightbox variables
//   let currentImageIndex = 0;
//   let lightboxImages = [];
//   let activeSectionImages = [];
//   let isFirstOpen = true;

//   // Create lightbox HTML
//   function createLightbox() {
//     const lightboxHTML = `
//       <div id="galleryLightbox" style="
//         display: none;
//         position: fixed;
//         z-index: 1000;
//         left: 0;
//         top: 0;
//         width: 100%;
//         height: 100%;
//         background-color: rgba(0,0,0,0.9);
//         justify-content: center;
//       ">
//         <span id="lightboxClose" style="
//           position: absolute;
//           top: 20px;
//           right: 30px;
//           color: white;
//           font-size: 35px;
//           font-weight: bold;
//           cursor: pointer;
//           z-index: 1001;
//         ">&times;</span>
        
//         <a id="lightboxPrev" style="
//           position: absolute;
//           top: 50%;
//           left: 20px;
//           transform: translateY(-50%);
//           color: white;
//           font-size: 40px;
//           font-weight: bold;
//           cursor: pointer;
//           user-select: none;
//           padding: 15px;
//           z-index: 1001;
//         ">&#10094;</a>
        
//         <div id="lightboxImageContainer" style="
//           position: relative;
//           max-width: 80%;
//           max-height: 80vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         ">
//           <img id="lightboxImage" style="
//             width: 700px;
//             height: 500px;
//             margin-top: 30px;
//           ">
//         </div>
        
//         <a id="lightboxNext" style="
//           position: absolute;
//           top: 50%;
//           right: 20px;
//           transform: translateY(-50%);
//           color: white;
//           font-size: 40px;
//           font-weight: bold;
//           cursor: pointer;
//           user-select: none;
//           padding: 15px;
//           z-index: 1001;
//         ">&#10095;</a>
        
//         <div id="lightboxCaption" style="
//           position: absolute;
//           bottom: 60px;
//           left: 0;
//           right: 0;
//           color: white;
//           text-align: center;
//           padding: 10px;
//           font-family: 'Poppins', sans-serif;
//         "></div>
        
//         <div id="lightboxThumbnails" style="
//           position: absolute;
//           bottom: 20px;
//           left: 0;
//           right: 0;
//           display: flex;
//           justify-content: center;
//           flex-wrap: wrap;
//           padding: 10px;
//           background-color: rgba(255,255,255,0.1);
//         "></div>
//       </div>
//     `;

//     document.body.insertAdjacentHTML('beforeend', lightboxHTML);

//     // Add event listeners
//     document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
//     document.getElementById('lightboxPrev').addEventListener('click', showPrevImage);
//     document.getElementById('lightboxNext').addEventListener('click', showNextImage);
//     document.getElementById('galleryLightbox').addEventListener('click', function(e) {
//       if (e.target === this) closeLightbox();
//     });

//     // Keyboard navigation
//     document.addEventListener('keydown', function(e) {
//       const lightbox = document.getElementById('galleryLightbox');
//       if (lightbox.style.display === 'none') return;

//       if (e.key === 'Escape') {
//         closeLightbox();
//       } else if (e.key === 'ArrowLeft') {
//         showPrevImage();
//       } else if (e.key === 'ArrowRight') {
//         showNextImage();
//       }
//     });
//   }

//   // Lightbox functions with animations
//   function openLightbox(index) {
//     if (!activeSectionImages.length) return;
    
//     currentImageIndex = index;
//     const lightbox = document.getElementById('galleryLightbox');
//     const lightboxImg = document.getElementById('lightboxImage');
//     const thumbnailsContainer = document.getElementById('lightboxThumbnails');
//     const captionContainer = document.getElementById('lightboxCaption');

//     // ✅ Responsive size
//     if (window.innerWidth <= 576) {
//       lightboxImg.style.width = "430px";
//       lightboxImg.style.height = "430px"; // Keep aspect ratio
//     } else {
//       lightboxImg.style.width = "700px";
//       lightboxImg.style.height = "500px";
//     }

//     // Set content
//     lightboxImg.src = activeSectionImages[index].src;
//     lightboxImg.alt = activeSectionImages[index].alt;
//     captionContainer.textContent = activeSectionImages[index].alt || '';

//     // Show lightbox
//     lightbox.style.display = 'flex';
    
//       // Set initial state for animation
//       lightbox.style.opacity = '0';
//       lightboxImg.style.transform = 'scale(0.8)';
//       lightboxImg.style.opacity = '0';
      
//       // Animate in
//       setTimeout(() => {
//         lightbox.style.transition = 'opacity 0.3s ease-out';
//         lightbox.style.opacity = '1';
        
//         lightboxImg.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
//         lightboxImg.style.transform = 'scale(1)';
//         lightboxImg.style.opacity = '1';
//       }, 10);
      

//     // Update thumbnails
//     updateThumbnails();
//   }

//   function closeLightbox() {
//     const lightbox = document.getElementById('galleryLightbox');
//     const lightboxImg = document.getElementById('lightboxImage');
    
//     // Animate out
//     lightbox.style.transition = 'opacity 0.3s ease-out';
//     lightbox.style.opacity = '0';
    
//     lightboxImg.style.transition = 'all 0.3s ease-in';
//     lightboxImg.style.transform = 'scale(0.8)';
//     lightboxImg.style.opacity = '0';
    
//     // Hide after animation completes
//     setTimeout(() => {
//       lightbox.style.display = 'none';
//       // Reset transforms for next open
//       lightbox.style.opacity = '1';
//       lightboxImg.style.transform = 'scale(1)';
//       lightboxImg.style.opacity = '1';
//     }, 300);
//   }

//   function showPrevImage(e) {
//     if (e) e.stopPropagation();
//     const lightboxImg = document.getElementById('lightboxImage');
//     const captionContainer = document.getElementById('lightboxCaption');
    
//     currentImageIndex = (currentImageIndex - 1 + activeSectionImages.length) % activeSectionImages.length;
//     lightboxImg.src = activeSectionImages[currentImageIndex].src;
//     lightboxImg.alt = activeSectionImages[currentImageIndex].alt;
//     captionContainer.textContent = activeSectionImages[currentImageIndex].alt || '';
    
//     updateThumbnails();
//   }

//   function showNextImage(e) {
//     if (e) e.stopPropagation();
//     const lightboxImg = document.getElementById('lightboxImage');
//     const captionContainer = document.getElementById('lightboxCaption');
    
//     currentImageIndex = (currentImageIndex + 1) % activeSectionImages.length;
//     lightboxImg.src = activeSectionImages[currentImageIndex].src;
//     lightboxImg.alt = activeSectionImages[currentImageIndex].alt;
//     captionContainer.textContent = activeSectionImages[currentImageIndex].alt || '';
    
//     updateThumbnails();
//   }

//   function updateThumbnails() {
//     const thumbnailsContainer = document.getElementById('lightboxThumbnails');
//     thumbnailsContainer.innerHTML = '';
    
//     activeSectionImages.forEach((img, idx) => {
//       const thumb = document.createElement('img');
//       thumb.src = img.src;
//       thumb.style.height = '50px';
//       thumb.style.width = '60px';
//       thumb.style.margin = '5px';
//       thumb.style.cursor = 'pointer';
//       thumb.style.objectFit = 'cover';
//       thumb.style.border = idx === currentImageIndex ? '2px solid #087F8F' : 'none';
//       thumb.style.opacity = idx === currentImageIndex ? '1' : '0.6';
//       thumb.style.transition = 'all 0.3s';

//       thumb.addEventListener('click', () => {
//         if (idx === currentImageIndex) return;
//         currentImageIndex = idx;
//         const lightboxImg = document.getElementById('lightboxImage');
//         lightboxImg.src = activeSectionImages[idx].src;
//         lightboxImg.alt = activeSectionImages[idx].alt;
//         document.getElementById('lightboxCaption').textContent = activeSectionImages[idx].alt || '';
//         updateThumbnails();
//       });

//       thumbnailsContainer.appendChild(thumb);
//     });
//   }

//   // Style update functions
//   function updateImageStyles() {
//     document.querySelectorAll(".media-content img").forEach(img => {
//       Object.entries(customImageStyles).forEach(([prop, value]) => {
//         img.style[prop] = value;
//       });
//     });
//   }

//   function updateH3Styles() {
//     document.querySelectorAll(".subfolder h3").forEach(h3 => {
//       Object.entries(customGalleryH3Styles).forEach(([prop, value]) => {
//         h3.style[prop] = value;
//       });
//     });
//   }

//   // Create image folder element
//   function createImageFolder(folderElement, images, isSubfolder = false) {
//     const folder = document.createElement('div');
//     folder.className = 'image-folder' + (isSubfolder ? ' subfolder' : '');
//     folder.style.position = 'relative';
//     folder.style.display = 'inline-block';
//     folder.style.margin = isSubfolder ? '5px' : '10px';
//     folder.style.cursor = 'pointer';
//     folder.style.verticalAlign = 'top';
//     folder.style.textAlign = 'center';
    
//     if (isSubfolder) {
//         folder.style.width = '180px';
//     }

//     // Create stacked images effect
//     const imagesToShow = Math.min(3, images.length);
//     for (let i = 0; i < imagesToShow; i++) {
//         const img = document.createElement('img');
//         img.src = images[i].src;
//         img.style.position = i > 0 ? 'absolute' : 'relative';
//         img.style.top = i > 0 ? `${i * 3}px` : '0';
//         img.style.left = i > 0 ? `${i * 3}px` : '0';
//         img.style.zIndex = i;
//         img.style.width = isSubfolder ? '150px' : '220px';
//         img.style.height = isSubfolder ? '120px' : '180px';
//         img.style.objectFit = 'cover';
//         img.style.borderRadius = '4px';
//         img.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
//         img.style.transform = i > 0 ? 'rotate(' + (i * 2) + 'deg)' : 'none';
//         folder.appendChild(img);
//     }
    
//     // Add folder label - now getting customization from the folder container
//     const label = document.createElement('div');
    
//     // Get custom label from folder element's data attributes
//     const customLabel = folderElement.dataset.folderLabel;
//     const defaultName = folderElement.querySelector('h3')?.textContent.trim() || 'Untitled';
    
//     label.textContent = customLabel || `${defaultName} (${images.length})`;
    
//     // Apply styles from folder element's data attributes or use defaults
//     label.style.textAlign = 'center';
//     label.style.marginTop = '8px';
//     label.style.color = folderElement.dataset.folderLabelColor || 
//                        (isSubfolder ? '#5a9ca5' : '#097788');
//     label.style.fontWeight = folderElement.dataset.folderLabelWeight || '500';
//     label.style.fontSize = folderElement.dataset.folderLabelSize || 
//                          (isSubfolder ? '0.9rem' : '1rem');
    
//     folder.appendChild(label);
    
//     return folder;
// }
// // Then update where you call createImageFolder to pass custom labels:


//   // Image display with folder view
//   // function addLightboxToImages() {
//   //   // Clear previous containers
//   //   document.querySelectorAll('.image-folder-container').forEach(container => {
//   //     container.remove();
//   //   });

//   //   // Get the currently active section
//   //   const activeSection = document.querySelector('[id$="Section"]:not([style*="display: none"])');
    
//   //   if (!activeSection) return;

//   //   // Create main folder container
//   //   const folderContainer = document.createElement('div');
//   //   folderContainer.className = 'image-folder-container';
//   //   folderContainer.style.display = 'flex';
//   //   folderContainer.style.flexWrap = 'wrap';
//   //   folderContainer.style.justifyContent = 'center';
//   //   folderContainer.style.margin = '20px 0';
//   //   folderContainer.style.gap = '15px';

//   //   if (activeSection.id === 'homeSection') {
//   //     // Handle home section (single folder)
//   //     const images = activeSection.querySelectorAll('.media-content img');
//   //     activeSectionImages = Array.from(images);
      
//   //     if (images.length > 0) {
//   //       const folder = createImageFolder('All Images', activeSectionImages);
//   //       folder.addEventListener('click', () => {
//   //         openLightbox(0);
//   //       });
//   //       folderContainer.appendChild(folder);
//   //     }
//   //   } 
//   //   else if (activeSection.id === 'eventSection') {
//   //     // Handle event section with subfolders
//   //     const subfolders = activeSection.querySelectorAll('.subfolder');
      
//   //     subfolders.forEach(subfolder => {
//   //       const title = subfolder.querySelector('h3')?.textContent.trim() || 'Event';
//   //       const images = subfolder.querySelectorAll('.media-content img');
        
//   //       if (images.length > 0) {
//   //         const folder = createImageFolder(title, Array.from(images), true);
//   //         folder.addEventListener('click', () => {
//   //           activeSectionImages = Array.from(images);
//   //           openLightbox(0);
//   //         });
//   //         folderContainer.appendChild(folder);
//   //       }
//   //     });
//   //   }

//   //   // Add folder container to section
//   //   activeSection.insertBefore(folderContainer, activeSection.firstChild);
//   // }





//   function addLightboxToImages() {
//   // Clear old containers
//   document.querySelectorAll('.image-folder-container').forEach(container => {
//     container.remove();
//   });

//   const activeSection = document.querySelector('[id$="Section"]:not([style*="display: none"])');
//   if (!activeSection) return;

//   const folderContainer = document.createElement('div');
//   folderContainer.className = 'image-folder-container';
//   folderContainer.style.display = 'flex';
//   folderContainer.style.flexWrap = 'wrap';
//   folderContainer.style.justifyContent = 'center';

//   // Check if section has subfolders
//   const subfolders = activeSection.querySelectorAll('.subfolder');
  
//   if (subfolders.length > 0) {
//         subfolders.forEach(subfolder => {
//             const images = subfolder.querySelectorAll('.media-content img');
//             if (images.length > 0) {
//                 const folder = createImageFolder(subfolder, Array.from(images), true);
//                 folder.addEventListener('click', () => {
//                     activeSectionImages = Array.from(images);
//                     openLightbox(0);
//                 });
//                 folderContainer.appendChild(folder);
//             }
//         });
//     } else {
//         const images = activeSection.querySelectorAll('.media-content img');
//         if (images.length > 0) {
//             activeSectionImages = Array.from(images);
//             const folder = createImageFolder(activeSection, activeSectionImages);
//             folder.addEventListener('click', () => openLightbox(0));
//             folderContainer.appendChild(folder);
//         }
//     }

//   activeSection.insertBefore(folderContainer, activeSection.firstChild);
// }






//   // Button handling
//   function handleButtons() {
//     const homeBtn = document.getElementById("homeBtn");
//     const eventBtn = document.getElementById("eventBtn");
//     const homeSection = document.getElementById("homeSection");
//     const eventSection = document.getElementById("eventSection");

//     if (!homeBtn || !eventBtn) return;

//     if (window.ButtonLib) {
//       [homeBtn, eventBtn].forEach(btn => {
//         btn.dataset.originalBackgroundColor = btn.style.backgroundColor;
//         btn.dataset.originalColor = btn.style.color;
//       });
//     }

//     function setActiveButton(active, inactive) {
//       active.classList.remove("active-btn");
//       inactive.classList.remove("active-btn");
      
//       active.classList.add("active-btn");
//       Object.entries(customActiveButtonStyles).forEach(([prop, value]) => {
//         active.style[prop] = value;
//       });

//       if (window.ButtonLib) {
//         inactive.style.backgroundColor = inactive.dataset.originalBackgroundColor;
//         inactive.style.color = inactive.dataset.originalColor;
//       } else {
//         inactive.style.backgroundColor = "";
//         inactive.style.color = "";
//       }
//     }

//     function switchSection(showSection, hideSection, activeBtn, inactiveBtn) {
//       showSection.style.display = "block";
//       hideSection.style.display = "none";
//       setActiveButton(activeBtn, inactiveBtn);
//       addLightboxToImages();
//     }

//     // Initial state
//     switchSection(homeSection, eventSection, homeBtn, eventBtn);

//     // Event handlers
//     homeBtn.addEventListener("click", () => {
//       switchSection(homeSection, eventSection, homeBtn, eventBtn);
//     });

//     eventBtn.addEventListener("click", () => {
//       switchSection(eventSection, homeSection, eventBtn, homeBtn);
//     });
//   }

//   // Initialize everything
//   document.addEventListener("DOMContentLoaded", () => {
//     createLightbox();
//     updateImageStyles();
//     updateH3Styles();
//     addLightboxToImages();

//     // Add CSS to hide media images and subfolder h3 elements
//     const style = document.createElement('style');
//     style.textContent = `
//       .media-content img {
//         display: none;
//       }
//       .subfolder h3 {
//         visibility: hidden;
//       }
//     `;
//     document.head.appendChild(style);

//     document.querySelectorAll("ul").forEach(ul => ul.style.listStyle = "none");
//     document.querySelectorAll(".align-self-center").forEach(el => el.style.alignSelf = "center");
//     document.querySelectorAll(".align-items-center").forEach(el => el.style.alignItems = "center");
//     document.querySelectorAll(".pl-40").forEach(el => el.style.paddingLeft = "40px");
//     document.querySelectorAll("button").forEach(btn => btn.style.cursor = "pointer");
//     document.querySelectorAll(".media-content").forEach(el => el.style.marginTop = "20px");

//     const containers = [
//       ".container", ".container-fluid", ".container-lg", ".container-md",
//       ".container-sm", ".container-xl", ".container-xxl"
//     ];
//     containers.forEach(cls => {
//       document.querySelectorAll(cls).forEach(el => {
//         el.style.width = "100%";
//         el.style.paddingRight = "var(--bs-gutter-x, .75rem)";
//         el.style.paddingLeft = "var(--bs-gutter-x, .75rem)";
//         el.style.marginRight = "auto";
//         el.style.marginLeft = "auto";
//       });
//     });

//     if (window.matchMedia("(min-width: 1400px)").matches) {
//       document.querySelectorAll(containers.join(", ")).forEach(el => {
//         el.style.maxWidth = "1320px";
//       });
//     }

//     handleButtons();
//   });

//   // Public API
//   window.setCustomActiveButton = function(styles = {}) {
//     Object.assign(customActiveButtonStyles, styles);
//     document.querySelectorAll(".active-btn").forEach(btn => {
//       Object.entries(customActiveButtonStyles).forEach(([prop, value]) => {
//         btn.style[prop] = value;
//       });
//     });
//   };

//   window.setCustomImageStyle = function(styles = {}) {
//     Object.assign(customImageStyles, styles);
//     updateImageStyles();
//   };

//   window.setCustomGalleryH3 = function(styles = {}) {
//     Object.assign(customGalleryH3Styles, styles);
//     updateH3Styles();
//   };
// })(); 

























//cleaner version of try
// // gallery.js (Clean Lightbox Gallery Component)
// gallery.js (Complete Functional Version)
(function() {
  // Style configurations
  const customActiveButtonStyles = {
    backgroundColor: "#087F8F",
    color: "#fff"
  };

  const customImageStyles = {
    height: "220px",
    width: "265px",
    margin: "3px"
  };

  const customGalleryH3Styles = {
    marginBottom: "0",
    color: "#097788",
    lineHeight: "1.5",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "1px",
    fontSize: "1.1rem"
  };

  // Lightbox variables
  let currentImageIndex = 0;
  let lightboxImages = [];
  let activeSectionImages = [];
  let isFirstOpen = true;

  // Create lightbox HTML
  function createLightbox() {
    const lightboxHTML = `
      <div id="galleryLightbox" style="
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
        justify-content: center;
      ">
        <span id="lightboxClose" style="
          position: absolute;
          top: 20px;
          right: 30px;
          color: white;
          font-size: 35px;
          font-weight: bold;
          cursor: pointer;
          z-index: 1001;
        ">&times;</span>
        
        <a id="lightboxPrev" style="
          position: absolute;
          top: 50%;
          left: 20px;
          transform: translateY(-50%);
          color: white;
          font-size: 40px;
          font-weight: bold;
          cursor: pointer;
          user-select: none;
          padding: 15px;
          z-index: 1001;
        ">&#10094;</a>
        
        <div id="lightboxImageContainer" style="
          position: relative;
          max-width: 80%;
          max-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
        ">
          <img id="lightboxImage" style="
            width: 700px;
            height: 500px;
            // max-height: 80vh;
            margin-top: 30px;
            // object-fit: contain;
          ">
        </div>
        
        <a id="lightboxNext" style="
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          color: white;
          font-size: 40px;
          font-weight: bold;
          cursor: pointer;
          user-select: none;
          padding: 15px;
          z-index: 1001;
        ">&#10095;</a>
        
        <div id="lightboxCaption" style="
          position: absolute;
          bottom: 60px;
          left: 0;
          right: 0;
          color: white;
          text-align: center;
          padding: 10px;
          font-family: 'Poppins', sans-serif;
        "></div>
        
        <div id="lightboxThumbnails" style="
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 10px;
          background-color: rgba(255,255,255,0.1);
        "></div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    // Add event listeners
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev').addEventListener('click', showPrevImage);
    document.getElementById('lightboxNext').addEventListener('click', showNextImage);
    document.getElementById('galleryLightbox').addEventListener('click', function(e) {
      if (e.target === this) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      const lightbox = document.getElementById('galleryLightbox');
      if (lightbox.style.display === 'none') return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'ArrowRight') {
        showNextImage();
      }
    });
  }

  // Lightbox functions
  function openLightbox(index) {
    if (!activeSectionImages.length) return;
    
    currentImageIndex = index;
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const captionContainer = document.getElementById('lightboxCaption');

    // Set responsive size
    if (window.innerWidth <= 576) {
      lightboxImg.style.width = "430px";
      lightboxImg.style.height = "430px";
    } else {
      lightboxImg.style.width = "700px";
      lightboxImg.style.height = "500px";
    }

    // Set content
    lightboxImg.src = activeSectionImages[index].src;
    lightboxImg.alt = activeSectionImages[index].alt;
    captionContainer.textContent = activeSectionImages[index].alt || '';

    // Show lightbox with animation
    lightbox.style.display = 'flex';
    lightbox.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.8)';
    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
      lightbox.style.transition = 'opacity 0.3s ease-out';
      lightbox.style.opacity = '1';
      
      lightboxImg.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      lightboxImg.style.transform = 'scale(1)';
      lightboxImg.style.opacity = '1';
    }, 10);

    updateThumbnails();
  }

  function closeLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    
    // Animate out
    lightbox.style.transition = 'opacity 0.3s ease-out';
    lightbox.style.opacity = '0';
    lightboxImg.style.transition = 'all 0.3s ease-in';
    lightboxImg.style.transform = 'scale(0.8)';
    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
      lightbox.style.display = 'none';
      lightbox.style.opacity = '1';
      lightboxImg.style.transform = 'scale(1)';
      lightboxImg.style.opacity = '1';
    }, 300);
  }

  function showPrevImage(e) {
    if (e) e.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + activeSectionImages.length) % activeSectionImages.length;
    updateLightboxContent();
  }

  function showNextImage(e) {
    if (e) e.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % activeSectionImages.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const lightboxImg = document.getElementById('lightboxImage');
    const captionContainer = document.getElementById('lightboxCaption');
    
    lightboxImg.src = activeSectionImages[currentImageIndex].src;
    lightboxImg.alt = activeSectionImages[currentImageIndex].alt;
    captionContainer.textContent = activeSectionImages[currentImageIndex].alt || '';
    
    updateThumbnails();
  }

  function updateThumbnails() {
    const thumbnailsContainer = document.getElementById('lightboxThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    activeSectionImages.forEach((img, idx) => {
      const thumb = document.createElement('img');
      thumb.src = img.src;
      thumb.style.height = '50px';
      thumb.style.width = '60px';
      thumb.style.margin = '5px';
      thumb.style.cursor = 'pointer';
      thumb.style.objectFit = 'cover';
      thumb.style.border = idx === currentImageIndex ? '2px solid #087F8F' : 'none';
      thumb.style.opacity = idx === currentImageIndex ? '1' : '0.6';
      thumb.style.transition = 'all 0.3s';

      thumb.addEventListener('click', () => {
        if (idx !== currentImageIndex) {
          currentImageIndex = idx;
          updateLightboxContent();
        }
      });

      thumbnailsContainer.appendChild(thumb);
    });
  }

  // Style update functions
  function updateImageStyles() {
    document.querySelectorAll(".media-content img").forEach(img => {
      Object.entries(customImageStyles).forEach(([prop, value]) => {
        img.style[prop] = value;
      });
    });
  }

  function updateH3Styles() {
    document.querySelectorAll(".subfolder h3").forEach(h3 => {
      Object.entries(customGalleryH3Styles).forEach(([prop, value]) => {
        h3.style[prop] = value;
      });
    });
  }

  // Create image folder element
  function createImageFolder(folderElement, images, isSubfolder = false) {
    const folder = document.createElement('div');
    folder.className = 'image-folder' + (isSubfolder ? ' subfolder' : '');
    
    // Folder styles
    Object.assign(folder.style, {
      position: 'relative',
      display: 'inline-block',
      margin: isSubfolder ? '5px' : '10px',
      cursor: 'pointer',
      verticalAlign: 'top',
      textAlign: 'center',
      width: isSubfolder ? '180px' : 'auto'
    });

    // Create stacked images effect
    const imagesToShow = Math.min(3, images.length);
    for (let i = 0; i < imagesToShow; i++) {
      const img = document.createElement('img');
      img.src = images[i].src;
      Object.assign(img.style, {
        position: i > 0 ? 'absolute' : 'relative',
        top: i > 0 ? `${i * 3}px` : '0',
        left: i > 0 ? `${i * 3}px` : '0',
        zIndex: i,
        width: isSubfolder ? '150px' : '220px',
        height: isSubfolder ? '120px' : '180px',
        objectFit: 'cover',
        borderRadius: '4px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        transform: i > 0 ? `rotate(${i * 2}deg)` : 'none'
      });
      folder.appendChild(img);
    }
    
    // Add folder label
    const label = document.createElement('div');
    const customLabel = folderElement.dataset.folderLabel;
    const defaultName = folderElement.querySelector('h3')?.textContent.trim() || 'Untitled';
    
    label.textContent = customLabel || `${defaultName} (${images.length})`;
    Object.assign(label.style, {
      textAlign: 'center',
      marginTop: '8px',
      color: folderElement.dataset.folderLabelColor || (isSubfolder ? '#5a9ca5' : '#097788'),
      fontWeight: folderElement.dataset.folderLabelWeight || '500',
      fontSize: folderElement.dataset.folderLabelSize || (isSubfolder ? '0.9rem' : '1rem')
    });
    
    folder.appendChild(label);
    
    return folder;
  }

  function addLightboxToImages() {
    // Clear old containers
    document.querySelectorAll('.image-folder-container').forEach(container => {
      container.remove();
    });

    const activeSection = document.querySelector('[id$="Section"]:not([style*="display: none"])');
    if (!activeSection) return;

    const folderContainer = document.createElement('div');
    folderContainer.className = 'image-folder-container';
    Object.assign(folderContainer.style, {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '15px',
      margin: '20px 0'
    });

    // Check if section has subfolders
    const subfolders = activeSection.querySelectorAll('.subfolder');
    
    if (subfolders.length > 0) {
      subfolders.forEach(subfolder => {
        const images = Array.from(subfolder.querySelectorAll('.media-content img'));
        if (images.length > 0) {
          const folder = createImageFolder(subfolder, images, true);
          folder.addEventListener('click', () => {
            activeSectionImages = images;
            openLightbox(0);
          });
          folderContainer.appendChild(folder);
        }
      });
    } else {
      const images = Array.from(activeSection.querySelectorAll('.media-content img'));
      if (images.length > 0) {
        activeSectionImages = images;
        const folder = createImageFolder(activeSection, images);
        folder.addEventListener('click', () => openLightbox(0));
        folderContainer.appendChild(folder);
      }
    }

    // Only add container if it has folders
    if (folderContainer.children.length > 0) {
      activeSection.insertBefore(folderContainer, activeSection.firstChild);
    }
  }

  // Button handling
  function handleButtons() {
    const homeBtn = document.getElementById("homeBtn");
    const eventBtn = document.getElementById("eventBtn");
    const homeSection = document.getElementById("homeSection");
    const eventSection = document.getElementById("eventSection");

    if (!homeBtn || !eventBtn) return;

    if (window.ButtonLib) {
      [homeBtn, eventBtn].forEach(btn => {
        btn.dataset.originalBackgroundColor = btn.style.backgroundColor;
        btn.dataset.originalColor = btn.style.color;
      });
    }

    function setActiveButton(active, inactive) {
      active.classList.remove("active-btn");
      inactive.classList.remove("active-btn");
      
      active.classList.add("active-btn");
      Object.entries(customActiveButtonStyles).forEach(([prop, value]) => {
        active.style[prop] = value;
      });

      if (window.ButtonLib) {
        inactive.style.backgroundColor = inactive.dataset.originalBackgroundColor;
        inactive.style.color = inactive.dataset.originalColor;
      } else {
        inactive.style.backgroundColor = "";
        inactive.style.color = "";
      }
    }

    function switchSection(showSection, hideSection, activeBtn, inactiveBtn) {
      showSection.style.display = "block";
      hideSection.style.display = "none";
      setActiveButton(activeBtn, inactiveBtn);
      addLightboxToImages();
    }

    // Initial state
    switchSection(homeSection, eventSection, homeBtn, eventBtn);

    // Event handlers
    homeBtn.addEventListener("click", () => {
      switchSection(homeSection, eventSection, homeBtn, eventBtn);
    });

    eventBtn.addEventListener("click", () => {
      switchSection(eventSection, homeSection, eventBtn, homeBtn);
    });
  }

  // Initialize everything
  document.addEventListener("DOMContentLoaded", () => {
    createLightbox();
    updateImageStyles();
    updateH3Styles();
    
    // Hide original images but keep them accessible
    const style = document.createElement('style');
    style.textContent = `
      .media-content img {
        display: none;
      }
      .subfolder h3 {
        visibility: hidden;
      }
    `;
    document.head.appendChild(style);

    // Basic style initializations
    document.querySelectorAll("ul").forEach(ul => ul.style.listStyle = "none");
    document.querySelectorAll(".align-self-center").forEach(el => el.style.alignSelf = "center");
    document.querySelectorAll(".align-items-center").forEach(el => el.style.alignItems = "center");
    document.querySelectorAll(".pl-40").forEach(el => el.style.paddingLeft = "40px");
    document.querySelectorAll("button").forEach(btn => btn.style.cursor = "pointer");
    document.querySelectorAll(".media-content").forEach(el => el.style.marginTop = "20px");

    handleButtons();
    addLightboxToImages();
  });

  // Public API
  window.setCustomActiveButton = function(styles = {}) {
    Object.assign(customActiveButtonStyles, styles);
    document.querySelectorAll(".active-btn").forEach(btn => {
      Object.entries(customActiveButtonStyles).forEach(([prop, value]) => {
        btn.style[prop] = value;
      });
    });
  };

  window.setCustomImageStyle = function(styles = {}) {
    Object.assign(customImageStyles, styles);
    updateImageStyles();
  };

  window.setCustomGalleryH3 = function(styles = {}) {
    Object.assign(customGalleryH3Styles, styles);
    updateH3Styles();
  };
})();