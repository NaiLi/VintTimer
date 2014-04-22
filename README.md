VintTimer
=========

An application for a stop watch, constructed in JS using Angular.js

**StopWatch controller:**   
Contains variables for run time (hours, seconds, minutes and milliseconds), information about finished laps, button properties, and functions. 

Running the watch
The watch is calculated by finding the time difference between current time and the start time, to ensure that the clock is ticking at the same pace as time. 
The hours passed are calculated from the difference in millisecond. Minutes and seconds passed from specific functions for the js Date class. The Date function for getting hours is not compatible when calculating difference between date objects, since it does not use UTC time. 

Calculating lap times
Lap times are calculated by finding the time difference between current time and eighter start time or last time a lap time was requested. 
Each lap time is stored in a string array and displayed, most previous time first. 


**StopWatch view:**  
Displays the stop watch in format hh:mm:ss:nn, buttons (start and stop on the same button) and lap times, latest lap presented first.


*Created 2014 by Linnéa Nåbo*
