# ngFader
A simple, responsive and pure AngularJS fading slideshow directive that requires no jQuery!

## Demo
You can see a working demo at the ngFader [home page.](http://www.jasonvoirin.com/ngfader)

## Dependencies
ngFader requires ngAnimate for the fading transitions and ngTouch for mobile swiping gestures. 

ngAnimate:
https://angularjs.org/ <br>
ngTouch:
https://angularjs.org/

## Setup Instructions
1. Link the ngFader CSS in your header:<br>
<pre><code>link type="text/css" rel="stylesheet" href="css/ngFader.css"</code></pre>
2. Add the ngFader directive script tag in your header: <br>
<pre><code><script src="js/directives/ngFader.js"></script></code></pre>
3. Add 'ngFader' as a module dependancy - make sure ngAnimate and ngTouch is listed as a dependancy as well:
<pre><code>angular.module('yourAppModule', ['ngAnimate', 'ngTouch', 'ngFader']);</code></pre>
4. In the ngFader directive, set your timer and list your image locations in the “scope.images” array: <br>
<pre><code>
//Set your interval time. 4000 = 4 seconds<br>
scope.setTime = 4000;<br>
<br>
//List your images here. <br>
scope.images = [{<br>
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
5. Add <code>\<ng-fader>\</ng-fader></code> where you want the fader to show.<br>


## Donate 
Github charges me a monthly fee to contribute this code to our development community. Help me cover the cost by donating via [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2SYBU2SUZCJUE).

##Issues or Suggestions?
If you would like to see some new features, have any suggestions or notice any issues, please feel free to list them in the [issues section](https://github.com/jasonvoirin/ngFader/issues). Let's try not to have a bunch of forks with various code types if possible. I understand if there are customizations involved, but if it is generic, then let's add it to the code base. I would greatly appreciate it!

