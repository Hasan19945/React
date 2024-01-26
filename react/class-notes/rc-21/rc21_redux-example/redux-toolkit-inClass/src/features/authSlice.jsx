import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: { email: "", password: "" },
}

//? Slice ile bir global state'in hem action type'lari , hem action creator fonksiyonlarini hem de reducer'i tek bir hamlede olusturabiliriz.

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //? action creator fonks. ve reducer icin
    setUser: function (state, { payload }) {
      state.user = payload
    },
    clearUser: (state) => {
      state.user = { email: "", password: "" }
    },
  },
})

//? olusan action fonksiyonları sliceAdi.actions 'dan destructure edilerek export edilir.
export const { setUser, clearUser } = authSlice.actions

//? yazilan slice'in reducer'i sliceAdi.reducer seklinde export edilmelidir.
export default authSlice.reducer
