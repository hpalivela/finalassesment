import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from './Counter';
import Blog from './Blog.js';
const App = () => {
  return (
    
      <Router>
        <div>
        <center>
        <nav>
          <li>
          <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </nav>
        <Routes>
        <Route exact path="/counter" element={<Counter/>}></Route>
        <Route exact path="/blog/:id" element ={<Blog/>}> </Route>
        </Routes>
        </center>
        </div>
      </Router>
    
  )
}

export default App


