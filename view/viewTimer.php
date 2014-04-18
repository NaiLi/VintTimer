<!DOCTYPE html>

<head>
	<script type="text/javascript" src="js/timer.js"></script>
	<link rel="stylesheet" href="css/style.css">
</head>

	<script type="text/javascript">
		function start() {
			timer = new Timer();
		}
	</script>

<body onload='start()'>
	<div id="fullTimer">
	<button id="start" onclick="timer.startTimer()">Start timer</button>
	<div id="timer">Time: 00:00:00:00</div>
	<button id="stop" disabled="true" onclick="timer.stopTimer()">Stop time</button>
	<button id="laptime" disabled="true" onclick="timer.lapTime()">Lap Time</button>
	<button  id="reset" disabled="true" onclick="timer.reset()">Reset</button>
	<div id="lap-times"></div>

</body>

</html>