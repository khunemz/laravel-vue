var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.phpUnit();

    mix.styles(['main.css', 'bootstrap.min.css'], 
    	'public/css/bundle.css');

    mix.browserify(['jquery.js', 'main.js', 
    	'bootstrap.min.js', 'vue.js', 'vue-resource.min.js'], 
    	'public/js/bundle.js');
});
