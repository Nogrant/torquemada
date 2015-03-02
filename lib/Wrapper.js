var kefir = require('kefir');

var Wrapper = function() {
var self = this;
self.collectEmitter = kefir.emitter();
self.runEmitter = kefir.emitter();
self.all = kefir.combine([self.collectEmitter, self.runEmitter]);
}

Wrapper.prototype.collectEmitter = null;
Wrapper.prototype.runEmitter = null;
Wrapper.prototype.all = null;

Wrapper.prototype.onCollect = function(fn) {
    this.collectEmitter.onValue(fn);
}

Wrapper.prototype.offCollect = function(fn) {
    this.collectEmitter.offValue(fn);
}

Wrapper.prototype.onRun = function(fn) {
    this.runEmitter.onValue(fn);
}

Wrapper.prototype.offRun = function(fn) {
    this.runEmitter.offValue(fn);
}

Wrapper.prototype.onAny = function(fn) {
    this.all.onValue(fn);
}

Wrapper.prototype.offAny = function(fn) {
    this.all.offValue(fn);
}

Wrapper.prototype.collect = function collect() {

}

Wrapper.prototype.run = function run() {

}

module.exports = Wrapper;