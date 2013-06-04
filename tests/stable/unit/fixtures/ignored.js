//jshint -W008

var a = .12;
var b = 12.;

function test() {
	//jshint -W033
	return a
}

function test2() {
	return a
}

var node = 'tester';

//jshint -E044
var node = 'test';
