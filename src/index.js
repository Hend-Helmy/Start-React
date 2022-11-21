
import  ReactDOM  from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-router-dom';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const router=  createBrowserRouter([
  // {path:'', element:<Home/>},
  {path:'', element:<App/>, children:[
    {path:'', element:<Home/>},
    {path:'home', element:<Home/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'About',element: <About/>},
    {path:'contact', element:<Contact/>},
    {path:'*',element:<Home/>}
  ]},
  
])


let myElement = document.querySelector('#root');
const rootElement = ReactDOM.createRoot(myElement);

rootElement.render(
  <RouterProvider router={router} />
)


