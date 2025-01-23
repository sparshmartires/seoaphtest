// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { editorApi } from '../services/editorApi';
import editorReducer from './editorSlice';

const store = configureStore({
  reducer: {
    editor: editorReducer,
    [editorApi.reducerPath]: editorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(editorApi.middleware),
});


export default store;
