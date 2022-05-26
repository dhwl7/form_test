const mongoose = require('mongoose');

let path = "mongodb://localhost:27017/e-comm";

const ProductSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number
});

const saveIdb = async () => {
    mongoose.connect(path);
    const Product = mongoose.model('product', ProductSchema);
    let data = new Product({
        name: "note 10 pro",
        brand: "mi",
        price: 14000
    });
    const result = await data.save();
    console.log(result);
}
//saveIdb();

const upadateIdb = async () => {
    mongoose.connect(path);
    let Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        { _id: mongoose.Types.ObjectId('62822f17aa9b664636e13d57') },
        {
            $set: { name: 'guru 1100' }
        });
    console.log(data);
};
//upadateIdb();

const deleteIdb = async () => {
    mongoose.connect(path);
    let Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne(
        {
            _id: mongoose.Types.ObjectId('62822f17aa9b664636e13d57')
        });
    console.log(data);
}

//deleteIdb();

const findIdb = async () => {
    mongoose.connect(path);
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.findOne();
    console.log(data);
};

//findIdb();

const findIdb1 = async () => {
    mongoose.connect(path);
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.findOne({ name: "s221" });
    (data == null) ? console.log('not found') : console.log(data);
};

findIdb1();