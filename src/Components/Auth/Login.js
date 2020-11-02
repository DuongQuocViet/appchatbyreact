import React ,{useState} from "react";
import {useHistory} from 'react-router-dom';
import {Input} from "../share/Input";
export const Login = () => {
    const [inputValue, setInputEmail] = useState({
        email:"",
        password: "",
    })
    const history = useHistory();
    const handleChange = (event) =>{
        setInputEmail({
            ...inputValue,
            [event.target.name] : event.target.value,
        });
    };
    const goToRegister = () => {
        history.push("/Auth/Register");
    }
    return(
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <Input
                        label="email" 
                        name="email" 
                        type="text" 
                        value={inputValue.email} 
                        onChange={handleChange}
                    />
                </div>
                <div>
                <Input
                        label="password" 
                        name="password" 
                        type="password" 
                        value={inputValue.password} 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                    <button type="button" onClick ={goToRegister}>Go to Register</button>
                </div>
            </form>
        </div>
    );
}