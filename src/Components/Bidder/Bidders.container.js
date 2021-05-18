import React from 'react';
import { connect } from "react-redux";
import Bidder from './Bidder';
function BiddersContainer(props) {
    return (
        <div className="mainbidd">
            
            {
             props.bidder.allbidders &&
              props.bidder.allbidders.map((b,i)=>{
                  return(<div><Bidder bidderdetails={b} index={i} walle={b.wallet}>
                      
                    </Bidder><center>{b.biddername}:<strong>₹{b.wallet}</strong></center></div>)
              })  
            }
        </div>
    );
}

export default connect(store=>store)(BiddersContainer);