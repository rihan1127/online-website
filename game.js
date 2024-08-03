let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#comp-score");



const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const optionIdx = Math.floor(Math.random()*3);
    return option[optionIdx];
};

const drawgame=()=>{
    console.log("draw game ");
    msg.innerText="Draw Game ,Play Again";
    msg.style.backgroundColor="blue";
};

const showWinner = (Userwin,userchoice,compchoice)=>{

    if(Userwin){
        userscore++;
        uscore.innerText=userscore;
        msg.innerText=`You win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{

        compscore++;
        cscore.innerText=compscore;
        msg.innerText=`You lose ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }

};
const playgame=(userchoice)=>{

    console.log("user-choice :",userchoice);

    const compchoice = genCompChoice();
    console.log("computer choice :",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }
    else{

        let Userwin = true;

        if(userchoice==="rock"){

            //paper scissor
            Userwin=compchoice==="paper"? false : true;
        }
        else if(userchoice==="paper"){
            //rock scissor
            Userwin=compchoice==="scissor"?false:true;
        }
        else{
            //paper scissor
            Userwin=compchoice==="rock"?false:true;
        }
        showWinner(Userwin,userchoice,compchoice);
    }
};


choices.forEach((choice) => {
    //console.log(choice); 
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        //console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
});
