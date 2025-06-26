import { Outlet } from "react-router-dom";
import Navbar from "./navbar.jsx";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
