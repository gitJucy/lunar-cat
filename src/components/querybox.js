import React, { Component } from 'react';

class Qbox extends Component {
    render() {
    let divStyle = {
        height:'5em',
        paddingTop:'1.5em',
        position: 'absolute',
        bottom: '.5em',
        width:'60%',
        left:'50%',
        marginLeft:'-25%',
        borderRadius:'10px',
        backgroundColor:'rgb(255,255,255)',
        boxShadow: '0px 4px 1px 0px rgba(32, 117, 166, .4)'


    }

    return (
        <div style={divStyle} className='container-fluid'>
        <h4>Return relationships here...</h4>
        </div>
    );
    }
}
export default Qbox;