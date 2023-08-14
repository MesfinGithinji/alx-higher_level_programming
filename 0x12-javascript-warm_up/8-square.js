#!/usr/bin/node

const args = process.argv;
const newArgs = parseInt(args[2]);
let pattern = '';

if (newArgs !== Number && isNaN(newArgs)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < newArgs; i++) {
    for (let x = 0; x < newArgs; x++) {
      pattern += 'x';
    }
    pattern += '\n';
  }
}
console.log(pattern);
