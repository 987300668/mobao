define(["jq","cookie"],function($){
	$.ajax({
		type:"get",
		url:"/html/header.html",
		success:function(data){
			var _username =$.cookie("loginUser");
			if(_username){
				
				$(data).filter("._regs").attr({href:"#"});
				
				$(data).filter("._regs").html(`${_username}`);
				
				$(data).filter("._login").attr({href:"#"});
				$(data).filter("._login").html(`退出`);
				$(data).appendTo(".header");
			}else{
				$(data).appendTo(".header");
			}
		}
	});
})