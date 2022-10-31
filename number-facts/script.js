"use strict";

const BASE_URL = "http://numbersapi.com";
const FAV_NUM = 23;
const NUMS = [30, 11, 23, 3, 5];

/** Get fact about a favorite number from numbersapi and display in DOM */

async function getNumFact() {
  const resp = await axios({ url: `${BASE_URL}/${FAV_NUM}?json` });

  $("#1").append(`<p>${resp.data.text}</p>`);
}


/** Get facts about numbers from numbersapi and display in DOM */

async function getNumFacts() {
  const resp = await axios({ url: `${BASE_URL}/${NUMS}?json` });

  for(let num in resp.data) {
    $("#2").append(`<p>${resp.data[num]}</p>`);
  }
}

/** Get 4 facts about a favorite number from numbersapi and display in DOM */

async function getFourNumFacts() {
  // let count = 0;

  // while(count < 4) {
  //   const resp = await axios({ url: `${BASE_URL}/${FAV_NUM}?json` });
  //   $("#3").append(`<p>${resp.data.text}</p>`);
  //   count++;
  // }

  let promises = [];
  let count = 0;

  while(count < 4) {
    const promise = axios({ url: `${BASE_URL}/${FAV_NUM}?json` });
    promises.push(promise);
    count++;
  }

  let results = await Promise.allSettled(promises);

  for(let result of results) {
    $("#3").append(`<p>${result.value.data.text}</p>`);
  }
}

getNumFact();
getNumFacts();
getFourNumFacts();
