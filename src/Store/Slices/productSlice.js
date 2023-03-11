import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductApi_URL } from '../../Constants/Constant';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await fetch(ProductApi_URL);
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
