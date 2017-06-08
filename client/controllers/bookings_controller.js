app.directive('googleplace', function(){
	 return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {country: 'US'}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
})

app.controller('booking_controller', function($scope, $http, $location, BookingFactory, $element, $sce){
	
	$scope.gPlace;
	//Creating toggle for form
	
	$scope.show = 0;

	$scope.date = new Date();

	function setBookings(data){
		// console.log("Data: " + data);
		$scope.confirms = data;
		$scope.newBooking = {};
	}

	$scope.bookings = [];

	//fetch the bookings when controller loaded
	BookingFactory.index(setBookings);
	
	//Pass new booking info to factry	
	$scope.book = function(newBooking){
		console.log(newBooking)
		BookingFactory.book(newBooking)
		newBooking = {}; //reset form
		$location.url('/submit')
	}
	
	//ADD CAROUSEL
	var baseURL = '/static/img/';
	// $scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.active = 0;
	$scope.slides = [];
	var currIndex = 0;

	$scope.addSlide = function() {
		if ($scope.slides.length == 0){
			x = baseURL + 'car_background.png'
		};
		if ($scope.slides.length == 1){
			x = baseURL + 'gradient-wallpaper-2.jpg'
		};
		if ($scope.slides.length == 2){
			x = baseURL + 'gradient-wallpaper-3.jpg'
		}; 
	// var newWidth = 600 + slides.length + 1;
	$scope.slides.push({
	  image: x,
	  // image: '//unsplash.it/' + newWidth + '/300',
	  text: [("<div class = 'absolute-div'><h2>Travel Intercity.</h2><p>Book a long distance trip</p><p>for a hyper-affordable price</p><a href = '#!/promotions'><button>View Promotions</button></a></div><img id = 'car' src = 'static/img/test.png'>"), 
	  		("<div class = 'absolute-div'><h2>Never wait after a flight again.</h2><p>Call a Krew Driver before flight</p><p>and travel with ease</p><button>Book Now</button></div><img id = 'car' src = 'static/img/jet.png'>"),
	  		("<div class = 'absolute-div'><h2>Travel Intercity.</h2><p>Book a long distance trip</p><p>for a hyper-affordable price</p><button>View Promotions</button></div><img id = 'car' src = 'static/img/test.png'>")
	  ][$scope.slides.length % 3],
	  id: currIndex++,
	  trustedText: $sce.trustAsHtml($scope.slides.text)
	    });
  };

  for (var i = 0; i < 3; i++) {
    $scope.addSlide();
  }

  $scope.price = calculatePrice();
  

  	function calculatePrice() {
		var origin = ['3108 Centerville Rd., Wilmington, DE'];
		var destination = ['2949 Parkwood Blvd., Frisco, TX'];

		var distanceMatrix = new google.maps.DistanceMatrixService();
		var distanceRequest = { origins: origin, destinations: destination, travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.IMPERIAL, avoidHighways: false, avoidTolls: false };
		var price = 30;
		distanceMatrix.getDistanceMatrix(distanceRequest, function(response, status) {
			if (status != google.maps.DistanceMatrixStatus.OK) {
				console.log("There was an error.");
			} else {
				var responseFields = response.rows[0].elements[0];
				var distance = responseFields.distance.value / 1609.344; // Convert meters to miles for use in pricing model
				var duration = responseFields.duration.value / 60.0; // Convert seconds to minutes
				if (distance <= 100) {
					price = ((0.5 * duration + 0.2 * distance) * 1.4) + 1.5
				} else if (distance <= 200) {
					price = ((0.44 * duration + 0.18 * distance) * 1.325) + 1.5
				} else {
					price = ((0.4166 * duration + 0.16 * distance) * 1.25) + 1.5
				}
			}
			$scope.price = Number(Math.round(price+'e2')+'e-2');;
			$scope.$apply();
		});
	}

	
	// Sripre Response Handler
// 	$scope.stripeCallback = function (code, result) {
// 		console.log('callback function')
//     if (result.error) {
//         window.alert('it failed! error: ' + result.error.message);
//     } else {
//         window.alert('success! token: ' + result.id);
//     }
// };

});

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

// app.config(function($window) {
// 	$window.Stripe.setPublishableKey('sk_live_xzZpoV0uUICrcg79YFg3NtGj');

// 	$scope.stripeCallback = function (code, result) {
//     if (result.error) {
//         window.alert('it failed! error: ' + result.error.message);
//     } else {
//         window.alert('success! token: ' + result.id);
//     }
// };
// })
// stripe
// private Key : sk_live_xzZpoV0uUICrcg79YFg3NtGj
// publishable : pk_live_t34DtKRcABYPKqN4gLZgYoxx

// test
// publish key : pk_test_Ejljklt0l8hJEa3t0y3m8jlU
// secret key  : sk_test_3yi7zXSDgar9qi139UrRRYtt
// 