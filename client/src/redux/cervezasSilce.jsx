// import { createSlice } from "@reduxjs/toolkit";


// export const cervezasSlice = createSlice({
//     name: "cervezas", 
//     initialState: {
//         cervezas: [],
//         detail: [],
    
//     },
//     reducers:{
//         getAllBeer: (state, action) => {
//             state.cervezas = action.payload
//         }, 
//         detailBeer: (state, action) => {
//             state.detail = action.payload
//         }
//     }
// })
// export const {getAllBeer, detailBeer} = cervezasSlice.actions
// export default cervezasSlice.reducer

// import { createSlice } from "@reduxjs/toolkit";

// const cervezasSlice = createSlice({
//     name: "cervezas", 
//     initialState: [],
//     reducers:{
//         getAllBeer: (state, action) => {
//             state.cervezas = action.payload
//         }, 
//         detailBeer: (state, action) => {
//             state.detail = action.payload
//         }
//     }
// })

// const detailSlice = createSlice({
//     name: "detail",
//     initialState: [],
//     reducers: {
//         detailBeer: (state, action) => {
//             state = action.payload
//         }
//     }
// })

// export const { getAllBeer } = cervezasSlice.actions;
// export const { detailBeer } = detailSlice.actions;
// export default { cervezas: cervezasSlice.reducer, detail: detailSlice.reducer };
import { createSlice } from "@reduxjs/toolkit";

export const cervezasSlice = createSlice({
    name: "cervezas", 
    initialState: {
        cervezas: [],    
    },
    reducers:{
        getAllBeer: (state, action) => {
            state.cervezas = action.payload;
            console.log("Cervezas obtenidas:", action.payload);
        }, 
        detailBeer: (state, action) => {
            state.cervezas = action.payload;
        },
        precarga: (state, action) => {
            state.cervezas = action.payload
            console.log("Carga de json", action.payload)
        }
    }
});

export const { getAllBeer, detailBeer, precarga } = cervezasSlice.actions;
export default cervezasSlice.reducer
