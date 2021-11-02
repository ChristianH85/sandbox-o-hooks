import React, {useState} from "react";
import Child1 from './Child1'
import Child2 from "./Child2";
import './props.css'
const Parent = () => {
  const [name, setName] = useState("");
  return (
  <div className='content'>
    <div className='parent'>
      <h3>I am the Parent</h3>
      <div className='row'>
        <div className='col-sm-6'><Child1 setName={setName}/></div>
        <div className='col-sm-6'><Child2 word={name}/></div>
      </div>
    </div>
    <h5>Parent Code</h5>
    <code className='code-block'>
{`
const Parent = () => {
    const [name, setName] = useState("");
    return (
        <div className='parent'>
            <h3>I am the Parent</h3>
            <div className='row'>
                <div className='col-sm-6'><Child1 setName={setName}/></div>
                <div className='col-sm-6'><Child2 word={name}/></div>
            </div>
        </div>
            );
            }
            export default Parent;
            `}
        </code>
        <h5>Child1 Code</h5>
        <code className='code-block'>
{`
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
`}
        </code>
        <h5>Child2 Code</h5>
        <code className='code-block'>
{`
const Child2 = ({word}) => {
  
    return (
      <div className='child2'>
        <h5>Child #2</h5>
        <p>see here:</p>
        <h6>{word}</h6>
      </div>
    );
  }
  export default Child2;
`}
        </code>
        <h5>What Happened</h5>
        <p className=' code-block pBlock'> When we change the text in Child1's input we use a function provided as props to update its parent. When the parents state is changed so are the props it passed to Child2.</p>
    </div>
  );
}
export default Parent;