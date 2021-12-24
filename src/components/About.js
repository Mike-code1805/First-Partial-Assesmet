import { Fragment } from "react";
import styles from './modules/title.module.css'
const About = () => {    

    return(
        <div className={styles.flexContainerCardAbout}>              
            <div className={styles.flexContainerBottomTitleAbout} >
                Link Github: https://github.com/Mike-code1805/First-Partial-Assesmet
            </div>
            <div className={styles.flexContainerBottomTitleAbout} >
                Correo: miguelenrique1805@gmail.com
            </div>
            <div className={styles.flexContainerBottomTitleAbout} >
                Descripción: 
                <li>
                    Cosa 1: Si escribo un texto de input en un formulario, ese texto se tiene guarda dentro del componente y eso se transforma en el estado de ese componente
                </li>
                <li>
                    Cosa 2: REGLAS DE COMPONENTES, su nombre debe ser en mayúscula, el return solo devuelve un elemento, la propiedad del tag debe ser className, agrupar elementos (no hijos unos de los otros)
                </li>
                <li>
                    Cosa 3: RestAPI: La forma en que se organiza el como se deben hacer los llamados a un servidor, y que es lo que el servidor devuelve, es un estándar.

                </li>
            </div>
            <div className={styles.flexContainerBottomTitleAbout} >
                Descripción: 
                <li>
                    Edad: 21 años
                </li>
                <li>
                    Estatura: 1.70m
                </li>
                <li>
                    Nacionalidad: Peruano
                </li>
            </div>
            <div className={styles.flexContainerBottomTitleAbout} >
                My nombre: Miguel Enrique Saca Accostupa
            </div>                                                          
            <div>                        
                <img className={styles.flexContainerImage} src={'public/unnamed.webp'} alt=""/>
            </div> 
                    
        </div>
        
    );

 }

export default About;
