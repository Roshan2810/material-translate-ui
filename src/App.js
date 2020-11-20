import React from 'react';
import { Card, Typography } from '@material-ui/core';
import ButtonList from './components/ButtonList';
import SelectList from './components/SelectList';
import MenuBar from './components/MenuBar';
import './App.css';

function App() {
  return (
    <>
      <MenuBar />
      <Typography style={{
       'margin-top': '60px',
        color: '#0c016e', 'font-family': 'Times New Roman, Times, serif',
        'text-align': 'center',
      }}
        variant="h4">
        Translate Sentence
      </Typography>
      <Card style={{
        'margin': 'auto',
        'margin-top': '40px',
        'padding': '30px',
        'width': '500px'
      }}>
{/* Source Language */}
        <Typography variant='h6'>
          Select Source Language
          <SelectList marginLeft={82}/>
        </Typography>

        <Typography variant='h6'>
          Select Target Language
        <SelectList marginLeft={90}/>
        </Typography>

        <Typography>
          <textarea placeholder="Enter Text Here......" style={{ 'border-radius': '5px' }} rows='5' cols="64"></textarea>
        </Typography>
        <Typography style={{ margin: '10px' }}>
          <input type='checkbox'></input>Machine Translated
        </Typography>
        <ButtonList />
      </Card>
    </>
  );
}

export default App;
