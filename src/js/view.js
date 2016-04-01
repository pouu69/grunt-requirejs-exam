/**
 * Created by Park on 2016-04-01.
 */
define(function(){
    var View = (function(){
        var view = function(id, flag, callback){
            return new init(id, flag, callback);
        }

        function init(id, flag, callback){
            this.id = id;
            this.elems = document.getElementsByClassName(id);
            this.flag = flag;
            this.callback = callback || {};

            return this;
        }

        init.prototype.renderResult = function(retArr){
            alert(retArr[0]+' strikes ' + retArr[1] + ' balls' + retArr[2] + ' outs');
        }

        return view;
    })();

    return View;
});