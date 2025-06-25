import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";


export default function MainLayout() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  return (
    <main >
      <Header isMenuCollapsed={isMenuCollapsed} setIsMenuCollapsed={setIsMenuCollapsed} />
      <Sidebar isMenuCollapsed={isMenuCollapsed} setIsMenuCollapsed={setIsMenuCollapsed} />
      <div className={isMenuCollapsed ? "block" : "hidden"}>
        <Outlet />
      </div>
    </main>
  );
}