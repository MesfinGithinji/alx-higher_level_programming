#!/usr/bin/node

const args = process.argv;
const newArgs = parseInt(args[2]);
console.log(newArgs !== Number && isNaN(newArgs) ? 'Not a number' : `My number: ${newArgs}`);
