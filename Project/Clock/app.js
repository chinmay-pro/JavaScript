let span = document.getElementById('time');
let date;
let date1;
let time;
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
setInterval(() => {
     date = new Date();
     time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
     date1 = date.toLocaleDateString(undefined ,options);
    span.innerHTML = time + "<br>on " + date1; 
}, 1000);
