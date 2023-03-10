import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload
      const { price, quantity } = product

      state.quantity += 1
      state.products.push(product)
      state.total += price * quantity
    }
  }
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer
