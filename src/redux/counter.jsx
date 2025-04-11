import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }, 
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }, 
    decrementByAmount: (state, action) => {
      state.count -= action.payload
    },
    multiplyByAmount: (state, action) => {
      state.count *= action.payload
    }, 
    divideByAmount: (state, action) => {
      state.count /= action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount, multiplyByAmount, divideByAmount } = counterSlice.actions

export default counterSlice.reducer