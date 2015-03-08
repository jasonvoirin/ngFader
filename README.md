# ngFader
Responsive AngularJS Slideshow Fader

## Dependencies
ngFader requires Font Awesome (for control icons) and ngAnimate (fading transitions).

Font Awesome:
http://fortawesome.github.io/Font-Awesome/ <br>
ngAnimate:
https://angularjs.org/

## Setup Instructions

1. Link the ngFader CSS in your header - make sure Font Awesome CSS is linked as well.<br>
\<link type="text/css" rel="stylesheet" href="css/ngFader.css">
2. Add the ngFader directive js script tag in your header. <br>
\<script src="js/directives/ngFader.js"></script>
3. Add 'ngFader' as a module dependancy - make sure ngAnimate is listed as a dependancy as well.
\angular.module('yourAppModule', ['ngAnimate', 'ngFader']);
4. In the ngFader directive, list your image locations in the “scope.images” array.
\scope.images = [{
	          src: 'img/slideshow/slideshow_Image_1_low.jpg',
	          alt: 'Add your image description here'
	        }, {
	          src: 'img/slideshow/slideshow_Image_2_low.jpg',
	          alt: 'Add your image description here'
	        }, {
	          src: 'img/slideshow/slideshow_Image_3_low.jpg',
	          alt: 'Add your image description here'
	        }, {
	          src: 'img/slideshow/slideshow_Image_4_low.jpg',
	          alt: 'Add your image description here'
	        }]
5. Add <ng-fader class="ng-fader"></ng-fader> where you want the fader to show.

You’re Done!



