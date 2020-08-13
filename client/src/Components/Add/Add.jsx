import React, { useEffect , useState ,useRef} from 'react'
import { useRouteMatch, useHistory, Redirect } from "react-router-dom"
import styles from "../Login/Login.module.css"
import { Form, Button } from "react-bootstrap"
import { useSelector,useDispatch } from "react-redux"
import { Start_Add ,RESET_ADDITION} from "../../Redux/add/action.js"

export default function Add() {
    const { data,category } = useSelector(state => state.book)
    const {logged_user,token} = useSelector(state => state.login)
    const {update} = useSelector(state => state.add)

    let dispatch = useDispatch()

    const [name,setName] = useState("")
    const [quantity,setQuantity] = useState("")
    const [price,setPrice] = useState("")
    const [author,setAuthor] = useState("")
    const [description,setDescription] = useState("")
    const [curr_category,setCategory] = useState(category[0])

    const handleSubmit=(e)=>{
        e.preventDefault()

        let obj={
            name,price,quantity,author,description,
            category:curr_category
        }

        dispatch(Start_Add(obj,token))
    }

    const handleChange = (e)=>{
        let def = e.target.name

        if(def === "name"){
            setName(e.target.value)
        }
        else if(def === "price"){
            setPrice(e.target.value)
        }
        else if(def === "quantity"){
            setQuantity(e.target.value)
        }
        else if(def === "author"){
            setAuthor(e.target.value)
        }
        else if(def === "description"){
            setDescription(e.target.value)
        }
        else{
            setCategory(e.target.value)
        }
    }

    useEffect(()=>{
        return ()=>{
            dispatch(RESET_ADDITION())
        }
    },[])

    if(update){
        return (
            <>
            <Redirect to="/" />
            </>
        )
    }


    return (
        <main>
            <div className={styles.container}>
                <h1 style={{ textAlign: "center" }}>Add</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control value={name} onChange={handleChange}  name="name" type="text" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control value={quantity} onChange={handleChange}  name="quantity" type="number" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control value={price} onChange={handleChange} name="price" type="number" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control value={author} onChange={handleChange}  name="author" type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} onChange={handleChange} name="description" as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" onChange={handleChange} value={curr_category}>
                           {
                               category && category.map((elem,index)=>{
                                   return (
                                    <option value={elem} key={`${index}-x`}>{elem}</option>
                                   )
                               })
                           }
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Submit
                    </Button>
                </Form>
            </div>
        </main>
    )
}
