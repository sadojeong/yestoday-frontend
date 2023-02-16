import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import HomePage from './components/HomePage';
import Profile from './components/Profile/Profile'
import UsersSearchPage from './components/UsersSearchPage';
import Main from './components/Main/Main'
import MyProfile from './components/Profile/MyProfile';
import CalendarPage from './components/CalendarPage';
import EditProfile from './components/Profile/EditProfile';
import Login from './components/Signin';
import SignUp from './components/SignUp';
import StartPage from './components/StartPage';
import Tutorial from './components/Tutorial';

function App() {

  return (
    <div className="App font-nanum">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='/Tutorial' element={<Tutorial/>}/>
          <Route path='/StartPage' element={<StartPage/>}/>
          <Route path='/Signin' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path="/" element={<HomePage />}></Route>
=======
          <Route path='/' element={<StartPage />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path="/home" element={<HomePage />}></Route>
>>>>>>> 269f07644e42e436508406fbf3449cd0411f3de5
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
