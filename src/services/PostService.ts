import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from 'src/models/IPost';

export const postAPI = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:5000/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    fetchAllUsers: builder.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: '/posts',
        params: { _limit: limit },
      }),
      providesTags: (result) => ['Post'],
    }),
    createPost: builder.mutation<IPost, IPost>({
      //generic  объект который вернется и объект который ожидаем аргументом
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    removePost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});
