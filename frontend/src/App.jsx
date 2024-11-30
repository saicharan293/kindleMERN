import React from 'react'
import Home from './pages/Home'
import AllTasks from './pages/AllTasks'
import ImportantTasks from './pages/ImportantTasks'
import CompletedTasks from './pages/CompletedTasks'
import PendingTasks from './pages/PendingTasks'
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>
      <Router >
        <Routes >
        <Route exact path='/' element={<Home />}>
          <Route index element={<AllTasks />}/>
          <Route path='/important' element={<ImportantTasks />}/>
          <Route path='/completed' element={<CompletedTasks />}/>
          <Route path='/pending' element={<PendingTasks />}/>
        </Route>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App