import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { BsFillMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getTotals } from "../../reducer/cartSlice";

function Navbar() {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };

  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="w-full flex justify-center items-center bg-orange-300 fixed left-0 top-0  h-[70px]">
      <div className="w-[1040px] py-5 flex justify-between items-center ">
        <NavLink to="/" className="select-none">
          CRUD App
        </NavLink>

        <menu className="flex justify-around gap-3 items-center ">
          <NavLink
            to="/"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </NavLink>

          <NavLink to="/cart">
            <div className="flex hover:text-blue-500 transition-all duration-300">
              <h1>Cart</h1>
              <div className="relative ">
                <FaShoppingCart fontSize={20} />

                <span className="absolute top-[-10px] right-[-12px] bg-orange-500 text-white rounded-full font-bold text-sm px-0.5">
                  {cartTotalQuantity}
                </span>
              </div>
            </div>
          </NavLink>

          {/* <div className="transition-all" onClick={handleMode}>
          {mode ? (
            <BsFillMoonStarsFill className="cursor-pointer" />
          ) : (
            <BsMoonStars className="cursor-pointer" />
          )}
        </div> */}
        </menu>
      </div>
    </div>
  );
}

export default Navbar;
