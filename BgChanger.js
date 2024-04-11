let container = document.getElementById('container');
let green = document.getElementById('green');
let red = document.getElementById('red');
let black = document.getElementById('black');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');

green.addEventListener('click',function(){
    container.style.backgroundColor = "green";
});
red.addEventListener('click',function(){
    container.style.backgroundColor = "red";
});
black.addEventListener('click',function(){
    container.style.backgroundColor = "black";
});
yellow.addEventListener('click',function(){
    container.style.backgroundColor = "yellow";
});
blue.addEventListener('click',function(){
    container.style.backgroundColor = "blue";
});