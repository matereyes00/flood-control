export const groupByMonth = (events) => {
    return events.reduce((accumulator, currentEvent) => {
        const parts = currentEvent.date.split(' ');
        const monthYear = parts[0] + ' ' + parts[2]; // "July" + " " + "2025"
        if (!accumulator[monthYear]) {
            accumulator[monthYear] = [];
        }
        accumulator[monthYear].push(currentEvent);
        return accumulator;
    }, {});
};