import styled from 'styled-components';

const StyledSelector = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.black};
`;

export default StyledSelector;
