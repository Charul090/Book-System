import React from 'react'
import {Switch , Route} from "react-router-dom"
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import Update from '../Components/Update/Update'
import Add from '../Components/Add/Add'
import Book from '../Components/Book/Book'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/add" component={Add} />
            <Route path="/update/:id" component={Update} />
            <Route path="/book/:id" component={Book} />
        </Switch>
    )
}
