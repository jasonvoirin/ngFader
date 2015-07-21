# ngFader
A simple, responsive and pure AngularJS fading slideshow directive that requires no jQuery!
This fork has a more robust interface.

## Demo
You can see original working demo [here.](http://www.thetexans.org)

## My Demo
Gallery for party fishing boat using nodejs,sailsjs with walker to build gallery by stepping through directory
(http://primetime3.com/gallery)

## My Changes
  added properties to use
  autostart
  timer
  data-images
  showdots
  
  setup in controller
  $scope.dataHasLoaded = false; flag for data loading
  // dynamic data
  $scope.getGallery = function () {
            GalleryModel.getFader($scope.dataset).then(function (models) {
		$scope.images = models;
                $scope.dataHasLoaded = true;
            });
      }
      or hardcoded
         $scope.images = [{
                src: 'images/banner1.jpg',
                alt: 'Add your image description here'
            }, {
                src: 'images/banner3.jpg',
                alt: 'Add your image description here'
            }, {
                src: 'images/banner5.jpg',
                alt: 'Add your image description here'
            }, {
                src: 'images/banner4.jpg',
                alt: 'Add your image description here'

            },  {
                src: 'images/banner2.jpg',
                alt: 'Add your image description here'
            }];
            $scope.dataHasLoaded = true;
      
      
      
  set watch to change datasource
  $scope.$watch("dataset", function () {
            $scope.getGallery($scope.dataset);
            $scope.dataHasLoaded = false;
   });
    setup in html
    <ng-fader data-images="images" autostart=true timer="6000" ng-if="dataHasLoaded" showdots=false></ng-fader>




## Dependencies
ngFader requires ngAnimate for the fading transitions and ngTouch for mobile swiping gestures. 

ngAnimate:
https://angularjs.org/ <br>
ngTouch:
https://angularjs.org/

## Setup Instructions
1. Link the ngFader CSS in your header:<br>
<pre><code>\<link type="text/css" rel="stylesheet" href="css/ngFader.css"></code></pre>
2. Add the ngFader directive script tag in your header: <br>
<pre><code>\<script src="js/directives/ngFader.js"></script></code></pre>
3. Add 'ngFader' as a module dependancy - make sure ngAnimate and ngTouch is listed as a dependancy as well:
<pre><code>angular.module('yourAppModule', ['ngAnimate', 'ngTouch', 'ngFader']);</code></pre>
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
5. Add <code>\<ng-fader>\</ng-fader></code> where you want the fader to show.<br>

<ng-fader data-images="images" autostart=true timer="5000"  ng-if="dataHasLoaded" showdots=false></ng-fader>


## Donate 
Github charges me a monthly fee to contribute this code to our development community. Help me cover the cost by donating via [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2SYBU2SUZCJUE).

