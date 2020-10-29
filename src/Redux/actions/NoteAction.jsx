export const SET_NOTE = 'SET_NOTE';

export function setNote(notes) {
  return { 
      type: SET_NOTE, 
      payload: notes
    }
}