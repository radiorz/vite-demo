import "./App.css";
import Home from "./views/Home/index.jsx";
import About from "./views/About";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      {/* 路由列表 */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {/* 路由们 */}
      <Routes>
        {/* 默认路由 */}
        <Route exact path="/" element={<Home />} />
        {/* 更多路由 */}
        <Route path="/about" element={<About />} />
        {/* <Route exact path="/" render={() => <Redirect to="/login" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
