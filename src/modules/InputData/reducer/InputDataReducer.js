import { SetData } from "../action/InputDataAction";

const defaultData={
    id:null,
    name:null,
    price:null,
    qty:null
}

const InputDataReducer = (state = defaultData , action)=>{
    if(action.type === 'SET_DATA'){
        return{
            ...state,
            ...action.payload
            // id:action.id,
            // name:action.name,
            // price:action.price,
            // qty:action.qty,
        }
    }
}

export default InputDataReducer;