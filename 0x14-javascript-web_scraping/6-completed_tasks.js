#!/usr/bin/node

/**
 * We are writing a script that computes the number of tasks completed by user id.
 * So first we need access to the request module so that we can use its methods
 */
const request = require('request');

/**
 * Next, we need to access the process.argv[] array
 * The argument we need is the API URL
 */
const apiUrl = process.argv[2];
/**
 * Next we need to use our request obj to make the GET request
 * to the specified URL
 * After our request is evaluated we will get back a response
 * The response needs to parsed into a JSON format
 * We will then loop through the data in our object and get the respective tasks using the IDs
 */
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);
  const userTaskCount = {};

  data.forEach((result) => {
    if (result.completed) {
      const userId = result.userId;
      userTaskCount[userId] = (userTaskCount[userId] || 0) + 1;
    }
  });

  console.log(userTaskCount);
});
/**
 * we initialized an empty object userTaskCount to store
 * user IDs as keys and the number of tasks completed by each user as their respective values.
*/
