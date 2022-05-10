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

        </div>
    )
}
