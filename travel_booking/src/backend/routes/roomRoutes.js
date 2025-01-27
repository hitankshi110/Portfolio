const express = require('express');
const { createRoom, getAllRooms, getRoomById, updateRoom, deleteRoom } = require('../controllers/roomController');

const router = express.Router();

router.post('/createroom', createRoom); // Create a new room
router.get('/allrooms', getAllRooms); // Get all rooms
router.get('/roombyid/:roomId', getRoomById); // Get a single room by ID
router.put('/updateroom/:roomId', updateRoom); // Update room details
router.delete('/deleteroom/:roomId', deleteRoom); // Delete a room

module.exports = router;
