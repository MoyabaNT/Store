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
import WomenClothing from "./afterSignIn/WomenClothing";
import MenClothing from "./afterSignIn/MenClothing";
import OurProducts from "./afterSignIn/OurProducts";
import OptionalCustomization from "./afterSignIn/OptionalCustomization";

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
    <Route path='/WomenClothing' element={<WomenClothing />} />
    <Route path='/MenClothing' element={<MenClothing />} />
    <Route path='/OurProducts' element={<OurProducts />} />
    <Route path='/OptionalCustomization' element={<OptionalCustomization />} />
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
