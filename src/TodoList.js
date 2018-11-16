import React from 'react'
import { connect } from 'react-redux'

const TodoList = (props) => {
  const { inputValue, handleInputChange, handleBtnClick, list, handleDeleteItem } = props
    return (
      <div>
        <div>
          <input value={inputValue} onChange={handleInputChange}/>
          <button onClick={handleBtnClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li onClick={() => {handleDeleteItem(index)}} key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
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
    },
    handleDeleteItem: (index) => {
      const action = {
        type: 'delete_list_item',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)