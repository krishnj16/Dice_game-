let x = Math.random();
let random = Math.floor((x * 6) + 1);
let randice = "dice" + random + ".png";
// let psource = "c:/Users/Krishna/Desktop/Dice game/" + randice;  
let psource = randice;  

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", psource);

let y = Math.random();
let random2 = Math.floor((y * 6) + 1);
let randice2 = "dice" + random2 + ".png";
// let psource2 = "c:/Users/Krishna/Desktop/Dice game/" + randice2;  
let psource2 = randice2;  
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", psource2);

