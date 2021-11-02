import React, {useState} from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <br/>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h3>Hooks:</h3> 
        <div >
            <code className='code-block hooks'>const [count, setCount] = useState({count});</code>
            
        </div>
        <h3>HTML:</h3> 
        <div >
            <code className='code-block htmlBlock'>{`<p>You clicked {count} times</p>`}</code>
            <br/>
            <code className='code-block htmlBlock'>{`<button onClick={() => setCount(count + 1)}>`}</code>
        </div>
      
      <div>
      <h3>Usage</h3>    
        <code className='code-block usage'>
        {`onClick={() => setCount(count + 1)}`}
        </code>
      </div>
      <h4>What Happened:</h4> 
        <div >
            <p className='code-block pBlock'>When the button is clicked the state of the click count is incremented by 1</p>
        </div>
    </div>
  );
}
export default UseState;