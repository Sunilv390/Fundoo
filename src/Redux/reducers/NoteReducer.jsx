import { SET_NOTE} from '../actions/NoteAction';

const initialState = {
    notes:[],
}

function NotesReducer(state = initialState, action) {
  switch(action.type) {
    
    case SET_NOTE:
      return {
          ...state,
          notes:action.payload
        }
    default:
      return state;
  };
}

export default NotesReducer;