import React, { Component } from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Form
} from 'reactstrap';

class Addtodo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            itemText: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({ 
            itemText: event.target.value 
        });
    }

    addItem(todo) {
        if (todo.length > 0) {
            this.props.addItem(todo);
            this.setState({ itemText: '' });
        }
        event.preventDefault();
    }

    handleKeyPress(event){
        
        if(event.charCode==13){
           this.addItem(this.state.itemText)  
           debugger
           event.preventDefault();
              
        } 
    }

    render() {
        return (
            <Form >
                <InputGroup>
                    <Input placeholder="Görev" value={this.state.itemText} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                    <InputGroupAddon addonType="append">
                        <Button onClick={() => this.addItem(this.state.itemText)} color="secondary">Ekle</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        );
    }
}

export default Addtodo;


