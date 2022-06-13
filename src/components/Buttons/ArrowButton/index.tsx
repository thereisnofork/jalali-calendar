import { FC } from 'react';
import { StyledArrowIcon, StyledArrowButton } from './ArrowButtons.styles';

interface ArrowProps {
  dir: string;
  onClick: () => void;
}

const ArrowButton: FC<ArrowProps> = ({ dir, onClick }) => (
  <StyledArrowButton onClick={onClick}>
    <StyledArrowIcon $dir={dir} />
  </StyledArrowButton>
);

export default ArrowButton;
