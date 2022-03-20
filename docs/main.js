var card = /** @class */ (function () {
    function card(Term, Definition) {
        this.Term = Term;
        this.Definition = Definition;
    }
    return card;
}());
var activeSet = [new card("hablo", "i speak"), new card("说", "i speak")];
var displayed;
function showNext() {
    displayed = activeSet[0];
    document.getElementsByClassName("card")[0].textContent = displayed.Term;
    activeSet = activeSet.slice(1);
    //randomize
    shuffleArray(activeSet);
    activeSet.push(displayed);
}
function flip() {
    if (document.getElementById("card").textContent == displayed.Definition) {
        document.getElementById("card").textContent = displayed.Term;
    }
    else {
        document.getElementById("card").textContent = displayed.Definition;
    }
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
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    switch (event.key) {
        case "ArrowDown":
            // code for "down arrow" key press.
            break;
        case "ArrowUp":
            // code for "up arrow" key press.
            flip();
            break;
        case "ArrowLeft":
            // code for "left arrow" key press.
            break;
        case "ArrowRight":
            // code for "right arrow" key press.
            showNext();
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);
