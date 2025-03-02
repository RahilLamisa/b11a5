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


const button = document.getElementById('completed1').addEventListener('click',function(event){
    alert('Board updated successfully!');
    document.getElementById('completed1').classList.add('bg-gray-200');
    let adding = document.getElementById('add1').innerText;
    let convertedAdding = parseInt(adding)
    let sum = convertedAdding + 1;
    document.getElementById('add1').innerText=sum;
    document.getElementById('add1').classList.add('font-bold');

    let removing = document.getElementById('dlt1').innerText;
    let convertedRemoving = parseInt(removing);
    let remove = convertedRemoving - 1;
    document.getElementById('dlt1').innerText= remove;
    document.getElementById('dlt1').classList.add('font-bold');
    let taskName = 'Fix Mobile Button Issue' ;
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let AmPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let time = hours + ':' + minutes + ':' + seconds + ' ' + AmPm
    
    document.getElementById('c1').innerText= 'You have completed the task' + ' ' + taskName + ' ' + 'at' + ' ' + time;
    document.getElementById('c1').classList.add('bg-blue-50');
    if(remove === 0){
        alert('Congratulation!!! You have completed all the current task')
    }
})

const button2 = document.getElementById('completed2').addEventListener('click',function(event){
    alert('Board updated successfully!');
    document.getElementById('completed2').classList.add('bg-gray-200');
    let adding = document.getElementById('add1').innerText;
    let convertedAdding = parseInt(adding)
    let sum = convertedAdding + 1;
    document.getElementById('add1').innerText=sum;
    document.getElementById('add1').classList.add('font-bold');

    let removing = document.getElementById('dlt1').innerText;
    let convertedRemoving = parseInt(removing);
    let remove = convertedRemoving - 1;
    document.getElementById('dlt1').innerText= remove;
    document.getElementById('dlt1').classList.add('font-bold');
    let taskName = 'Add Dark Mode' ;
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let AmPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let time = hours + ':' + minutes + ':' + seconds + ' ' + AmPm
    
    document.getElementById('c2').innerText= 'You have completed the task' + ' ' + taskName + ' ' + 'at' + ' ' + time;
    document.getElementById('c2').classList.add('bg-blue-50');
    if(remove === 0){
        alert('Congratulation!!! You have completed all the current task')
    }
})


const button3 = document.getElementById('completed3').addEventListener('click',function(event){
    alert('Board updated successfully!');
    document.getElementById('completed3').classList.add('bg-gray-200');
    let adding = document.getElementById('add1').innerText;
    let convertedAdding = parseInt(adding)
    let sum = convertedAdding + 1;
    document.getElementById('add1').innerText=sum;
    document.getElementById('add1').classList.add('font-bold');

    let removing = document.getElementById('dlt1').innerText;
    let convertedRemoving = parseInt(removing);
    let remove = convertedRemoving - 1;
    document.getElementById('dlt1').innerText= remove;
    document.getElementById('dlt1').classList.add('font-bold');
    let taskName = 'Optimize  Home page ' ;
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let AmPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let time = hours + ':' + minutes + ':' + seconds + ' ' + AmPm
    
    document.getElementById('c3').innerText= 'You have completed the task' + ' ' + taskName + ' ' + 'at' + ' ' + time;
    document.getElementById('c3').classList.add('bg-blue-50');
    if(remove === 0){
        alert('Congratulation!!! You have completed all the current task')
    }
})


const button4 = document.getElementById('completed4').addEventListener('click',function(event){
    alert('Board updated successfully!');
    document.getElementById('completed4').classList.add('bg-gray-200');
    let adding = document.getElementById('add1').innerText;
    let convertedAdding = parseInt(adding)
    let sum = convertedAdding + 1;
    document.getElementById('add1').innerText=sum;
    document.getElementById('add1').classList.add('font-bold');

    let removing = document.getElementById('dlt1').innerText;
    let convertedRemoving = parseInt(removing);
    let remove = convertedRemoving - 1;
    document.getElementById('dlt1').innerText= remove;
    document.getElementById('dlt1').classList.add('font-bold');
    let taskName = 'Add new emoji 🤲' ;
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let AmPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let time = hours + ':' + minutes + ':' + seconds + ' ' + AmPm
    
    document.getElementById('c4').innerText= 'You have completed the task' + ' ' + taskName + ' ' + 'at' + ' ' + time;
    document.getElementById('c4').classList.add('bg-blue-50');
    if(remove === 0){
        alert('Congratulation!!! You have completed all the current task')
    }
})


const button5 = document.getElementById('completed5').addEventListener('click',function(event){
    alert('Board updated successfully!');
    document.getElementById('completed5').classList.add('bg-gray-200');
    let adding = document.getElementById('add1').innerText;
    let convertedAdding = parseInt(adding)
    let sum = convertedAdding + 1;
    document.getElementById('add1').innerText=sum;
    document.getElementById('add1').classList.add('font-bold');

    let removing = document.getElementById('dlt1').innerText;
    let convertedRemoving = parseInt(removing);
    let remove = convertedRemoving - 1;
    document.getElementById('dlt1').innerText= remove;
    document.getElementById('dlt1').classList.add('font-bold');
    let taskName = 'Integrate OpenAI API' ;
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let AmPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let time = hours + ':' + minutes + ':' + seconds + ' ' + AmPm
    
    document.getElementById('c5').innerText= 'You have completed the task' + ' ' + taskName + ' ' + 'at' + ' ' + time;
    document.getElementById('c5').classList.add('bg-blue-50');
    if(remove === 0){
        alert('Congratulation!!! You have completed all the current task')
    }
})


const button6 = document.getElementById('completed6').addEventListener('click',function(event){
    alert('Board updated successfully!');
    document.getElementById('completed6').classList.add('bg-gray-200');
    let adding = document.getElementById('add1').innerText;
    let convertedAdding = parseInt(adding)
    let sum = convertedAdding + 1;
    document.getElementById('add1').innerText=sum;
    document.getElementById('add1').classList.add('font-bold');

    let removing = document.getElementById('dlt1').innerText;
    let convertedRemoving = parseInt(removing);
    let remove = convertedRemoving - 1;
    document.getElementById('dlt1').innerText= remove;
    document.getElementById('dlt1').classList.add('font-bold');
    let taskName = 'Improve Job searching ' ;
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let AmPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let time = hours + ':' + minutes + ':' + seconds + ' ' + AmPm
    
    document.getElementById('c6').innerText= 'You have completed the task' + ' ' + taskName + ' ' + 'at' + ' ' + time;
    document.getElementById('c6').classList.add('bg-blue-50');
    if(remove === 0){
        alert('Congratulation!!! You have completed all the current task')
    }

})

document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('historyAdd').innerText='';
})



document.getElementById('discover').addEventListener('click',function(){
    window.location.href='./discover.html'
})
