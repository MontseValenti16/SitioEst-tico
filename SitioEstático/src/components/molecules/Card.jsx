import Image from "../atoms/Image";
import Title from "../atoms/Title";
import './Card.css'
function Card(props){
    return(
        <div id="page_card">
            <Image image= {props.image}></Image>
            <Title text= {props.text} ></Title>
            
        </div>
        
    );
}

export default Card;