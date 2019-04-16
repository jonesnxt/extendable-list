import styled from 'styled-components';

export default styled.div`
  margin: 0;
  background: ${({ theme }) => theme.style.backgroundColor};
  color: ${({ theme }) => theme.style.textColor};
  font-weight: bold;
  padding: 12px;
  height: 100vh;
`;