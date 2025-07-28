// Components/init.js
(() => {
    // Track component states
    const components = {
        button: { loaded: false, initialized: false },
        gallery: { loaded: false, initialized: false }
    };

    // Called when script loads
    window.__componentLoaded = (name) => {
        components[name].loaded = true;
        if (name === 'button' && window.ButtonLib) {
            components.button.initialized = true;
        }
    };

    // Called when component is fully ready
    window.__componentInitialized = (name) => {
        components[name].initialized = true;
    };

    // Wait for a component to be ready
    window.__waitForComponent = (name, callback) => {
        if (components[name] && components[name].initialized) {
            callback();
        } else {
            const checkReady = setInterval(() => {
                if (components[name] && components[name].initialized) {
                    clearInterval(checkReady);
                    callback();
                }
            }, 10);
        }
    };
})();