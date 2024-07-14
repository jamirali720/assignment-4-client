import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {TProduct} from 'types/types'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/sports" }),
  endpoints: (builder) => ({
    createSports: builder.mutation<TProduct, Partial<TProduct>>({
      query: (data) => ({
        url: `/create-sports`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateSportsMutation } = productsApi;
