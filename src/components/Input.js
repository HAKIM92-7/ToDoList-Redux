import React from "react";
import {useDispatch, connect} from "react-redux";

import {addtodo} from "../actions/actions";

const Input = () => {
  let input1
  
  const dispatch = useDispatch();
  

  

  return (
    <div>
    <form onSubmit={(e)=>{
      
      e.preventDefault()
      if (!input1.value.trim()) {
        return
      }
      
      dispatch(addtodo(input1.value))
      input1.value =''
      
      }}>


    <input ref={node => (input1 = node)}/>

    <input type="submit" value="add"/>
    </form> 
    </div>); 
    

}

export default connect()(Input);