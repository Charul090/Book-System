import React from 'react'
import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <Link to="/register">Register</Link>
                </div>
                <div>
                    <Link to="/add">Add</Link>
                </div>
            </div>

        </header>
    )
}
