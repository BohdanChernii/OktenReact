import './App.css';
import Cars from "./componets/Cars/Cars";
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import Form from "./componets/Form/Form";
import UpdateForm from "./componets/UpdateForm/UpdateForm";

function App() {
  return (
    <div className="App" style={{maxWidth: '1440px'}}>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/cars'}>Cars</Link>
        <Link to={'/create-car'}>Create Form</Link>
        <Link to={'/update-car'}>Update Car</Link>
      </div>

      <Routes>
        <Route path={'/cars'} element={<Cars/>}/>
        <Route path={'/create-car'} element={<Form/>}/>
        <Route path={'/update-car'} element={<UpdateForm/>}/>
        <Route index path={'/'}/>
      </Routes>
    </div>
  );
}

export default App;
