/**
 * A Schema for the Algorithms & DataStructures of RadGrab foundation
 */
//



var DataTime = function(){
	// date properties
};

var Notification = function(){
	this.Date = new DateTime();
	this.User = new User();
	this.Geo = new Geo();
};

var HoursOfOperation = function(){
	this.Geo = new Geo();
	this.Date = new DateTime();
};

var User = function(){
	//this.Person
};

var List = function(){
	this.User = new User();
	this.Deals = new Deals();
	
	this.item = [];
	this.setItem = function(item){ this.item.push(item); };
};

var Deals = function(){
	//real properties
	this.Date = 'some date from the deals database/api';
	this.experationDate = 'its exp date';
	
	// exercise
	this.HoursOfOperation = new HourseOfOperation();
};

var Geo = function(){
	//this.Date = new DateTime();
	this.Notifications = [new Notification(), new Notification(), ...];
	//this.User = new User();
	//this.List = new List();
	//this.Deals = new Deals();
	
	this.createMapRoute = function(start, end){ ... }
};

var Itinerary = function(){
	this.Date = new DateTime();
	this.User = new User();
	this.List = new List();
	this.Deals = new Deals();
	this.Geo = new Geo();
};





