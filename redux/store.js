import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reduxfeat/globalslice.js'


export default configureStore({
  reducer: {
            global: globalReducer
           }
})