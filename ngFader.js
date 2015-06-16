

		
(function () {
    'use strict';
    angular.module('ngFader', [])
	.directive('ngFader', function($interval) {

			return {

				restrict: 'AE',
				replace: true,
				scope: {
					images: '=',
					timer: '=',
					autostart:'=',
					showdots:'='
				},
				link: function(scope, elem, attrs) {

					console.log('scope link ',scope.images)
					scope.$watch('scope.images',function(){
						console.log('scope link $watch ',scope.images)
						//scope.images.forEach(function(image){
						//	image.visible=false;
						//});
						//scope.images[scope.currentIndex].visible=true;
					});
					scope.numberOfImages = scope.images.length;
					if (scope.showdots) {
						scope.dots = function(num) {
							return new Array(num);
						};
					}

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
						console.log(scope.timer);
						//console.log(timer);

						//scope.intervalPromise = $interval(scope.autoSlider, 6000);// orig 3000
						scope.intervalPromise = $interval(scope.autoSlider, scope.timer);// orig 3000

						scope.activeStart = true;
						scope.activePause = false;
					};
					if (scope.autostart) scope.startSlider(); // comment line if you dont want an auto start

				},
				//'<li ng-repeat="image in images"><img style="height:auto; width:auto; max-width:auto; max-height:650px;margin-left: auto;margin-right: auto;" data-ng-src="{{image.src}}" data-ng-alt="{{image.alt}}" ng-show="selectedImage==$index"/></li>' +
			    //style="max-width:auto; max-height:650px;"
			template: '<div class="ng-fader">'+
	    		//images will render here

			'<ul>' + 
				'<li ng-repeat="image in images"><img  data-ng-src="{{image.src}}" data-ng-alt="{{image.alt}}" ng-show="selectedImage==$index"/></li>' +
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
		'</div>'


	  };
	});

}());
