import {
    ADDTODO,DELETE, TOGGLE , EDIT
   
  } from "../constants/actionsTypes";
   var elementId=0;
  export const addtodo = (text) => {
    return { type: ADDTODO,text,
    id:elementId++};
  };
  
  
  export const removeTask = (index) => {
    return { type:DELETE,index};
  };

  export const toggle=()=>{

return {type:TOGGLE}


  }

  export const editTask = (index,text) => {
    return { type:EDIT,index,text};
  };