import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {  
               isDarkNav: false
                },
  reducers: {
    toggle_isDarkNav: (state, action) => {
        state.isDarkNav = !state.isDarkNav
    }  
}
})


// Action creators are generated for each case reducer function
export const { toggle_isDarkNav } = globalSlice.actions

export default globalSlice.reducer