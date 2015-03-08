# ngFader
Responsive AngularJS Slideshow Fader

## Dependencies
ngFader requires Font Awesome (for control icons) and ngAnimate (fading transitions).

Font Awesome:
http://fortawesome.github.io/Font-Awesome/ <br>
ngAnimate:
https://angularjs.org/

## Setup Instructions

1. Link the ngFader CSS in your header - make sure Font Awesome CSS is linked as well:<br>
<pre><code>\<link type="text/css" rel="stylesheet" href="css/ngFader.css"></code></pre>
2. Add the ngFader directive js script tag in your header: <br>
<pre><code>\<script src="js/directives/ngFader.js"></script></code></pre>
3. Add 'ngFader' as a module dependancy - make sure ngAnimate is listed as a dependancy as well:
<pre><code>angular.module('yourAppModule', ['ngAnimate', 'ngFader']);</code></pre>
4. In the ngFader directive, list your image locations in the “scope.images” array: <br>
<pre><code>scope.images = [{<br>
	src: 'img/slideshow/slideshow_Image_1_low.jpg',<br>
	alt: 'Add your image description here'<br>
	}, {<br>
	src: 'img/slideshow/slideshow_Image_2_low.jpg',<br>
	alt: 'Add your image description here'<br>
	}, {<br>
	src: 'img/slideshow/slideshow_Image_3_low.jpg',<br>
	alt: 'Add your image description here'<br>
	}, {<br>
	src: 'img/slideshow/slideshow_Image_4_low.jpg',<br>
	alt: 'Add your image description here'<br>
}]</code></pre>
5. Add <pre><code>\<ng-fader class="ng-fader"></ng-fader></code></pre>where you want the fader to show.<br>

You’re Done!



