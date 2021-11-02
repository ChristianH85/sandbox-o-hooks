import React, {useState, useRef} from 'react';

const UseRef = () => {
  const [count, setCount] = useState(0);
  const inputEl = useRef(null);

  const onClick = () => {
    setCount(count + 1);
    
    inputEl.current.focus();
  };

  return (
    <div className='content'>
      <br/>
      <input ref={inputEl} />
      <button onClick={onClick}>{count}</button>
      <hr/>
      <h3>Hooks:</h3> 
        <div >
            <code className='code-block'>const [count, setCount] = useState({count});</code>
           <br/>
            <code className='code-block'>const inputEl = useRef(</code>
            {inputEl.current? <code className='code-block'>{`   current.value : ${inputEl.current.value}` ||null}</code>
                :null}
            <code className='code-block'>   );</code>
        </div>
        <h3>HTML:</h3> 
        <div >
            <code className='code-block htmlBlock'>{`<input ref={inputEl} />`}</code>
            <br/>
            <code className='code-block htmlBlock'>{`<button onClick={onClick}>{count}</button>`}</code>
        </div>
      <div>
      <h3>Usage</h3>    
        <code className='code-block usage'>
          {`
const onClick = () => {
    setCount(${count} + 1);
    inputEl.current.focus();
    };
            `}
        </code>
      </div>
      <h4>What Happened:</h4> 
        <div >
            <p className='code-block pBlock'>When the button is clicked the input attached to our useRef is focused on and the state of the click count is incremented by 1</p>
        </div>
    </div>
    
  );
}
export default UseRef;