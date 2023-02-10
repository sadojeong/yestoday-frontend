import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import HomePage from './components/HomePage';
import Profile from './components/Profile/Profile'
import UsersSearchPage from './components/UsersSearchPage';
import Main from './components/Main/Main'
import MyProfile from './components/Profile/MyProfile';
import CalendarPage from './components/CalendarPage';
import EditProfile from './components/Profile/EditProfile';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path='/profile/:username' element={<Profile />} ></Route>
          <Route path='/profile-edit/:username' element={<EditProfile />} ></Route>
          <Route path='/users-search' element={<UsersSearchPage />}></Route>
          <Route path='/calendar' element={<CalendarPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
