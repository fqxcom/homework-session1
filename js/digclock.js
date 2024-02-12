/* ------PARTNERS ------*/
//Create a time function
function currentTime() {
var d= new Date (); //Get current date
var hr= d.getHours(); //Get current hours
var min= d.getMinutes(); //Get current minutes
var sec= d.getSeconds(); //Get current seconds
var ampm; //Declare empty variable to store AM or PM

// Add 0 to single digits for seconds
if (sec < 10) {
    sec = "0" + sec;
}
//Add 0 to single digits for minutes
if (min < 10) {
    min = "0" + min;
}
var gmtOffset = 0; 
var gmtHr = utchr + gmtOffset;

// Determine AM or PM string
if (hr == 12) {
    ampm = "PM"; //Set to PM
} else if ( hr >12 ) {
    hr -= 12; //Deduct 12 from hours greater than 12(military time)
    ampm = "PM"; //Set to PM
} else {
    ampm = "AM"; //Set to AM
}

timeDiff = hr - gmtHr;
adjTimeDiff = Math.abs(timeDiff);
switch (adjTimeDiff) {
    default: timeZone = "PT";    
}
// Assemble time format to display
var localTime = hr + ":" + min + ":" + sec + " " + ampm;
var gmtTime = gmtHr + ":" + min + ":" + sec + " GMT";
var formattedTime = localTime + " " + timeZone;

// Display local time, GMT time, adjusted time difference, and time zone
document.getElementById("clock").innerText = formattedTime; //adding time
}
// Run time data function every 1 second
setInterval(currentTime, 1000);
// Initial run of time data function
currentTime();
var utchr = d.getUTCHours(); // Get current Greenwich Mean Time (GMT)
var timeDiff; //To store time difference between GMT hour and Local hour
var adjTimeDiff; //To store time difference converted to positive number
var timeZone; //To store the 4 time zones (PT, MT,CT,ET)