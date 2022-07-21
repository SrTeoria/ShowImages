import { Login } from './components/login/login'
import { Navbar } from './components/navbar/navbar'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignUp } from './components/signup/signUp'
import { UserProfile } from './components/user/user'
import { MainPage } from './components/mainPage/mainPage'
import { ImagesList } from './components/imagesList/imagesList'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/userProfile' element={<UserProfile/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/imagesList' element={ <ImagesList />} />
        <Route path='/'element={<MainPage />}/>
      </Routes>
    </Router>
  )
}

export default App
