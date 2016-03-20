<?php


$factory->define('App\Message', function($faker){
	return [
		'name' => $faker->name,
		'message' => $faker->paragraph
	];
});

