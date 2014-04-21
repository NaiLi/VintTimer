<div ng-app="Timer" ng-controller="timerController as timer">
  <!--<button class="btn" ng-click="timer.tick()">starta</button>
  <button class="btn" ng-click="timer.stop()">stoppa</button>-->
  {{timer.h}}:{{timer.m}}:{{timer.s}}:{{timer.n}}
  <button class="btn" ng-disabled="enableBtn" ng-click="timer.change()">{{timer.btn}}</button>
  <button class="btn" ng-disabled="enableLap" ng-click="timer.lapTime()">Lap</button>
  <button class="btn" ng-disabled="enableReset" ng-click="timer.reset()">Reset</button>

  <ul>
    <li ng-repeat="item in timer.allLaps">
      {{item}}
    </li>
  </ul>

</div>