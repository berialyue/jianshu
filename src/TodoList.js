import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component { 
  // constructor(props) {
  //   super(props)
  //   this.handleInputChange = this.handleInputChange.bind(this)
  //   this.handleBtnClick = this.handleBtnClick.bind(this)
  // }
  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.handleInputChange}/>
          <button onClick={this.props.handleBtnClick}>提交</button>
        </div>
        <ul>
          <li>berialyue</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (e) => {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleBtnClick: () => {
      const action = {
        type: 'add_list_item'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)