define(["jquery","cookie"],function($){	
		var _uesername,
			_password,
			_phone;
		$("#username").blur(function(){
			_uesername=$(this).val();		
		})
		$("#password").blur(function(){
			var m=/^.{6,20}$/;
			_password=$(this).val();			
			if(!m.test($(this).val())){
				alert("请您设置6~20位的密码")
				$(this).val("")
			}
		})
		$("#password2").blur(function(){
			if(_password!=($(this).val())){
				alert("两次密码不一样")
				$(this).val("")
				}
			})
		$("#phone").blur(function(){
			var p=/1[3|5|7|8|]\d{9}/;
				_phone=$(this).val();
			if(!p.test($(this).val())){				
				$(this).val("请输入正确的手机号")
			}
		})
		$("#yzm").click(function(){
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
					$("#yzm").html("<img src='" + data.image + "' />");	
					
					_sid=data.sid;
				}
			});
		})
		$("#sryzm").blur(function(){
			var code=$(this).val();
			console.log(code,_sid)
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
						$("#sryzm").val("正确") 
						
					} else {
						$("#sryzm").val("验证码输入有误");
						
					}
				}
			});
		})
})
