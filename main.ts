import * as express from "express";
import {card} from "./card";
const app = express()
const port = 3000
var activeSet : Array<card> = [new card("hablo", "i speak"), new card("说", "i speak")]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function showNext() {
  //activeSet = [new card("hablo", "i speak"), new card("说", "i speak")];
  console.log(activeSet);
  let displayed = new card("hablo", "i speak");
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].textContent = displayed.Term
  activeSet = activeSet.slice(1)
  //randomize
  shuffleArray(activeSet)
  activeSet.push(displayed)
}

function flip() {
  document.getElementById("card").textContent = activeSet[activeSet.length - 1].Definition
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

function goToMenu(){
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].style.display = "none"
  /*x.style.display = "block";
  x.style.display = "none";*/
}

function goToSetCreation(){
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].style.display = "none"
  
}

function goToPlaySet(){
  (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>)[0].style.display = "block";
  showNext();
}