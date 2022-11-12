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