#!/usr/bin/node

/**
 * We are writing a script that prints the title of a Star Wars movie
 * where the episode number matches a given integer.
 * So first we need access to the request module so that we can use its methods
 */
const request = require('request');

/**
 * Next, we need to access the process.argv[] array
 * we need the 3rd CLI argument which is the movieID
 */
const movieId = process.argv[2];

/**
 * Next, we need to construct the url that will give us access to the API
 * We will concatenate it with the provided movieID
 */
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

/**
 * Next we need to use our request obj to make the GET request
 * to the specified URL this will make an API call for our specific movieID
 * We will also check for errors and if there are no errors print the title of the movie
 */
request(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const movieTitle = JSON.parse(body);
    console.log(movieTitle.title);
  }
});
