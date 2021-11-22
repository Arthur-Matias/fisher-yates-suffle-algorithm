import Card from './card';
import getDeck from './GetDeck';
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;
const deck = getDeck();

function suffle(){
  let j:number, tempCard:Card;
  
  for (let i = deck.length-1; i > 0; i--) {
    j = Math.floor(Math.random() * (i+1));
    tempCard = deck[j];
    deck[j] = deck[i];
    deck[i] = tempCard;
  }
  // app.innerText = deck.join()
  renderElements()
}
function renderElements(){
  app.style.height = "100%";
  app.style.width = "100%";
  app.style.display = "grid"
  app.style.gridTemplateColumns = `repeat(${Math.floor(Math.sqrt(deck.length)/2)}, 1fr)`;

  for (let i = 0; i < deck.length; i++) {
    app.appendChild(deck[i].render())
  }
}
window.onload = suffle;