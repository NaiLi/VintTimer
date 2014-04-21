angular.module('Timer', [])
  .controller('timerController', function($scope) {
    $scope.h = '00';
    $scope.m = '00';
    $scope.s = '00';
    $scope.n = '00';
    this.btn = "START";
    this.lap = 0;
    this.allLaps = new Array(); //String array for all lap times
    this.midTime = new Date();
    this.startTime = new Date();
    $scope.enableBtn = false; 
    $scope.enableReset = true;
    $scope.enableLap = true;  

    this.tick = function tick() {

        var ptr = this; 

        //Buttons
        $scope.enableLap = false; 

        var startTime = new Date();
        this.midTime = new Date();
 

        this.timer = setInterval(function() {
            
            var diff = new Date(new Date - startTime);

            $scope.h = ptr.timeToString(diff.getHours() - 1); //Compensation for time difference
            $scope.m = ptr.timeToString(diff.getMinutes());
            $scope.s = ptr.timeToString(diff.getSeconds());
            $scope.n  = ptr.timeToString(Math.floor(diff.getMilliseconds()/10)); 

            $scope.$apply();

        }
        , 10);
    };

    this.stop = function stop() {
        clearInterval(this.timer);
        $scope.enableLap = true; 
        $scope.enableReset = false;
        $scope.enableBtn = true;  
    };

    this.reset = function reset() {
        $scope.h = '00';
        $scope.m = '00';
        $scope.s = '00';
        $scope.n = '00';
        this.btn = "START";
        this.lap = 0; 
        this.allLaps = [];
        $scope.enableBtn = false; 
        $scope.enableReset = true;

    };

    this.lapTime = function lapTime() {
        
        this.lap++; //Add lap

        var diff = new Date(new Date - this.midTime);
                   
        var h = this.timeToString(diff.getHours() - 1); //Compensation
        var m = this.timeToString(diff.getMinutes());
        var s = this.timeToString(diff.getSeconds());
        var n  = this.timeToString(Math.floor(diff.getMilliseconds()/10)); 

        this.allLaps.push("Lap " + this.lap + ": " + h + ":" + m + 
            ":" + s + ":" + n);

        this.midTime = new Date();

    };

    this.change = function change() {

        if(this.btn == "START") {
            this.tick();
            this.btn = "STOP"
            $scope.btnReset=isDisabled = true;
        }
        else {
            this.stop();
            this.btn = "START"            
        }
    };

    this.timeToString = function timeToString(num) {
        return (num < 10 ? "0" : "") + num;
    };

  });