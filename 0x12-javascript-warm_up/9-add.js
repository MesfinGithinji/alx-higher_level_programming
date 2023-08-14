#!/usr/bin/node

const [a, b] = process.argv.slice(2);

function add(a, b) {
    return a + b;
}

const ans = add(a, b);
console.log(ans);

