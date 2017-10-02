import React from 'react';
import SelectOption from './select_option.js';

const DropRight = (props) => {

    const peopleThings = props.people.map((thing) => {
        return <SelectOption key={thing.toString()} thing={thing} />
    });
    const divStyle = {
        width: '300px',
        height: '200px',
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: '1px',
        position: 'absolute',
        top: '10%',
        right: '14%',
        borderRadius: '10px',
        backgroundColor: 'rgb(255,255,255)',
        textAlign: 'center'


    }


    return (

        <select style={divStyle} className='form-group'>
            {peopleThings}
        </select>




    );


}
export default DropRight;