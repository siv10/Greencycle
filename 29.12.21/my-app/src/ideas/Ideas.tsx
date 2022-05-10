import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcVoicePresentation } from "react-icons/fc";
import './idea.css';
import { TheIdeas } from "./theIdeas";
import { url } from "inspector";
import { userInfo } from 'os';


export function Ideas() {
    const navigate = useNavigate();

    let [formInfo, setFormInfo] = useState({
        title: "Event Name",
        content: "Details: Description+Location+Date",
        join: 0
    })

    let [someStr, setSomeStr] = useState("");
    let [user, setuser] = useState(localStorage.getItem('userLogged'));


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
        const url = "http://localhost:5002/ideas"
        axios.put(url, { name: user, idea: formInfo })
            .then(response => {
                console.log(response);

                navigate('/Ideas')
            })

    }



    return (
        <div className='Ideas'>
            <h3>Suggested Activities <FcVoicePresentation /></h3>
            <div className='formStyle'>
                <form className="register-form" id="contactForm" onSubmit={(e) => { formWasSubmitted(e) }}>

                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSomeStr(e.target.value);
                        textWasChanged(e, "title")
                    }}
                        type="text" id="title" name="title" placeholder="Event Name" />

                    <textarea name="content"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setSomeStr(e.target.value);
                            textWasChanged(e, "content")
                        }}
                        id="content"
                        cols={60}
                        rows={1}
                        placeholder={formInfo.content}></textarea>
                    <input type="submit" value={"Post"} />
                </form>
                <div className='faceshare'>
                    <p>Share Your Event On Facebook To Raise The Exposure & Awarness</p>
                    <a href="https://www.facebook.com/help/572885262883136" target="_blank" className='shareToFacebookBTN'>Share To Facebook</a>
                </div>
            </div>
            <div className='theideas'>
                <TheIdeas />
            </div>
        </div>
    )
}
