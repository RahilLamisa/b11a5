document.getElementById('color').addEventListener('click',function(event){
    // console.log('okay')
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    // console.log(red,green,blue)
    let randomColor = 'rgb('+red + ',' + green + ',' + blue + ')'
    document.body.style.backgroundColor=randomColor;
    // console.log(randomColor)
    event.preventDefault()
})
