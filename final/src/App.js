import './App.css';
import Home from './componants/Home';
import { Routes, Route } from 'react-router-dom';
import { UserListProvider } from './componants/Userdata';
import EditUser from './componants/editUser';

function App() {
  return (
    <>
      <UserListProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </UserListProvider>
    </>
  );
}

export default App;
