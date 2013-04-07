    function randomNum(start, stop, type) {
        var rand_num = makeRandom(stop);
        while(rand_num < start){
            rand_num = makeRandom(stop);
        }
        if(type == "int") {
           rand_num = parseInt(rand_num);
        }
        console.log(rand_num);
        return rand_num;
    }
    function makeRandom(max) {
        return Math.random()*max;
    }