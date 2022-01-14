const clock = document.getElementById('myClock');

// The clock function
setInterval(() => {
    // console.log('Time is updated')
    const now = moment().format("hh:mm:ss a");
    const humanReadable = now;
    console.log(humanReadable);

    myClock.textContent = humanReadable
}, 1000);