import styled from 'styled-components';

export default styled.li`
    font-weight: normal;
    padding: 8px;
    margin: 3px 0;
    display: flex;
    align-items: center;
    background-color: rgba(255,255,255,0.1);
    border-radius: 2px;

    &:hover {
        background-color: rgba(255,255,255,0.2);
    }
`;