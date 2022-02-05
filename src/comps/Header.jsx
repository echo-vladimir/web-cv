import React from "react"
import { Link } from "react-router-dom"

import "./Header.css"

export default () => {
    return (
        <header>
            <nav>
                <ul className="site-nav">
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/lang">lang</Link></li>
                </ul>
            </nav>
        </header>
    )
}