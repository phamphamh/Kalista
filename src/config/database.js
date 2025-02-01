/**
 * Database Configuration File
 * 
 * Development History:
 * - Initial MongoDB setup with basic connection
 * - Added error handling and connection status logging
 * 
 * Current Status:
 * - Basic MongoDB connection established
 * - Using deprecated options (useNewUrlParser, useUnifiedTopology)
 * 
 * Known Issues:
 * - Deprecated MongoDB connection options need updating
 * - Connection error handling could be more robust
 * 
 * Next Steps:
 * - Update MongoDB connection options to current standards
 * - Add connection pooling
 * - Implement proper retry mechanism
 */

const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB Connection URI
// TODO: Update connection options to remove deprecation warnings
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

/**
 * Establishes connection to MongoDB
 * Current Implementation:
 * - Basic connection setup
 * - Simple error handling
 * 
 * @returns {Promise<Db>} MongoDB database instance
 * @throws {Error} If connection fails
 */
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Successfully connected to MongoDB');
        return client.db('alephium-pump');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

module.exports = { connectToDatabase, client }; 
