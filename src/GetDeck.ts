import Card from "./card"
function getDeck(){
    let suits = ["clubs", "diamonds", "hearts", "spades"];
    let cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    const deck:Card[] = []
    for (let i = 0; i < suits.length; i++) {
        const suit = suits[i];
        for (let j = 0; j < cards.length; j++) {
            const card = cards[j];
            deck.push(new Card(suit, card))
        }
    }
    return deck;
}
export default getDeck;