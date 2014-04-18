function Timer() {
	
	this.midTime = new Date(); 	//Time of the latest lap start
	this.lapTimes = new Array();	//Array storing lap times
	this.lap = 0;								//counter for no of laps
	this.timer; 

}

Timer.prototype = {

	startTimer: function() { 

		//Enable and disable buttons
		document.getElementById('start').disabled = true;
		document.getElementById('stop').disabled = false;
		document.getElementById('laptime').disabled = false;
		document.getElementById('reset').disabled = true;

		
		var startTime = new Date();	//Starting time of run
		this.midTime = startTime;				//First lap starts from start of run

		this.timer = setInterval(function() {

		var t = new Date();
		var h = t.getHours() - startTime.getHours();
		var m = t.getMinutes() - startTime.getMinutes();
		var s = t.getSeconds() - startTime.getSeconds();
		var n  = Math.round(t.getMilliseconds()/10); //Kan nu bli 100...

		var str = "Time: " +  
			Timer.prototype.timeToString(h) + ":" +
			Timer.prototype.timeToString(m) + ":" +
			Timer.prototype.timeToString(s) + ":" + 
			Timer.prototype.timeToString(n);

		document.getElementById('timer').innerHTML= str; 
		}, 10);

	},

	stopTimer: function() {
		clearInterval(this.timer);

		//Enable and disable buttons
		document.getElementById('start').disabled = true;
		document.getElementById('stop').disabled = true;
		document.getElementById('laptime').disabled = true;
		document.getElementById('reset').disabled = false;
	},

	lapTime: function() {

		this.lap++; 

		var now = new Date();
		var h = now.getHours() - this.midTime.getHours();
		var m = now.getMinutes() - this.midTime.getMinutes();
		var s = now.getSeconds() - this.midTime.getSeconds();
		var n  = Math.round(now.getMilliseconds()/10);

		this.midTime = now; 

		var str = "Lap " + this.lap + " :" + 
			this.timeToString(h) + ":" +
			this.timeToString(m) + ":" +
			this.timeToString(s) + ":" + 
			this.timeToString(n);

		this.lapTimes.push(str);
		document.getElementById('lap-times').innerHTML= this.lapTimes;
	},

	reset: function() { 
		document.getElementById('timer').innerHTML="Time: 00:00:00:00";
		this.lapTimes = [];
		document.getElementById('lap-times').innerHTML= this.lapTimes;
		this.lap = 0; 

		//Enable and disable buttons
		document.getElementById('start').disabled = false;
		document.getElementById('stop').disabled = true;
		document.getElementById('laptime').disabled = true;
		document.getElementById('reset').disabled = true;
	},

	timeToString: function(num) {
		return (num < 10 ? "0" : "") + num;
	}

};