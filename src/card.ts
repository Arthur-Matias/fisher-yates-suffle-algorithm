export default class Card{

    suit: string;
    value: string;

    constructor(suit: string, value: string){
        this.suit = suit;
        this.value = value;
    }
    render():HTMLDivElement{
        let card = document.createElement("div");
        card.style.display = "flex";
        card.style.flexDirection = "column"
        card.style.border = "1px solid black"
        card.style.padding = "1rem 2rem"
        card.innerHTML = `
            <h2 style="font-size: 2rem; color: ${this.getColor(this.suit)};align-self: flex-end;">${this.getSuit(this.suit)}</h2>
            <h1 style="align-self: center; margin: 1rem 0; font-weight: bolder;">${this.value}</h1>
            <h2 style="font-size: 2rem; color: ${this.getColor(this.suit)};align-self: flex-start;">${this.getSuit(this.suit)}</h2>
        `
        return card
    }
    getSuit(suit:string){
        let currSuit: string = "";
        switch(suit){
            case "hearts":
                currSuit = "♥";
                break;
            case "clubs":
                currSuit = "♣";
                break;
            case "diamonds":
                currSuit = "♦";
                break;
            case "spades":
                currSuit = "♠"
                break;
        }

        return currSuit;
    }
    getColor(suit:string){
        let currColor: string = "";
        switch(suit){
            case "hearts":
                currColor = "red";
                break;
            case "clubs":
                currColor = "black";
                break;
            case "diamonds":
                currColor = "red";
                break;
            case "spades":
                currColor = "black"
                break;
        }

        return currColor;
    }
}