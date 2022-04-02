
import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
name: 'CalculatorSlice',
initialState: {
    display: 0
},
reducers: {
    changeDisplay: (state, action) => {
        let newState = Object.assign({}, state);
        newState.display = action.payload;
        return newState;
    }, 
    reset: (state) => {
        return {
            display: 0
        };
    }
}
})

export const { changeDisplay, reset} = Slice.actions;

export default Slice.reducer;