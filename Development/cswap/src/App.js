import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={Login} />
        </Routes>
      </Router>
    </div>
  )
}

export default App