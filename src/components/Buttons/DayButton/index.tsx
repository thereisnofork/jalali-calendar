import { FC } from 'react';
import { StyledDayButton } from './DayButton.styles';

interface DayProps {
  number: number;
  state: string;
}

const DayButton: FC<DayProps> = ({ number, state }) => (
  <StyledDayButton $state={state} $number={number} />
);

export default DayButton;
