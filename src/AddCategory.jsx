import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

function AddCategory({ handleClick }) {
  const [status, setStatus] = useState([]);
  const [category, setCategory] = useState('');

  const handleSetStatus = (e) => {
    const arr = e.target.value.trim().split(',');
    setStatus(arr);
    console.log(arr);
  };

  const handleSetCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <TextField label="Category" variant="outlined" onChange={handleSetCategory} value={category} />
      <TextField label="Status" variant="outlined" onChange={handleSetStatus} />
      <Button onClick={() => handleClick(category, status)} variant="contained" size="large" color="secondary">
        Add
      </Button>
    </div>
  );
}

export default AddCategory;
