import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addTocart: (state, action) => {
      // CARI INDEX BERDASARKAN ID YG SAMA
      const itemIndex = state.cartItems.findIndex(
        (item, _) => item.id === action.payload.id
      );

      //   JIKA INDEX SAMA MAKA + 1
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartItemsQuantity += 1;
        // alert("Increased Product Quantity");
      } else {
        // JIKA TIDAK ADA YG SAMA MAKA CUKUP BUAT DATA NYA SAJA
        const tempProduct = { ...action.payload, cartItemsQuantity: 1 };
        state.cartItems.push(tempProduct);
        // alert("Added New Product");
      }
    },

    decrease: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartItemsQuantity > 1) {
        state.cartItems[itemIndex].cartItemsQuantity -= 1;

        // alert("Decreased product quantity");
      } else if (state.cartItems[itemIndex].cartItemsQuantity === 1) {
        const nextcartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextcartItems;

        // alert("Product removed from cart");
      }
    },

    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          alert("Product removed from cart");
        }
        return state;
      });
    },
    clearCart(state, action) {
      state.cartItems = [];
      alert("Cart cleared");
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartItemsQuantity } = cartItem;
          const itemTotal = price * cartItemsQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartItemsQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      // Perbarui nilai state
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = parseFloat(total.toFixed(2));

      return state;
    },
  },
});

export const { addTocart, decrease, removeFromCart, clearCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
