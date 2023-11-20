import React, { useEffect } from "react";
import { dataShopping } from "./dataShopping";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, getTotals } from "../../reducer/cartSlice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();

  const { cartTotalQuantity, cartItems } = useSelector((state) => state.cart);

  console.log("total : ", cartTotalQuantity);

  useEffect(() => {
    getTotals();
  }, [cartTotalQuantity, cartItems]);

  return (
    <div className="flex justify-center items-center mt-10 w-full">
      <div className="w-[1040px] my-10">
        <div className="w-full flex flex-wrap gap-4">
          {dataShopping.map((item, index) => (
            <div
              className="w-[250px] h-[300px] shadow-md rounded-md flex flex-col justify-center items-center gap-2 p-2"
              key={index}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full bg-cover h-[200px]"
              />
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <Link to={"/cart"} onClick={() => dispatch(addTocart(item))} className="w-full text-center" >
                <div className="bg-orange-500 text-white w-full py-2 rounded-md">
                  Add To Cart
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
