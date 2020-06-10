import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const ckb = this.props.complete ? true:false;
        const classes = this.props.complete ? 'complete':'';
        return (
            <li className={'todo-item ' + classes}>
                <label>
                    <input onChange={this.props.onChangeCkb} checked={ckb} data-id={this.props.id} type="checkbox"/>&nbsp;&nbsp;{this.props.title}
                    <button onClick={this.props.onClickBtn} data-id={this.props.id}
                        style={{
                        marginTop:'2px',
                        float:'right',
                        width:'15px',
                        height:'15px',
                        background:'none',
                        border:'none',
                        color:'red'
                        }}>x
                    </button>
                </label>
            </li>
        );
    }
}

export default TodoItem;