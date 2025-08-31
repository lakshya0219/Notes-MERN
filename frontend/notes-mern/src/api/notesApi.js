import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notesApi = createApi({
  reducerPath: "notesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["Notes"],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => "notes",
      providesTags: ["Notes"],
    }),
    addNote: builder.mutation({
      query: (note) => ({
        url: "notes",
        method: "POST",
        body: note,
      }),
      invalidatesTags: ["Notes"],
    }),
    updateNote: builder.mutation({
      query: ({ id, ...note }) => ({
        url: `notes/${id}`,
        method: "PUT",
        body: note,
      }),
      invalidatesTags: ["Notes"],
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notes"],
    }),
  }),
});

export const { 
  useGetNotesQuery, 
  useAddNoteMutation, 
  useUpdateNoteMutation, 
  useDeleteNoteMutation 
} = notesApi;
