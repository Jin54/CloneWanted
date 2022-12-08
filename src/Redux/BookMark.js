export const ADD = 'ADD';

let init = localStorage.getItem('reduxState');
init === null ? (init = []) : (init = localStorage.getItem('reduxState').split(','));

export default function BookMark(state = init, action) {
    switch (action.type) {
        case ADD:
            var id = action.id;
            var newState;

            if (state.includes(id)) {
                newState = state.filter(e => e !== id);
            } else {
                newState = [...state, id];
            }

            newState.length ? localStorage.setItem('reduxState', newState) : localStorage.removeItem('reduxState');

            return newState;
        default:
            return state;
    }
}
