import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='row'>
                    <div className='col-md-3'> {this.props.leftItems} items left</div>
                    <div className='col-md-6'>
                        <button className='footer-button' onClick={event => this.props.filterTodos('ALL')}>All</button>
                        <button className='footer-button' onClick={event => this.props.filterTodos('ACTIVE')}>Active
                        </button>
                        <button className='footer-button'
                                onClick={event => this.props.filterTodos('COMPLETE')}>Completed
                        </button>
                    </div>
                    <div className='col-md-3'>
                        <button className='clear-button' onClick={event => this.props.clearComplete()}>Clear completed
                        </button>
                    </div>
                </div>
            </footer>
        )
    }
}

export {Footer};