#!/usr/bin/node

/**
 * We are writing a script that will display the status code of a GET request.
 * So first we need access to the request module so that we can use its methods
 */
const request = require('request');

/**
 * Next, we need to access the process.argv[] array
 * we need the 3rd CLI argument which is thee URL we will use to make the GET request
 */
const url = process.argv[2];

/**
 * Next we need to use our request obj to make the GET request
 * to the specified URL passed as a CLI argument
 * We will also check for errors and if there are no errors print the status code
 */
request(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
