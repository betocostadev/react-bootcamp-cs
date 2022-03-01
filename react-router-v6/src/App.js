import './App.css'
import { Routes, Route, Link, useMatch, useResolvedPath } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <div>
      <Link style={{ textDecoration: match ? 'underline' : 'none' }} to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="nav-header">
        <nav className="nav">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About name="Beto" />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
