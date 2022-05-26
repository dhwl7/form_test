const dbConnect = require('./mongoDB');

const update = async () => {
    let data = await dbConnect();
    let result =await data.updateOne(
        { name : "Node.js"},{ $set : {name : 'node.JS'} }) ;
  console.log(result);     
};

update();