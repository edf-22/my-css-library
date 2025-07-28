<!DOCTYPE html>
<html>
<head>
    <title>StyleParser Final Test</title>
    <script src="Components\StyleParser.js"></script>
    <style>
        body { margin: 0; padding: 20px; font-family: Arial; }
        .test-section { margin-bottom: 30px; padding: 15px; border: 1px dashed #ddd; }
        .test-title { margin-bottom: 15px; }
    </style>
</head>
<body>
    <h1 class="text-32 font-bold color-black mb-30">StyleParser Final Test</h1>
    
    <!-- Gradient Test -->
    <div class="test-section">
        <h2 class="test-title text-24 font-bold color-primary">Gradient Test</h2>
        <div class="bg-gradient-red-blue w-full h-100 rounded-10 p-20 color-white">
            This should have a red-to-blue gradient
        </div>
        <div class="bg-gradient-primary-secondary w-full h-100 rounded-10 p-20 color-white mt-20">
            This should have a primary-to-secondary gradient
        </div>
    </div>
    
    <!-- Shadow Test -->
    <div class="test-section">
        <h2 class="test-title text-24 font-bold color-primary">Shadow Test</h2>
        <div class="shadow-rgba-0-0-0-03 w-full h-50 p-20 rounded-5 mb-20">
            Shadow with 0.3 opacity (03)
        </div>
        <div class="shadow-rgba-0-0-0-5 w-full h-50 p-20 rounded-5">
            Shadow with 0.5 opacity (5)
        </div>
    </div>
    
    <!-- Flex Test -->
    <div class="test-section">
        <h2 class="test-title text-24 font-bold color-primary">Flex Test</h2>
        <div class="flex-flex flex-dir-col gap-20 p-20 bg-lightgray rounded-10">
            <div class="bg-red p-10 rounded-5">Flex Item 1</div>
            <div class="bg-blue p-10 rounded-5">Flex Item 2</div>
        </div>
    </div>
    
    <!-- Dynamic Content -->
    <div class="test-section">
        <h2 class="test-title text-24 font-bold color-primary">Dynamic Content</h2>
        <button class="p-10 bg-primary color-white rounded-5" onclick="addCard()">
            Add Card with Gradient
        </button>
        <div id="dynamic-container" class="flex-flex flex-wrap gap-20 mt-20"></div>
    </div>

    <script>
        function addCard() {
            const container = document.getElementById('dynamic-container');
            const card = document.createElement('div');
            card.className = 'w-200 h-100 bg-gradient-red-blue rounded-10 p-10 color-white';
            card.textContent = 'Dynamic Gradient Card';
            container.appendChild(card);
        }
    </script>
</body>
</html>