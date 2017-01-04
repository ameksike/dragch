<?php
	include __DIR__."/src/WckServer.php";
	$config = include __DIR__."/cfg/config.php";
	$server = new WckServer($config);
	$server->start();
