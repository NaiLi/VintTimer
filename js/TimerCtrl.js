function TimerCtrl($scope) {//($scope) {??

		//Variables
	$scope.time; //alt: time: time= {h:0, m:0};
	$scope.midTime = new Date(); 	//Time of the latest lap start
	$scope.lapTimes = new Array();	//Array storing lap times
	$scope.lap = '0';								//counter for no of laps
	$scope.timer;
	//$scope.buttons = [
	$scope.buttons = [
		{ text: 'Start',
		fct: 'startTimer',
		color: green},

		{ text: 'Start',
		fct: 'stopTimer',
		color: red},

		{ text: 'Start',
		fct: 'startTimer',
		color: green},

		{ text: 'Start',
		fct: 'startTimer',
		color: green},

	];

	this.startTimer = function() { 

		console.log("hej");
		//Enable and disable buttons
		document.getElementById('start').disabled = true;
		document.getElementById('stop').disabled = false;
		document.getElementById('laptime').disabled = false;
		document.getElementById('reset').disabled = true;

		
		var startTime = new Date();	//Starting time of run
		midTime = startTime;				//First lap starts from start of run

		timer = setInterval(function() {

		var t = new Date();
		var h = t.getHours() - startTime.getHours();
		var m = t.getMinutes() - startTime.getMinutes();
		var s = t.getSeconds() - startTime.getSeconds();
		var n  = Math.round(t.getMilliseconds()/10); //Kan nu bli 100...
		
		document.getElementById('timer').innerHTML="Time: " + 
			timeToString(h) + ":" +
			timeToString(m) + ":" +
			timeToString(s) + ":" +
			timeToString(n);
	//$scope.$apply();
	}, 10);

	}

	this.stopTimer = function() {
		clearInterval(timer);

		//Enable and disable buttons
		document.getElementById('start').disabled = true;
		document.getElementById('stop').disabled = true;
		document.getElementById('laptime').disabled = true;
		document.getElementById('reset').disabled = false;
	}

	this.lapTime = function() {

		lap++; 

		var now = new Date();
		var h = now.getHours() - midTime.getHours();
		var m = now.getMinutes() - midTime.getMinutes();
		var s = now.getSeconds() - midTime.getSeconds();
		var n  = Math.round(now.getMilliseconds()/10);

		midTime = now; 

		var str = "Lap " + lap + " :" + 
			timeToString(h) + ":" +
			timeToString(m) + ":" +
			timeToString(s) + ":" + 
			timeToString(n);

		lapTimes.push(str);
		document.getElementById('lap-times').innerHTML= lapTimes;
	}

	this.reset = function() { //TODO: disable buttons
		document.getElementById('timer').innerHTML="Time: 00:00:00:00";
		lapTimes = [];
		document.getElementById('lap-times').innerHTML= lapTimes;
		lap = 0; 

		//Enable and disable buttons
		document.getElementById('start').disabled = false;
		document.getElementById('stop').disabled = true;
		document.getElementById('laptime').disabled = true;
		document.getElementById('reset').disabled = true;
	}

	this.timeToString = function(num) {
		return (num < 10 ? "0" : "") + num;
	}
}