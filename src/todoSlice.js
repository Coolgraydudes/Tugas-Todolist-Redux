import { createSlice } from "@reduxjs/toolkit";


let id = 1;

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        listTugas:[],
    },
    reducers: {
        tambahTugas: (state, action) => {
            state.listTugas.push(action.payload)
        },
        hapusSemua: (state) => {
            state.listTugas = [];
        }
     }
})

export const {tambahTugas, hapusSemua} = todoSlice.actions;
export default todoSlice.reducer;