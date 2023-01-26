import './App.css';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

function App() {
  const [name, setName] = useLocalStorage('name','');
  useUpdateLogger(name);

  return (
    <div className="App">
      <div className='input-container'>
        <input className='input-field' type="text" value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)}></input>
      </div>
    </div>
  );
}

export default App;
