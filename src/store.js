import { configureStore, createSlice } from "@reduxjs/toolkit";


const basketItem = JSON.parse(localStorage.getItem('basketItem')) 


const basket = createSlice({
    name : "basket",
    initialState : basketItem.length,
    reducers : {
        basketRender(state, actions){
            return state = state+ actions.payload
        }
    }
})

export let {basketRender} = basket.actions


export default configureStore ({
    reducer : {
        basket : basket.reducer
    }
})