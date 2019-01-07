import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { 
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder='账号' innerRef={(input)=>{this.account = input}}></Input>
          <Input placeholder='密码' type='password' innerRef={(input)=>{this.password = input}}></Input>
          <Button onClick={()=>{this.props.login(this.account, this.password)}}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }

}

const mapState = (state) => ({
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem){
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispatch)(Login) 