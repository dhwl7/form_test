const dbConnect = require('./mongoDB');

const insert = async () =>{
    const db = await dbConnect();
    const result = await db.insertOne(
        {
            name : "Node.js",
            lan  : "js"
        });
        console.log(result);
        if (result.acknowledged){
            console.log('Data insert');
        }
};

insert();