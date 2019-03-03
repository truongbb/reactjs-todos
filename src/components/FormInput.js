import React, {Component} from 'react';

class FormInput extends Component {


    constructor(props) {
        super(props);
        this.state = {
            input_txt: ''
        }
    }

    handleAdd = event => {
        if (event.key === 'Enter') {
            if (this.state.input_txt === undefined || this.state.input_txt === null || this.state.input_txt.trim() === '') {
                this.setState({input_txt: ''});
                return;
            }
            this.props.addToDo(this.state.input_txt.trim());
            this.setState({input_txt: ''});
        }
    }

    render() {
        return (
            <header>
                <h1 className='app-name red'>Todos</h1>
                <div>
                    <input type='checkbox' className='checkbox'
                           onChange={event => this.props.completeAllTodo(event.target.checked)}
                           checked={this.props.isCheckAll}/>
                    <input type='text' placeholder='What needs to be done?' className='text'
                           value={this.state.input_txt}
                           onChange={event => this.setState({input_txt: event.target.value})}
                           onKeyPress={event => this.handleAdd(event)}/>
                </div>
            </header>
        )
    }
}

export {FormInput};