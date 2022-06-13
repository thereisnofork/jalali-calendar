import styled from 'styled-components';

const WeakDaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 30px;
  direction: rtl;
`;

const StyledWeakDay = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 18px;
  text-align: center;
`;

export { WeakDaysContainer, StyledWeakDay };
