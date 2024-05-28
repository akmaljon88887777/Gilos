import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="bg-black text-white w-full h-16 items-center flex justify-around">
        <div>AAAA</div>
        <div className="flex gap-3">
          <div>AAAA</div>
          <div>AAAA</div>
          <div>AAAAA</div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;
