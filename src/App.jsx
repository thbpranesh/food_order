import NavBar from "./NavBar.jsx"
import Body from "./body.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/About.jsx";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
function App()
{
function AppLayout()
{
  return (<div>
    <NavBar/>
    <Outlet/>
  </div>)
}
   let a=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[  {
         path:"/",
        element:<Body/>
    },
    {
         path:"/Contact",
        element:<Contact/>
    },
    {
         path:"/About",
        element:<About/>
    },
]
    },
  
])

   return <div>
    <RouterProvider  router={a}></RouterProvider>
   </div>
}
export default App;






