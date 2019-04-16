import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.style.textColor};
  border-bottom: 1px solid ${({ theme }) => theme.style.textColor};
  &:focus {
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.style.textColor};
  }
`;

export default class NewItemInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
        };
    }

    render() {
        return (
            <Input
                placeholder={this.props.placeholder}
                value={this.state.currentValue}
                onChange={(e) => this.setState({ currentValue: e.target.value })}
                onKeyUp={(e) => {
                    if (e.keyCode === 13) {
                        this.props.onAddItem(this.state.currentValue);
                        this.setState({ currentValue: '' });
                    }
                }}
            />
        );
    }
}
