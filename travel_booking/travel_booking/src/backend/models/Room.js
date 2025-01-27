const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Room', RoomSchema);