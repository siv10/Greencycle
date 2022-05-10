import React from 'react'
import './Signup.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from "inspector";
import { Profile } from './../Profile/Profile';


export function Signup() {
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

                if (users.name === formInfo.name) {
                    alert("This username is already exist , please choose another username")
                }
                else {

                    const url = "http://localhost:5002/users"
                    if (option.button === 1) {
                        formInfo.role = "regular"
                    } if (option.button === 2) {
                        formInfo.role = "admin"
                    }
                    axios.post(url, formInfo)
                        .then(response1 => {
                            console.log(response1);
                            if (option.button === 1) {
                                navigate('/')

                            } if (option.button === 2) {
                                navigate('/Ideas')
                            }
                        })

                }
            })


    }



    return (
        <div className='Signup'>
            <div className='form'>
                <h2>Signup</h2>
                <h3>{someStr.length > 0 && `Hi ${someStr} ! `}</h3>
                <form className="register-form" id="contactForm" onSubmit={(e) => { formWasSubmitted(e) }}>

                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSomeStr(e.target.value);
                        textWasChanged(e, "name")
                    }}
                        type="text" id="name" name="name" placeholder="username" />


                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                        textWasChanged(e, "password")
                    }}
                        type="password" id="password" name="password" placeholder="password" />

                    <input onChange={(e) => { textWasChanged(e, "email") }}
                        type="text"
                        id="Email" name="Email"
                        placeholder={formInfo.email} />
                    <input id="subMit" type="submit" value={"submit"} onClick={() => (option.button = 1)} />
                    <button id="newU" type="submit" onClick={() => (option.button = 2)} >Admin</button>
                </form>
            </div>
        </div>
    )
}
