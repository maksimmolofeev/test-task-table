import { useEffect, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { collectionsActions } from './store/collectionsSlice';
import Table from './components/Table';
import InputBlock from './components/InputBlock';

function App() {
  
  const {intersection} = useSelector(state => state.collections)
  
  return (
    <>
      <InputBlock />
      <Table />
      <div>
        {intersection.map(i => i.status !== null ? <p>{`${i.id} ${i.date.date} ${i.task.task} ${i.status.status}`}</p> : '')}
      </div>
    </>
  );
}

export default App;
