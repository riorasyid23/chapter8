import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Cars from './pages/Cars';
import MainLayout from './mainlayout/MainLayout';
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainLayout />}/>
          <Route path="/Dashboard" element ={<Dashboard />}/>
          <Route path="/Cars" element ={<Cars />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
