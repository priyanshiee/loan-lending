const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is required to use .env variables

const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection URI stored in your environment variables
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // Using the new parser (optional with newer mongoose versions)
            useUnifiedTopology: true, // For better handling of server selection and monitoring
        });
        console.log("MongoDB Connected!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1); // Exit the process with failure code if connection fails
    }
};

module.exports = connectDB; // Export the connectDB function so it can be used in your main server file
