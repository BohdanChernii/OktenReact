import './App.css';
import MainLayout from "./layouts/MainLayout";
import {Route} from "react-router-dom";
import {Navigate, Routes} from "react-router";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import {PostsPage, PostDetailsPage, UsersPage, NotFoundPage} from './pages'
import Login from "./components/Login/Login";
import RequireAuth from "./hoc/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
        <Route index element={<Navigate to={'home'}/>}/>
        <Route path={'home'} element={<Home/>}/>
        <Route path={'about'} element={<About/>}/>
        <Route path={'posts'} element={   <RequireAuth><PostsPage/></RequireAuth>}>
          <Route path={':id'} element={
              <PostDetailsPage/>
          }/>
        </Route>
        <Route path={'users'} element={<UsersPage/>}/>
        <Route path={'login'} element={<Login/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Route>

    </Routes>
  );
}

export default App;
