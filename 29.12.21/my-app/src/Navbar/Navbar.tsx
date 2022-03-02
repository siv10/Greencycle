import React from 'react'
import './Navbar.css';

export function Navbar(props: { navItems: { title: string, url: string }[], logoImageUrl: string }) {
    return (
        <div className="Navbar">
            <div className="allItems">
                <div> <img className="logoImg" src={props.logoImageUrl} alt="logo" /> </div>
                <ul className="pagesItemsUl">
                    {props.navItems.map((curr, i) => (
                        <li key={i}> <a href={curr.url}>{curr.title}</a></li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
