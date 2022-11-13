//ReactBootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//ROUTES
import {BrowserRouter} from 'react-router-dom';
import RoutesApp from './routes';

//ESTILIZAÇÃO E VALIDAÇÃO
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
 return (
  
   <BrowserRouter>
   <ToastContainer autoClose={3000}/>
    <RoutesApp/>
   </BrowserRouter>
   
  );
}