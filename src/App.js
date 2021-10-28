import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import "./app.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
