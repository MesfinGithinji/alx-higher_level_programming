#!/usr/bin/node

/**
 * We are writing a script that gets the contents of a webpage and stores it in a file.
 * So first we need access to the request module so that we can use its methods
 */
const request = require('request');

/**
 * Next we also need access to the fs module so that we can do some file
 * manipulation using its methods
 */
const fsObj = require('fs');

/**
 * Next, we need to access the process.argv[] array
 * we need the 3rd CLI argument which is the apiUrl
 */
const apiUrl = process.argv[2];

/**
 * we need the 4th CLI argument which is the name of the file
 * we are going to be writing into
 */
const fileName = process.argv[3];

/**
 * Next we need to use our request obj to make the GET request
 * to the specified URL
 * After our response is evaluated we will get back a response
 * The response body is what we will write into oit file and we will use
 * the file system object and the write file method to do this.
 */
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    fsObj.writeFile(fileName, body, 'utf-8', (error, data) => {
      if (error) {
        console.error(error);
      }
    });
  }
});
