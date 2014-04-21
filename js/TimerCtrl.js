angular.module('Timer', [])
  .controller('timerController', function($scope) {
    this.h = '00';
    this.m = '00';
    this.s = '00';
    this.n = '00';
    this.btn = "Start";
    this.lap = 0;
    this.allLaps = new Array();
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

        this.midTime = this.startTime;

        this.timer = setInterval(function() {
            
            var diff = new Date(new Date - startTime);

            ptr.h = ptr.timeToString(diff.getHours() - 1); //Compensation
            ptr.m = ptr.timeToString(diff.getMinutes());
            ptr.s = ptr.timeToString(diff.getSeconds());
            ptr.n  = ptr.timeToString(Math.floor(diff.getMilliseconds()/10)); 

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
        this.h = '00';
        this.m = '00';
        this.s = '00';
        this.n = '00';
        this.btn = "Start";
        this.lap = 0; 
        this.allLaps = [];
        $scope.enableBtn = false; 

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

        if(this.btn == "Start") {
            this.tick();
            this.btn = "Stop"
            $scope.btnReset=isDisabled = true;
        }
        else {
            this.stop();
            this.btn = "Start"            
        }
    };

    this.timeToString = function timeToString(num) {
        return (num < 10 ? "0" : "") + num;
    };

  });