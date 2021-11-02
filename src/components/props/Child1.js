import React from "react";

const Child1 = ({setName}) => {
  
  return (
    <div className='child1'>
      <h5>Child #1</h5>
      <p>type here:</p>
      <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
    </div>
  );
}
export default Child1;