


let initial_state = "departure"


const authReducer = (state=initial_state,action)=>{
    switch(action.type){
        case "departure":

        return {departure:action.payload}

      
        default:
            return state
    }
  
  
    
}

// export default reduucer (state=initial_state ,actions) =>{
//     switch(actions.type){

//         case "Select departure & destination":

//         const {current, all_departure,} = state;

//         default:
//             return state
      
//     }
// }