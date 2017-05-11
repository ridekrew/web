app.factory('BookingFactory', function(){
	var factory = {};

	//initialize list of bookings
	var bookings = [];

	//Pass the user list to a controller
	factory.index = function(callback){
		callback(bookings)
	}

	//book a new request
	factory.book = function(booking){
		bookings.push(booking)
	}
	return factory;
})