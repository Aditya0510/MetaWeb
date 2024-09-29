import { ToastContainer } from 'react-toastify';
import './App.css';
import CommonRoutes from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <ToastContainer />
      <CommonRoutes />
    </div>
  );
}

export default App;
