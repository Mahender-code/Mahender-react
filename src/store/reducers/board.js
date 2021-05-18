const initialState = {
    auctionProducts:[
        {
            title:'White Roses',
            baseprice:100
        },
        {
            title:'Tulips',
            baseprice:200
        },
        {
            title:'Sunflowes',
            baseprice:150
        }
    ],
        currentPrice:100
      }
     
export const board = (state=initialState,action)=>{
    if(action.type==="INC"){
        if(action.selAmount!=="Q"){
        return{...state,currentPrice:state.currentPrice+action.selAmount}
    }
}
return state;
}