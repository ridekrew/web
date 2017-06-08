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
	
	$scope.show = false;
	$scope.toggle = function(){
		$scope.show = !$scope.show;
	}

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
			$scope.price = round(price, 2);
			$scope.$apply();
		});
	}

	function round(value, decimals) {
		return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
	}

});

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

