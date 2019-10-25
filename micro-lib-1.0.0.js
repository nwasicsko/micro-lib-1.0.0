var _ = (function() {
    'use strict';
    
    var methods = {};
    methods.get = function(selector) {
      console.log('get');
    };
    
    methods.getAll = function() {
      console.log('getAll');
    };
    
    methods.on = function() {
      console.log('on');
    };
    
    return methods;
})();
_.get();
_.getAll();
_.on();