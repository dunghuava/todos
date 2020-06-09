import React, { Component } from 'react';
import TodoList from './TodoList';

class Boxer extends Component {
    constructor(props){
        super(props);
        this.onAddToDoItem = this.onAddToDoItem.bind(this);
        this.state={
            todos:[
                    {'title':'Hello','complete':true},
                    {'title':'Xin chào','complete':false},
                    {'title':'Welcome','complete':true}
            ]
        }
    }
    onAddToDoItem(e){
        var val = e.target.value;
        var keyCode = e.keyCode;
        if (keyCode==13 && val.length>0){
            e.target.value=null;
            const items = [...this.state.todos];
            items.push({
                'title':val,'complete':false
            })
           this.setState({todos:items});
        }
    }
    render() {
        return (
            <div className="boxer">
                <div className="box-title">
                    <h1>todos</h1>
                </div>
                <div className="box-body">
                    <div className="box-content">
                        <input onKeyDown={this.onAddToDoItem} className="new-todo" type="text" placeholder="What need to be done..."/>
                        <div className="todo-list-wp">
                            <TodoList todos={this.state.todos}/>
                        </div>
                        <div className="options">
                            <ul>
                                <li>{this.state.todos.length} item left</li>
                                <li className="btn all">All</li>
                                <li className="btn active">Active</li>
                                <li className="btn complete">Complete</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="box-footer">
                    <div className="line-border one"></div>
                    <div className="line-border two"></div>
                </div>
            </div>
        );
    }
}

export default Boxer;