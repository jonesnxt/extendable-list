import React from 'react';
import styled from 'styled-components';

// Container, title, and "Nothing on your list..." text
import Container from './components/Container';
import Title from './components/Title';
import NoContent from './components/NoContentLabel';

// List components
import List from './components/List';
import ListItem from './components/ListItem';
import DeleteButton from './components/DeleteButton';

// "Add item" text box
import NewItemInput from './components/NewItemInput';

// Build the page
export default class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        window.fetch(this.props.backend.ListItems, {
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

	render() {
		return (
			<Container backgroundColor={this.props.backgroundColor} color={this.props.foregroundColor}>
		        <Title>{this.props.headerText}</Title>
                {this.state.items.length === 0 && <NoContent>Nothing on your list...</NoContent>}
                <List>
                    {this.state.items.map((item, i) => (
                        <ListItem key={i}>
                            {item}
                            <DeleteButton onClick={() => this.deleteItem(i)}>❌</DeleteButton>
                        </ListItem>
                    ))}
                </List>
                <NewItemInput
                    placeholder={this.props.placeholder}
                    onAddItem={(newItem) => this.addItem(newItem)}
                />
		  </Container>
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
        window.fetch(this.props.backend.SaveItems, {
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

