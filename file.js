let drawNum= 0;
let winNum= 0;
let lostNum= 0;
let total= 0;

let options= document.querySelectorAll(".symbol"); /* rock, paper, scissor */
let userOpt= document.querySelector(".userOpt");
let user_hide= document.querySelector(".user_hide");
let user_rk= document.querySelector(".user_rk");
let user_pr= document.querySelector(".user_pr");
let user_sr= document.querySelector(".user_sr");

let compOpt= document.querySelector(".compOpt");
let comp_hide= document.querySelector(".comp_hide");

let drawCount= document.querySelector("#drawCount");
let compCount= document.querySelector("#compCount");
let userCount= document.querySelector("#userCount");
let totalCount= document.querySelector("#totalCount");
let btn= document.querySelector(".btn");

let text= document.querySelector(".text");

options.forEach((option) => {
    option.addEventListener("click", () => {
        let userChoice= option.getAttribute("id");
        userDisplay(userChoice); // displays user choice
        let compChoice= genCompChoice(); // displays computer choice
        compare(userChoice, compChoice); // actual logic
        total++;
        totalCount.innerText= total;
    });
});

/* user choice definition*/
let userDisplay= (userChoice) => {
    if(userChoice==="rock"){
        user_hide.classList.remove("user_pr", "user_sr", "user_hide");
        user_hide.classList.add("user_rk");
    }else if(userChoice==="paper"){
        user_hide.classList.remove("user_rk", "user_sr", "user_hide");
        user_hide.classList.add("user_pr");
    }else{
        user_hide.classList.remove("user_rk", "user_pr", "user_hide");
        user_hide.classList.add("user_sr");
    }
}

/* computer choice definition */
let genCompChoice= ()=> {
    let random= ["rock", "paper", "scissor"];
    let randomIdx= Math.floor(Math.random()*3);
    compDisplay(random[randomIdx]);
    return random[randomIdx];
}
let compDisplay= (random) => {
    if(random=== "rock"){
        comp_hide.classList.remove("comp_pr", "comp_sr", "comp_hide");
        comp_hide.classList.add("comp_rk");
    }else if(random=== "paper"){
        comp_hide.classList.remove("comp_rk", "comp_sr", "comp_hide");
        comp_hide.classList.add("comp_pr");
    }else{
        comp_hide.classList.remove("comp_rk", "comp_pr", "comp_hide");
        comp_hide.classList.add("comp_sr");
    }
}

//draw definition
let draw= ()=>{
    text.innerText="it's a Draw! Play Again";
    text.style.backgroundColor= "#03045e";
    drawCount.innerText= ++drawNum;
}
//Winner definition
let displayWinner= (userWin, userChoice, compChoice)=> {
    if(userWin){
        text.innerText= `YOU WON! your ${userChoice} beats ${compChoice}`;
        text.style.backgroundColor= "green";
        userCount.innerText= ++winNum;

    }else{
        text.innerText= `YOU LOST! ${compChoice} beats your ${userChoice}`;
        text.style.backgroundColor= "firebrick";
        compCount.innerText= ++lostNum;
    }
}
/* comparision */
let compare= (userChoice, compChoice)=> {
    if(userChoice=== compChoice){
        draw();
    }else{
            let userWin= true;
            if(userChoice=== "rock"){
            userWin= (compChoice=== "paper")? false: true;
        }
        else if(userChoice=== "paper"){
            userWin= (compChoice=== "rock")? true: false;
        }
        else{
            userWin= (compChoice=== "rock")? false: true;
        }
        displayWinner(userWin, userChoice, compChoice);
    }
}

/* RESET */
btn.addEventListener("click", () => {
    userCount.innerText= 0;
    compCount.innerText= 0;
    drawCount.innerText= 0;
    totalCount.innerText= 0;
    drawNum= 0;
    winNum= 0;
    lostNum= 0;
    total= 0;
})