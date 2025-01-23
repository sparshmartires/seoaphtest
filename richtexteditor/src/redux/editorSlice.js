// src/redux/editorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    content: '', // Initial state for the editor content
  },
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setContent } = editorSlice.actions;
export default editorSlice.reducer;
