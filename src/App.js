import { useState } from 'react';
import './App.css';
import useDebounce from './hook';

function App() {
  const [searchedTerm, setSearchedTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const debouceSerachList = useDebounce(searchedTerm);

  return (
    <div className="App">
     <input type='text' onChange={(e) => setSearchedTerm(e.target.value)} />
     {debouceSerachList.map((item, i) => {
        return <div style={{cursor: 'pointer'}} onClick={() => setSelectedItem(item)} key={i}>{item}</div>
     })}
     <br />
     <section>{selectedItem}</section>
    </div>
  );
}

export default App;
