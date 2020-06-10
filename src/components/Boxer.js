import React, { Component } from 'react';
import TodoList from './TodoList';

class Boxer extends Component {
    constructor(props){
        super(props);
        this.onAddToDoItem = this.onAddToDoItem.bind(this);
        this.mfilter=this.mfilter.bind(this);
        this.state={
            todos:[],
            filter:0
        }
    }
    onAddToDoItem(e){
        let val = e.target.value;
        let keyCode = e.keyCode;
        if (keyCode==13 && val.length>0){
            e.target.value=null;
            const todos = [...this.state.todos];
            todos.push({
                'title':val,'complete':false
            })
           this.setState({todos:todos});
        }
    }
    onChangeCkb = (event) =>{
        let index= event.target.attributes.getNamedItem('data-id').value;
        let todos= [...this.state.todos];
        todos[index].complete=!todos[index].complete;
        this.setState({todos:todos});
    }
    onClickBtn = (event)=>{
        let index= event.target.attributes.getNamedItem('data-id').value;
        let todos = [...this.state.todos];
        todos.splice(index,1);
        this.setState({
            todos:todos,
        })
    }
    mfilter(c){
        this.setState({
            filter:c
        });
    }
    componentWillUpdate(){
        console.log('updated');
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
                            <TodoList
                                onClickBtn={this.onClickBtn} 
                                onChangeCkb={this.onChangeCkb} 
                                todos={this.state.todos}
                            />
                        </div>
                        <div className="options">
                            <ul>
                                <li>{this.state.todos.length} item left</li>
                                <li onClick={()=>this.mfilter(0)} className="btn all">All</li>
                                <li onClick={()=>this.mfilter(1)} className="btn active">Active</li>
                                <li onClick={()=>this.mfilter(2)} className="btn complete">Complete</li>
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