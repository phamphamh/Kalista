# Kalista.io - Meme Token Creation Platform on Alephium

## Project Overview
Kalista.io aims to create an automated platform for meme token creation and management on the Alephium blockchain, leveraging its unique sharding capabilities.

## Development Journey & Attempts

### Initial Setup Attempts
1. **Java Environment Setup**
   - Initially faced issues with Java 8 installation
   - Successfully upgraded to Java 11 using Homebrew
   - Configured Java 11 as the default version

2. **Alephium Node Setup**
   - Initial attempt: Direct installation of Alephium node
   - Challenges faced with node configuration
   - Successfully set up node with proper miner addresses configuration
   - Current issue: RocksDB lock file conflict needs resolution

3. **Backend Development**
   - Set up Node.js environment with Express
   - Integrated MongoDB (currently showing deprecation warnings for some options)
   - Server running successfully on port 3000

### Technical Challenges Encountered

1. **Alephium Node Issues**
   - RocksDB lock file conflicts
   - Mining configuration challenges
   - API endpoint accessibility issues

2. **Database Integration**
   - MongoDB connection established but using deprecated options
   - Need to update connection parameters to current standards

## What Remains to Be Done

### Phase 1: Backend Structure (Partially Complete)
- [x] Basic Express server setup
- [x] MongoDB integration
- [x] Update MongoDB connection parameters
- [x] Complete Alephium SDK integration
- [ ] Implement proper error handling

### Phase 2: Smart Contracts
- [x] Develop token creation contract
- [x] Implement burn mechanism
- [x] Add sharding logic
- [ ] Deploy and test contracts

### Phase 3: Liquidity Pool
- [ ] Automated pool creation
- [ ] Liquidity management system
- [ ] Integration with DEX

### Phase 4: AI Integration
- [ ] Setup AI agent for token customization
- [ ] Implement form generation
- [ ] Add suggestion system
- [ ] Create analysis reports

### Phase 5: Token Tracking
- [ ] Transaction monitoring system
- [ ] Popularity metrics
- [ ] Recommendation engine

### Phase 6: Liquidity Management
- [ ] Automated shard management
- [ ] Dynamic liquidity adjustment
- [ ] Cross-shard operations

### Phase 7: Testing
- [ ] Performance testing
- [ ] Scalability verification
- [ ] Security audits

## Current Setup Instructions

1. Install Java 11:
```bash
brew install openjdk@11
```

2. Configure Java 11:
```bash
export JAVA_HOME=`/usr/libexec/java_home -v 11`
```

3. Start Alephium Node:
```bash
cd kalista-v2
java -jar alephium.jar
```

## Known Issues
1. RocksDB lock file conflict when starting node
2. Deprecated MongoDB connection options
3. Mining API endpoint accessibility

## Next Steps
1. Resolve RocksDB lock file issue
2. Update MongoDB connection parameters
3. Complete Alephium SDK integration
4. Begin smart contract development

## Contributing
Project is currently in development phase. Contributions welcome after initial stable release.

## License
TBD 
