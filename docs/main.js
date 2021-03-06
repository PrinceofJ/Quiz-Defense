var card = /** @class */ (function () {
    function card(Term, Definition) {
        this.Term = Term;
        this.Definition = Definition;
        this.Confidence = 0;
    }
    card.prototype.setConfidence = function (i) {
        this.Confidence = i;
        if (this.Confidence > 10)
            this.Confidence = 10;
        if (this.Confidence < 0)
            this.Confidence = 0;
    };
    return card;
}());
var container = document.getElementById("container");
var activeSet = [new card("hablar", "to speak"), new card("pensar", "to think"), new card("mirar", "to watch")];
var displayed;
function showNext() {
    displayed = activeSet[0];
    console.log(displayed.Confidence);
    document.getElementsByClassName("card")[0].textContent = displayed.Term;
    document.getElementsByClassName("card")[0].style.backgroundColor = ("rgb( " + (255 - displayed.Confidence * 255 / 10) + "," + (displayed.Confidence * 255 / 10) + ", 0)");
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
    document.getElementsByClassName("Title")[0].style.display = "block";
    /*x.style.display = "block";
    x.style.display = "none";*/
    removeAllChildNodes(container);
}
function goToSetCreation() {
    document.getElementsByClassName("card")[0].style.display = "none";
    document.getElementsByClassName("Title")[0].style.display = "none";
    container.style.setProperty('--grid-rows', "" + Math.floor(activeSet.length));
    container.style.setProperty('--grid-cols', "4");
    removeAllChildNodes(container);
    activeSet.forEach(makeCard);
}
function makeCard(item, index) {
    var cell = document.createElement("div");
    cell.innerText = item.Term + "\n" + item.Definition;
    container.appendChild(cell).className = "grid-item";
}
function goToPlaySet() {
    document.getElementsByClassName("card")[0].style.display = "block";
    document.getElementsByClassName("Title")[0].style.display = "none";
    showNext();
    removeAllChildNodes(container);
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
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
            displayed.Confidence -= 1;
            showNext();
            break;
        case "ArrowRight":
            // code for "right arrow" key press.
            displayed.Confidence += 1;
            showNext();
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);
