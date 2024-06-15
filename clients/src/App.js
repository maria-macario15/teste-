import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Feed from './views/components/Feed';
import Navbar from './views/components/Navbar'
import Login from "./views/auth/login"
import Chat from './views/chat/chat';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
