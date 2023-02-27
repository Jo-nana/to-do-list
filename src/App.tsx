import {FC} from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <input type="text" placeholder='Task...' />
          <input type="number" placeholder='Time...' />
        </div>
        <button>Add Task</button>
      </header>
      <div className="list"></div>
    </div>
  );
}

export default App;
