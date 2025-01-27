const express = require('express');
const { createBooking, getAllBookings, getUserBookings, cancelBooking } = require('../controllers/bookingController');

const router = express.Router();

router.post('/createbooking', createBooking); // Create a new booking
router.get('/allbooking', getAllBookings); // Get all bookings
router.get('/userbookings/:userId', getUserBookings); // Get bookings for a specific user
router.delete('/cancelbooking/:bookingId', cancelBooking); // Cancel a booking

module.exports = router;
