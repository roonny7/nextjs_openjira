interface SeedData {
    entries : SeedEntry[];

}


interface SeedEntry {
    description : string;
    status : string;
    createdAt : number;
}


export const seedData: SeedData = {
    entries : [
        {
            description : 'Pendiente : Chingada madre, no se que va aqui ',
            status : 'pending',
            createdAt : Date.now(),
        }, 
        {
            description : 'En progreso : doble carajo ',
            status : 'in-progress',
            createdAt : Date.now()-1000000,
        }, 
        {
            description : 'Terminadas. triple carajo',
            status : 'finished',
            createdAt : Date.now()-10000,
        },             
    ],
}