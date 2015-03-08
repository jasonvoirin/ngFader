
(function () {
    'use strict';
    angular.module('ngFader', [])
	.directive('ngFader', function($interval) {

	function link(scope){

		/* ==================================================================
			List your images here. 
			The images array is the only code you should need to change.
		===================================================================== */
		scope.images = [{
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
		}];


		//Pagination dots - gets number of images
	        scope.numberOfImages = scope.images.length;
	        scope.dots = function(num) {
	          return new Array(num);   
	        };

	        //Pagination - click on dots and change image
	        scope.selectedImage = 0;
	        scope.setSelected = function (idx) {
	          scope.stopSlider();
	          scope.selectedImage = idx;
	        };

	        //Slideshow controls
	        scope.sliderBack = function() {
	          scope.stopSlider();
	          scope.selectedImage === 0 ? scope.selectedImage = scope.numberOfImages - 1 : scope.selectedImage--;
	        };

	        scope.sliderForward = function() {
	          scope.stopSlider();
	          scope.autoSlider();
	        };

	        scope.autoSlider = function (){
	          scope.selectedImage < scope.numberOfImages - 1 ? scope.selectedImage++ : scope.selectedImage = 0;
	        };

	        scope.stopSlider = function() {
	          $interval.cancel(scope.intervalPromise);
	          scope.activePause = true;
	          scope.activeStart = false;
	        };
	        
	        scope.startSlider = function(){
	          scope.intervalPromise = $interval(scope.autoSlider, 3000);
	          scope.activeStart = true;
	          scope.activePause = false;
	        };
	        scope.startSlider();

	}

	  return {
	    restrict: 'E',
	    scope: false,
	    template: '<div class="ng-fader">'+
	    		//images will render here
			'<ul>' + 
				'<li ng-repeat="image in images"><img data-ng-src="{{image.src}}" data-ng-alt="{{image.alt}}" ng-show="selectedImage==$index"/></li>' + 
			'</ul>' + 
			//pagination dots will render here
			'<div class="ng-fader-pagination">' + 
				'<ul>' + 
					'<li ng-repeat="i in dots(numberOfImages) track by $index" ng-class="{current: selectedImage==$index}" ng-click="setSelected($index)"></li>' + 
				'</ul>' + 
			'</div>' + 
			//controls are here
			'<div class="ng-fader-controls">' + 
				'<ul>' + 
					'<li ng-click="sliderBack()">' + 
						'<i class="fa fa-backward"></i>' + 
					'</li>' + 
					'<li ng-class="{\'active\': activePause}" ng-click="stopSlider()">' + 
						'<i class="fa fa-pause"></i>' + 
					'</li>' + 
					'<li ng-class="{\'active\': activeStart}" ng-click="startSlider()">' + 
						'<i class="fa fa-play"></i>' + 
					'</li>' + 
					'<li ng-click="sliderForward()">' + 
						'<i class="fa fa-forward"></i>' + 
					'</li>' + 
				'</ul>' + 
			'</div>' +
		'</div>',
		link: link
	  };
	});

}());
