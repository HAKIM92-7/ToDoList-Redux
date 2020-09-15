import React from "react";
import {useDispatch, connect} from "react-redux";
import { toggle, editTask } from "../actions/actions";



const EditInput = ({i}) => {
  let input
  
  const dispatch = useDispatch();
  

  

  return (
    <div>
    <form onSubmit={(e)=>{
      
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(toggle());
      dispatch(editTask(i,input.value))
      
      input.value =''
      
      }}>


    <input ref={node => (input= node)}/>

    <input type="submit" value="edit"/>
    </form> 
    </div>); 
    

}

export default connect()(EditInput);