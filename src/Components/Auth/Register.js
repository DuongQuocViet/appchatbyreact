import React ,{Components} from "react";
import {Input} from "../share/Input";
import {firebaseAuth } from "../../firebase"

export class Register extends React.Component{
    state = {
        email: "",
        password: "",
        confirmPassword:"",
        status: 'default' //default,success,error
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value,
        })
    }
    handleSubmit = (event)=> {
        event.preventDefault();
        firebaseAuth.createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
            ).then(() => {
                this.setState({
                    status: "success"
                })
            }).catch(() => {
                this.setState({
                    status: "error"
                })
            })
    }
    backToLogin = () => {
        this.props.history.push("/Auth/Login");
    }
    render(){
        const {email, password, confirmPassword,status} = this.state;
        return (
            <div>
                <h2>Register</h2>
                {status === "success" &&(<p className="msg-success">Register Succesfully!</p>)}
                {status === "error" && (<p className="msg-error">Oops! Something went wrong!</p>)}
                <form onSubmit ={this.handleSubmit}>
                         <div>
                            <Input 
                            label="email" 
                            type="text" 
                            value ={email} 
                            onChange={this.handleChange} 
                            name="email" 
                            />
                        </div>
                    
                        <div>
                            <Input 
                            label="password" 
                            type="password" 
                            value ={password} 
                            onChange={this.handleChange} 
                            name="password" />
                        </div>
                        <div>
                            <Input
                                label="confirmPassword" 
                                type="password" 
                                value ={confirmPassword} 
                                onChange={this.handleChange} 
                                name="confirmPassword" 
                            />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={this.backToLogin}>Back to login</button>
                        </div>
                </form>
        
            </div>
        )
    }
}