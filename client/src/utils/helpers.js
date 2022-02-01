import moment from 'moment';

export const timeFormat = (time) => {
  const timeFormate = moment(time).format('HH:mm a | MMMM Do');
  return timeFormate;
};
