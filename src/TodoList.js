import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div><input type="text"/><button>提交</button></div>
        <ul>
          <li>学英语</li>
          <li>Learning React</li>
        </ul>
      </Fragment>
      
      
    )
  }
}

export default TodoList