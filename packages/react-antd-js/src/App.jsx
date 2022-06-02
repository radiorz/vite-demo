import "./App.css";
import { Suspense } from "react";
import {
  Link,
  Route,
  Routes,
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Home from "./views/Home/index.jsx";
import About from "./views/About";
import NotFound from "./views/NotFound";
import routes from "~react-pages";
console.log("routes", routes);
function App() {
  return (
    <>
      {/* 加载中 */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* 路由列表 */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
        </ul>
        {/* routes 提供一个路由出口，满足条件的路由组件会渲染到组件内部，定义path和组件的对应关系 */}
        <Routes>
          {/* 默认路由 */}
          <Route exact path="/" element={<Home />} />
          {/* 更多路由 */}
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFound></NotFound>} />
        </Routes>
        {useRoutes(routes)}
      </Suspense>
    </>
  );
}
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
export default AppWrapper;
