/*Mario Kart Item Box Simulator*/

//Probability tables
document.getElementById("one-to-six").addEventListener("click", oneToSix);
document.getElementById("seven-to-twelve").addEventListener("click", sevenToTwelve);

//Make the tables visble
function oneToSix() {
    document.getElementById("left").style.visibility = "visible";
    document.getElementById("right").style.visibility = "hidden";
}

function sevenToTwelve() {
    document.getElementById("right").style.visibility = "visible";
    document.getElementById("left").style.visibility = "hidden";
}

//Clicking image
document.getElementById("item-box").addEventListener("click", generateItems);

//Setting values to 0
let bananaCount = 0;
let greenShellCount = 0;
let starCount = 0;
let goldenMushroomCount = 0;
let bulletBillCount = 0;

//Loop Listeners
document.getElementById("fivetimes").addEventListener("click", fiveTimes);
document.getElementById("addtenBills").addEventListener("click", add10Bills);
document.getElementById("input").addEventListener("click", userGenerated);

//Generating random values
function generateItems() {
    //Input position
    let position = Number(document.getElementById("position-box").value);

    //Random number genetator
    let randomNum = Math.random()
    randomNum = randomNum * 100
    console.log(randomNum);

    if (1 <= position && position <= 12) {
        //Position within 1-6
        if (position <= 6) {
            //Banana
            if (randomNum <= 45) {
                bananaCount = bananaCount + 1;
                document.getElementById("banana-count").innerHTML = bananaCount;
                document.getElementById("items").innerHTML += '<img src = "images/banana.png">'
                //Green Shell
            } else if (randomNum <= 80) {
                greenShellCount = greenShellCount + 1;
                document.getElementById("green-shell-count").innerHTML = greenShellCount;
                document.getElementById("items").innerHTML += '<img src = "images/Green shell.png">'
                //Star
            } else if (randomNum <= 95) {
                starCount = starCount + 1;
                document.getElementById("star-count").innerHTML = starCount;
                document.getElementById("items").innerHTML += '<img src = "images/Star.png">'
                //Golden Mushroom
            } else if (randomNum <= 99) {
                goldenMushroomCount = goldenMushroomCount + 1;
                document.getElementById("golden-mushroom-count").innerHTML = goldenMushroomCount;
                document.getElementById("items").innerHTML += '<img src = "images/Golden Mushroom.png">'
                //Bullet Bill
            } else if (randomNum <= 100) {
                bulletBillCount = bulletBillCount + 1;
                bulletBillLoopCount = bulletBillLoopCount + 1;
                document.getElementById("bullet-bill-count").innerHTML = bulletBillCount;
                document.getElementById("items").innerHTML += '<img src = "images/Bullet Bill.png">'
            }

        } else if (position <= 12) {
            //Golden Mushroom
            if (randomNum <= 35) {
                goldenMushroomCount = goldenMushroomCount + 1;
                document.getElementById("golden-mushroom-count").innerHTML = goldenMushroomCount;
                document.getElementById("items").innerHTML += '<img src = "images/Golden Mushroom.png">'
                //Bullet Bill
            } else if (randomNum <= 65) {
                bulletBillCount = bulletBillCount + 1;
                bulletBillLoopCount = bulletBillLoopCount + 1;
                document.getElementById("bullet-bill-count").innerHTML = bulletBillCount;
                document.getElementById("items").innerHTML += '<img src = "images/Bullet Bill.png">'
                //Star
            } else if (randomNum <= 90) {
                starCount = starCount + 1;
                document.getElementById("star-count").innerHTML = starCount;
                document.getElementById("items").innerHTML += '<img src = "images/Star.png">'
                //Green Shell
            } else if (randomNum <= 95) {
                greenShellCount = greenShellCount + 1;
                document.getElementById("green-shell-count").innerHTML = greenShellCount;
                document.getElementById("items").innerHTML += '<img src = "images/Green shell.png">'
                //Banana
            } else if (randomNum <= 100) {
                bananaCount = bananaCount + 1;
                document.getElementById("banana-count").innerHTML = bananaCount;
                document.getElementById("items").innerHTML += '<img src = "images/banana.png">'
            }
        }
    } else {
        position = 0;
    }
}

//Loop for 5 times
function fiveTimes() {
    for (generated = 0; generated < 5; generated = generated + 1) {
        generateItems();
    }
}
//Bullet Bill is Generated 10 times
function add10Bills() {
    for (bulletBillLoopCount = 0; bulletBillLoopCount < 10; bulletBillLoopCount = bulletBillLoopCount + 0) {
        generateItems();
    }
}

//User Input Loop
function userGenerated() {
    let userInput = Number(document.getElementById("user-input").value);
    for (inputGenerated = 0; inputGenerated < userInput; inputGenerated = inputGenerated + 1) {
        generateItems();
    }
}


//Display values
document.getElementById("banana-count").innerHTML = bananaCount;
document.getElementById("green-shell-count").innerHTML = greenShellCount;
document.getElementById("star-count").innerHTML = starCount;
document.getElementById("golden-mushroom-count").innerHTML = goldenMushroomCount;
document.getElementById("bullet-bill-count").innerHTML = bulletBillCount;
