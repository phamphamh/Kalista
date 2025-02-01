/**
 * Alephium Configuration File
 * 
 * Development History:
 * - Initial setup with basic network configurations
 * - Added environment variable support
 * - Configured testnet connection
 * 
 * Current Status:
 * - Basic network configuration setup
 * - Testnet connection parameters defined
 * - Environment variables integrated
 * 
 * Known Issues:
 * - Mainnet and devnet configurations incomplete
 * - Private key handling needs security review
 * 
 * Next Steps:
 * - Complete mainnet configuration
 * - Implement secure private key management
 * - Add network-specific settings
 */

import { Configuration } from '@alephium/cli'
// import { Network } from '@alephium/web3'
import dotenv from 'dotenv'

dotenv.config()

// Debug logging for environment variables
// TODO: Remove in production or implement proper logging
console.log('ALEPHIUM_NODE_URL:', process.env.ALEPHIUM_NODE_URL)
console.log('PRIVATE_KEY:', process.env.PRIVATE_KEY)

/**
 * Alephium Network Configuration
 * Current Implementation:
 * - Testnet configuration complete
 * - Environment variable integration
 * - Basic network settings
 */
const configuration: Configuration = {
    networks: {
        // Mainnet configuration
        // TODO: Add proper mainnet settings
        mainnet: {
            nodeUrl: '',
            networkId: 0,
            privateKeys: [],
            settings: {}
        },
        
        // Testnet configuration
        // Currently using wallet-v20 testnet node
        testnet: {
            nodeUrl: process.env.ALEPHIUM_NODE_URL || 'https://wallet-v20.testnet.alephium.org',
            networkId: 1,
            privateKeys: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
            settings: {}
        },
        
        // Devnet configuration
        // TODO: Configure for local development
        devnet: {
            nodeUrl: '',
            networkId: 2,
            privateKeys: [],
            settings: {}
        }
    }
}

export default configuration 

