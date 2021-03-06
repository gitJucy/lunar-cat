import React from 'react';
import SelectOption from './select_option.js';

const DropRight = (props) => {

    const peopleThings = props.people.map( thing => {
        return <SelectOption key={thing.toString()} thing={thing} />
    });
    let divStyle = {
        width: '300px',
        height: '200px',
        position: 'absolute',
        top: '10%',
        right: '14%',
        borderRadius: '10px',
        borderWidth: '0px',
        borderColor: 'transparent',
        backgroundColor: 'rgb(255,255,255)',
        textAlign: 'center',
        boxShadow: '0px 4px 1px 0px rgba(32, 117, 166, .4)'



    }


    return (
        <div style={divStyle}>
            <select className='form-group form-control'>
                {peopleThings}
            </select>
        </div>




    );


}
export default DropRight;