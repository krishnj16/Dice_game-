// function rollDice(){
// let x = Math.random();
// let random = Math.floor((x * 6) + 1);
// let randice = "dice" + random + ".png";
// // let psource = "c:/Users/Krishna/Desktop/Dice game/" + randice;  
// let psource = randice;  

// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", psource);

// let y = Math.random();
// let random2 = Math.floor((y * 6) + 1);
// let randice2 = "dice" + random2 + ".png";
// // let psource2 = "c:/Users/Krishna/Desktop/Dice game/" + randice2;  
// let psource2 = randice2;  
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", psource2);

// let winnerText = "";
//     if (random > random2) {
//         winnerText = "🚩 Player 1 Wins!";
//     } else if (random > random1) {
//         winnerText = "Player 2 Wins! 🚩";
//     } else {
//         winnerText = "It's a Draw!";
//     }

//     // Update the heading with the winner
//     document.querySelector("h1").textContent = winnerText;
// }
function rollDice() {
    let x = Math.random();
    let random = Math.floor((x * 6) + 1);
    let randice = "dice" + random + ".png";
    let psource = randice;  

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", psource);

    let y = Math.random();
    let random2 = Math.floor((y * 6) + 1);
    let randice2 = "dice" + random2 + ".png";
    let psource2 = randice2;  

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", psource2);

    // Correcting the winner display logic
    let winnerText = "";
    if (random > random2) {
        winnerText = "🚩 Player 1 Wins!";
    } else if (random2 > random) {
        winnerText = "Player 2 Wins! 🚩";
    } else {
        winnerText = "It's a Draw!";
    }

    // Updating the heading correctly
    document.querySelector("h1").innerText = winnerText;
}

// Ensure event listener is added only once
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").onclick = rollDice;
});
