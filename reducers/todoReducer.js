const initState = {
    todos: [{task:"dkfg ejijiej ijwijijjt"},{task:"uehjfjf jhehigf hfhjgj"},{task:"bjebfjejhfjen"},{task:"todo project"},{task:"react erdux react native"}]

  }
  
  const todoReducer = (state = initState, action) => {
    console.log(action);

    if(action.type === 'DELETE_TODO'){
      //alert("we willd delete")
      let newTodos = state.todos.filter((todo,index) => {
        return index !== action.id
      });
      return {
        ...state,
        todos: newTodos
      }
      
    }else if(action.type === 'ADD_TODO'){
     console.log(action.task)
     // alert("WE WILL ADD TODO")
      return {
        ...state,
        todos:[...state.todos,action.task]
      }


    }

    return state;
  }
  
  export default todoReducer




  