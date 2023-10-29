
import './App.css';
import List from './component/List';
import { useState } from 'react';
// import { TextField } from '@mui/material/TextField';
function App() {
  const [inputText, setInputText] = useState(" ")

let searchbar=(e)=>{

  var lowercase=e.target.value.toLowerCase();
setInputText(lowercase);

}
  return (
    <>
    <h1>Search Bar</h1>
  <input type='search' className='search' id='outlined-basic' label="search" onChange={searchbar}/>
    <List input={inputText}/>
    </>
  );
}

export default App;
