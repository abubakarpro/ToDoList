import {useState} from 'react'

import Form from './components/Form';
import Lists from './components/Lists';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const[list, setList] = useState('');
  const [text , setText] = useState('');

  
  //handleSUbmit
    const handleSubmit = (e) => {
       e.preventDefault();
       if(!text) return window.alert('Add text');
       const id = Math.floor(Math.random()*1000) + 1;
       const newlist = {id,text};
       setList([...list , newlist]);
       setText('');
    };

    //Handle Onchange
    const handleChange = (e) => {
      
      setText(e.currentTarget.value);
      console.log('text' ,text);

    }

  //Handle Delete
  const handleDelete = (id) => {

    const newList = list.filter((item) => item.id !== id);
    setList(newList);

  }

  //Handle Editable
  const handleEdit = (id) => {
    const newItem = list.filter((item)=> item.id === id);
    const items = list.filter((item) => id !== item.id);
    setText(newItem[0].text);
    setList(items);
    
  }


  

  return (
    <div className="container">
      <h1><header>TO DO LIST</header></h1>
      <div className='row'>
        <div className='col-sm-6'>
          <Form handleSubmit={handleSubmit} handleChange={handleChange} text={text}/>   
          {list.length > 0 ? <Lists list={list} handleDelete={handleDelete} handleEdit={handleEdit}/> : <h1>No List Item</h1>}
          </div>      
      </div>
    </div>
  );
}

export default App;
