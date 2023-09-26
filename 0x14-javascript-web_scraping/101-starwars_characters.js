#!/usr/bin/node

/**
 * We are writing a script that prints all characters of a Star Wars movie:
 * So first we need access to the request module so that we can use its methods
 */
const request = require('request');

/**
 * Next, we need to access the process.argv[] array
 * The argument we need is the Movie ID - example: 3 = “Return of the Jedi”
 */
const movieId = process.argv[2];

/**
 * Next, we need to construct the url that will give us access to the API
 * We will concatenate it with the provided movieID
 */
const url = `https://swapi.dev/api/films/${movieId}/`;

let characters = [];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  characters = data.characters;
  getCharacters(0);
});

const getCharacters = (index) => {
  if (index === characters.length) {
    return;
  }

  request(characters[index], (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const characterData = JSON.parse(body);
    console.log(characterData.name);
    getCharacters(index + 1);
  });
};
