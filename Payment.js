const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    billReceivedOn: { type: Date, required: true },
    dueDate: { type: Date, required: true },
    lateFee: { type: Number, default: 0 },
    billFor: { type: String, required: true },
    billingMonth: { type: String, required: true },
    totalMonth: { type: Number, required: true },
    paidBy: { type: String, required: true },
    paymentDate: { type: Date, required: true },
});

module.exports = mongoose.model('Payment', paymentSchema);
