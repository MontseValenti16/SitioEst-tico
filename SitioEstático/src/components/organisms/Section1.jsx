import mysql from "../../data/mysql";
import Card from "../molecules/Card";
import './Section1.css'

function Section1(){
    return(
        <div id="page_S1">
            {
                mysql.portadas.map(portada =>
                    <Card image= {portada.image} text= {portada.text}></Card>
                )
            }
        </div>
    );
}

export default Section1;