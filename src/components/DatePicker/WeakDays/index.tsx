import { FC } from 'react';
import { weakDaysStr } from 'helpers/statics';
import { WeakDaysContainer, StyledWeakDay } from './WeakDays.styles';

const WeakDays: FC = () => (
  <WeakDaysContainer>
    {weakDaysStr.map((day: string) => (
      <StyledWeakDay key={day}>{day}</StyledWeakDay>
    ))}
  </WeakDaysContainer>
);

export default WeakDays;
