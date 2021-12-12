import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SinglePost from "./components/singlepost/SinglePost";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";


function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/post/:postId" element={<SinglePost/>}/>
        <Route exact path="/write" element={<Write/>}/>
        <Route exact path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
