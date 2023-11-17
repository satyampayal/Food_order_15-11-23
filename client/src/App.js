import {Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { UserContextProvider } from './userContext';
function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      
    </Routes>
    </UserContextProvider>
  );
}

export default App;
