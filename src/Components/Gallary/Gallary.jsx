import React, {  useContext, useEffect, useState } from 'react'
import CounterContext from '../ProviderContext/ProviderContextCounter';


const Gallary = () => {
 let {count,plus}=useContext(CounterContext)
    return ( 
       <div>
            <h2>Counter :{count}</h2>
        <button onClick={plus} className="btn btn-info">change</button>
       </div>
     );
}
 
export default Gallary;