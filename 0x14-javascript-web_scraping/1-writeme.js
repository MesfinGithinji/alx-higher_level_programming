#!/usr/bin/node

// first, gain access to the 'fs' module
const fsObj = require('fs');

/**
 * next we access the second CLI argument and store it in a variable
 * this is will be the file we are writing into
 */
const fileName = process.argv[2];

/**
 * next we access the third CLI argument and store it in a variable
 * this we be the actual content that we will write into the file provided earlier
 */
const dataValue = process.argv[3];

/**
 * Next we use the writefile method and pass our data value as an argument to it
 * which we will then append into the file provided as a CLI argument as well
 * we will also be checking for any errors within the writing process
 */
fsObj.writeFile(fileName, dataValue, 'utf-8', (error, content) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(content);
});
