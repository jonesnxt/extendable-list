import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 16px;
  border: none;
  border-top: 1px solid black;
  padding: 12px 8px;
  &:focus {
      outline: none;
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
