import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "enrollment",
  initialState: {
    name: "",
    age: "",
    isEnrolled: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    enroll: (state) => {
      state.isEnrolled = true;
    },
  },
});

export const { setName, setAge, enroll } = studentSlice.actions;
export default studentSlice.reducer;
