import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routers from './routers/router';
import ProductContext from './Contexts/Auth/ProductContext';

function App() {
  return (
    <div>
      <ProductContext>
        <RouterProvider router={routers} />
      </ProductContext>
    </div>
  );
}

export default App;
