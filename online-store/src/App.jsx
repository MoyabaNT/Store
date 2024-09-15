import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Landing/Home";
import HomeUser from "./afterSignIn/HomeUser";
import About from "./Landing/About";
import Products from "./Landing/Products";
import Customize from "./Landing/Customize";
import Women from "./Landing/Women";
import Men from "./Landing/Men";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element={<Home />} />
    <Route path='/HomeUser' element={<HomeUser />} />
    <Route path='/About' element={<About />} />
    <Route path='/Products' element={<Products />} />
    <Route path='/Customize' element={<Customize />} />
    <Route path='/Women' element={<Women />} />
    <Route path='/Men' element={<Men />} />
    </>
  )
)


function App() {

  return (
    <>
  <RouterProvider  router = {router}/>
  </>
  )
}

export default App
