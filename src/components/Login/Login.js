import './Login.css'
import React from 'react';
class Login extends React.Component{
    render(){
        const props = this.props
        return(
            <div id='login'>
                <form>
                    <input id = {props.input1} name = {props.input1} type = "text" placeholder={props.input1}/><br/>
                    <input id ={props.input2} name = {props.input2} type = "password" placeholder= {props.input2}/><br/>
                    <p>{props.checkbox}<input id = "remember" name = "remember_username" type = "checkbox"/></p><br/>
                    <button style={{backgroundColor: 'green', width: "300px"}}>{props.submitButton}</button>
                </form>
                <div style={{marginTop: "40%"}}>
                    <a style = {{float:'left'}}href='#'>Forget password</a>
                    <a style = {{float:'right'}} href='#'>Trouble Logging in</a>
                </div>
            </div>
        )
    }
}

export default Login