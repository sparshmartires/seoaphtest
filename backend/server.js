const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const editorRoutes = require('./routes/editor');

const app = express();
const PORT = 3001;

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Enable credentials if needed
}));

// Middleware to handle preflight requests
app.options('*', cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/editor', editorRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
