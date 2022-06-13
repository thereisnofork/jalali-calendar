/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { DayButton } from 'components/Buttons';
import { timeKeyWords } from 'helpers/statics';
import { DayButtonsContainer } from './DaysGread.styles';

interface DayType {
  date: number;
  isToday?: boolean;
  isPast?: boolean;
  isFuture?: boolean;
}

interface DaysGreadProps {
  days: DayType[];
}

const DaysGread: FC<DaysGreadProps> = ({ days }) => (
  <DayButtonsContainer>
    {days.map((day: DayType, index: number) => (
      <DayButton
        state={
          (day.isToday && timeKeyWords.now) ||
          (day.isPast && timeKeyWords.past) ||
          (day.isFuture && timeKeyWords.future) ||
          ''
        }
        number={day.date}
        key={index}
      />
    ))}
  </DayButtonsContainer>
);

export default DaysGread;
