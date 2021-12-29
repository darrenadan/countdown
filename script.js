var newYear = new Date(' jan 1, 2022 00:00:00').getTime();  //nagset ng date, .getTime means access to standard time.

//1. first function
function counter(){
    let dateCurrent =  new Date().getTime(),                //Variables defined with let, cannot be Redeclared.
        timeLeft = newYear - dateCurrent;                   // get the timeleft between today and new year

     let second = 1000,               // calculated the milliseconds in a year. note:1 second is equal to 1000 millisecond
        minute  = second * 60,
        hour    = minute * 60,
        day     = hour * 24;


// input of function addZero(num, count)...num for numbers calculated, count for the number of characters
    let dayLeft     =  addZero(Math.floor(timeLeft/ day), 3),                  // 3 means three characters
        hourLeft    =  addZero(Math.floor((timeLeft % day)/ hour), 2),          // 2 means two characters
        mintueLeft  =  addZero(Math.floor((timeLeft % hour)/minute), 2),       // 2 means two characters
        secondLeft  =  addZero(Math.floor((timeLeft % minute)/ second), 2);     // 2 means two characters

    function addZero (num, count) {
        return num.toString().padStart(count, "0");   //(num.toString() : converts a number to a string)...(count for no. of characters, 0 means it will start to 0 example. change 0 to "x" and see the difference)
    }

    document.getElementById("day").innerHTML = dayLeft;     // change the  innerHTML of the id's
    document.getElementById("hour").innerHTML = hourLeft;
    document.getElementById("minute").innerHTML = mintueLeft;
    document.getElementById("second").innerHTML = secondLeft;

}
  /*. JavaScript can be executed in time-intervals. setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.This is called timing events.The setInterval method takes a function(counter) to execute, and a interval in milliseconds(1000). */
setInterval(counter, 1000);
