const initialState = {
    selIndex:-1,
    buttons:[10,50,100,"Q"],
    allbidders:[
        {
            biddername:'Ramesh',
            wallet:3000
        },
        {
            biddername:'Sanjay',
            wallet:5000
        },
        {
            biddername:'Mahender',
            wallet:2000
        },
        {
            biddername:'Kumar',
            wallet:4000
        },
        {
            biddername:'Srikanth',
            wallet:6000
        },
    ]
}
export const bidder = (state=initialState,action)=>{
    if(action.type==="ACCESS"){
        return{...state, selIndex:action.payload}       
    }
    if(action.type==="UPDATEWALLET"){
        if(action.payload !== "Q"){
            var mahi=[...state.allbidders]
            if(mahi[action.index].wallet>=action.payload){
                mahi[action.index].wallet=mahi[action.index].wallet - action.payload;
                return{...state,allbidders:[...mahi]
                };
            };
             
        };
        
    };
    return state;
};