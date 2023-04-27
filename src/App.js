import { Route,Routes } from 'react-router-dom';
import Home from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
