import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
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

// this component keeps track of its own state and also passes it off to
// the main data store. This is so we can store the name and value in the
// data store while only defining the name once in 'this.props.name'
// This might get replaced with a cleaner structure eventually
class TextInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    componentWillReceiveProps(newProps) {
        if(newProps.isClear) {
            this.setState({ value: '' })
        }
    }

    render() {
        return (
            <StyledInput
                placeholder={this.props.name}
                value={this.state.value}
                onChange={(e) => {
                    // set our internal state and update the external data store
                    this.setState({ value: e.target.value });
                    this.props.onChange({ name: this.props.name, value: e.target.value });
                }}
                onKeyDown={(e) => {
                    // key code for enter is 13, check for it to sumbit the form
                    if(e.keyCode === 13) {
                        this.props.onSubmit();
                    }
                }}
            />
        );
    }
}

export default TextInput;
