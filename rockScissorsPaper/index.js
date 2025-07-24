
const choices=["rock","scissors","paper"];

const Player = document.querySelector(".player");
const Computer = document.querySelector(".computer");
const Winner = document.querySelector(".winner");

function PlayGame(personChoice){

    const compChoice=choices[Math.floor(Math.random()*3)];
     if(compChoice===personChoice){
        Player.innerHTML=`Person: ${personChoice}`;
        Computer.innerHTML=`Computer: ${compChoice}`;
        Winner.innerHTML="DRAW AGAIN☺️"


     }

     else if ((personChoice==="scissors" && compChoice==="paper")
               || (personChoice==="rock" && compChoice==="scissors") ||
                (personChoice==="paper" && compChoice==="rock")){
        Player.innerHTML=`Person: ${personChoice}`;
        Computer.innerHTML=`Computer: ${compChoice}`;
        Winner.innerHTML="You win🫵"


     }
     else{
        Player.innerHTML=`Person: ${personChoice}`;
        Computer.innerHTML=`Computer: ${compChoice}`;
        Winner.innerHTML="Computer win🧑🏿‍💻";
     }
    
    }