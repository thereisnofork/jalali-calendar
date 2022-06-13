import { FC, useState } from 'react';
import { monthsStr } from 'helpers/statics';
import Selector from 'components/Selector';
import WeakDays from 'components/DatePicker/WeakDays';
import moment, { JUnitOfTime } from 'moment-jalaali';
import { StyledDatePicker } from './DatePicker.styles';
import DaysGread from './DaysGread';

const DatePicker: FC = () => {
  // state of month picker for calendar wich can be changed by selector component
  const [selectedMonth, setSelectedMonth] = useState(
    +moment().clone().format('jMM')
  );

  // state of year for calendar wich can be changed by selector component
  const [selectedYear, setSelectedYear] = useState(
    +moment().clone().format('jYYYY')
  );

  // global date in calendar
  const date = moment(
    `${selectedYear}/${selectedMonth}/${moment().clone().format('jDD')}`
  );

  // todays date for compare to calendar date
  const nowDate = moment().clone().format('jYYYY/jMM/jDD');

  // select first day of calendar month (witch could include previous month) for start gread
  const startDay = date
    .clone()
    .startOf('month')
    .startOf('week')
    .subtract('days', 2);

  // select first day of calendar month (witch could include previous month) for start gread
  const endDay = date.clone().endOf('month').endOf('week').subtract('days', 2);

  const day = startDay;
  const calendar = [];

  // nested array of days for calendar days in each month
  while (day.isBefore(endDay, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone())
    );
  }

  // array of object for representing days of month and state of each day
  const calculatedDate = calendar.flat().map((dayItem) => ({
    date: +dayItem.clone().format('DD'),
    isPast: dayItem.clone().isBefore(nowDate),
    isToday: dayItem.clone().isSame(nowDate),
    isFuture: dayItem.clone().isAfter(nowDate),
  }));

  // helper function to get 'jYear'/'jMonth' and 'add'/'subtract' calculate next value
  const changeTime = (value: 'add' | 'subtract', payload: JUnitOfTime) => {
    const amunctPicker = () =>
      value === 'add'
        ? date.clone().add(1, payload)
        : date.clone().subtract(1, payload);

    return +amunctPicker().format(payload === 'jYear' ? 'yyyy' : 'MM');
  };

  // add or subtract months
  const montChangeHandler = (change: number) => {
    setSelectedMonth(changeTime(change > 0 ? 'add' : 'subtract', 'jMonth'));
  };

  // add or subtract years
  const yearChangeHandler = (change: number) => {
    setSelectedYear(changeTime(change > 0 ? 'add' : 'subtract', 'jYear'));
  };

  return (
    <StyledDatePicker>
      <section id="top">
        <Selector selected={selectedYear} onChange={yearChangeHandler} />

        <Selector
          options={monthsStr}
          selected={selectedMonth}
          onChange={montChangeHandler}
        />
      </section>

      <section id="bottom">
        <WeakDays />
        <DaysGread days={calculatedDate} />
      </section>
    </StyledDatePicker>
  );
};

export default DatePicker;
