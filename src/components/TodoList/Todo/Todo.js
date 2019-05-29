import React, { Component } from 'react';
import { ListGroupItem, Button, Row, Col } from 'reactstrap';

class Todo extends Component {

constructor(props){
super(props)
}

    render() {
        return (
            <tr className={(this.props.isCompleted ? "completed" : "not-completed") }>
                <td onClick = {() =>this.props.toggleItem(this.props.id)}>{this.props.value}</td>
                <td>
                    <Button onClick={() => this.props.deleteItem(this.props.id)} color="danger">Sil</Button>
                </td>
            </tr>
        );
    }
}

export default Todo;