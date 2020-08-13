import React, { useEffect , useState ,useRef} from 'react'
import { useRouteMatch, useHistory, Redirect } from "react-router-dom"
import styles from "../Login/Login.module.css"
import { Form, Button } from "react-bootstrap"
import { useSelector,useDispatch } from "react-redux"
import {Start_Update,RESET_UPDATE} from "../../Redux/update/action.js"


export default function Update() {
    let { params } = useRouteMatch()
    const { data,category } = useSelector(state => state.book)
    const {token,logged_user} = useSelector(state => state.login)
    const {update} = useSelector(state => state.update)

    let [current_data,setCurrent] = useState(data.find((elem) => {
        return elem.id == params.id
    }))

    let name = useRef()
    let price = useRef()
    let quantity = useRef()
    let description = useRef()
    let current_category = useRef()
    let author = useRef()

    let dispatch = useDispatch()
    let history = useHistory()

    useEffect(()=>{
        return ()=>{
            dispatch(RESET_UPDATE())
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        let obj ={
            id:params.id,
            name :name.current.value,
            price:price.current.value,
            quantity:quantity.current.value,
            description:description.current.value,
            category:current_category.current.value,
            author:author.current.value
        }
        
        dispatch(Start_Update(obj,token))
    }
    if(update){
        return (
            <>
            <Redirect to="/" />
            </>
        )
    }

    if(!logged_user){
        return (
            <>
                <Redirect to="/" />
            </>
        )
    }

    return (
        <main>
            <div className={styles.container}>
                <h1 style={{ textAlign: "center" }}>Update</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control ref={name} defaultValue={current_data &&current_data["name"]} name="name" type="text" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control ref={quantity} defaultValue={current_data &&current_data["quantity"]}  name="quantity" type="number" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control ref={price} defaultValue={current_data && current_data["price"]} name="price" type="number" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control ref={author} defaultValue={current_data && current_data["author"]} name="author" type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={description} defaultValue={current_data && current_data["description"]} name="description" as="textarea" rows="3" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" ref={current_category} defaultValue={current_data && current_data["category"]}>
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
