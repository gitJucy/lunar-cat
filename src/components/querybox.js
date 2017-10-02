import React, { Component } from 'react';

class Qbox extends Component {
    render() {
    var divStyle = {
        position: 'fixed',
        bottom: '.5em',
        width:'60%',
        left:'50%',
        marginLeft:'-25%',
        borderColor: 'grey',
        borderWidth:'1px',
        borderStyle:'solid',
        borderRadius:'10px',
        backgroundColor:'rgb(255,255,255)'

    }

    return (
        <div style={divStyle} className='container-fluid'>
            <h4 >Your query will show up here </h4>
        </div>
    );
    }
}
export default Qbox;