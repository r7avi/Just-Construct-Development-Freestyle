#!/bin/bash

# Fix workspace permissions
sudo chown -R jenkins:jenkins /var/lib/jenkins/workspace/

# Fix node/npm/yarn permissions
sudo chmod 755 /usr/local/bin/node
sudo chmod 755 /usr/local/bin/npm
sudo chmod 755 /usr/local/bin/yarn
sudo chmod 755 /usr/local/bin/pm2 || true
sudo chmod -R 755 /usr/local/lib/node_modules/

# Fix PM2 home directory
sudo mkdir -p /var/lib/jenkins/.pm2
sudo chown -R jenkins:jenkins /var/lib/jenkins/.pm2
sudo chmod -R 755 /var/lib/jenkins/.pm2

# Ensure jenkins can write to current directory
sudo chown -R jenkins:jenkins .

echo "Permissions setup complete!"
