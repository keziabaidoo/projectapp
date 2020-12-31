import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
   departure: [
    { id: 1, key: "Abidjan,Felix,Houphouet Boigny,ABJ", title: "(ABJ)" },
      { id: 2, key: "Abuja,Nnamdi,Azikiwe,Intl Airport,ABV", title: "(ABV)" },
      { id: 3, key: "Accra,Kotoka Intl Airport,ACC", title: "(ACC)" },
      { id: 4, key: "Freetown,Lungi Intl Airport,FNA", title: "(FNA)" },
      { id: 5, key: "Kumasi,Airport,KMS", title: "KMS" },
      { id: 6, key: "Lagos,Mohammed Murtala Intl Airport,LOS", title: "(LOS)" },
      { id: 7, key: "Monrovia,Roberts Intl Airport,ROB", title: "(ROB)" },
      { id: 8, key: "Takoradi Airport,TKD", title: "(TKD)" },
      { id: 9, key: "Tamale Airport,TML", title: "(TML)" },
      { id: 10, key: "Wa Airport,WZA", title: "(WZA)" },
  ],
    
};

const departuresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   case "select_Departure":
    const {
        current,
        departure,
      } = state;
   

   const selecteddeparture = departure.splice(action.payload);

   current.push(selecteddeparture);

   const newState = { current, departure };

  //  return newState



    default:
      return state
  }
};

export default combineReducers({
  departure: departuresReducer
});