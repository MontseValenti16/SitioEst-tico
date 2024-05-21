import './Contenedor.css'
import Img from '../atoms/Img'
import Parrafo from '../atoms/Parrafo'
function Contenedor(props){
    return(
        <div id='page_cont'>
        
        <Img img={props.image} ></Img>
        <Parrafo text= {props.text}></Parrafo>
        </div>
    );
}

export default Contenedor;