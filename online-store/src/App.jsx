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
import Cart from "./afterSignIn/Cart";
import HomeCart from "./Landing/HomeCart";

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
    <Route path='/Cart' element={<Cart />} />
    <Route path='/HomeCart' element={<HomeCart />} />
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
