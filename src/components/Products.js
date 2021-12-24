import {useState, useEffect} from "react"
import styles from './modules/title.module.css'
import ProductCard from "./ProductCard";

const Products = () => {      
    const [users, setState] = useState([]);

    //llamado asíncrono
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json()) //cuando fetch esté listo, se hace esto, esta respuesta se transforma a json para poder verlo
        .then(data =>{ 
           setState(data); //Accede a la data
        })
        .catch(error => console.log(error));
    }, []);

    return(
        <div className={styles.flexContainerMain}>
            {users.map(({id, title , price, description, category, image, rating})=>
                <ProductCard key={id} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} ></ProductCard>
            )}
        </div>
    );

 }

export default Products;