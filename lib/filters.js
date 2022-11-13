// custom modules
const utils = require('./utils');

const oldConfigs = (data, enteredAge) => {
    const filteredConfigs = data.filter((config) => {
        let schedule = config.schedule;
        if(schedule && schedule['end-date']) {
            let age = utils.getWeeksDiff(
                Date.now(),
                Date.parse(schedule['end-date']['_text'])
            );
            if (age > enteredAge) {
                return config;
            };
        };
    });
    return filteredConfigs;
}

exports.oldConfigs = oldConfigs;