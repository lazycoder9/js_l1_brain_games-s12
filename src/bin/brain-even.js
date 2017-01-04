#!/usr/bin/env node

import readlineSync from 'readline-sync';
import isOdd from '../isOdd';

console.log('Welcome to the Brain Games!\n');

const name = readlineSync.question('May I have your name? ');

isOdd(name);
