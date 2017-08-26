define(["jquery","cookie"],function($){
	$.ajax({
		type:"get",
		url:"/html/header.html",
		success:function(data){
			var _username =$.cookie("loginUser");
			if(_username){
			
				$(data).find("._regs").html(`${_username}`).end()
						.find("._regs").attr("href","").end()
						.find("._login").html(`退出`).end()
						.find("._login").attr("href","").end()
						.appendTo(".header");
				   
			
			}else{
				$(data).appendTo(".header");
			}
		}
	});
	$.ajax({
		type:"get",
		url:"/html/footer.html",
		success:function(data){
			$(data).appendTo(".footer");
			
		}
	});
	
	
	
	
})