import './App.css';
import {
    BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import Item from "./components/Item";
import 'antd/dist/antd.css';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Item/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
