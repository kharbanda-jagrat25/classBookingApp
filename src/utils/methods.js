import moment from 'moment';

export function randomIntegerGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function convertDateIntoString(date) {
  return date?.toDateString();
}

function getFormattedTime(date, format = 'hh:mm a ') {
  return moment(date).format(format);
}
export function getTimeRange(startDate, endDate) {
    return `${getFormattedTime(startDate)}- ${getFormattedTime(endDate)}`
}
