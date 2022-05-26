const dbConnect = require('./mongoDB');
let mongodb     = require('mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteOne({
        "_id" : new mongodb.ObjectID("62396101b69d80a842f5f490")
    });
    console.log(result);
    // console.log(new mongodb.ObjectID("62396101b69d80a842f5f490"));
    if (result.acknowledged){
        console.log("Record delete");
    }
};

deleteData();


//string id 