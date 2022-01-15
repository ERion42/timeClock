const clock = document.getElementById('myClock');

// The clock function
setInterval(() => {
    // console.log('Time is updated')
    const now = moment().format("hh:mm:ss a");
    const humanReadable = now;
    // console.log(humanReadable);

    myClock.textContent = humanReadable
}, 1000);


function Clock() {
    var elem = document.getElementById("btnClock");
    if (elem.value=="Clock In") {
        clockIn();
    } else if (elem.value=="Clock Out") {
        clockOut();
    }
    punchClock();
    
}

function Break() {
    var elem = document.getElementById("btnBreak");
    if (elem.value=="Start Break") {
        breakStart();
    } else if (elem.value=="End Break") {
        breakEnd();
    }
    breakClock();
}

function punchClock() {
    var elem = document.getElementById("btnClock");
    if (elem.value=="Clock Out") {
        elem.value = "Clock In";
    } else {
        elem.value = "Clock Out";
    }
}

function breakClock() {
    var elem = document.getElementById("btnBreak");
    if (elem.value=="End Break") {
        elem.value = "Start Break";
    } else {
        elem.value = "End Break";
    }
}

function clockIn() {
    var elem = document.getElementById("btnClock");
    var clockedTime = document.getElementById("clockInTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
}

function clockOut() {
    var elem = document.getElementById("btnClock");
    var clockedTime = document.getElementById("clockOutTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
}

function breakStart() {
    var elem = document.getElementById("btnBreak");
    var clockedTime = document.getElementById("breakStartTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
}

function breakEnd() {
    var elem = document.getElementById("btnBreak");
    var clockedTime = document.getElementById("breakEndTime");
    const now = moment().format("hh:mm a");
    const humanReadable = now;
    clockedTime.textContent = humanReadable;
}