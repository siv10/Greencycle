import React, { useState, useEffect, ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import axios from "axios";
import './theideas.css';
import { join } from "path";
import { AiFillFacebook } from "react-icons/ai";
import { BiLike } from "react-icons/bi";

export function TheIdeas() {

    const [ideas, setideas] = useState([{ idea: { title: "", content: "", join: 0 }, name: "", role: "" }]);
    const url = 'http://localhost:5002/ideas/allideas';
    let [fetch, setFetch] = useState(false);

    useEffect(() => {

        axios.get(url)
            .then(response => {
                console.log(response);

                setideas(response.data);
                setFetch(true)
            });
    }, []);


    return !fetch ? <>loding...</> : (
        <div className="Appi">
            {ideas.map((curr, index) => {

                return <div key={index} className="cards"><Card key={index} {...curr} ></Card>
                </div>
            })}
        </div>
    );
}


const Card = (props: { idea: { title: string, content: string, join: number }, name: string, role: string }) => {
    const [content, setContent] = useState('')
    let [joinNum, setJoinNum] = useState(props.idea.join);
    function handleJoin() {
        joinNum++;
        setJoinNum(joinNum)
        const url1 = "http://localhost:5002/ideas/join/" + props.idea.title + "/" + props.name
        axios.put(url1, { joinNum })
            .then(response => {
                console.log(response.data);

            })
    }
    return (
        <div className="theideas">
            <div className="uls">
                <ul>
                    <div className="name"><li>{props.name}</li></div>
                    <div className="titlelike"><li> {props.idea.title}</li><li className="buttons"><button onClick={() => { handleJoin() }}><BiLike /> {joinNum} </button></li></div>
                    <div className="lis"><li><input type="text" defaultValue={props.idea.content} onChange={event => setContent(event.target.value)} /> </li>
                        <div className="buttons">
                            {localStorage.getItem("userLogged") === props.name ? <button onClick={() => deleteIdea(props.idea.title)} >Delete</button> : <></>}
                            {localStorage.getItem("userLogged") === props.name ? <button onClick={() => editIdea(props.idea.title, content)}>edit</button> : <></>}
                            <a href="https://www.facebook.com/events/" target="_blank"><AiFillFacebook /></a>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}


function deleteIdea(title: string): void {
    console.log(title);

    const url1 = "http://localhost:5002/ideas/delete/" + title + "/" + localStorage.getItem('userLogged')
    axios.delete(url1)
        .then(response => {
            console.log(response.data);

        })
}

function editIdea(title: string, content: String): void {
    const url1 = "http://localhost:5002/ideas/edit/" + title + "/" + localStorage.getItem('userLogged')
    console.log(url1);

    axios.put(url1, { title: title, content: content })
        .then(response => {
            console.log(response.data);

        })
}





