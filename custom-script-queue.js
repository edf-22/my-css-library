window.__scriptQueue = (function() {
  const queue = {};
  const loaded = {};
  const components = {};

  return {
    register: function(name, factory) {
      components[name] = factory;
    },
    loaded: function(name) {
      loaded[name] = true;
      this.processQueue(name);
    },
    queue: function(dep, fn) {
      if (loaded[dep]) {
        fn(components[dep]);
      } else {
        queue[dep] = queue[dep] || [];
        queue[dep].push(fn);
      }
    },
    processQueue: function(dep) {
      if (queue[dep]) {
        while (queue[dep].length > 0) {
          try {
            queue[dep].shift()(components[dep]);
          } catch (e) {
            console.error('Queue processing error:', e);
          }
        }
      }
    }
  };
})();