import './App.css';
import Main from "./componenets/Main";
import {createContext} from "react";
export let MyContext = createContext('')
function App() {
  return (
    <div className="App">
      <MyContext.Provider value={'hello world'} >
        <Main/>
      </MyContext.Provider>
    </div>
  );
}


export default App;
