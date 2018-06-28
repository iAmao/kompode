#!/usr/bin/env node

var program = require('commander');

program
  .version('0.1.0')
  .option('-db, --database', 'postgres')
  .parse(process.argv);
