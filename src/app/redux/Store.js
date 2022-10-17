import { createStore } from "redux";
import InputDataReducer from "../../modules/InputData/reducer/InputDataReducer";


const store = createStore(InputDataReducer);


export default store;



// const reducer = (state = initialState, action) =>{
//     if(action.type === 'SET_DATA'){
//         return{
//             ...state,
//             id:action.id,
//             name:action.name,
//             price:action.price,
//             qty:action.qty,
//         }
//     }
//     return state;
// }