#! /usr/bin/env node

// core modules
const fs = require('fs');

// public modules
const yargs = require('yargs');
const convert = require('xml-js');

// custom modules
const filters = require('../lib/filters');

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
    describe: "The age to search for in weeks. Defaults to 52",
    demandOption: false
})
.help(true)
.argv;

const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

if (argv.input === undefined && argv.i === undefined) {
    yargs.showHelp();
    return;
}

const inputFile = argv.i || argv.input;
const age = argv.a || argv.age || 52;
const saveDir = inputFile.split('/').slice(0, -1).join('/');

fs.readFile(inputFile, function(err, data) {
    const result = convert.xml2json(data, {compact: true, spaces: 4});
    runAudits(JSON.parse(result));
});

function runAudits(json) {
    const slots = json['slot-configurations']['slot-configuration']
    const filteredConfigs = filters.oldConfigs(slots, age);
    json['slot-configurations']['slot-configuration'] = filteredConfigs;
    let result = convert.js2xml(json, {compact: true, spaces: 4});
    fs.writeFileSync(`${saveDir}/configs.xml`, result, 'utf8');
}