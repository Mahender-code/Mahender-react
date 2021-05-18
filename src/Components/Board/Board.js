import React from 'react';
import {connect} from "react-redux";
function Board(props) {
  
    return( 
        <div>
        <div className="board">
            <h2>Board</h2>
            <p><strong>{props.board.auctionProducts[1].title}</strong></p>
          <h2>CurrentPrice:₹<strong>{props.board.currentPrice}</strong></h2>

        </div>
        BasePrice:<strong>{props.board. auctionProducts[1].baseprice}</strong>
      </div>  
    );
}

export default connect(store=>store)(Board);