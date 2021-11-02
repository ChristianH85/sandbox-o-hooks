import React, {useState,useMemo} from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const memoizedValue = useMemo(() => {
    return count + name.length;
  }, [count, name]);

  return (
    <div className='content'>
      <p>
        <button onClick={()=> setCount(count + 1)}>Click</button>
      </p>
      <p>
        <input type="text" onChange={(e)=> setName(e.target.value)} />
      </p>
      <p>
        <span>Memo:{memoizedValue}</span>
      </p>
      <h3>Hooks:</h3> 
        <div >
            <code className='code-block hooks'>const [count, setCount] = useState({count});</code>
            <br/>
            <code className='code-block hooks'>const [name, setName] = useState({name});</code>
        </div>
        <h3>HTML:</h3> 
        <div >
            <code className='code-block htmlBlock'>{`<button onClick={()=> setCount(count + 1)}>Click</button>`}</code>
            <br/>
            <code className='code-block htmlBlock'>{`<input type="text" onChange={(e)=> setName(e.target.value)} />`}</code>
        </div>
      
      <div>
      <h3>Usage</h3>    
        <code className='code-block usage'>
          {`
const memoizedValue = useMemo(()=> {
    return count + name.length;
    }, [count, name]);`}
        </code>
      </div>
      <h4>What Happened:</h4> 
        <div >
            <p className='code-block pBlock'>When the button is clicked or the input is changed our state is updated and useMemo is triggered to calculate a value. useMemo uses cached memory to store values. This is particularily helpful with time consuming functions. Do not overuse as it can hog device memory and slow app</p>
        </div>
    </div>
  );
}
export default UseMemo;