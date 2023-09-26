#!/usr/bin/node
// here we are executing the scripts using the local Node interpreter

/**
 * Next we use require to make sure we have imported the js module fs
 * fs -file system - provides an API for working with the file system
 * so here we will store in a variable an object that represents the fs (file system) module
 * This object is what will give us access to fs modules eg readfile
 *
 */
const fsObj = require('fs');

/**
 * Next we need to access the process.argv[] array this will give us access to CLI args
 * This is where we will find the name of the file passed as a CLI argument together with the script
 * process.argv[0] is the path to the Node.js executable
 * process.argv[1] is the path to the script being run(0-readme.js)
 * process.argv[2] is expected to be the name of the file to be read.
 */
const fileName = process.argv[2];

/**
 * Next we will use the fs object which we stored in fs_obj to now read the file contents
 * We will use the method readFile which takes a few params
 * param1 is File which is The name of the file to be read
 * param2 is the character encoding of the file in our case its utf-8
 */
fsObj.readFile(fileName, 'utf-8', (error, content) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(content);
});
/**
 * (error , content) is a callback function that will be executed when the file has been read.
 * error: If an error occurs during the file reading
 * content: If the file is successfully read, this parameter will contain the contents of the file as a string.
 * The purpose of the if statement is to check whether an error occurred during the file reading process
 * console.log(content) only executes if there was no error. File content will be printed here
 */
