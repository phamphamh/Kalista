/**
 * Kalista.io - Main Server File
 * 
 * Development History:
 * - Initial setup with Express and MongoDB
 * - Added Alephium Web3 integration
 * - Configured CORS and basic middleware
 * 
 * Current Status:
 * - Basic server setup complete
 * - MongoDB connection established (needs update for deprecated options)
 * - Alephium node integration pending full implementation
 * 
 * Next Steps:
 * - Implement token creation endpoints
 * - Add smart contract interaction
 * - Setup AI agent integration
 */

const express = require('express');
const cors = require('cors');
const { web3, NodeProvider } = require('@alephium/web3');
const { connectToDatabase } = require('./config/database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware Configuration
app.use(cors());
app.use(express.json());

// Alephium Configuration
// Note: Current setup is basic, needs expansion for full token management
const nodeProvider = new NodeProvider(process.env.ALEPHIUM_NODE_URL);
web3.setCurrentNodeProvider(nodeProvider);

// Basic Routes
// TODO: Expand with token creation and management endpoints
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Kalista API' });
});

// Server Startup
// Current Implementation:
// - Connects to MongoDB
// - Starts Express server
// Future Additions:
// - Alephium node health check
// - Smart contract deployment verification
async function startServer() {
    try {
        const db = await connectToDatabase();
        console.log('Database connected');

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Server startup error:', error);
        process.exit(1);
    }
}

startServer(); 
