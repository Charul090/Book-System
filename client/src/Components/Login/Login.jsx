import React, { useState, useEffect } from 'react'
import styles from "./Login.module.css"
import { Form, Button } from "react-bootstrap"

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleChange=(e)=>{
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }
        else{
            setPassword(e.target.value)
        }
    }

    console.log(email,password)

    return (
        <main>
            <div className={styles.container}>
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <Form>
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
