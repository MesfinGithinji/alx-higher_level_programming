#!/usr/bin/node

const argc = process.argv.length;

const message = argc === 2 ? 'No argument' : argc === 3 ? 'Argument found' : 'Arguments found';

console.log(message);







