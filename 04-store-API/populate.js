require("dotenv").config();
const Product = require("./models/product");
const connectDb = require("./db/connect");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

start();
