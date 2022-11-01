"use strict";

const BASE_URL = "https://deckofcardsapi.com/api";

/** Use the Deck of Cards API to draw a random card from a newly shuffled
 *  deck. Print the value in the console and the suit of the drawn card.
 */

async function drawCard() {
  const resp = await axios({ url: `${BASE_URL}/deck/new/draw/?count=1` });
  // console.log(resp.data)
  console.log(
    `${resp.data.cards[0].value.toLowerCase()} of ${resp.data.cards[0].suit.toLowerCase()}`
  );
}

drawCard();

/** Function to request a card from a newly shuffled deck. Then, make another
 *  request to get another card from the same deck. Print the values and suits
 *  of both cards that were drawn in the console.
 */

async function drawTwoCards() {
  const firstResp = await axios({ url: `${BASE_URL}/deck/new/draw/?count=1` });
  const deckID = firstResp.data.deck_id;
  const secondResp = await axios({
    url: `${BASE_URL}/deck/${deckID}/draw/?count=1`,
  });
  // console.log(resp.data)
  console.log([
    `${firstResp.data.cards[0].value.toLowerCase()} of ${firstResp.data.cards[0].suit.toLowerCase()}`,
    `${secondResp.data.cards[0].value.toLowerCase()} of ${secondResp.data.cards[0].suit.toLowerCase()}`,
  ]);
}

drawTwoCards();
