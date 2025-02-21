const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    billReceivedOn: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    lateFee: { type: Number, required: false },
    billFor: { type: String, required: true },
    billingMonth: { type: String, required: true },
    totalMonth: { type: Number, required: true },
    paidBy: { type: String, required: true },
    paymentDate: { type: Date, required: true },
    status: { type: String, enum: ['paid', 'pending', 'overdue'], default: 'pending' }
});

// Indexes for better query performance
paymentSchema.index({ dueDate: 1 });
paymentSchema.index({ paidBy: 1 });

module.exports = mongoose.model('Payment', paymentSchema);
