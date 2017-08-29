<?php 
	$username = $_GET["username"];
	if ($username === "test") {
		echo '{"status":0, "message":"exist"}';
	} else {
		echo '{"status":1, "message":"not exist"}';
	}
 ?>