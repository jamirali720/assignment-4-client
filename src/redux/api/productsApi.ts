import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  TContact,
  TProduct,
  TQuery,
  TResponse,
  TReview,
  TSingleResponse,
} from "types/types";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-4-server-bice.vercel.app/api/sports",   
  }),
  tagTypes: ["sports"],
  endpoints: (builder) => ({
    createSports: builder.mutation<TProduct, Partial<TProduct>>({
      query: (data) => {
        console.log(data);
        return {
          url: "/create-sports",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllSports: builder.query<TResponse, TQuery>({
      query: (query) => {
        const link = `/sports?name=${query.name}&page=${query.page}&limit=${query.limit}&category=${query.category}&price[gte]=${query.minPrice}&price[lte]=${query.maxPrice}&brand=${query.brand}&ratings[gte]=${query.ratings}&sort=${query.sort}`;
        return {
          url: link,
          method: "GET",
        };
      },
      providesTags: ["sports"],
    }),
    getSingleSports: builder.query<TSingleResponse, string>({
      query: (id) => {
        return {
          url: `/single-sports/${id}`,
          method: "GET",
        };
      },
      providesTags: ["sports"],
    }),
    updatedSingleSports: builder.mutation<TSingleResponse, Partial<TProduct>>({
      query: (data) => {
        return {
          url: `/update-sport`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["sports"],
    }),
    deletedSingleSports: builder.mutation<TSingleResponse, string>({
      query: (id) => {
        return {
          url: `/delete-sport/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["sports"],
    }),
    getSports: builder.query<TResponse, void>({
      query: () => {
        return {
          url: `/related-sports`,
          method: "GET",
        };
      },
      providesTags: ["sports"],
    }),
    getLatestSports: builder.query<TResponse, void>({
      query: () => {
        return {
          url: `/latest-sports`,
          method: "GET",
        };
      },
      providesTags: ["sports"],
    }),
    updatedStockWithCashOnDelivery: builder.mutation({
      query: (body) => {
        return {
          url: `/update-cash-on-delivery`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["sports"],
    }),
    createReview: builder.mutation<TResponse, TReview>({
      query: ({ id, ...data }) => {
        return {
          url: `/create-review/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["sports"],
    }),
    contactEmailSend: builder.mutation<TResponse, TContact>({
      query: (data) => {
        return {
          url: "/contact",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useCreateSportsMutation,
  useGetSportsQuery,
  useCreateReviewMutation,
  useGetAllSportsQuery,
  useGetSingleSportsQuery,
  useUpdatedSingleSportsMutation,
  useDeletedSingleSportsMutation,
  useContactEmailSendMutation,
  useUpdatedStockWithCashOnDeliveryMutation,
  useGetLatestSportsQuery,
} = productsApi;
