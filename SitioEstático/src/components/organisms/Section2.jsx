import Container from "../molecules/Container";
import mysql from "../../data/mysql";
import './Section2.css'
function Section2(){
    return(
        <div id="page_Sec2">
            {
            mysql.albumes.map(album =>
                <Container image= {album.image} text= {album.text}></Container>)
            }
        </div>
    );
}

export default Section2;