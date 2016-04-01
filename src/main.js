/**
 * Created by Park on 2016-04-01.
 */
requirejs([
    'jquery',
    'devjs/view',
    'devjs/model',
    'devjs/controller'
],function($, View,Model,Controller){
    var BB = {};
    BB.Controller = Controller || {};
    BB.Model = Model || {};
    BB.View = View || {};


    var model = BB.Model();
    var numberViews = BB.View('number',true);
    var controller = BB.Controller(model, numberViews);

    controller.initialize();

    document.getElementById("myBtn").addEventListener("click", function(){
        var ret = controller.execute();
        numberViews.renderResult(ret);
    });

});


