let options= document.querySelectorAll(".symbol"); /* rock, paper, scissor */
let userOpt= document.querySelector(".userOpt");
let user_hide= document.querySelector(".user_hide");
let user_rk= document.querySelector(".user_rk");
let user_pr= document.querySelector(".user_pr");
let user_sr= document.querySelector(".user_sr");

let compOpt= document.querySelector(".compOpt");
let comp_hide= document.querySelector(".comp_hide");


/* user choice */
options.forEach((option) => {
    option.addEventListener("click", () => {
        let userChoice= option.getAttribute("id");
        console.log("choices", userChoice);
        userDisplay(userChoice);
        compChoice();
    });
});
let userDisplay= (userChoice) => {
    if(userChoice==="rock"){
        user_hide.classList.remove("user_pr", "user_sr", "user_hide");
        user_hide.classList.add("user_rk");
    }
    else if(userChoice==="paper"){
        user_hide.classList.remove("user_rk", "user_sr", "user_hide");
        user_hide.classList.add("user_pr");
    }
    else{
        user_hide.classList.remove("user_rk", "user_pr", "user_hide");
        user_hide.classList.add("user_sr");
    }
}

/* computer choice */
let compChoice= ()=> {
    let random= Math.floor(Math.random()*3);
    console.log(random);
    compDisplay(random);
}
let compDisplay= (random) => {
    if(random=== 0){
        console.log("rock");
        comp_hide.classList.remove("comp_pr", "comp_sr", "comp_hide");
        comp_hide.classList.add("comp_rk");
    }
    else if(random=== 1){
        console.log("paper");
        comp_hide.classList.remove("comp_rk", "comp_sr", "comp_hide");
        comp_hide.classList.add("comp_pr");
    }
    else{
        console.log("scissor");
        comp_hide.classList.remove("comp_rk", "comp_pr", "comp_hide");
        comp_hide.classList.add("comp_sr");
    }
}
