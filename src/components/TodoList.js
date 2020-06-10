import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ul className="todo-list">
                {                    
                    this.props.todos.map((item,key)=>
                        <TodoItem 
                            id={key} 
                            key={key} 
                            title={item.title} 
                            complete={item.complete} 
                            onChangeCkb={this.props.onChangeCkb} 
                            onClickBtn={this.props.onClickBtn}
                        />
                    )
                }
            </ul>
        );
    }
}

export default TodoList;