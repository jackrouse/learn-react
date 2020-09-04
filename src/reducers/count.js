
export const initState = {
	count:1
}

export function init(initialCount) {
  return {count: initialCount};
}

export default function (state=initState, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      return state
  }
}