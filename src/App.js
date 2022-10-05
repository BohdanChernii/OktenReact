import './App.css';
import {Navigate, Route, Routes} from "react-router";
import Users from "./components/Users/Users";
import Mainlayout from "./layouts/Mainlayout";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
function App() {
  return (
<Routes>
  <Route path={'/'} element={<Mainlayout/>}>
    <Route index element={<Navigate to={'users'}/>}/>
    <Route path={'posts'} element={<Posts/>}/>
    <Route path={'users'} element={<Users/>}/>
    <Route path={'comments'} element={<Comments/>}/>
  </Route>
</Routes>
  );
}

export default App;
