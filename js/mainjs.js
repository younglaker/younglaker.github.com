
	$(document).ready(function() {
		var window_width = $(window).width();
		var window_height = $(window).height();
		$(".img_list1 li, .img_list2 li").css("width", window_width);


		/*********************   Imgscroll  *********************/
		function imgScroll(wraper, speed){
			var wraper = $(wraper);
			var img_list = wraper.find('ul');
			var w = img_list.find('li').outerWidth(true);
			img_list.animate({
				'margin-left': -w
				}, speed,
				function() {
					img_list.find('li').eq(0).appendTo(img_list);
					img_list.css({'margin-left': 0});
			});

		}


		/*********************   shining_stars  *********************/
		function shiningStars(star) {
			var position_x = randomNum(0, 1200, "float");
			var position_y = randomNum(0, 900, "float");
			$(".star").css({
				"position": "absolute",
				"top": position_x,
				"left": position_y
				}).hide().fadeIn(1000).delay(1000).fadeOut(1000);
		};

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

		/*********************   cloud  *********************/
		function floatCloud (cloud, direction, position, distance, speed) {
			var cloud = $(cloud);

			cloud.mouseenter(function(){
				cloud.stop();
			});

			switch(direction) {
				case "right": 
							cloud.animate({
								'margin-right': position + distance
								}, speed
							).animate({
								'margin-right': position
								}, speed
							);
							break;
				case "left":
							cloud.animate({
								'margin-left': position + distance
								}, speed
							).animate({
								'margin-left': position
								}, speed
							);
							break;
			}


		}

		/*********************   conduct  *********************/
/*		var x=setInterval(
			function() {
				imgScroll('.scrolling_block1', 400);
				imgScroll('.scrolling_block2', 1000);
				imgScroll('.scrolling_block3', 600);
			}, 4000
		);

		$(".scrolling_block3").hover(function(){
			clearInterval(x);
		},function(){
			x=setInterval(
				function() {
					imgScroll('.scrolling_block1', 400);
					imgScroll('.scrolling_block2', 1000);
					imgScroll('.scrolling_block3', 600);
				}, 4000
			);
		});*/

/*		setInterval(
			function() {
				shiningStars(".star");
			}, 4000
		);*/


		setInterval(
			function() {
				floatCloud("#cloud_5", "left", 0, 50, 2000);
			}, 2000
		);
		setInterval(
			function() {
				floatCloud("#cloud_2", "left", 20, 200, 4000);
			}, 4000
		);
		setInterval(
			function() {
				floatCloud("#cloud_1", "right", 0, 40, 2500);
			}, 2500
		);

	});