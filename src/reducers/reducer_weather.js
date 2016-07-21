import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // rem: we don't want to mutate state, but replace it entirely
      // but, we want to push the new data on the current state 
      // so, we should concat the existing state with this new state
      // 
      // return state.concat([action.payload.data]);
      // or with es6 syntax:
      // return [ action.payload.data, ...state ];
      // this flattens state '...state', and appends the payload.data
      return [ action.payload.data, ...state ];
  }

  return state;
}
