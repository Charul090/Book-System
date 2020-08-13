import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {Redirect} from "react-router-dom"
import styles from "./Login.module.css"
import { Form, Button } from "react-bootstrap"
import {Start_Login} from "../../Redux/login/action.js"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let dispatch = useDispatch()
    const {logged_user} = useSelector(state => state.login)

    const handleChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value)
        }
        else {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let obj ={
            email,
            password
        }

        dispatch(Start_Login(obj))
    }

    if(logged_user){
        return (
            <>
                <Redirect to="/" />
            </>
        )
    }

    return (
        <main>
            <div className={styles.container}>
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email} name="email" type="email" onChange={handleChange} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} name="password" type="password" onChange={handleChange} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Submit
                    </Button>
                </Form>
            </div>
        </main>
    )
}
