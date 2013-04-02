

/*(function($){
    $.fn.randomNum = function(options){
  
        var defaultVal = {
            start: 0,
            stop: 10,
            type: "float"
        };

        var obj = $.extend(defaultVal, options);  
        console.log("c="+obj.start+","+ obj.stop+","+obj.type);  
        return a(obj.start, obj.stop, obj.type);
    }

    a = function(start, stop, type) {
        var rand_num = makeRandom(stop);
        while(rand_num < start){
            rand_num = makeRandom(stop);
        }
        if(type == "int") {
           rand_num = parseInt(rand_num);
        }
        console.log("a="+rand_num);
        return rand_num;
    }
    makeRandom = function(max) {
        return Math.random()*max;
    }
 })(jQuery)*/



(function($) {  
    $.fn.extend({  
        randomNum: function(options) {  
            var defaults = {
                start: 0,
                stop: 10,
                type: "float"
            }; 
            //用$.extend方法，扩展一个对象
            var obj = $.extend(defaults, options);
            return $.fn.randomNum.checkNum(obj.start, obj.stop, obj.type);
        }

    });


    $.fn.randomNum.checkNum = function(start, stop, type) {
        var rand_num = $.fn.randomNum.makeRandom(stop);
        while(rand_num < start){
            rand_num = $.fn.randomNum.makeRandom(stop);
        }
        if(type == "int") {
           rand_num = parseInt(rand_num);
        }
        return rand_num;
    }

    $.fn.randomNum.makeRandom = function(max) {
        return Math.random()*max;
    }

})(jQuery); 