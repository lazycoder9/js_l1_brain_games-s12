#!/usr/bin/env node
// @flow

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n');

const name = readlineSync.question('What is your name? ');
console.log(`Hello, ${name}!`);
