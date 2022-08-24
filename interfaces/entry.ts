
export interface Entry {
    _id : string;
    description : string;
    createdAt : number;
    //status : string; //A, B, C, D, pending, in -progres- finished
    status : EntryStatus;

}

export type EntryStatus = 'pending' | 'in-progress' | 'finished';

