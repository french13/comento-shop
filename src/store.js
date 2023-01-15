import { configureStore, createSlice } from "@reduxjs/toolkit";

let basketItem = 0;

if(JSON.parse(localStorage.getItem('basketItem')) ){
   let basketItemQuantity = JSON.parse(localStorage.getItem('basketItem'));
    basketItem = basketItemQuantity.length
}


const basket = createSlice({
    name : "basket",
    initialState : basketItem,
    reducers : {
        basketRender(state, actions){
            return state = state + actions.payload
        },
        basketReset(state){
            return state = 0;
        }
    }
})

export let {basketRender, basketReset} = basket.actions


export default configureStore ({
    reducer : {
        basket : basket.reducer
    }
})