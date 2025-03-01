document.getElementById('color').addEventListener('click',function(event){
    // console.log('okay')
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    // console.log(red,green,blue)
    let randomColor = 'rgb('+red + ',' + green + ',' + blue + ')'
    document.body.style.backgroundColor=randomColor;
    // console.log(randomColor)
    event.preventDefault();
})
let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let currentDay = days[today.getDay()]; 
let currentMonth = months[today.getMonth()];
let currentDate = today.getDate(); 
let currentYear = today.getFullYear();

let formattedDate = currentDay + ',' + '\n'+ ' '+ currentMonth + ' ' + currentDate + ' ' + currentYear ;
document.getElementById("date").innerText = formattedDate;

