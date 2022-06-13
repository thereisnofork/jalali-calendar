import styled from 'styled-components';

interface Props {
  $dir?: string;
}

const StyledArrowIcon = styled.div<Props>`
  width: 10px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  transform: ${({ $dir }) =>
    $dir === 'left'
      ? 'translateY(300%) rotate(40deg)'
      : 'translate(10%) rotate(220deg)'};

  &:before {
    content: '';
    position: absolute;
    transform: translate(-42%, -5px) rotate(-83deg);
    width: 10px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

const StyledArrowButton = styled.div`
  cursor: pointer;
  z-index: 100;
  width: 25px;
  height: 25px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { StyledArrowIcon, StyledArrowButton };
