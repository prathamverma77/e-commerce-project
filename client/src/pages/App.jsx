import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pagenotfound from "./Pagenotfound";
import Aboutus from "./Aboutus";
import CartPage from "./CartPage";
import Policy from "./Policy";
import Contactus from "./Contactus";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import Dashboard from "../pages/user/Dashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Adminroute from "../components/routes/AdminRoute";
import PrivateRoute from "../components/routes/PrivateRoute";
import CreateCategory from "../pages/admin/CreateCategory";
import CreateProduct from "./admin/CreateProduct";
import Products from "./admin/Products";
import UpdateProduct from "./admin/UpdateProduct";
import Profile from "./user/Profile";
import Users from "./admin/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/pagenotfound" element={<Pagenotfound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          {/* <Route path="user/orders" element={<Orders />} /> */}
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<Adminroute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />

          {/* <Route path="admin/orders" element={<AdminOrders />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
