<?php
Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => ['web']], function () {

});
	Route::get('api/messages', function(){
	return App\Message::all();
	});
    
	Route::post('api/messages', function(){
		return App\Message::create(Request::all());
	});

