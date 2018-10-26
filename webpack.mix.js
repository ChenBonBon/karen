let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/pages/index/index.js', 'public/js/index.js')
   .js('resources/assets/js/pages/music/index.js', 'public/js/music.js')
   .extract(['vue'])
   .sass('resources/assets/sass/app.scss', 'public/css')
   .webpackConfig({
        resolve: {
            alias: {
                '~components': path.resolve(__dirname, 'resources/assets/js/components'),
                '~pages': path.resolve(__dirname, 'resources/assets/js/pages'),
                '~routers': path.resolve(__dirname, 'resources/assets/js/routers'),
                '~stores': path.resolve(__dirname, 'resources/assets/js/stores')
            }
        }
    });
