import { createStore } from "redux";

const initialState= {
    id:'',
    name:'',
    price:'',
    qty:''
};

const reducer = (state = initialState, action) =>{
    if(action.type === 'SET_DATA'){
        return{
            ...state,
            id:action.id,
            name:action.name,
            price:action.price,
            qty:action.qty,
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;