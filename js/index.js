require(["config"],function(){
	require(["jquery","temp","handf","register","login","nav"],function($,template){
		//轮播
		var lun= $(".lunbo"),
			len = lun.length,
			lunWidth = lun.outerWidth(),
			cindex=1,
			nindex=2,
			timer;
		var _first = lun.eq(0).clone(true),
			_last = lun.eq(len - 1).clone(true);	
		$(".lunbo-box").append(_first);
		$(".lunbo-box").prepend(_last);
		
		len+=2;
		$(".lunbo-box").eq(0).width(len * lunWidth);
		$(".lunbo-box").eq(0).css({
			left : -lunWidth
		});
		
		function move() {
			var _left = -1 * lunWidth * nindex;
			$(".lunbo-box").eq(0).stop().animate({left : _left}, "fast", function(){
				if (nindex >= len) {
					cindex = 1;
					nindex = 2;
					$(".lunbo-box").eq(0).css("left", -lunWidth);
				}
				if (cindex <= 0) {
					cindex = len - 2;
					nindex = len - 1;
					$(".lunbo-box").eq(0).css("left", -lunWidth * (len - 2));
				}
			});
		
			cindex = nindex;
			nindex++;
		}
		$(".banner-box").eq(0).hover(function(){

			clearInterval(timer);
		}, function(){

			timer = setInterval(move, 3000);
		}).mouseleave(); 
		
		//倒计时
		
		show("2017-8-30 20:40:00");
		function show(endtime){
			var date=new Date();		
			if(!endtime){
				var endtime= date.setHours(date.getHours()+2)
			}else{
				var endtime = new Date(endtime);
			}
			
			var _show= setInterval(function(){
				var startime= new Date(),
				 	times=endtime-startime,
				 	miao=Math.ceil(times/1000),
					sd=("0"+(miao%60)).slice(-2),
					ms=("0"+(Math.floor((miao/60)%60))).slice(-2),
					hours=("0"+(Math.floor(miao/(60*60)))).slice(-2);
					$("#miao").html(sd);
					$("#fen").html(ms);
					$("#shi").html(hours);
				
				if(miao<=0)
				 clearInterval(_show);
			},1000)
			
		}	
		//模板
		$.getJSON("/mock/qianggo.json", function(data){
			var html = template("prod_qg", {_qg:data});
			$(html).appendTo(".qianggo");
		});
		
		$.getJSON("/mock/ad.json", function(data){
			var html = template("prod_ad", {_ad:data});
			$(html).appendTo(".ad");
		});
		
		$.getJSON("/mock/new.json", function(data){
			var html = template("prod_new", {_new:data});
			$(html).appendTo(".new");
		});
		$.getJSON("/mock/like.json", function(data){
			var html = template("prod_like", {_like:data});
			$(html).appendTo(".like");
		});
		$.getJSON("/mock/food.json", function(data){
			var html = template("prod_food", {_food:data});
			$(html).appendTo(".food");
		});
		$.getJSON("/mock/food.json", function(data){
			var html = template("prod_food2", {_food2:data});
			$(html).appendTo(".food2");
		});
	})
})
