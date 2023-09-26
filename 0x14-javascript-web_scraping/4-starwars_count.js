#!/usr/bin/node

/**
 * We are writing a script that prints the number of movies where
 * the character “Wedge Antilles” is present.
 * So first we need access to the request module so that we can use its methods
 */
const request = require('request');

/**
 * Next, we need to access the process.argv[] array
 * we need the 3rd CLI argument which is the apiUrl
 */
const apiUrl = process.argv[2];

/**
 * Next we need to use our request obj to make the GET request
 * to the specified URL this will make an API call for our specific movie
 * Wedge Antilles is character ID 18 we must use this ID for filtering the result of the API
 * We will also check for errors and if there are no errors print the title of the movie
 */
request(apiUrl, function (error, response, body) {
  if (!error) {
    const titles = JSON.parse(body).results;
    let titleFound = 0;

    for (const movie of titles) {
      for (const character of movie.characters) {
        if (character.endsWith('/18/')) {
          titleFound++;
          break;
        }
      }
    }
    console.log(titleFound);
  }
});

/**
 * We will be parsing the data we get as a response , into JSON format
 * Also we will do a count of the Number of movies where the title Wedges Antilles is found
 */
