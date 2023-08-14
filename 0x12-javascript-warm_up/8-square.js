#!/usr/bin/node

const args = parseInt(process.argv[2]);
let pattern = '';

if (isNaN(args)) {
    console.log('Missing size');
  } else {
    for (let i = 0; i < args; i++) {
      for (let x = 0; x < args; x++) {
        pattern += 'x';
      }
      if (i !== args - 1) {
        pattern += '\n';
      }
    }
    console.log(pattern);
  }



