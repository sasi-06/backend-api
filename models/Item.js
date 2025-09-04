const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true }
});

// Export the model, not just the schema
module.exports = mongoose.model('Item', ItemSchema);
