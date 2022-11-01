"use strict";

const BASE_URL = "https://deckofcardsapi.com/api";


/** Use the Deck of Cards API to draw a random card from a newly shuffled
 *  deck. Print the value in the console and the suit of the drawn card.
 */

async function drawCard() {
  const resp = await axios ({url: `${BASE_URL}/deck/new/draw/?count=1`});
  console.log(`${resp.data.cards[0].value} of ${resp.data.cards[0].suit.toLowerCase()}`);
  // console.log(resp.data);
}

drawCard()