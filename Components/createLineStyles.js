// function createHorizontalLineStyles({
//   selector = '.list-horizontal_line',
//   width = '15px',
//   height = '1px',
//   background = 'gray',
//   top = '0.7em', // aligns with text height
//   left = '0',
//   transform = 'none',
//   position = 'absolute'
// } = {}) {
//   const style = document.createElement('style');
//   style.textContent = `
//     ${selector}::before {
//       content: "";
//       position: ${position};
//       left: ${left};
//       top: ${top};
//       transform: ${transform};
//       width: ${width};
//       height: ${height};
//       background: ${background};
//     }

//     ${selector} {
//       position: relative;
//       padding-left: calc(${width} + 10px); /* create space for line + gap */
//     }
//   `;
//   document.head.appendChild(style);

//   // Remove bullet style from ul if needed
//   document.querySelectorAll(selector).forEach(el => {
//     const parent = el.closest('ul');
//     if (parent) {
//       parent.style.listStyle = 'none';
//     }
//   });
// }

// createHorizontalLineStyles();





function createHorizontalLineStyles({
  selector = '.list-horizontal_line',
  width = '15px',
  height = '1px',
  background = 'gray',
  gap = '10px'
} = {}) {
  document.querySelectorAll(selector).forEach(el => {
    // Create the line element
    const line = document.createElement('div');
    line.style.width = width;
    line.style.height = height;
    line.style.background = background;
    line.style.marginTop = '0.5em'; // approx vertical center of first line
    line.style.flexShrink = '0';

    // Wrap the existing content in a span
    const content = document.createElement('span');
    content.innerHTML = el.innerHTML;

    // Clear and rebuild the element
    el.innerHTML = '';
    el.style.display = 'flex';
    el.style.alignItems = 'flex-start';
    el.style.gap = gap;
    el.appendChild(line);
    el.appendChild(content);

    // Remove bullet point if it's in a <ul>
    const parent = el.closest('ul');
    if (parent) parent.style.listStyle = 'none';
  });
}

createHorizontalLineStyles();



function createVerticalLineStyles({
  selector = '.list-vertical_line',
  width = '2px',
  height = null, // null means auto-calculate from content
  background = 'gray',
  gap = '10px',
  dashed = false,
  margin = '0px',
  align = 'flex-start' // or 'center', 'stretch', etc.
} = {}) {
  document.querySelectorAll(selector).forEach(el => {
    // Avoid adding duplicate line
    if (el.querySelector('.__vertical_line')) return;

    // Create line
    const line = document.createElement('div');
    line.className = '__vertical_line';
    line.style.width = width;
    line.style.background = background;
    line.style.margin = margin;
    line.style.flexShrink = '0';

    // Handle dashed
    if (dashed) {
      line.style.borderLeft = `${width} dashed ${background}`;
      line.style.background = 'none';
    }

    // Estimate height if not provided
    if (height) {
      line.style.height = height;
    } else {
      // Estimate based on first child or full content
      const estimatedHeight = el.scrollHeight + 'px';
      line.style.height = estimatedHeight;
    }

    // Flex layout
    el.style.display = 'flex';
    el.style.alignItems = align;
    el.style.gap = gap;

    // Insert line to the left
    el.insertBefore(line, el.firstChild);

    // Remove list-style if inside a <ul>
    const parent = el.closest('ul');
    if (parent) parent.style.listStyle = 'none';
  });
}

// Auto-run by default
createVerticalLineStyles();
