import React, { Component } from 'react';
import { ListGroup, Button, Row, Col,Table } from 'reactstrap';
import Todo from './Todo/Todo';

class TodoList extends Component {
    constructor(props) {
        super(props)

    }

    renderItems() {
        return this.props.items.map((item, index) => {
            return (
                    <Todo
                        key={index}
                        value={item.value}
                        isCompleted={item.isCompleted}
                        id={index}
                        deleteItem={this.props.deleteItem}
                        toggleItem = {this.props.toggleItem}
                    />
            )
        });
    }

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Note</th>
                        <th>Aksiyon</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </Table>
        );
    }
}

export default TodoList;