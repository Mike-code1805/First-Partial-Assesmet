import React from 'react';
import {useState, useEffect} from "react"
import { useHref, useNavigate } from "react-router-dom"

import styles from './modules/title.module.css'
import ProductsDetail from "./ProductDetail"
import 'bootstrap/dist/css/bootstrap.min.css'
import { isDisabled } from "@testing-library/user-event/dist/utils"

const ProductCard = ({id, title, price, description, category, image, rating }) => {      
    let inicio = 1;
    let fin = 300;
    let randomIntSec = inicio + Math.floor(Math.random() * fin)

    const [counterSeconds, setCounterSeconds] = useState(randomIntSec);
    const [activeDisable, setactiveDisable] = useState(false);
  
    const auxFormatNumber = ( number ) => {
        return `${number < 10 ? `0${number}` : `${number}`}`
    }

    const getFormatedTimer = ( seconds ) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
      
        return `${auxFormatNumber(h)}:${auxFormatNumber(m)}:${auxFormatNumber(s)}`;
    }

    useEffect(() => {        
            counterSeconds > 0 && setTimeout(() => setCounterSeconds(counterSeconds - 1), 1000);
            if(counterSeconds === 0){
                setactiveDisable(true)
            }
      }, [counterSeconds]);    
      
    
    const navigateId  = useNavigate()    

    const handleDetails = (id, user) => {
        navigateId(`/detalle/${id}`, { state: user })
    }

    return(
        <div className={styles.flexContainerCard}>                    
            <div className={styles.flexContainerBottom}>
                <div className={styles.flexContainerBottomCount} >
                    <div>¡Entra ya! {getFormatedTimer(counterSeconds)} </div>
                </div>  
                <div className={styles.flexContainerBottomButton}>                      
                    <button onClick={()=>handleDetails(id, {title, price, description, category, image, rating})} disabled={activeDisable}>Go to Detail</button>
                </div>   
            </div>
            <div className={styles.flexContainerBottomTitle} >
                    {title}
            </div>                                                          
            <div className={styles.flexContainerImage}>                        
                <img src={image} alt=""/>
            </div>  
                    
        </div>            
    );

 }
 
export default ProductCard;

