import React from 'react'
import HomePage from './Pages/HomePage'
import ViewPost from './Pages/ViewPost'
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
 

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/post">
          <ViewPost />
        </Route>
      </Router>
      
    </div>
  )
}

export default App
