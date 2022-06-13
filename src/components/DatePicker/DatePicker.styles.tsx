import styled from 'styled-components';

const StyledDatePicker = styled.div`
  padding: 20px 40px 60px;
  max-width: 660px;
  border-radius: 10px;
  box-shadow: -4px 4px 30px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;

  section#top {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  section#bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export { StyledDatePicker };
