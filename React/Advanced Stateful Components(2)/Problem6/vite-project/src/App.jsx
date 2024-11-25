import { useReducer} from 'react'

function App() { 
  let data = {
    email: '',
    password: '',
    submit:false
  };
  let [state,dispatch]= useReducer(reducer,data);
  function reducer(state,action){
        switch(action.type){
          case "email":return {...state,email:action.payload};
          case "password": return {...state,password:action.payload};
          case "submit":if((state.email==="" || state.password==="")){
            alert("Both fields are required");
            return {...state,submit:false};
          }
          alert(`Submitted: Email - ${state.email}, Password - ${state.password}`);
            return {...state,submit:true};
          case "reset": return data;
          default: alert('invalid action type');
                  return state;
        }
  }
  function handlesubmit(e){
      e.preventDefault();
      dispatch({ type: 'submit' });

    };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <span>Email:</span>
        <input type="email" value={state.email } onChange={(e)=>{
          dispatch({type:"email",payload:e.target.value});
        }} />
        <span>Password:</span>
        <input type="password" value={state.password} onChange={(e)=>{
          dispatch({type:"password",payload:e.target.value});
        }} />
        <button>Submit</button>
        <button type='button' onClick={()=>{
          dispatch({type:"reset"})
        }}>Reset</button>
      </form>
      {
        state.submit? (
          <div>
            <div>User Email: {state.email}</div>
            <div>User Password: {state.password}</div>
          </div>
        ) : (
          <div>No details found</div>
        )
      }
    </>
  )
}

export default App
