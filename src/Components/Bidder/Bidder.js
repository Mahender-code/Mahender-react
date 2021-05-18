import React from 'react';
import { connect } from 'react-redux';
import {updateLog,access,updatewallet,log} from "../../store/actions/actioncreator";
function Bidder(props) {
   const handleClick=(i,v)=>{
       console.log(props)
       props.upcp(i,v)
       props.acc(i)
       props.upwlt(i,v)
       props.lg(props.bidderdetails.biddername,v)
   }
    return (
        <div className="biddertable">
            { props.bidder.buttons.map((v,i)=>{
                return(<button disabled={props.bidder.selIndex === props.index} className={`button${i}`}
                    onClick={()=>{handleClick(props.index,v)}}>{v}</button>)
            })}
        </div>

    );
}
function maptostate(state){
    return state;
}
function maptodispatch(dispatch){
    return{
        upcp:(i,v)=>{
            dispatch(updateLog(i,v))
        },
        acc:(i)=>{
            dispatch(access(i))
        },
        upwlt:(i,v)=>{
            dispatch(updatewallet(i,v))
        },
        lg:(n,v)=>{
            dispatch(log(n,v))
        }

    }
}
export default connect(maptostate, maptodispatch)(Bidder);