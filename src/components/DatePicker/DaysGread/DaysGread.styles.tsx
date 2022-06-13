import styled from 'styled-components';

const DayButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 15px;
  direction: rtl;
  min-height: 300px;
`;

export { DayButtonsContainer };
