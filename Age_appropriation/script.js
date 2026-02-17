const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const result=document.getElementById("resultElement");
let age=0;

mysubmit.onclick=function(){
    age=mytext.value;
    age=Number(age);
    if(age>=18)
        result.textContent="You are old enough to open this site.";
    else if(age<18&&age>0)
        result.textContent="You must be 18+ to enter this site.";
    else
       result.textContent="Your age can't be negative.";
}