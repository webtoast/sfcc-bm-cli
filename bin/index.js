#! /usr/bin/env node

// public modules
const yargs = require('yargs');

const usage = "Usage dw -i <input file> -a <number>";

const options = yargs.usage(usage)
.option("input", {
    alias: "i",
    type: "string",
    describe: "Input file",
    demandOption: true
})
.option("age", {
    alias: "a",
    type: "number",
    describe: "The age to search for in weeks",
    demandOption: true
})
.help(true)
.argv;

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

if (argv.input === undefined && argv.i === undefined) {
    yargs.showHelp();
    return;
}

const inputFile = argv.i || argv.input;
console.log(inputFile);
