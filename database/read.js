const dbConnect = require('./mongoDB');

const main = async () => {
    let data = await dbConnect();
        data = await data.find({}).toArray();
    console.log("call", data);
}

main();

