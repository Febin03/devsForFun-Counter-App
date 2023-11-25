var number = 0;

function increment(){
    number=number+1;
    var text=document.getElementById("counter");     
    text.innerHTML = number;
}

function decrement(){
    number = number-1;
    var text=document.getElementById("counter");
    text.innerHTML = number;
}
