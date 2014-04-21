<div ng-app="Timer" ng-controller="timerController as timer">

	<div class="jumbotron">
		<h1>VINT Watch</h1>
	</div>
	  <div id="lap-times">
	  <h1>{{h}}:{{m}}:{{s}}:{{n}}</h1>
			  <div class>
			  	<button class="btn" ng-disabled="enableBtn" ng-click="timer.change()">{{timer.btn}}</button>
			  	<button class="btn" ng-disabled="enableLap" ng-click="timer.lapTime()">LAP</button>
			  </div>
			  <div>
			  	<button class="btn" ng-disabled="enableReset" ng-click="timer.reset()">RESET</button>
			  </div>
	  </div>

			<div id="lap-times">
			  <ul style="list-style: none;">
			    <li ng-repeat="item in timer.allLaps">
			      {{item}}
			    </li>
			  </ul>
			</div>

</div>