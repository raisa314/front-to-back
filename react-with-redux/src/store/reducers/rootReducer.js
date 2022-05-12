const in_state={
    count:1234
}

function rootReducer(state=in_state,action)
{
  
    switch(action.type ){

        case 'ADD':{
            return{
                Count: state.count + 1 
            }
        }
        case 'SUB':{
            return{
                Count: state.count - 1
            }
        }

        default :return state
    }
}

export default rootReducer