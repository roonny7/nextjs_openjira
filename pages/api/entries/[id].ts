import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models/';

type Data = 
|   { message: string }
|   IEntry;


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    const { id } = req.query;
    console.log(id)

    if (!mongoose.isValidObjectId( id )){
        return res.status(400).json({ message : ' el id no es valido'+ id})
    }

    switch ( req.method){
        case 'PUT':
            return updateEntry( req, res);

        default: 
            return res.status(400).json({ message : ' Método no existe'})

    }

}


const updateEntry = async ( req: NextApiRequest, res : NextApiResponse<Data>) => {
    
    const { id } = req.query;
    
    
    await db.connect();

    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate){
        await db.disconnect();
        return res.status(400).json({message : 'No hay entradas con ese id'+id});
    }

    const { description = entryToUpdate.description, status = entryToUpdate.status}  = req.body;

    const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status}, { runValidators : true, new : true})

    res.status(200).json( updatedEntry!);

    await db.disconnect();
}