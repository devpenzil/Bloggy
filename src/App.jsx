import React from 'react'
import HomePage from './Pages/HomePage'
import ViewPost from './Pages/ViewPost'
import SearchPage from './Pages/SearchPage'
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
        <Route path="/result">
          <SearchPage />
        </Route>
      </Router>
      
    </div>
  )
}

export default App
