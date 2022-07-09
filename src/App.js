// import logo from './logo.svg';
import "./App.css";
// import MovieDetails from "./MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./frontView/Layout";
// import Navigation from "./shared/Navigation";
import Home from "./frontView/Home";
import About from "./frontView/About";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import User from "./admin/User";
import Login from "./frontView/Login";
// import Register from "./frontView/Register";
import Products from "./admin/Products";
import Offers from "./admin/Offers";
import AddProducts from "./admin/AddProducts";
import ViewProducts from "./admin/ViewProducts";
import Orders from "./admin/Orders";
import AddCategory from "./admin/AddCategory";
import ProductEdit from "./frontView/ProductEdit";
import ProductDescription from "./frontView/ProductDescription";
import CreateUser from "./CreateUser";
import AddtoCart from "./frontView/AddtoCart";
import Search from "./frontView/Search";
import AddressForm from "./frontView/AddressForm";
import AddCoupons from "./admin/AddCoupons";
import Wishlist from "./frontView/Wishlist";
// import AddressEdit from "./frontView/AddressEdit";
// import MovieList from "./MovieList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/Wishlist" element={<Wishlist />}></Route>  
          <Route path="/about" element={<About />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/CreateUser" element={<CreateUser />}></Route>
          <Route path="/AddtoCart" element={<AddtoCart />}></Route>
          <Route path="/AddtoCart/addressform" element={<AddressForm />}></Route>
          <Route path="/ProductDescription/:id" element={<ProductDescription />}>
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/user" element={<User />}></Route>
          <Route path="/admin/products" element={<Products />}></Route>
          <Route path="/admin/offer" element={<Offers />}></Route>
          <Route path="/admin/offer/coupons" element={<AddCoupons />}></Route>
          <Route path="/admin/orders" element={<Orders />}></Route>
          <Route path="/admin/addproducts" element={<AddProducts />}></Route>
          <Route path="/admin/viewproducts" element={<ViewProducts />}></Route>
          <Route path="/admin/addcategory" element={<AddCategory />}></Route>
          <Route
            path="/admin/viewproducts/ProductEdit/:id"
            // path="/admin/addproducts/ProductEdit/:id"
            element={<ProductEdit />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>

    // <div>

    //   <MovieList/>
    //   <MovieDetails/>
    // </div>
  );
}

export default App;
