// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';


import { PageWrapper } from '@burkel24/burke-sh-common';
import { Navbar } from './Navbar';
import { Outlet } from "react-router-dom";

// https://coolors.co/8d94ba-9a7aa0-35ce8d-ff8360-f9dc5c
// https://coolors.co/visualizer/8d94ba-9a7aa0-35ce8d-ff8360-f9dc5c

export function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
