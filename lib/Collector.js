var kefir = require('kefir');
var _ = require('lodash');

var Collector = function Collector() {
    
}

Collector.prototype.collection = [];

Collector.prototype.async = function(wrappersList) {
    var collection = [];
    _.each(wrappersList, function(wrapper, i) {
        wrapper.onCollect(function collectFromWrapper(val) {
            collection[i] = val;
        });
    }); 
};