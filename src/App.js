import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import HomePage from './components/HomePage';
import Profile from './components/Profile/Profile'
import UsersSearchPage from './components/UsersSearchPage';
import Main from './components/Main/Main'
import FollowerModal from './components/Modal/FollowerModal';
import MyProfile from './components/Profile/MyProfile';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path='/profile/:username' element={<Profile />} ></Route>
          <Route path='/profile/myprofile' element={<MyProfile />} ></Route>
          <Route path='/profile/:username/follower' element={<FollowerModal />} ></Route>
          <Route path='/users-search' element={<UsersSearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
