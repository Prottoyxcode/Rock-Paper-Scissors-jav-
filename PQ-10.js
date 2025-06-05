let userscore=0;
let computerscore=0;
let choices=document.querySelectorAll(".choice");
let pwin = document.getElementById("pwin");
let res = document.getElementById("result");
let cwin = document.getElementById("cwin");
let userName = document.getElementById("pname");

let user=prompt("Enter your name")
userName.innerText=user

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}

const playgame=(userChoice)=>{
    let result;
    const compChoice=genCompChoice();
    if(compChoice===userChoice){
        result=("It is a draw")
        res.style.backgroundColor="#EAF8BF"
    }

    else if(userChoice==="Scissor" && compChoice==="Paper" ||
            userChoice==="Rock" && compChoice==="Scissor"  ||
            userChoice==="Paper" && compChoice==="Rock"
    ){
        result=(`Congratulations. You have won! Computer chose ${compChoice}.`);
        userscore++;
        res.style.backgroundColor="#97DB4F"
    }
    else{
        result=(`You have lost. Computer chose ${compChoice}. Better luck next time!`);
        computerscore++;
        res.style.backgroundColor="#D90429"
    }

    pwin.innerText=userscore;
    cwin.innerText=computerscore;
    res.innerText=result;

}

choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        const userChoice = event.currentTarget.getAttribute("id"); 
        playgame(userChoice);
    })
});


