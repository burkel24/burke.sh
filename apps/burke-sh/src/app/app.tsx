import { Navbar } from './Navbar';
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
