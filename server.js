const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' folder

// Route to serve the index.html file (Home Page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve the invoice page
app.get('/invoice', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'invoice.html'));
});

// API endpoint to save invoice
app.post('/save-invoice', (req, res) => {
    const { customerName, productName, quantity, price } = req.body;
    const total = quantity * price;
    const invoiceData = `
        Customer Name: ${customerName}
        Product Name: ${productName}
        Quantity: ${quantity}
        Price per Unit: ${price}
        Total: ${total}\n`;

    // Save invoice data to a text file
    fs.appendFile('sales.txt', invoiceData, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).json({ message: 'Failed to save invoice.' });
        }
        res.status(200).json({ message: 'Invoice saved successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
