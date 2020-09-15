import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from  './components/Input';
import EditInput from  './components/EditInput';
import {useDispatch,useSelector, connect} from "react-redux";
import { removeTask, toggle } from './actions/actions';

function App() {

  const listtodos= useSelector((state) => state.todos);
  const visibility=useSelector((state) => state.isVisible);
  
  const dispatch = useDispatch();


  return (
    <div>
      <Input/>
      
      <div id="listtodo">
      <ul>
      {listtodos.map((el,i)=>(
      <>
      <li key={i}>{el.task}<button onClick={()=>{dispatch(removeTask(i))}}>x</button>
      <button onClick={()=>dispatch(toggle())}>Edit</button>{visibility?(<EditInput i={i}/>):null}</li>
      
      
      
      </>
      ))}
      </ul>
      </div>
      



    </div>
  );
}

export default connect() (App);
