import React from 'react'
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";

function ProjectRoutes() {
  return (
    <div>
       <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default ProjectRoutes
