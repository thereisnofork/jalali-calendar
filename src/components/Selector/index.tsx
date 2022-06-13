/* eslint-disable react/require-default-props */
import { FC } from 'react';
import { ArrowButton } from 'components/Buttons';
import StyledSelector from './Selector.styles';

interface SelectorProps {
  options?: string[];
  selected: number;
  onChange: (arg0: number) => void;
}

const Selector: FC<SelectorProps> = ({ options, selected, onChange }) => {
  const decrease = () => {
    onChange(+1);
  };
  const increase = () => {
    onChange(-1);
  };

  return (
    <StyledSelector>
      <ArrowButton dir="left" onClick={decrease} />
      {options ? options[selected - 1] : selected}
      <ArrowButton dir="right" onClick={increase} />
    </StyledSelector>
  );
};

export default Selector;
