
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import {useState} from 'react'

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  return (
    <BrowserRouter>
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <Link to="/posts/new">New Post</Link>
      <Link to="/posts">All Posts</Link>
      <Link to="/">Home</Link>
      {
        userLoggedIn? <button onClick={(() => setUserLoggedIn(false))}> Logout </button> : <Link to="/login">Login</Link>
      }
    
    </div>
    <Routes path="/">
      <Route index element={<h2> Home Page </h2>}> </Route>
      <Route path="login" element={<LoginPage setUserLoggedIn={setUserLoggedIn}/>}> </Route>
      <Route path="/posts">
        <Route index element={<h2>All Posts</h2>} />
        <Route path="new" element={<h2>New Post</h2>} />
      </Route>
      
    </Routes>
    <h1> Friends </h1>
    </BrowserRouter>
  )
}

export default App
