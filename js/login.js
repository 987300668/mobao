define(["jquery","cookie"],function($){
	var _yzm;

	
	
	
	
	function load(){		
		$.ajax({
				type:"get",
				url:"http://route.showapi.com/932-2",
				data:{
					showapi_appid :"44809",
					showapi_sign :"ee98834af4814e5889f4449a09df629b"
				},
				dataType : "json",
				success : function(data){
					
					data = data.showapi_res_body;
					$("#login-yzm").html("<img src='" + data.image + "' />");					
					_sid=data.sid;
				}
			});
	
	}
	load();
	$("#login-sryzm").blur(function(){
		var code=$(this).val();
		$.ajax({
			type:"get",
			url:"http://route.showapi.com/932-1",
			data:{
				showapi_appid :"44809",
				showapi_sign :"ee98834af4814e5889f4449a09df629b",
				checkcode:code,
				sid : _sid
			},
			dataType : "json",
			success : function(data){
				if (data.showapi_res_body.valid) {
					$("#login-sryzm").val("正确") 
					_yzm=true;
				} else {
					$("#login-sryzm").val("验证码输入有误");
					_yzm=false;
				}
			}
		});
	})

	$("#login-bt").click(function(){
		var _name= $("#login-username").val(),
		    _pass= $("#login-password").val();
//		    if(_user.username!=_name || _user.passwd!=_pass){
//		    	alert("账号或密码有误");
//		    }else if(!_yzm==true){
//		    	alert("验证码有误")
//		    }else{
//		    	location="/index.html"
//		    }
			console.log(_name,_pass)
		    var yanz=false;
		   	$.getJSON("/mock/user.json",function(data){				
				for(var i=0;i<data.length; i++){
					 if(data[i].username==_name && data[i].passwd==_pass){
					    	yanz=true;
					    						    	
					   }
					
				}	
				console.log(yanz)
				 if(!_yzm==true){
				   		alert("验证码有误")				   		
				   	}else if(yanz!=true){
				   		alert("账号或密码有误")
				   	}else if(yanz==true && _yzm==true){
				   		var _user={
				   			username:_name,
							passwd:_pass					
				   			}
				   		$.cookie.json=true;
				   		$.cookie("loginUser",_user,{expires:7,path:"/"});
				   		location="/index.html";
					}
					   	
			})
		   	
		  
	 
		    
	})
})
