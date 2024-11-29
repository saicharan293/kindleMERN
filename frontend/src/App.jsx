import React from 'react'
import Home from './pages/Home'
import AllTasks from './pages/AllTasks'
import ImportantTasks from './pages/ImportantTasks'
import CompletedTasks from './pages/CompletedTasks'
import PendingTasks from './pages/PendingTasks'
import {BrowserRouter  as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2'>
      <Router >
        <Routes >
        <Route exact path='/' element={<Home />}>
          <Route index element={<AllTasks />}/>
          <Route path='/important' element={<ImportantTasks />}/>
          <Route path='/completed' element={<CompletedTasks />}/>
          <Route path='/pending' element={<PendingTasks />}/>
        </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App