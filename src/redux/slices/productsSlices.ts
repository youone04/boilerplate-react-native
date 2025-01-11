import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../../config/api';

interface ProducsState {
  products: Array<any>;
  loading: boolean;
  error: string | null;
}

const initialState: ProducsState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProductsThunk = createAsyncThunk('products/fetchProducts', async () => {
  return await fetchProducts();
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProductsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch product';
    });
  },
});

export default productsSlice.reducer;