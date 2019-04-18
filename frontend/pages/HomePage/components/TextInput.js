import styled from 'styled-components';

const TextInput = styled.input`
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.style.textColor};
    outline: none;
    margin-top: 8px;

    :focus {
        border-bottom: 2px solid ${({ theme }) => theme.style.textColor};
    }
`;

export default TextInput;
