import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrease,
  addTocart,
  removeFromCart,
  clearCart,
  getTotals,
} from "../../reducer/cartSlice";
import { MdDelete } from "react-icons/md";
import { useDebugValue } from "react";

function CartPage() {
  const dispatch = useDispatch();
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch, cartTotalAmount, cartTotalQuantity]);

  if (cartItems.length === 0) {
    return (
      <div className="mt-28 flex justify-center items-center flex-col gap-4 w-full">
        <h1 className="font-semibold text-2xl">Add Shopping items</h1>
        <Link to={"/"} className="bg-blue-500 text-white py-1 px-4 rounded-md">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center mt-24 mb-10">
      <div className="w-[1040px] ">
        <h1 className="text-3xl">Shopping Cart</h1>

        <div className="overflow-x-auto mt-8">
          <table className="w-full border-[1px] border-slate-400">
            <thead>
              <tr className="border-b-slate-400 border-b-[1px]">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>

            {cartItems.map((item, index) => (
              <tbody key={index}>
                <tr className="my-5 border-b-[1px] border-b-slate-400">
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <div>{item.name}</div>
                      <img
                        className="w-[70px] h-[70px]"
                        src={item.image}
                        alt="name"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center">Rp {item.price}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex justify-center items-center gap-5">
                      <button
                        onClick={() => dispatch(decrease(item))}
                        className="bg-gray-300 text-white  text-3xl px-2"
                      >
                        -
                      </button>
                      <h1>{item.cartItemsQuantity}</h1>
                      <button
                        onClick={() => dispatch(addTocart(item))}
                        className="bg-gray-300 text-white text-3xl px-1.5"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-center">
                    {item.price * item.cartItemsQuantity}
                  </td>
                  <td className="px-4 py-2 text-center flex justify-center mt-10">
                    <MdDelete
                      onClick={() => dispatch(removeFromCart(item))}
                      fontSize={20}
                      color="red"
                      className="cursor-pointer "
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className="flex justify-between w-full mt-5">
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-orange-600 w-[130px] h-[40px] text-white rounded-md "
          >
            Clear Cart
          </button>

          <div className="">
            <div className="flex items-center gap-2 hover:text-orange-500 duration-300 ">
              {/* <Link to="/" className="flex items-center gap-4">
                    <BsArrowLeft />
                    <h1>Continue Shopping</h1>
                  </Link> */}
            </div>

            <div className="mt-2 w-[400px] flex flex-col gap-3">
              {/* <h1>Cart Items(s):{cartData.length}</h1> */}
              <div className="flex justify-between text-2xl">
                <h1>Subtotal</h1>
                <div className="text-orange-500">{cartTotalAmount}</div>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 duration-300 text-white p-2 rounded-md ">
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
