import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './idea.css';
import { TheIdeas } from "./theIdeas";
import { url } from "inspector";


export function Ideas() {
    const navigate = useNavigate();
    let [formInfo, setFormInfo] = useState({
        title: "",
        content: "Tell us..."
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
        const url = "http://localhost:5002/ideas"
        axios.post(url, formInfo)
            .then(response => {
                console.log(response);

                navigate('/Ideas')
            })

    }



    return (
        <div className='Ideas'>
            <h3>Suggested Activities</h3>
            <div className='formStyle'>
                <form className="register-form" id="contactForm" onSubmit={(e) => { formWasSubmitted(e) }}>

                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSomeStr(e.target.value);
                        textWasChanged(e, "title")
                    }}
                        type="text" id="title" name="title" placeholder="title" />
                    <textarea name="content"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setSomeStr(e.target.value);
                            textWasChanged(e, "content")
                        }}
                        id="content"
                        cols={60}
                        rows={4}
                        placeholder={formInfo.content}></textarea>
                    <input type="submit" value={"Post"} />

                </form>
            </div>
            <div className='theideas'>
                <TheIdeas />
            </div>
        </div>
    )
}
