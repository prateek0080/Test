// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Connect MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mediconnect';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Mongo err', err));

// Schemas
const consultSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  symptoms: String,
  createdAt: { type: Date, default: Date.now }
});
const Consult = mongoose.model('Consult', consultSchema);

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

const sosSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  createdAt: { type: Date, default: Date.now }
});
const SOS = mongoose.model('SOS', sosSchema);

const pharmacySchema = new mongoose.Schema({
    medicineName: String,
    quantity: Number,
    deliveryAddress: String,
    phone: String,
    createdAt: { type: Date, default: Date.now }
});
const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

const ambulanceSchema = new mongoose.Schema({
    location: String,
    phone: String,
    createdAt: { type: Date, default: Date.now }
});
const Ambulance = mongoose.model('Ambulance', ambulanceSchema);

const labSchema = new mongoose.Schema({
    testType: String,
    testDate: Date,
    labAddress: String,
    phone: String,
    createdAt: { type: Date, default: Date.now }
});
const Lab = mongoose.model('Lab', labSchema);

const appointmentSchema = new mongoose.Schema({
    patientName: String,
    department: String,
    appointmentDate: Date,
    phone: String,
    createdAt: { type: Date, default: Date.now }
});
const Appointment = mongoose.model('Appointment', appointmentSchema);

const bloodBankSchema = new mongoose.Schema({
    type: { type: String, enum: ['request', 'donate'], required: true },
    // Request fields
    patientName: String,
    bloodType: String,
    unitsNeeded: Number,
    urgency: String,
    hospital: String,
    contactPhone: String,
    // Donation fields
    donorName: String,
    donorBloodType: String,
    donorAge: Number,
    donorWeight: Number,
    lastDonation: Date,
    donorPhone: String,
    donorAddress: String,
    createdAt: { type: Date, default: Date.now }
});
const BloodBank = mongoose.model('BloodBank', bloodBankSchema);

// API endpoint for Doctor Consultation
app.post('/api/consult', async (req, res) => {
  try {
    const { name, email, phone, symptoms } = req.body;
    if (!name || !email || !symptoms) return res.status(400).json({ message: 'Missing fields' });
    await Consult.create({ name, email, phone, symptoms });
    return res.json({ message: 'Consultation request received' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// User registration endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User with this email already exists.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ email, password: hashedPassword, name });
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error during registration.' });
    }
});

// User login endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        res.json({ message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error.' });
    }
});


// API endpoints for other services
app.post('/api/ambulance', async (req, res) => {
    try {
        const { location, phone } = req.body;
        if (!location || !phone) return res.status(400).json({ message: 'Missing fields' });
        await Ambulance.create({ location, phone });
        res.json({ message: 'Ambulance booked successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error booking ambulance.' });
    }
});

app.post('/api/pharmacy', async (req, res) => {
    try {
        const { medicine, quantity, address, phone } = req.body;
        if (!medicine || !quantity || !address || !phone) return res.status(400).json({ message: 'Missing fields' });
        await Pharmacy.create({ medicineName: medicine, quantity, deliveryAddress: address, phone });
        res.json({ message: 'Order placed successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error placing order.' });
    }
});

app.post('/api/lab', async (req, res) => {
    try {
        const { testType, testDate, labAddress, phone } = req.body;
        if (!testType || !testDate || !labAddress || !phone) return res.status(400).json({ message: 'Missing fields' });
        await Lab.create({ testType, testDate, labAddress, phone });
        res.json({ message: 'Lab test booked successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error booking lab test.' });
    }
});

app.post('/api/appointment', async (req, res) => {
    try {
        const { patientName, department, appointmentDate, phoneAppointment } = req.body;
        if (!patientName || !department || !appointmentDate || !phoneAppointment) return res.status(400).json({ message: 'Missing fields' });
        await Appointment.create({ patientName, department, appointmentDate, phone: phoneAppointment });
        res.json({ message: 'Appointment booked successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error booking appointment.' });
    }
});

app.post('/api/bloodbank', async (req, res) => {
    try {
        const data = req.body;
        
        if (data.type === 'request') {
            const { patientName, bloodType, unitsNeeded, urgency, hospital, contactPhone } = data;
            if (!patientName || !bloodType || !unitsNeeded || !urgency || !hospital || !contactPhone) {
                return res.status(400).json({ message: 'Missing required fields for blood request' });
            }
            await BloodBank.create({
                type: 'request',
                patientName,
                bloodType,
                unitsNeeded,
                urgency,
                hospital,
                contactPhone
            });
            res.json({ message: 'Blood request submitted successfully!' });
        } else if (data.type === 'donate') {
            const { donorName, donorBloodType, donorAge, donorWeight, lastDonation, donorPhone, donorAddress } = data;
            if (!donorName || !donorBloodType || !donorAge || !donorWeight || !donorPhone || !donorAddress) {
                return res.status(400).json({ message: 'Missing required fields for donor registration' });
            }
            await BloodBank.create({
                type: 'donate',
                donorName,
                donorBloodType,
                donorAge,
                donorWeight,
                lastDonation: lastDonation || null,
                donorPhone,
                donorAddress
            });
            res.json({ message: 'Donor registration successful!' });
        } else {
            return res.status(400).json({ message: 'Invalid request type' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error processing blood bank request.' });
    }
});

// SOS endpoint
app.post('/api/sos', async (req, res) => {
    try {
        const { latitude, longitude } = req.body;
        await SOS.create({ latitude, longitude });
        console.log(`SOS Alert received at Lat: ${latitude}, Lon: ${longitude}`);
        res.json({ message: 'SOS alert sent to emergency services. Stay calm.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to send SOS alert.' });
    }
});

// Admin endpoints
app.get('/admin/users', async (req, res) => {
    try {
        const users = await User.find().select('name email createdAt').sort({ createdAt: -1 });
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving user data.' });
    }
});

app.get('/admin/consults', async (req, res) => {
    try {
        const consults = await Consult.find().sort({ createdAt: -1 }).limit(500);
        res.json(consults);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving consultation data.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on', PORT));