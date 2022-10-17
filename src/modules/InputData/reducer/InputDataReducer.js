import { SET_DATA } from "../action/InputDataAction";

const defaultData={
    id:null,
    name:null,
    price:null,
    qty:null
}

const InputDataReducer = (state = defaultData , action)=>{
    switch(action.type){
        case SET_DATA:
            
            return{
                ...state,
                ...action.payload
            }
    }
}

export default InputDataReducer;