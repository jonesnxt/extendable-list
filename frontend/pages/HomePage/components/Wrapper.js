import styled from 'styled-components';

export default styled.div`
  margin: 0;
  background: ${({ theme }) => theme.style.backgroundColor};
  color: ${({ theme }) => theme.style.textColor};
  height: 100vh;
  width: 100%;
`;