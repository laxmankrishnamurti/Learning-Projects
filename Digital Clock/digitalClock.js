const displayTime = document.getElementById('displayTime');
const displayDate = document.getElementById('displayDate');

setInterval( () => {
    let currentTime = new Date();
    displayTime.innerHTML = currentTime.toLocaleTimeString(undefined ,{timeZone: 'Asia/Kolkata'});
    displayDate.innerHTML = currentTime.toLocaleDateString();
},1000)