import React from 'react';
import './Footer.css';
import { useEffect } from "react";
import { footerArr } from "./footer_items";
export function Footer() {
    useEffect(() => {
        (document.querySelector('.Footer') as HTMLElement).innerHTML = footerArr.innerHTML
    }, [])
    return (
        <div className="Footer">
            {/* <ul className="FooterUL">
                {props.footeritems.map((curr, i) => (
                    <li key={i}><a href={curr.url}> {curr.title}</a>  </li>
                ))}
            </ul>--props: { footeritems: { title: string, url: string }[] } */}
        </div>
    )
}
