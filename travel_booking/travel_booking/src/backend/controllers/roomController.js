const Room = require('../models/Room');

// Create a new room
const createRoom = async (req, res) => {
    try {
        const { name, description, price, available } = req.body;

        const newRoom = new Room({ name, description, price, available });
        await newRoom.save();

        res.status(201).json({ message: 'Room created successfully', room: newRoom });
    } catch (error) {
        res.status(500).json({ message: 'Error creating room', error: error.message });
    }
};

// Get all rooms
const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching rooms', error: error.message });
    }
};

// Get a single room by ID
const getRoomById = async (req, res) => {
    try {
        const { roomId } = req.params;
        const room = await Room.findById(roomId);

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching room', error: error.message });
    }
};

// Update room details
const updateRoom = async (req, res) => {
    try {
        const { roomId } = req.params;
        const updatedRoom = await Room.findByIdAndUpdate(roomId, req.body, { new: true });

        if (!updatedRoom) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.status(200).json({ message: 'Room updated successfully', room: updatedRoom });
    } catch (error) {
        res.status(500).json({ message: 'Error updating room', error: error.message });
    }
};

// Delete a room
const deleteRoom = async (req, res) => {
    try {
        const { roomId } = req.params;
        await Room.findByIdAndDelete(roomId);
        res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting room', error: error.message });
    }
};

export default {createRoom, getAllRooms, getRoomById, updateRoom, deleteRoom};