import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './components/about/About'
import Home from './components/home/Home.jsx'
// import User from './components/user/User.jsx'
import Github, { githubInfo } from './components/github/Github.jsx'
import './index.css'
// const router = createBrowserRouter([
//   {
//   path: '/',
//   element:<Layout/>,
//     children:[{path:"about", element:<About/>},{path:"",element:<Home/>}]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>,
        <Route path='about' element={<About/>}/>,
        <Route path='github' loader={githubInfo} element={<Github/>}/>,
        {/* <Route path='user/:userId' element={<User/>}/>, */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

