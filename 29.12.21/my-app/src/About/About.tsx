import React from 'react'
import './About.css';
import { useEffect } from "react";
import { AboutItems } from "./AboutItems";

export function About() {
    useEffect(() => {
        (document.querySelector('.About') as HTMLElement).innerHTML = AboutItems.innerHTML
    }, [])
    return (

        <div className="About">
        </div>

    )
}




