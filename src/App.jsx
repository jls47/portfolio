import ReactDOM from "react-dom/client";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkArea from './WorkArea';
import AdminLogin from './AdminLogin';
import BlogArea from './BlogArea';
import OuterLayout from './OuterLayout';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <OuterLayout />
      <WorkArea />
      <AdminLogin />
      <BlogArea />
        
    </>
  )
}

export default App
