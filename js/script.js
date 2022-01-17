const clock = document.getElementById('myClock');

// The clock function - works as intended
setInterval(() => {
    const now = moment().format("hh:mm:ss a");
    const humanReadable = now;
    myClock.textContent = humanReadable
}, 1000);


// When the clock button is pushed, performs the following: 
// 1. Checks value of button and runs appropriate function, 2. Swaps text in Clock button
// Works as intended, but needs more work
function Clock() {
    var elem = document.getElementById("btnClock");
    if (elem.value=="Clock In") {
        clockIn();
    } else if (elem.value=="Clock Out") {
        clockOut();
    }
    punchClock();
    
    
}

// As the Clock function, but for the break button - works as intended but needs work
function Break() {
    var elem = document.getElementById("btnBreak");
    if (elem.value=="Start Break") {
        breakStart();
    } else if (elem.value=="End Break") {
        breakEnd();
    }
    breakClock();
}

// Swaps text in clock button - works as intended
function punchClock() {
    var elem = document.getElementById("btnClock");
    if (elem.value=="Clock Out") {
        elem.value = "Clock In";
    } else {
        elem.value = "Clock Out";
    }
}

// Swap the text on the break button - works as intended
function breakClock() {
    var elem = document.getElementById("btnBreak");
    if (elem.value=="End Break") {
        elem.value = "Start Break";
    } else {
        elem.value = "End Break";
    }
}

// Updates the Clock In time
function clockIn() {
    var elem = document.getElementById("btnClock");
    var clockedTime = document.getElementById("clockInTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
    timerStart();
    document.getElementById("btnBreak").style.display = "block";
}

// Updates the Clock Out time
function clockOut() {
    var elem = document.getElementById("btnClock");
    var clockedTime = document.getElementById("clockOutTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
    timerEnd();
    // console.log(localStorage.getItem("clockOutTime")-localStorage.getItem("clockInTime"));
    document.getElementById("btnBreak").style.display = "none";
}

// Updates start of Break time
function breakStart() {
    var elem = document.getElementById("btnBreak");
    var clockedTime = document.getElementById("breakStartTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
    timerBreakStart();
    document.getElementById("btnClock").style.display = "none";
}

// Updates End of Break time
function breakEnd() {
    var elem = document.getElementById("btnBreak");
    var clockedTime = document.getElementById("breakEndTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
    timerBreakEnd();
    document.getElementById("btnClock").style.display = "block";
    document.getElementById("btnBreak").style.display = "none";
}

// Ends the shift and saves the hours
function endShift() {
    let totalWorkedTime = localStorage.getItem("clockedTime") - localStorage.getItem("breakTime");

    let totalHrs = totalWorkedTime / 3600000;
    let hh = Math.floor(totalHrs);
  
    let totalMins = (totalHrs - hh) * 60;
    let mm = Math.floor(totalMins);
  
    let totalSecs = (totalMins - mm) * 60;
    let ss = Math.floor(totalSecs);
  
    let totalMss = (totalSecs - ss) * 100;
    let ms = Math.floor(totalMss);
  
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    var workedTimeTotal = (`${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`);
    document.getElementById("workedTimeDisplay").innerHTML = workedTimeTotal;
    document.getElementById("btnShift").style.display = "none";
    document.getElementById("btnClock").style.display = "inline";
    
}

// Stopwatch stuff below
function timerStart() {
    localStorage.setItem("clockInTime", Date.now());
}

function timerEnd() {
    localStorage.setItem("clockOutTime", Date.now());
    var clockedTime = localStorage.getItem("clockOutTime") - localStorage.getItem("clockInTime");
    localStorage.setItem("clockedTime",clockedTime)

    let diffInClockHrs = clockedTime / 3600000;
    let hh = Math.floor(diffInClockHrs);
  
    let diffInClockMin = (diffInClockHrs - hh) * 60;
    let mm = Math.floor(diffInClockMin);
  
    let diffInClockSec = (diffInClockMin - mm) * 60;
    let ss = Math.floor(diffInClockSec);
  
    let diffInClockMs = (diffInClockSec - ss) * 100;
    let ms = Math.floor(diffInClockMs);
  
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    var clockedTimeTotal = (`${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`);
    document.getElementById("clockedTimeDisplay").innerHTML = clockedTimeTotal;
    document.getElementById("btnClock").style.display = "none";
    document.getElementById("btnBreak").style.display = "none";
    document.getElementById("btnShift").style.display = "inline";
}

function timerBreakStart() {
    localStorage.setItem("breakStart", Date.now());
}

function timerBreakEnd() {
    localStorage.setItem("breakEnd", Date.now());
    var breakTime = localStorage.getItem("breakEnd") - localStorage.getItem("breakStart");
    localStorage.setItem("breakTime", breakTime)

    let diffInBreakHrs = breakTime / 3600000;
    let hh = Math.floor(diffInBreakHrs);
  
    let diffInBreakMin = (diffInBreakHrs - hh) * 60;
    let mm = Math.floor(diffInBreakMin);
  
    let diffInBreakSec = (diffInBreakMin - mm) * 60;
    let ss = Math.floor(diffInBreakSec);
  
    let diffInBreakMs = (diffInBreakSec - ss) * 100;
    let ms = Math.floor(diffInBreakMs);
  
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    var breakTime = (`${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`);
    document.getElementById("breakTimeDisplay").innerHTML = breakTime;
    document.getElementById("btnBreak").style.display = "none";
}

