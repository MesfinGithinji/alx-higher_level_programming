#!/usr/bin/node

const args = process.argv[2];

if (!parseInt(args)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < args; i++) {
    let j = 0;
    let pattern = ' ';

    while (j < args) {
      pattern += 'x';
      j++;
    }
    console.log(pattern);
  }
}
