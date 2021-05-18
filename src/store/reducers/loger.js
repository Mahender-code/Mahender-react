const initialState = {
    log:[]
};
export const logger = (state=initialState,action)=>{
    if(action.type==="LOG"){
        var newdata=[
            {
            bname:action.name,
            price:action.selAmount
        }
        ];
        return{
            ...state,
            log:[...state.log,newdata]
        };
    };
    return state
};