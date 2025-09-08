import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'limokeysair@gmail.com',
    pass: process.env.EMAIL_PASS || 'xrvi ufhz dpat kpya'
  }
});

// Email sending endpoint
app.post('/api/send-reservation', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      date,
      time,
      pickup,
      dropoff,
      message
    } = req.body;

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'pickup', 'dropoff'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          success: false,
          message: `Missing required field: ${field}`
        });
      }
    }

    // Email content
    const mailOptions = {
      from: {
        name: 'LimoKeyser Reservation',
        address: 'noreply@limokeyser.com'
      },
      to: 'limokeysair@gmail.com',
      subject: 'Nouvelle réservation - LimoKeyser',
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Heure:</strong> ${time}</p>
        <p><strong>Lieu de prise en charge:</strong> ${pickup}</p>
        <p><strong>Lieu de dépose:</strong> ${dropoff}</p>
        <p><strong>Message:</strong> ${message || 'Aucun'}</p>
      `,
      text: `
        Nouvelle demande de réservation

        Nom: ${name}
        Email: ${email}
        Téléphone: ${phone}
        Date: ${date}
        Heure: ${time}
        Lieu de prise en charge: ${pickup}
        Lieu de dépose: ${dropoff}
        Message: ${message || 'Aucun'}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Réservation envoyée avec succès'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi de l\'email',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
