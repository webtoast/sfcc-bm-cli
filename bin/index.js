#! /usr/bin/env node

// core modules
const fs = require('fs');

// public modules
const yargs = require('yargs');
const convert = require('xml-js');

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

fs.readFile(inputFile, function(err, data) {
    const result = convert.xml2json(data, {compact: true, spaces: 4});
    fs.writeFileSync('data/congs.json', result, 'utf8');
});
