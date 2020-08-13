import React from 'react'
import styles from "./Page.module.css"
import {Pagination} from "react-bootstrap"
import {useSelector,useDispatch} from "react-redux"
import {Start_Data} from "../../Redux/data/action.js"


export default function Page() {

    let {total_pages,page} = useSelector(state=>state.book)
    let {token} = useSelector(state=>state.login)
    let items = []
    let dispatch = useDispatch()

    const handleClick=(curr_page)=>{
        if(curr_page !== page){
            dispatch(Start_Data(token,curr_page))
        }
    }

    for(let x=1;x<=total_pages;x++){
        items.push((<Pagination.Item active={page===x} onClick={()=>handleClick(x)}>{x}</Pagination.Item>))
    }

    return (
        <div className={styles.container}>
            <Pagination className={styles.page}>
                {
                    items
                }
            </Pagination>
        </div>
    )
}
