export default function score(state = 29, action) {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return { ...state, score: [...state.score, action.score] }
      
    default:
      return state;
  }
}