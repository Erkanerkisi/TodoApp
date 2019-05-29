import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Addtodo from './AddTodo/Addtodo';
import TodoList from './TodoList/TodoList';
import { connect } from 'react-redux';
import { additem, deleteItem, toggleItem } from '../store/action';

class TodoMain extends Component {

    constructor(props) {
        super(props)

        /*this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);

        this.deleteItem = this.deleteItem.bind(this);
        this.toggleItem = this.toggleItem.bind(this);*/
    }
    /*
        addItem(todoText) {
            let todos = [...this.state.items];
            todos.push({
                    value:todoText,
                    isCompleted:false
                });
            this.setState({
                items: todos
            })
            debugger;
        }
    
        deleteItem(key) {
            let todos =  [...this.state.items];
            debugger;
            todos.splice(key,1);
            this.setState({
                items: todos
            })
        }
    
        toggleItem(key){
            let todos =  [...this.state.items];
            todos[key].isCompleted = !todos[key].isCompleted
            this.setState({
                items: todos
            })
        }
    */

    render() {
        return (
            <Container>
                <br />
                <br />
                <Row>
                    <Col>
                        <Addtodo addItem={this.props.addItem} />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col>
                        <TodoList items={this.props.items}
                            deleteItem={this.props.deleteItem}
                            toggleItem={this.props.toggleItem} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        items: state.MainReducer.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (todoText) => dispatch(additem(todoText)),
        deleteItem: (key) => dispatch(deleteItem(key)),
        toggleItem: (key) => dispatch(toggleItem(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoMain);