<?php 
	$uname = $_POST["username"];
	$upwd = $_POST["password"];
	$ucid = $_POST["cid"];

	// echo "$uname ，$upwd ，$ucid";

	if ($uname === "test") {
		echo '{"status":0, "message":"user exists"}';
	} else if ($uname === "zhangsan" && $upwd === "abcdef") {
		$user = array("username"=>$uname, "nickname"=>$uname, "score"=>100,"level"=>"VIP1");
		echo '{"status":1, "message":"success", "user":'. json_encode($user) .'}';
	} else {
		echo '{"status":0, "message":"failed"}';
	}
 ?>