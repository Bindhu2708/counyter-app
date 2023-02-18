var a=0;
let value=document.getElementById('value');

function increment(){
    a=a+1;
    
    let value=document.getElementById('value');
    value.innerHTML=a;
}

function decrement(){
    a=a-1;
    let value=document.getElementById('value');
    value.innerHTML=a;
    
}

let inc = document.getElementById('increment');
inc.addEventListener('click',increment);

let dec = document.getElementById('decrement');
dec.addEventListener('click',decrement);
