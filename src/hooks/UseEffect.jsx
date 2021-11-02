import React,{useState,useEffect} from 'react';

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    const [eCount, setECount] = useState(0);
    useEffect(() => {
        console.log('useEffect');
    });
    useEffect(() => {
        console.log('useEffect w/ []');
        setECount(eCount+1);
    },[]);
    useEffect(() => {
        console.log('useEffect only count');
        
    },[count]);
    return (
        <div>
            <h3>Open console to see Effect</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>
                Click {count} times
            </button>
            <h3>Hooks:</h3> 
        <div > 
            <code className='code-block hooks'>const [count, setCount] = useState({count});</code>
            <br/>
            <code className='code-block hooks'>const [name, setName] = useState({name});</code>
            <br/>
            <code className='code-block hooks'>const [eCount, setECount] = useState({eCount});</code>
        </div>
        <h3>HTML:</h3> 
        <div >
            <code className='code-block htmlBlock'>{`<input type="text" value={name} onChange={e => setName(e.target.value)} />`}</code>
            <br/>
            <code className='code-block htmlBlock'>{`<button onClick={() => setCount(count + 1)}>`}</code>
        </div>
      
      <div>
      <h3>Usage</h3>    
        <code className='code-block usage'>
        {`
useEffect(() => {
    console.log('useEffect');
        });
            `}
        </code>
        <br/>
        <code className='code-block usage'>
            {`
useEffect(() => {
    console.log('useEffect');
    setECount(eCount+1);
        },[]);
            `}
        </code>
        <br/>
        <code className='code-block usage'>
            {`
useEffect(() => {
    console.log('useEffect only count');
        },[count]);
            `}
        </code>
      </div>
      <h4>What Happened:</h4> 
        <div >
            <p className='code-block pBlock'>When the button is clicked click count is incremented by 1 triggering only our count based effect. The empty array useEffect only fires on mounting. The useEffect with no dependancy array fires on every state change</p>
        </div>
        </div>
    );
}
export default UseEffect;