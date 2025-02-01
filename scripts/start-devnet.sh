#!/bin/bash

# Development History:
# - Initial setup for local development environment
# - Added Docker configuration for Alephium node
# - Configured network ports for devnet

# Pull Docker image if needed
docker pull alephium/alephium:v2.5.3

# Stop and remove existing container if it exists
docker stop alephium-devnet || true
docker rm alephium-devnet || true

# Start new container with devnet configuration
# Ports:
# - 22973: REST API
# - 19973: P2P communication
docker run -d \
  --name alephium-devnet \
  -p 22973:22973 \
  -p 19973:19973 \
  -p 19973:19973/udp \
  alephium/alephium:v2.5.3 \
  --network devnet \
  --devnet 
