import React,{Component, PropTypes} from 'react';

    
const BarItem = ({entity})=>{
        let divStyle={
            borderStyle:'solid',
            borderColor:'rgb(234, 255, 0)',
            borderWidth:'2px',
            borderRadius:'10px',
            padding:'.8em',
            margin:'.8em',
            backgroundColor: 'rgb(32, 117, 166)',
            color:'white',
            fontSize:'18px',
            boxShadow:'0px 2px 0px 0px rgba(0,0,0,.2)'

        }
const itemSource={
    beginDrag(props){
        return{};
    }
};
const collect=(connect, monitor)=> {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

    return(
        <li draggable = 'true' style = {divStyle}>
        {entity}
        </li>
    );
}


export default BarItem;