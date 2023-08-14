#!/usr/bin/node

const args = process.argv;
const newArgs = parseInt(args[2]);

if (newArgs !== Number && isNaN(newArgs)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < newArgs; i++) {
    let pattern = '';
    for (let x = 0; x < newArgs; x++) {
      pattern += 'x';
    }
    console.log(pattern);
  }
}
