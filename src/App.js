import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/slidec/counterSlice';

function App() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();

  console.log(count);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Redux Toolkit</p>
        <button
          onClick={() => dispatch(increment())}
        >Increase</button>
        <button
          onClick={() => dispatch(decrement())}
        >Decreatse</button>
        <span>{count}</span>      
        <input type='week'/> 
      </header>
    </div>
  );
}

export default App;
