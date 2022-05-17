import './App.css';
import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import AddItem from "./pages/AddItem";
import 'antd/dist/antd.css';
import Shop from "./pages/Shop";
import UpdateItem from "./pages/UpdateItem";
import PaymentMain from "./pages/PaymentMain";
import '../src/assets/uditha.css';
import "../src/assets/mahen.css";

function App() {
  return (
      <Router>
        <div>
          <Routes>
              <Route exact path="/" element={<Shop/>} />
              <Route exact path="/add_item" element={<AddItem/>} />
              <Route path="/:id/shop" element={<Shop/>} />
              <Route path="/:id/shop/update_item/:item_id" element={<UpdateItem/>} />
              <Route exact path="/payment" element={<PaymentMain/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
