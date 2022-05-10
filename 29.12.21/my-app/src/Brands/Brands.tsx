import React from 'react'
import './bramds.css';
import { brandsMain } from './brands-item'
import { useEffect } from "react";

export function Brands() {

    useEffect(() => {
        (document.querySelector('.Brands') as HTMLElement).innerHTML = brandsMain.innerHTML
    }, [])
    return (
        <div className="Brands">
        </div>
    )
};


