const SCORE_STATE = {
  initial_score: [
    23
  ]
}

export default function score(state = SCORE_STATE, action) {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return { ...state, initial_score: action.nw_score }
    default:
      return state;
  }
}