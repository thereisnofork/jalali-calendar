/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { timeKeyWords } from 'helpers/statics';

interface Props {
  $number: number;
  $state: string;
}

const StyledDayButton = styled.div<Props>`
  position: relative;
  width: 56px;
  height: 37px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: auto;
  border: 1px solid
    ${({ $state, theme }) =>
      $state === timeKeyWords.now ? theme.colors.blue : 'rgba(0, 0, 0, 0)'};

  background-color: ${({ $state }) =>
    $state === 'past'
      ? 'rgba(185, 185, 185, 0.2)'
      : $state === timeKeyWords.now
      ? '#EEF7FF'
      : '#fff'};

  box-shadow: ${({ $state }) =>
    $state === timeKeyWords.future && '0 0 6px rgba(0, 0, 0, 0.1) inset'};

  &::after {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
    font-size: 18px;
    content: '${({ $number }) => $number}';

    color: ${({ $state, theme }) =>
      $state === timeKeyWords.past
        ? theme.colors.gray
        : $state === timeKeyWords.now
        ? theme.colors.blue
        : theme.colors.gray};
  }

  &:hover {
    box-shadow: ${({ $state }) =>
      $state === timeKeyWords.future && '0 0 20px rgba(0, 0, 0, 0.1) inset'};

    border: ${({ $state }) =>
      $state === timeKeyWords.future && '1px solid #DDDDDD'};

    &::after {
      color: ${({ $state }) => $state === timeKeyWords.future && '#9A9A9A'};
    }
  }
`;

export { StyledDayButton };
