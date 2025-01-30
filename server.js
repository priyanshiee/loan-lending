const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const paymentRoutes = require('./routes/payment');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB Connected!`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/payments', paymentRoutes);

// Define the server port
const PORT = process.env.PORT || 8000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
