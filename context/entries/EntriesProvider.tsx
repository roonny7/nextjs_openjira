import { FC, ReactNode,useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './'


export interface EntriesState {
     entries : Entry[];
}
interface Props {
     children : ReactNode
}

const Entries_INITIAL_STATE : EntriesState = {
     entries : [],
}

export const EntriesProvider:FC <Props>= ({ children}) => {

     const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

     const addNewEntry = (description : string) => {
          const newEntry: Entry = {
               _id: uuidv4(),
               description: description,
               createdAt : Date.now(),
               status: 'pending',
          }

          dispatch( { type: '[Entry] - Add-Entry', payload : newEntry})
     }

     const updateEntry = (entry: Entry) => {
          dispatch({ type: '[Entry] - Entry-Updated', payload: entry })

     }


     return (
     <EntriesContext.Provider value={{
          ...state,
          
          //methods
          addNewEntry,
          updateEntry,
     }}>
              { children}
     </EntriesContext.Provider>
)
};
