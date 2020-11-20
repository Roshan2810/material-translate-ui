import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const MenuBar = () => {
    return (<AppBar style={{ height: '60px' }} color="white" position="static" >
        <Toolbar>
            <IconButton edge="start" aria-label="menu">
                <MenuIcon style={{ color: '#0c016e' }} />
            </IconButton>
            <span style={{
                'border-left': '0.5px solid rgb(202, 206, 202)',
                'margin-right': '20px',
                'height': '45px'
            }} id='vertical-line'></span>
            <Typography style={{ color: '#0c016e', 'font-family': 'Times New Roman, Times, serif' }} variant="h5" >
                Translate Sentence
        </Typography>
        </Toolbar>
    </AppBar>);

}

export default MenuBar;