import format from 'date-fns/format';

const fifteen = () => {
  const start = new Date('2018/9/8 15:00');
  const end = new Date('2018/9/9 02:00');

  const intervals = [];
  for (let d = start; d <= end; d.setMinutes(d.getMinutes() + 15)) {
    intervals.push(format(d, 'HH:mm'));
  }
  return intervals;
};

const parseTime = time => format(time, 'HH:mm');

export { fifteen, parseTime };
