import './App.css';
import RoutesPage from './pages/routes'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
export default function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000}/>
      <RoutesPage/>
    </div>
  );
}

