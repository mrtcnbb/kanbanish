import { useState } from 'react';
import Todo from './Todo';
import DenemeTodo from './DenemeTodo';
import Button from '@mui/material/Button';
import './App.css';

import TextField from '@mui/material/TextField';
import AddCategory from './AddCategory';

function App() {
  const [categoryList, setCategoryList] = useState([]);

  const handleClick = (category, status) => {
    setCategoryList((prevCatList) => [
      ...prevCatList,
      {
        id: prevCatList.length + 1,
        category: category,
        status: status,
      },
    ]);
    console.log('category list: ', categoryList);
  };

  return (
    <div className="App">
      <AddCategory handleClick={handleClick} />
      <div>
        <Todo categoryList={categoryList} />
        <DenemeTodo />
      </div>
    </div>
  );
}

export default App;
