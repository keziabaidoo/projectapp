export const selectDeparture= departuresIndex => (
    {
      type: 'SELECT_DEPARTURE',
      payload: departuresIndex,
    }
  );