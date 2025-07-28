<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StyleParser Complete Test</title>
    <script src="Components/StyleParser.js"></script>
    <style>
        /* Basic reset */
        body { margin: 0; font-family: sans-serif; }
        /* Just for the test buttons */
        .test-btn { margin: 10px; padding: 8px 16px; cursor: pointer; }
    </style>
</head>
<body class="p-20">
    <h1 class="text-32 font-bold color-333 mb-30">StyleParser Complete Test</h1>
    
    <!-- Layout Tests -->
    <section class="mb-40">
        <h2 class="text-24 font-semibold color-555 mb-20">Layout Tests</h2>
        
        <div class="flex-flex gap-20 mb-20">
            <div class="bg-lightgray p-20 rounded-10">Flex Item 1</div>
            <div class="bg-lightgray p-20 rounded-10">Flex Item 2</div>
            <div class="bg-lightgray p-20 rounded-10">Flex Item 3</div>
        </div>
        
        <div class="flex-flex flex-dir-col gap-15 w-300">
            <div class="bg-lightblue p-15 rounded-5">Column Item 1</div>
            <div class="bg-lightblue p-15 rounded-5">Column Item 2</div>
            <div class="bg-lightblue p-15 rounded-5">Column Item 3</div>
        </div>
    </section>
    
    <!-- Color Tests -->
    <section class="mb-40">
        <h2 class="text-24 font-semibold color-555 mb-20">Color Tests</h2>
        
        <div class="flex-flex gap-20">
            <div class="w-100 h-100 bg-red rounded-10 hover-bg-blue hover-color-yellow align-center hover-items-center hover-justify-center flex-flex transition-all-1s color-purple">Hello</div>
            <div class="w-100 h-100 bg-green rounded-10"></div>
            <div class="w-100 h-100 bg-blue rounded-10"></div>
            <div class="w-100 h-100 bg-f5f5f5 rounded-10 border-1 border-color-ccc"></div>
            <div class="w-100 h-100 bg-gradient-red-blue rounded-10"></div>
        </div>
    </section>
    
    <!-- Spacing Tests -->
    <section class="mb-40 fontFamily-cursive">
        <h2 class="text-24 font-semibold color-555 mb-20">Spacing Tests</h2>
        
        <div class="bg-lightgray p-20 rounded-10">
            <div class="bg-white m-10 p-10">Margin 10px, Padding 10px</div>
            <div class="bg-white mt-20 mb-20 pl-30 pr-30">Margin Top/Bottom 20px, Padding Left/Right 30px</div>
            <div class="bg-white mx-auto px-40 w-200">Horizontal Margin Auto, Padding 40px</div>
        </div>
    </section>
    
    <!-- Typography Tests -->
    <section class="mb-40">
        <h2 class="text-24 font-semibold color-555 mb-20">Typography Tests</h2>
        
        <div class="bg-lightgray p-20 rounded-10">
            <p class="text-16 color-#333">Regular text (16px)</p>
            <p class="text-20 font-bold color-primary">Bold text (20px)</p>
            <p class="text-14 italic color-666">Italic text (14px)</p>
            <p class="text-18 line-height-150px">Line height 1.5 (18px)</p>
            <p class="text-16 align-center">Centered text</p>
        </div>
    </section>
    
    <!-- Border & Effects Tests -->
    <section class="mb-40">
        <h2 class="text-24 font-semibold color-555 mb-20">Border & Effects</h2>
        
        <div class="flex-flex gap-20">
            <div class="w-100 h-100 rounded-5 border-1px-solid-black"></div>
            <div class="w-100 h-100 rounded-10 border-2px-solid-red"></div>
            <div class="w-100 h-100 rounded-10 border-5px-dotted-blue"></div>
            <div class="w-100 h-100 rounded-50 bg-lightblue"></div>
            <div class="w-100 h-100 shadow-rgba-0-0-0-3.0"></div>
            <div class="w-100 h-100 opacity-50 bg-green"></div>
        </div>
    </section>
    
    <!-- Dynamic Content Tests -->
    <section>
        <h2 class="text-24 font-semibold color-555 mb-20 hover-bg-blue hover-color-yellow hover-text-50">Dynamic Content</h2>
        
        <button class="test-btn bg-blue color-white rounded-5" onclick="addCard('red')">
            Add Red Card
        </button>
        <button class="test-btn bg-green color-white rounded-5" onclick="addCard('green')">
            Add Green Card
        </button>
        <button class="test-btn bg-blue color-white rounded-5" onclick="addCard('gradient-red-blue')">
            Add Gradient Card
        </button>
        
        <div id="dynamic-container" class="flex-flex flex-wrap gap-20 mt-20"></div>
    </section>

    <br><br><br><br><br>
    <!-- Flex direction column -->
    <div class="flex-flex flex-dir-col">
      <div>Item 1</div>
      <div>Item 2</div>
    </div>
    
    <!-- Italic text -->
    <p class="italic">This text should be italic</p>
    
    <!-- Gradient background -->
    <div class="bg-gradient-45deg-pink-yellow-transparent-yellow-pink-transparent w-200 h-200"></div>
    <div class="bg-gradient-to-left-red-blue w-200 h-200"></div>
    
    <!-- Padding x-axis -->
    <div class="px-40">Content with 40px horizontal padding</div>
    
    <!-- Shadow with RGBA -->
    <div class="shadow-rgba-0-0-0-0.3 w-200 h-200"></div>
    
    <script>
        function addCard(color) {
            const container = document.getElementById('dynamic-container');
            const card = document.createElement('div');
            card.className = `w-150 h-150 bg-${color} rounded-10 flex-flex justify-center items-center color-white font-bold`;
            card.textContent = `Dynamic ${color.charAt(0).toUpperCase() + color.slice(1)} Card`;
            container.appendChild(card);
        }
        
        // Add a couple cards by default
        window.addEventListener('DOMContentLoaded', () => {
            addCard('red');
            addCard('blue');
        });
    </script>
</body>
</html>