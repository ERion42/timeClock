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
}

// Updates the Clock Out time
function clockOut() {
    var elem = document.getElementById("btnClock");
    var clockedTime = document.getElementById("clockOutTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
}

// Updates start of Break time
function breakStart() {
    var elem = document.getElementById("btnBreak");
    var clockedTime = document.getElementById("breakStartTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
}

// Updates End of Break time
function breakEnd() {
    var elem = document.getElementById("btnBreak");
    var clockedTime = document.getElementById("breakEndTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
}