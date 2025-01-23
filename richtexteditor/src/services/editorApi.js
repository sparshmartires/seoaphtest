import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001/api';

export const editorApi = createApi({
  reducerPath: 'editorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    // Mutation for saving editor content
    saveContent: builder.mutation({
      query: (content) => ({
        url: 'editor/save',
        method: 'POST',
        body: { content },
      }),
    }),
    // Query for loading editor content
    loadContent: builder.query({
      query: () => ({
        url: 'editor/load',
        method: 'GET',
      }),
    }),
  }),
});

export const { useSaveContentMutation, useLoadContentQuery } = editorApi;
