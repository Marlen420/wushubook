import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const { isLogged, role } = useSelector((state)=>state.counter.login);
  return (
    <div className="App">
    </div>
  );
}

export default App;
