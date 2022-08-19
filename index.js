var randomNumber1 = (Math.random() * 6) + 1; //random number between 1 and 7
randomNumber1 = Math.floor(randomNumber1);
var randomNumber2 = (Math.random()*6) + 1;
randomNumber2 = Math.floor(randomNumber2);
document.querySelector(".dice1img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".dice2img").setAttribute("src", "images/dice" + randomNumber2 + ".png");
if (randomNumber1 > randomNumber2){
    document.querySelector(".playerWinsOne").classList.remove("hidden");
}

else if (randomNumber1 < randomNumber2){
    document.querySelector(".playerWinsTwo").classList.remove("hidden");
}

else{
    document.querySelector(".tie").classList.remove("hidden");
}
document.querySelector("h1").classList.add("hidden");