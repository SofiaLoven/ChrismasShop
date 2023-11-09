import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

import { Root } from './routes/Root';
import { Home } from './routes/Home';
import { Product } from './routes/Product';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>}>
    <Route index element={<Home/>}></Route>
    <Route path='Product/:id' element={<Product/>}></Route>
  </Route>
))

function App() {

  return (
    <>
      < RouterProvider router= {router}/>
    </>
  )
}

export default App
