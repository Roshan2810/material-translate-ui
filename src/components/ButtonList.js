import React from 'react';
import {Button} from '@material-ui/core';

const ButtonList = ({onClrBtn}) => {
    return (
        <>
        <Button style={{ width: '235px', 'margin-left': '6px', 'margin-right': '2px', 'border-radius': '20px', 'font-size': '12px' }} color="primary" onClick={onClrBtn} variant="contained">Clear</Button>
        <Button style={{ width: '235px', 'margin-left': '2px', 'border-radius': '20px', 'font-size': '12px' }} color="primary" variant="contained">Submit</Button>
        </>)
};

export default ButtonList;
