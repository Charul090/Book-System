import React, { useState, useEffect } from 'react'
import { useRouteMatch, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"

export default function Book() {
    let { params } = useRouteMatch()

    let { token,logged_user } = useSelector(state => state.login)
    const [curr_data, setData] = useState(null)

    useEffect(() => {
        axios({
            method: "get",
            baseURL: "http://127.0.0.1:5000",
            url: `/book/${params.id}`
        })
            .then((item) => item.data)
            .then(data => {
                if (data["error"]) {
                    console.log(data)
                }
                else {
                    console.log(data)
                    setData(data["data"])
                }
            })
    }, [])

    if(!logged_user){
        return (
            <>
                <Redirect to="/" />
            </>
        )
    }

    return (
        <main>
            <div style={{width:"90%",margin:"10px auto"}}>
                {
                    curr_data &&
                    <>
                        <h1>{curr_data.name}</h1>
                        <p>Price: {curr_data.price}</p>
                        <p>Quantity: {curr_data.quantity}</p>
                        <p>Author: {curr_data.author}</p>
                        <p>Description: {curr_data.description}</p>
                    </>
                }
            </div>
        </main>
    )
}
