document.body.style.backgroundColor="lightyellow";
let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const rndInd= Math.floor(Math.random()*3); //options.length mane sei *3 hi 
    return options[rndInd];
};

const drawGame = ()=>{
    console.log("Game was a Draw!");
    msg.innerText=" It's a draw !";
    document.body.style.backgroundColor="lightyellow";

};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin)
    {
        console.log("you win!");
        userScore++;
        document.querySelector("#userScore").innerText=userScore;
        msg.innerText=`You Win !, Your ${userChoice} beats ${compChoice}`;
        document.body.style.backgroundColor="yellowgreen";

    }
    else{
        console.log("you lose!");
        compScore++;
        document.querySelector("#compScore").innerText=compScore;
        msg.innerText=`You lose !, Your ${compChoice} lost ${userChoice}`;
        document.body.style.backgroundColor="red";

    }
};

const playGame= (userChoice) => {
    console.log("user choice is", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice is", compChoice);


    if(userChoice === compChoice)
    {
        //draw
        drawGame();

    }
    else{
        let userWin=true;
        if(userChoice ==="rock"){
           /* //draw condition already lekha heichi ta rock ta habani dita case possible

            //scissors 
            if(compChoice==="scissors"){
                userScore++;
                userWin=true;
            }

            //paper
            if(compChoice==="paper"){
                compScore++;
                userWin=false;
            }*/

            //in one line

            userWin = compChoice==="paper" ? false : true; //paper hele hariba nahele jitiba

        }
       else if(userChoice==="paper"){
            userWin = compChoice==="scissors" ? false : true;// scissors hele haraba nahele jitibba
        }

       else /*scissors achi user pakhare*/{
            userWin = compChoice==="rock" ? false : true; // rock hele haraba nahele jitibba
        }

        showWinner(userWin, userChoice, compChoice);
    }
    

};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});