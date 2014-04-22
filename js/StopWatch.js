angular.module('StopWatch', [])
  .controller('stopwatchController', function($scope) {
    $scope.h = '00';
    $scope.m = '00';
    $scope.s = '00';
    $scope.n = '00';
    this.btn = "START";
    this.lap = 0;
    this.allLaps = new Array(); //String array for all lap times
    this.midTime = new Date();
    //Sets if the buttons are disabled
    $scope.enableBtn = false; 
    $scope.enableReset = true;
    $scope.enableLap = true;  

    /*
    function: tick() 
    Calculates difference in time from start to current time,
    to guarantee no lagging.  
    */
    this.tick = function tick() {

        var ptr = this; 

        //Buttons
        $scope.enableLap = false; 

        var startTime = new Date();
        this.midTime = new Date();
 

        this.timer = setInterval(function() {
            
            var diff = new Date(new Date - startTime);

            $scope.h = ptr.timeToString(Math.floor(diff.getTime() / 3600000));
            $scope.m = ptr.timeToString(diff.getMinutes());
            $scope.s = ptr.timeToString(diff.getSeconds());
            $scope.n = ptr.timeToString(Math.floor(diff.getMilliseconds()/10)); 

            $scope.$apply();

        }
        , 10);
    };

    /*
    function: stop()
    Stops running the setInterval function in tick()
    */
    this.stop = function stop() {
        clearInterval(this.timer);

        //Buttons
        $scope.enableLap = true; 
        $scope.enableReset = false;
        $scope.enableBtn = true;  
    };

    /*
    function: lapTime() 
    Calculates difference in time from last btn or start to current time,
    to guarantee no lagging.  
    */    
    this.lapTime = function lapTime() {
        
        this.lap++; //Add lap

        var diff = new Date(new Date - this.midTime);
                   
        var h = this.timeToString(Math.floor(diff.getTime() / 3600000));
        var m = this.timeToString(diff.getMinutes());
        var s = this.timeToString(diff.getSeconds());
        var n = this.timeToString(Math.floor(diff.getMilliseconds()/10)); 

        this.allLaps.unshift("Lap " + this.lap + ": " + h + ":" + m + //Places new lap time in the beginning of the array
            ":" + s + ":" + n);

        this.midTime = new Date();

    };

    /*
    function: change()
    Sets what the start/stop button should do
    */
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

    /*
    function: reset()
    Resets all
    */
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

    /*
    function: timeToString(num)
    returns a number to match format nn
    */
    this.timeToString = function timeToString(num) {
        return (num < 10 ? "0" : "") + num;
    };

  });