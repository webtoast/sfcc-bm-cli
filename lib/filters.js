const oldConfigs = (data, enteredAge) => {
    const filteredConfigs = data.filter((config) => {
        let schedule = config.schedule;
        function getWeeksDiff(startDate, endDate) {
            const msInWeek = 1000 * 60 * 60 * 24 * 7;
            return Math.round(Math.abs(endDate - startDate) / msInWeek);
        };
        if(schedule) {
            if(schedule['end-date']) {
                let age = getWeeksDiff(
                    Date.now(),
                    Date.parse(schedule['end-date']['_text'])
                );
                if (age > enteredAge) {
                    return config;
                }
            }
        };
    });
    return filteredConfigs;
}

exports.oldConfigs = oldConfigs;