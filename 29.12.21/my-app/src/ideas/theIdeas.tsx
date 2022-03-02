import React, { useState, useEffect, ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import axios from "axios";
import './theideas.css';

export function TheIdeas() {
    const [ideas, setideas] = useState([{ title: "", content: "" }]);
    const url = 'http://localhost:5002/ideas/allideas';


    useEffect(() => {

        axios.get(url)
            .then(response => {
                console.log(response);

                setideas(response.data);

            });
    }, []);



    return (
        <div className="Appi">
            {ideas.map((curr, index) => {

                return <Card key={index}  {...curr}></Card>;
            })}
        </div>
    );
}


const Card = (props: { title: string, content: string }) => {
    const [content, setContent] = useState('')
    return (
        <div className="theideas">
            <ul>
                <li><input defaultValue={props.content} onChange={event => setContent(event.target.value)} /> </li>
                <button onClick={() => deleteIdea(props.title)}>Delete</button>
                <button onClick={() => editIdea(props.title, content)}>edit</button>
                <button>❤</button>

            </ul>

        </div>
    )
}


function deleteIdea(title: string): void {
    const url1 = "http://localhost:5002/ideas/" + title
    axios.delete(url1)
        .then(response => {
            console.log(response.data);

        })
}

function editIdea(title: string, content: String): void {
    const url1 = "http://localhost:5002/ideas/" + title
    axios.put(url1, { title: title, content: content })
        .then(response => {
            console.log(response.data);

        })
}







