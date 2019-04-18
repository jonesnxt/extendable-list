import React from 'react';
import styled from 'styled-components';

import GlobalContext from 'GlobalContext';

// Container, title, and "Nothing on your list..." text
import Container from './components/Container';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import NoContent from './components/NoContentLabel';

// List components
import List from './components/List';
import ListItem from './components/ListItem';
import DeleteButton from './components/DeleteButton';

// form components
import TextInput from './components/TextInput';
import FormArea from './components/FormArea';
import Button from './components/Button';

// Build the page
class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            form: {},
        };
    }

    componentDidMount() {
        window.fetch(this.context.backend.ListItems, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({ items: data.items });
        });
    }

    submitForm() {
        this.addItem(this.state.form);
        this.setState({ form: {} });
    }

	render() {
		return (
            <Wrapper>
                <Container>
                    <Title>{this.context.general.headerText}</Title>
                    <FormArea>
                        {/* Put you form elements below */}
                        <TextInput
                            placeholder="Item 1"
                            value={this.state.form.item1 || ''}
                            onChange={(e) => this.setState({ form: { ...this.state.form, item1: e.target.value } })}
                        />
                        <TextInput
                            placeholder="Item 2"
                            value={this.state.form.item2 || ''}
                            onChange={(e) => this.setState({ form: { ...this.state.form, item2: e.target.value } })}
                        />
                        <Button onClick={() => this.submitForm()}>Submit</Button>
                    </FormArea>

                    {this.state.items.length === 0 && <NoContent>Nothing on your list...</NoContent>}
                    <List>
                        {this.state.items.map((item, i) => (
                            <ListItem key={i}>
                                <div>
                                    {Object.entries(item).map(([key, val]) => (
                                        <div><strong>{key}:</strong> {val}</div>
                                    ))}
                                </div>
                                <DeleteButton onClick={() => this.deleteItem(i)}>❌</DeleteButton>
                            </ListItem>
                        ))}
                    </List>
            </Container>
          </Wrapper>
		);
	}

    addItem(newItem) {
        // Add locally
        console.log(`Adding item "${newItem}"`);
        const items = this.state.items;
        items.push(newItem);
        this.setState({ items }, () => this.updateDatabase());
    }

    deleteItem(index) {
        console.log('Removing item at index', index);
        const items = this.state.items;
        items.splice(index, 1);
        this.setState({ items }, () => this.updateDatabase());
    }

    updateDatabase() {
        window.fetch(this.context.backend.SaveItems, {
            method: 'post',
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: this.state.items,
            }),
        });
    }
}

TestPage.contextType = GlobalContext;

export default TestPage;
