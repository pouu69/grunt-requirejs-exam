/**
 * Created by Park on 2016-04-01.
 */
define(function(){
    var Model = (function(){
        var model = function(){
            return new init();
        }

        function init(){
            this.listeners = {};

            return this;
        }

        init.prototype.addListener = function(view){
            var len = Object.keys(this.listeners).length;

            for(i = len ;  i<view.elems.length ; i++){
                this.listeners[i] = {
                    elem : view.elems[i],
                    flag : view.flag
                }

                if(view.evt){
                    this.listeners[i].elem.addEventListener(view.evt,view.callback);
                }
            }

            return this;
        }

        init.prototype.removeListener = function(listenerId){

            listenerId = listenerId || '';

            delete this.listeners[listenerId];

            return this;
        }

        init.prototype.isListener = function(listenerId){

            listenerId = listenerId || '';

            return this.listeners[listenerId];
        }

        init.prototype.getValue = function(listenerId){
            var arrNum = [];
            var arrIdx = 0;

            for (var key in this.listeners) {
                if (this.listeners.hasOwnProperty(key) && this.listeners[key].flag) {
                    arrNum[arrIdx] = this.listeners[key].val;
                    arrIdx++;
                }
            }

            return arrNum;
        }

        init.prototype.setValue = function(){
            for (var key in this.listeners) {
                if (this.listeners.hasOwnProperty(key) && this.listeners[key].flag) {
                    var value = this.listeners[key].elem.value;

                    this.listeners[key].val = parseInt(value);
                }
            }
            return this;
        }
        return model;
    })();

    return Model;
});
