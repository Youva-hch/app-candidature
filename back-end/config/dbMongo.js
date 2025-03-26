import mongoose from "mongoose";

const connectMongoDB = (mongoURI, dbName) => {
    mongoose
        .connect(mongoURI, { dbName }) 
        .then(() => console.log("MongoDB connected"))
        .catch(error => console.error("MongoDB connection error:", error));
};

export default connectMongoDB;