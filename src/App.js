import './App.css';

import {Route, Routes} from "react-router";
import {Link} from "react-router-dom";

import Albums from "./component/Albums";
import Todos from "./component/Todos";
import Comments from "./component/Comments";

import CommentsDetails from "./component/CommentsDetails";

function App() {
  return (
    <div className="App">
      <Link className={'link'} to={'/todos'}>Todos</Link>
      <Link className={'link'} to={'/albums'}>Albums</Link>
      <Link className={'link'} to={'/comments'}>Comments</Link>
      <Routes>
        <Route path={'/todos'} element={<Todos/>}/>
        <Route path={'/albums'} element={<Albums/>}/>
        <Route path={'/comments'} element={<Comments/>}/>
        <Route path={'/detail/:id'} element={<CommentsDetails/>}/>
        <Route index path={'/'}/>
      </Routes>
    </div>
  );
}

export default App;
