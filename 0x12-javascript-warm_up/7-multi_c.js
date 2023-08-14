#!/usr/bin/node

const args = process.argv;
const message = 'C is fun';
const newArgs = parseInt(args[2]);

if (newArgs !== Number && isNaN(newArgs)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < newArgs; i++) {
    console.log(message);
  }
}
