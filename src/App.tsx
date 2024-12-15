
import { RouterProvider } from "react-router-dom";
import Mrouter from "./Routes/Routes";

import './App.css';
// import Login from './pages/Login/login';


function App() {
  return (
    <>
    <RouterProvider router={Mrouter} />
   </>
  );
}



export default App;
