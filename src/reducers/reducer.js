import {
    ADDTODO, DELETE, TOGGLE,EDIT
    
  } from "../constants/actionsTypes";
  
  const initialState = {
    todos:[],
    isVisible:false
    
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADDTODO:
        return { ...state, todos:[...state.todos, {id:action.id,task:action.text}]};
        case DELETE:
            const newtodos=state.todos.filter((el,i)=>{return i!==action.index} )
        return { ...state, todos:newtodos};
        case TOGGLE:
            return {...state , isVisible:!state.isVisible}
        case EDIT:
                return {...state , todos:state.todos.map((el,i)=>i===action.index?{...el,task:action.text}:el)}
     default:
        return state;
    }
  };
  
  export default reducer; 