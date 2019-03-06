import produce from "immer";

export default (state = {}, action) => {
  switch (action.type) {
    case "TEST_ACTION":
      return produce(state, draftState => {
        draftState.push({todo: "Tweet about it"})
        draftState[1].done = true
    })
    default:
      return state;
  }
};