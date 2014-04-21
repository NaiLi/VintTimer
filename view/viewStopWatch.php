<div ng-app="StopWatch" ng-controller="stopwatchController as stopwatch">

	<div class="jumbotron">
		<h1>VINT Watch</h1>
	</div>
	  <div id="lap-times">
	  <h1>{{h}}:{{m}}:{{s}}:{{n}}</h1>
			  <div class>
			  	<button class="btn" ng-disabled="enableBtn" ng-click="stopwatch.change()">{{stopwatch.btn}}</button>
			  	<button class="btn" ng-disabled="enableLap" ng-click="stopwatch.lapTime()">LAP</button>
			  </div>
			  <div>
			  	<button class="btn" ng-disabled="enableReset" ng-click="stopwatch.reset()">RESET</button>
			  </div>
	  </div>

			<div id="lap-times">
			  <ul style="list-style: none;">
			    <li ng-repeat="item in stopwatch.allLaps">
			      {{item}}
			    </li>
			  </ul>
			</div>

</div>