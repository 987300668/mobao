define(["jquery","cookie"],function($){
	$.ajax({
		type:"get",
		url:"/html/nav.html",
		success:function(data){
			$(data).appendTo(".nav");
			
		}
	});
})
