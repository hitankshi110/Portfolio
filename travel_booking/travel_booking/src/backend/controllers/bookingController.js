const Booking = require('../models/Booking');
const Room = require('../models/Room');
const User = require('../models/User');

// Create a new booking
const createBooking = async (req, res) => {
    try {
        const { userId, roomId, checkInDate, checkOutDate } = req.body;

        // Validate if room exists
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        // Create and save booking
        const booking = new Booking({ user: userId, room: roomId, checkInDate, checkOutDate });
        await booking.save();

        res.status(201).json({ message: 'Booking successful', booking });
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error: error.message });
    }
};

// Get all bookings
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user', 'name email').populate('room', 'name price');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error: error.message });
    }
};

// Get bookings for a specific user
const getUserBookings = async (req, res) => {
    try {
        const { userId } = req.params;
        const bookings = await Booking.find({ user: userId }).populate('room', 'name price');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user bookings', error: error.message });
    }
};

// Cancel a booking
const cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const booking = await Booking.findById(bookingId);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        await Booking.findByIdAndDelete(bookingId);
        res.status(200).json({ message: 'Booking cancelled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error cancelling booking', error: error.message });
    }
};

export default {createBooking, getAllBookings, getUserBookings, cancelBooking}