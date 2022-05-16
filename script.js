const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('sec');

const christmas = '25 Dec 2022';

function countdown(){
    const christmasDate = new Date(christmas);
    const currentDate = new Date();

    const milliseconds = christmasDate - currentDate;
    const days = Math.floor(milliseconds/(1000*60*60*24));
    const hours = Math.floor(milliseconds/(1000*60*60)) % 24;
    const minutes = Math.floor(milliseconds/(1000*60)) % 60;
    const seconds = Math.floor(milliseconds/1000) % 60;
    console.log(milliseconds);
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);