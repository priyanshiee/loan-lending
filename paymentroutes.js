const express = require('express');
const Payment = require('./models/payment'); // Assuming Payment model is in 'models' folder
const router = express.Router();

// 1. Get all payments
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find(); // Fetch all payments from the database
        res.json(payments); // Respond with the list of payments
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle any error
    }
});

// 2. Get a specific payment by ID
router.get('/:id', async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id); // Find payment by ID
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json(payment); // Respond with the found payment
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle any error
    }
});

// 3. Add a new payment
router.post('/', async (req, res) => {
    const payment = new Payment({
        user: req.body.user, // Assuming your Payment model has these fields
        amount: req.body.amount,
        status: req.body.status,
        dueDate: req.body.dueDate,
        loanId: req.body.loanId,
    });

    try {
        const savedPayment = await payment.save(); // Save the new payment to the database
        res.status(201).json(savedPayment); // Respond with the saved payment
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle any error
    }
});

// 4. Update a payment by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(
            req.params.id, // Find payment by ID
            req.body, // Update payment fields with data from the request body
            { new: true } // Return the updated payment object
        );
        if (!updatedPayment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json(updatedPayment); // Respond with the updated payment
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle any error
    }
});

// 5. Delete a payment by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id); // Delete payment by ID
        if (!deletedPayment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.json({ message: 'Payment deleted successfully' }); // Respond with success message
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle any error
    }
});

module.exports = router; // Export routes to be used in the main server file
