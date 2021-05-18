import React from 'react';
import {connect} from "react-redux";
function Entry(props) {
    
    return (
        <div style={{border:"1px solid purple",width:"20%",padding:"10px",borderRadius:"20px",overflow: 'auto', height: '300px'}}>
            <h3>LOGGER</h3>
            <table border="2" cellPadding="10px" cellSpacing="0">
                <thead>
                    <tr>
                        <td><strong>NAME</strong></td>
                        <td><strong>PRICE</strong></td>
                    </tr>
                </thead>
                <tbody>
                {props.logger.log && props.logger.log.map((v,i)=>{
                    return(
                        <tr key={i}>
                            <td>{v[0].bname}</td>
                            <td>{v[0].price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
   
}

export default connect(store=>store)(Entry);