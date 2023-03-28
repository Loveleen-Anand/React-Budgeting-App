// 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Library import
import {ToastContainer,toast} from 'react-toastify';

//Routes
import Dashboard, { dashBoardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import Main,{mainLoader} from "./pages/Layout/Main";
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    loader: mainLoader,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Dashboard/>,
        loader: dashBoardLoader,
        errorElement:<Error/>    
      },
      {
        path:"logout",
        action: logoutAction
      }
    ]  
  },  
  {
    path: "*",
    element: <Error/>    
  }
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
       <ToastContainer/>
    </div>
  );
}

export default App;
