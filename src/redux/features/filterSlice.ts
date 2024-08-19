import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi";
import { Inputs } from "types/types";
import { RootState } from "redux/store";

type TState = {
  filteredProducts: Inputs[];
  allProducts: Inputs[];
  searchTerm: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  limit: number;
  page: number;
  brand: string; 
  ratings: number;
  sort: string;
};

const initialState: TState = {
  filteredProducts: [], 
  allProducts: [],
  searchTerm: "",
  category: "All",
  minPrice: 0,
  maxPrice: 225000,
  limit: 5,
  page: 1,
  brand: "All", 
  ratings: 0,
  sort: "asc",
 
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {    
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setPrice: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },    
    setBrand: (state, action) => {
      state.brand = action.payload;
    },          
    setRating: (state, action) => {
      state.ratings = action.payload;
    },
    setSorting: (state, action) => {
      state.sort = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    clearFilters: (state) => {
      state.limit = 5;
      state.page = 1;
      state.category = "All";
      state.minPrice = 0;
      state.maxPrice = 250000;
      state.brand = "All";
      state.ratings = 0;
      state.sort = "asc";
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getAllSports.matchFulfilled,
      (state, action) => {       
        state.filteredProducts = [...action.payload.data];
      }
    );   
    builder.addMatcher(
      productsApi.endpoints.getSports.matchFulfilled,
      (state, action) => {       
        state.allProducts = [...action.payload.data];       
      }
    );   
  },
});

export const {
  setSearchTerm,
  setPage,
  clearFilters,
  setPrice,
  setLimit,
  setBrand,
  setRating,
  setSorting,
  setCategory,
 
} = filterSlice.actions;

export default filterSlice.reducer;
export const filteredProducts = (state: RootState) => state.filter.filteredProducts;
export const allProducts = (state: RootState) => state.filter.allProducts;




