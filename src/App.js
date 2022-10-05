import {Navigate, Route, Routes} from "react-router";

import Mainlayout from "./layouts/Mainlayout";

import {Comments, Posts, Users} from "./components";

import './App.css';

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
