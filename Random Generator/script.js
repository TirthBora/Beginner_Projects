//Random Number Generator


const myButton=document.getElementById("mybutton");
const myLabel=document.getElementById("mylabel");
const min=1;
const max=6;
let randomNum;
myButton.onclick=function(){
    randomNum=Math.floor(Math.random()*max)+min;
    myLabel.textContent=randomNum;
}