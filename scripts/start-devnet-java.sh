#!/bin/bash

# Setup Alephium configuration directory
# This script creates the necessary configuration for running Alephium node
mkdir -p ~/.alephium
cat > ~/.alephium/user.conf << "EOL"
