function getTime(){
    const now = new Date();
    let hour = now.getHours();
    let hourPostFix = "AM";
    let minutes = now.getMinutes();
    if(hour >= 12){
        hour -= 12;
        hourPostFix = "PM";
    }
    if(hour === 0){
        hour = 12;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    return hour + ':' + minutes + ' ' + hourPostFix;
}

var dt = document.getElementsByClassName('taskbar-time')[0];

dt.innerHTML = getTime();

const interval = setInterval(() => {
    dt.innerHTML = getTime();
}, 1000);