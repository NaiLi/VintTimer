<!DOCTYPE html>

<head>
	<script src="js/Timer.js"></script>
	<link rel="stylesheet" href="css/style.css">
</head>

	<script>
		function start() {
			timer = new Timer();
		}
	</script>

<body onload='start()'>
	<!--<div id="padd"></div>-->
	<div class="jumbotron">
		<div id="timer"><h1>00:00:00:00</h1></div>
		<div>
			<button id="start" onclick="timer.startTimer()">Start timer</button>
			<button id="stop" disabled="true" onclick="timer.stopTimer()">Stop timer</button>
		</div>
		<div>
			<button id="laptime" disabled="true" onclick="timer.lapTime()">Lap time</button>
		</div>
		<div>
			<button  id="reset" disabled="true" onclick="timer.reset()">Reset</button>
		</div>
	</div>
	<div id="lap-times"></div>

</body>

</html>