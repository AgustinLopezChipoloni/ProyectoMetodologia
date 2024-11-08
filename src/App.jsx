import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Menu from './Menu';
import Venta from './Venta';
import Compra from './Compra';
import Agregarproveedor from './Agregarproveedor';
import Stock from './Stock';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Venta" element={<Venta />} />
        <Route path="/Compra" element={<Compra />} />
        <Route path="/Agregarproveedor" element={<Agregarproveedor />} />
        <Route path="/Stock" element={<Stock />} />
      </Routes>
    </Router>
  );
}
export default App;