const getWeeksDiff = (startDate, endDate) => {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.round(Math.abs(endDate - startDate) / msInWeek);
};

exports.getWeeksDiff = getWeeksDiff;