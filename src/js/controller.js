/**
 * Created by Park on 2016-04-01.
 */
define(function(){
    var Controller = (function(){
        var controller = function(model, view){
            return new init(model, view);
        }

        function init(model, view){
            this.arrRet = [0,0,0,0];
            addViews(model, view);

            return this;
        }

        var addViews = function(model, view){
            this.model = model;
            this.view = view;

            this.model.addListener(this.view);
        }

        var rand = function(){
            var randNum = [];
            for(var i=0; i < 3 ; i++){
                var num = Math.floor(Math.random()*10);
                randNum[i] = num;
            }
            console.log(randNum);
            return randNum;
        }

        init.prototype.initialize = function(){
            this.randNum = rand();
        }

        init.prototype.execute = function(){
            model.setValue();
            return this.checker();
        }

        init.prototype.checker = function(){
            var userNum = model.getValue();
            var randNum = this.randNum;
            var arrRet = [0,0,0];
            var flag = false;

            for(var i=0 ; i<3 ; i++){
                for(var j=0 ; j<3 ; j++){
                    if(userNum[i] === randNum[j]){
                        if(i===j){
                            ++arrRet[0];
                        }else{
                            ++arrRet[1];
                        }
                        flag = true;
                    }
                }
            }

            if(!flag){
                ++arrRet[2];
            }
            return arrRet;
        }

        return controller;
    })();

    return Controller;
});