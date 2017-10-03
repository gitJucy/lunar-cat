import React from 'react';
import RBox from './r_box.js';

const RBoxRight = (props) => {

    const relater = props.preds.map(relation => {
        return <RBox key={relation.toString()} relation={relation} />
    });
    let divStyle = {
        width: '100px',
        height: '30px',
        position: 'absolute',
        top: '60%',
        left: '72%',
        borderRadius: '10px',
        borderColor: 'transparent',
        backgroundColor: 'rgb(255,255,255)',
        textAlign: 'center',
        boxShadow: '0px 4px 1px 0px rgba(32, 117, 166, .4)'

    }
    return (
        <div >
            <select className='form-group form-control' style={divStyle} >
                {relater}
            </select>
        </div>
    );


}

export default RBoxRight;