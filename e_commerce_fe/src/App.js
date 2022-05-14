import './App.css';
import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import AddItem from "./pages/AddItem";
import 'antd/dist/antd.css';
import Shop from "./pages/Shop";
import UpdateItem from "./pages/UpdateItem";

function App() {
  return (
      <Router>
        <div>
          <Routes>
              <Route exact path="/" element={<AddItem/>} />
              <Route path="/:id/shop" element={<Shop/>} />
              <Route path="/:id/shop/update_item/:item_id" element={<UpdateItem/>} />
          </Routes>



        </div>
      </Router>
  );
}

export default App;
