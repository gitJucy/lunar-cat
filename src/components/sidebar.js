import React from 'react';
import BarItem from './bar_item';

const Sidebar = (props)=> {
   const singleEntity = props.ent.map((entity)=>{
    return <BarItem key={ entity.toString() } entity={ entity } />
   });
   
        var divStyle = {
            width: '20em',
            // position:'relative'


        }

        return (
            <div style={divStyle}>
                <ul className="list-unstyled list-group">
                    { singleEntity }
                </ul>
            </div>
        );
    
}




export default Sidebar;