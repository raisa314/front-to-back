import './App.css';

import { createStore } from 'redux'
function App() {
  
  const reducer= (state={},action)=>{
    if(action.type==='good'){
      return{
        ...state,
        next:" going for react redux & react-redux counter"
      }
    }
    else if(action.type==="wow"){
      return{
        ...state,
        sorry:"bad timing"
      }
    }
    return state
  }

  const store=createStore(reducer)

  store.subscribe(()=>{
    console.log(store.getState().next)
  })
  store.subscribe(()=>{
    console.log(store.getState().sorry)
  })
  store.dispatch({type:"some"})
  store.dispatch({type:"good"})
  store.dispatch({type:"some"})
  store.dispatch({type:"wow"})

  return (
    <div className="App">
   <h2>hi all good</h2>
  </div>
  )
}

export default App;
