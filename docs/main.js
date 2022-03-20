"use strict";
exports.__esModule = true;
var express = require("express");
var card_1 = require("./card");
var app = express();
var port = 3000;
var activeSet = [new card_1["default"]("hablo", "i speak"), new card_1["default"]("说", "i speak")];
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
function showNext() {
    //activeSet = [new card("hablo", "i speak"), new card("说", "i speak")];
    console.log(activeSet);
    var displayed = new card_1["default"]("hablo", "i speak");
    document.getElementsByClassName("card")[0].textContent = displayed.Term;
    activeSet = activeSet.slice(1);
    //randomize
    shuffleArray(activeSet);
    activeSet.push(displayed);
}
function flip() {
    document.getElementById("card").textContent = activeSet[activeSet.length - 1].Definition;
    document.getElementById("card").style.backgroundColor = "rgb(50, 255, 50)";
}
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function goToMenu() {
    document.getElementById("card").style.width = "500px";
    document.getElementsByClassName("card")[0].style.display = "none";
    /*x.style.display = "block";
    x.style.display = "none";*/
}
function goToSetCreation() {
    document.getElementsByClassName("card")[0].style.display = "none";
}
function goToPlaySet() {
    document.getElementsByClassName("card")[0].style.display = "block";
    showNext();
}
