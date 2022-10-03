import './App.css';

import MainLayout from "./layouts/MainLayout";
import {Navigate, Route, Routes} from "react-router";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CarsPage from "./pages/CarsPage/CarsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'/login'}/>}/>
          <Route path={'/login'} element={<LoginPage/>}/>
          <Route path={'/register'} element={<RegisterPage/>}/>
          <Route path={'/cars'} element={<CarsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
