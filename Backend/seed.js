require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/productmodel");
const products = require("./Data/product");
const connectDB = require("./config/db");

const importData = async () => {
  try {
    await connectDB();

    // Optional: Clear old products
    await Product.deleteMany();

    // Insert new products
    await Product.insertMany(products);

    console.log("✅ Dummy products inserted successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Failed to insert products:", error);
    process.exit(1);
  }
};

importData();
