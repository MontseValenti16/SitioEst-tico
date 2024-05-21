import './Section3.css'
import Contenedor from '../molecules/Contenedor'
import mysql from '../../data/mysql'
import Titulo from '../molecules/Titulo';

function Section3(){
    return(
        <div id='page_Sect3'>
            <Titulo></Titulo>
            <div id='page_container'>
            {
            mysql.canciones.map(cancion =>
            <Contenedor image={cancion.image} text={cancion.text}></Contenedor>)
            }
            </div>
        </div>
    );
}

export default Section3;