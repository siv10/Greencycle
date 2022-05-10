import React from 'react';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from "inspector";
import { Profile } from './../Profile/Profile';


export function Login() {

    const navigate = useNavigate();
    let url1 = "http://localhost:5002/users/";

    const option = { button: 1 };

    let [formInfo, setFormInfo] = useState({
        name: "",
        password: "",
        email: "@gmail.com",
        role: "",
        amount: 0
    })

    let [someStr, setSomeStr] = useState("");



    function textWasChanged(
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
        whichField: string) {

        let newObj = {
            ...formInfo,
            ...{
                [whichField]: e.target.value
            }
        };

        setFormInfo(newObj);
    }




    function formWasSubmitted(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        url1 = url1 + formInfo.name
        axios.get(url1)
            .then(response => {
                console.log(response);
                let users = response.data;
                console.log(users);

                if (users.name === formInfo.name && users.password === formInfo.password) {
                    //alert("Welcome Back =]")
                    localStorage.setItem('userLogged', users.name)
                    navigate('/')

                    //     })
                }
                if (users.name === formInfo.name && users.password != formInfo.password) {
                    alert("Incorrect password ,Try again !!")
                }
                if (users.name != formInfo.name && users.password === formInfo.password) {
                    alert("Invalid user")
                }
            })
    }

    if (localStorage.getItem('userLogged') !== "") {
        localStorage.setItem('userLogged', "")
    }
    return (
        <div className='Login'>
            <div className='form'>
                <h2>Login</h2>
                <h3>{someStr.length > 0 && `Hi ${someStr} ! `}</h3>
                <form className="login-form" id="contactForm" onSubmit={(e) => { formWasSubmitted(e) }}>

                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSomeStr(e.target.value);
                        textWasChanged(e, "name")
                    }}
                        type="text" id="name" name="name" placeholder="username" />


                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                        textWasChanged(e, "password")
                    }}
                        type="password" id="password" name="password" placeholder="password" />

                    <input id="subMit" type="submit" value={"submit"} onClick={() => (option.button = 1)} />
                    <button id="newU1" type="submit" onClick={() => (option.button = 2)} >Admin</button>
                    <button id="newU2" type="submit" onClick={() => (option.button = 3)} >Company</button>

                </form>
            </div>
        </div>
    )
}