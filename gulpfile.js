var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.phpUnit();

    mix.styles(['main.css', 
    	'bootstrap.min.css',
    	'bootstrap-theme.min.css'], 
    	'public/css/bundle.css');

    mix.browserify([
    	'main.js', 
    	'bootstrap.min.js', 
    	'vue.js', 
    	'vue-resource.min.js'], 
    	'public/js/bundle.js');
});
