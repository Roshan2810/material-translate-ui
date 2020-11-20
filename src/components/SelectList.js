import React from 'react';

const SelectList=({marginLeft})=> {
    return (
        <select
            style={{ 'margin-left': `${marginLeft}px`, 'margin-bottom': '10px', width: '180px', height: '55px', 'font-size': '20px', 'border': '1px solid black', 'border-radius': '5px' }}>
            <option value="" ></option>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Bengali</option>
            <option>Tamil</option>
            <option>Punjabi</option>
        </select>
    );
}

export default SelectList;