import React from "react"
import "./Home.css"
import { useEffect } from "react";
import { homeMain } from "./homeItems";


export function Home() {

    useEffect(() => {
        (document.querySelector('.Home') as HTMLElement).innerHTML = homeMain.innerHTML
    }, [])
    return (
        <div className="Home">

        </div>
    )
};