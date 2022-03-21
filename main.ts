class card {
  public Term : string
  public Definition : string
  public Confidence : number

  constructor(Term : string, Definition : string) {
      this.Term = Term
      this.Definition = Definition
      this.Confidence = 0
  }

  setConfidence(i : number) {
    this.Confidence = i;
    if(this.Confidence > 10)this.Confidence = 10;
    if(this.Confidence < 0)this.Confidence = 0;
  }
}

var activeSet : Array<card> = [new card("hablar", "to speak"), new card("pensar", "to think"), new card("mirar", "to watch")]
var displayed;

function showNext() {
  
  displayed = activeSet[0];
  console.log(displayed.Confidence);
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].textContent = displayed.Term;
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].style.backgroundColor = ("rgb( " + (255 - displayed.Confidence * 255/10) + "," + (displayed.Confidence*255/10) + ", 0)");
  activeSet = activeSet.slice(1)
  //randomize
  shuffleArray(activeSet)
  activeSet.push(displayed)
}

function flip() {
  if (document.getElementById("card").textContent == displayed.Definition) {
    document.getElementById("card").textContent = displayed.Term
  } else {
    document.getElementById("card").textContent = displayed.Definition
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

function goToMenu(){
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].style.display = "none"
  /*x.style.display = "block";
  x.style.display = "none";*/
}

function goToSetCreation(){
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].style.display = "none"
  activeSet.forEach(makeCard());
}

function makeCard(item : card, index : number){
  let temp = document.createElement(HTMLElement);
  temp.id = "card_" + index;
  temp.class = "card_set";
  temp.style.display = "block";
  temp.style.margin = "0";
  temp.style.position = "absolute";
  temp.style.left = (20+20*index%4)+"%";
  temp.style.top = (20+20*index/4)+"%";
  temp.style.transform = "translate(-50%, -50%)";
  temp.style.background = "rgb(210, 216, 218)";
  temp.style.padding = "200px 220px";
  temp.textContent = item.Term;
  document.appendChild(temp);
}

function goToPlaySet(){
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].style.display = "block";
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

