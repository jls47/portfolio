import ReactDOM from "react-dom/client";
import { useState } from 'react'
import { useSelector } from 'react-redux';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkArea from './WorkArea';
import AdminLogin from './AdminLogin';
import BlogArea from './BlogArea';
import OuterLayout from './OuterLayout';

function App() {
  const currentMode = useSelector(state => state.currentMode);
  console.log(currentMode);

  var mode;
  
  if(currentMode == 0) {
    mode = <WorkArea />;
  } else if(currentMode == 1) {
    mode = <BlogArea />;
  } else {
    mode = <AdminLogin />;
  }
  

  return (
    <>
      <OuterLayout />
      <div className="main">
        {mode}
      </div>
    </>
  )
}

export default App
