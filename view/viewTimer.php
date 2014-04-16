<!DOCTYPE html>

<head>
	<script type="text/javascript" src="js/timer.js"></script>
</head>

<body>
	<button id="start" onclick="startTimer()">Start timer</button>
	<div id="timer"></div>
	<button id="stop" disabled="true" onclick="stopTimer()">Stop time</button>
	<button id="laptime" disabled="true" onclick="lapTime()">Lap Time</button>
	<button  id="reset" disabled="true" onclick="reset()">Reset</button>
	<div id="lap-times"></div>
</body>

</html>