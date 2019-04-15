import styled from 'styled-components';

export default styled.div`
  margin: 0;
  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: bold;
  padding: 12px;
  height: 100vh;
`;