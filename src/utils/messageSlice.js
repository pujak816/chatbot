import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {},
  reducers: {
    message: (state, action) => {},
  },
});

export const {} = messageSlice.actions;
export default messageSlice.reducer;
