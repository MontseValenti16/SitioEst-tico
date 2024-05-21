import Images from "../atoms/Images";
import Text from "../atoms/Text";
import './Container.css'
function Container(props){
    return(
        <div id="page_container">
            <Images images= {props.image}></Images>
            <Text text= {props.text}></Text>
        </div>
    );
}

export default Container;   