import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import AddEmployee from './pages/addemployee/AddEmployee';
import EditEmployee from './pages/editemployee/EditEmployee';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/addemployee' element={<AddEmployee />}/>
        <Route path='/editemployee/:id' element={<EditEmployee />}/>
      </Routes>
    </div>
  );
}

export default App;
