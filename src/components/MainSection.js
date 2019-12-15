import React, {Component} from 'react';

class MainSection extends Component {
  render() {
    return (
      <section className='main-section'>
        <div className='task-list'>
          {
            this.props.mainSectionProps.map((element, index) => {
              return (
                <div>
                  <input type='checkbox' className='checkbox checkbox-main'
                         onChange={event => this.props.completeTodo(element.id, event.target.checked)}
                         checked={element.isComplete}/>
                  <input type='text' className='text text-main' value={element.name}
                         style={{
                           color: element.isComplete ? '#969494' : 'black',
                           textDecoration: element.isComplete ? 'line-through' : 'none'
                         }}/>
                  <button className='clear' onClick={() => this.props.deleteTodo(element.id)}>x
                  </button>
                </div>
              );
            })
          }
        </div>
      </section>
    )
  }
}

export {MainSection};