import React,{useEffect} from 'react'
import {Redirect,useHistory} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import styles from "./Home.module.css"
import {Table} from "react-bootstrap"
import {Start_Data} from "../../Redux/data/action.js"

export default function Home() {
    const {logged_user,token} = useSelector(state => state.login)
    const {data} = useSelector(state => state.book)
    let dispatch = useDispatch()
    let history = useHistory()

    useEffect(() => {
        if(logged_user){
            dispatch(Start_Data(token))
        }
    }, [])

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

    return (
        <main>
            <h1>Home</h1>
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
                                        <td>{elem.name}</td>
                                        <td>{elem.price}</td>
                                        <td>{elem.author}</td>
                                        <td>{elem.category}</td>
                                        <td className={styles.update} onClick={()=>handleUpdate(elem.id)}>Update</td>
                                        <td className={styles.update}>Delete</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </Table>
            </div>
        </main>
    )
}
