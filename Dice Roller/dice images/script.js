//Dice Roller Program

function rollDice(){
    const numofdice=document.getElementById("numofdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimages=document.getElementById("diceimages");
    const values=[];
    const images=[];
    for(let i=0;i<numofdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }
    diceresult.textContent=`dice: ${values.join(`,`)}`;
    diceimages.innerHTML=images.join(``);//use innerHTML when you want to insert HTML . Now we want to insert Images of dices in the JS . 
}