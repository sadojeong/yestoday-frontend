import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import HomePage from './components/HomePage';
import Profile from './components/Profile/Profile'
import UsersSearchPage from './components/UsersSearchPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path='/profile/:username' element={<Profile />} ></Route>
          <Route path='/users-search' element={<UsersSearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
