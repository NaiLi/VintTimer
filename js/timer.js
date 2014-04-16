
var startTime = new Date();
var lap = 0;

var timer = setInterval(function() {

	var t = new Date();
	var h = t.getHours() - startTime.getHours();
	var m = t.getMinutes() - startTime.getMinutes();
	var s = t.getSeconds() - startTime.getSeconds();
	var n  = Math.round(t.getMilliseconds()/10);
	
	document.getElementById('timer').innerHTML="Time: " + 
		timeToString(h) + ":" +
		timeToString(m) + ":" +
		timeToString(s) + ":" +
		n;

}, 10);

function stopTimer() {
	clearInterval(timer);
}

function lapTime() {

	lap++; 

	var now = new Date();
	var h = now.getHours() - startTime.getHours();
	var m = now.getMinutes() - startTime.getMinutes();
	var s = now.getSeconds() - startTime.getSeconds();
	var n  = Math.round(now.getMilliseconds()/10);

	console.log("sec: " + s);
	document.getElementById('lap-times').innerHTML="Lap " + lap + " :" + 
		timeToString(h) + ":" +
		timeToString(m) + ":" +
		timeToString(s) + ":" + n;
}

function timeToString(num) {
	return (num < 10 ? "0" : "") + num;
}