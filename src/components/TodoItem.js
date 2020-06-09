import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state={
            complete:this.props.complete
        };
    }
    onChangeCkb = (e) =>{
       this.setState({
           complete:!this.state.complete
       })
    }
    render() {
        const ckb = this.state.complete ? true:false;
        const classes = this.state.complete ? 'complete':'';
        return (
            <li className={'todo-item ' + classes}>
                <label>
                    <input onChange={this.onChangeCkb} checked={ckb} todoid={this.props.id} type="checkbox"/>&nbsp;&nbsp;{this.props.title}
                </label>
            </li>
        );
    }
}

export default TodoItem;