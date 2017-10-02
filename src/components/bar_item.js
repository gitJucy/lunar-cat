import React,{Component, PropTypes} from 'react';

    
const BarItem = ({entity})=>{
        var divStyle={
            borderStyle:'solid',
            borderColor:'gray',
            borderWidth:'1px',
            borderRadius:'10px',
            padding:'1em',
            margin:'1em',
            backgroundColor: 'rgb(32, 117, 166)',
            color:'white',

        }
const itemSource={
    beginDrag(props){
        return{};
    }
};
function collect(connect, monitor) {
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