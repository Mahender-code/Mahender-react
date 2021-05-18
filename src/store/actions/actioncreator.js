export function updateLog(i,v){
    return{type:"INC",selAmount:v,index:i};
};
export function access(index){
    return{type:"ACCESS",payload:index};
};
export function updatewallet(i,v){
    return{type:"UPDATEWALLET",payload:v,index:i};
};
export function log(name,v){
    return{type:"LOG",name:name,selAmount:v}
}