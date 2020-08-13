import React,{useEffect} from 'react'
import {Redirect,useHistory} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import styles from "./Home.module.css"
import {Table} from "react-bootstrap"
import {Start_Data} from "../../Redux/data/action.js"
import {Start_DELETE,RESET_DELETE} from "../../Redux/delete/action.js"
import Page from "../Page/Page.jsx"

export default function Home() {
    const {logged_user,token} = useSelector(state => state.login)
    const {data,total_pages} = useSelector(state => state.book)
    const {update} = useSelector(state=>state.delete)
    let dispatch = useDispatch()
    let history = useHistory()

    useEffect(() => {
        if(logged_user){
            dispatch(Start_Data(token))
        }
    }, [])

    useEffect(()=>{
        if(update){
            dispatch(Start_Data(token))
            dispatch(RESET_DELETE())
        }
    },[update])

    if(!logged_user){
        return (
            <>
                <Redirect to="/login" />
            </>
        )
    }

    const handleUpdate = (id)=>{
        history.push(`/update/${id}`)
    }

    const handleDelete = (id)=>{
        dispatch(Start_DELETE(id,token))
    }

    const handleTitle =(id)=>{
        history.push(`/book/${id}`)
    }

    return (
        <main>
            <h1 style={{textAlign:"center"}}>Home</h1>
            <div className={styles.container}>
                <Table>
                    <thead>
                        <tr>
                            <th>Quantity</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((elem)=>{
                                return (
                                    <tr key={elem.id} id={elem.id}>
                                        <td>{elem.quantity}</td>
                                        <td onClick={()=>handleTitle(elem.id)}>{elem.name}</td>
                                        <td>{elem.price}</td>
                                        <td>{elem.author}</td>
                                        <td>{elem.category}</td>
                                        <td className={styles.update} onClick={()=>handleUpdate(elem.id)}>Update</td>
                                        <td className={styles.update} onClick={()=>handleDelete(elem.id)}>Delete</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </Table>
                {
                    total_pages > 1?
                    <Page />
                    :
                    null
                }
            </div>
        </main>
    )
}
