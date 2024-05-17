const redux = require("redux");

const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

function myCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

const initialState = {
  numOfCake: 30,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
      break;

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial State ", store.getState());
const unSubscribe = store.subscribe(() =>
  console.log("Update State", store.getState())
);
store.dispatch(myCake());
store.dispatch(myCake());
store.dispatch(myCake());
unSubscribe();
