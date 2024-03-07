import { ReactDOM } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
import Dashboard from "./component/Dashboard";
import Signin from "./component/Signin";
import Money from "./component/Money";
import Transcationdone from "./component/Transcationdone";
import Front from "./component/Front";

function App() {
  return (
     <>
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Front></Front>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/signin" element={<Signin></Signin>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/Money" element={<Money></Money>}></Route>
            <Route path="/Transcation" element={<Transcationdone></Transcationdone>}></Route>
        </Routes>
       </BrowserRouter>
     </>
  )
}

export default App
