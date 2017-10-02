import React, { Component } from 'react';
import DropBottom from  './drop_box_bottom';
import DropLeft from './drop_box_left';
import DropRight from './drop_box_right';

class Sandbox extends Component {
 
    
    render() {
        var divStyle={
            width:'70%',
            marginRight:'10%',
        }
        return (
            <div style={divStyle} className='containerFluid'>
                <DropBottom />
                <DropLeft />
                <DropRight />
            </div>
        )
    }
}

export default Sandbox;