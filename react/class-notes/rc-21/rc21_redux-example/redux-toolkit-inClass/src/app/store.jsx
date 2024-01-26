import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import newsReducer from "../features/newApiSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    newsApi: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //? eger gelistirme asamasi production ise o zaman yukaridaki ifade false dondurur ve dolayisiyla devTool kullanima kapali olur.
})
