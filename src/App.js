import './App.css';

import {Navigate, Route, Routes} from "react-router";
import {Posts, Users} from "./components";
import MainLayout from "./layouts/MainLayout";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route element={<Navigate to={'users'}/>}/>
          <Route path={'users'} element={<Users/>}/>
          <Route path={'posts'} element={<Posts/>}/>
          <Route path={'comments'} element={<Comments/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
