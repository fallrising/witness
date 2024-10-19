#!/bin/bash

# Copyright (C) 2024 CKC All Rights Reserved.
# 
# File Name: init.sh
# Author   : CKC
# Creation Date: 2024-10-19
# INFO     :

# Check for Node.js installation
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Please install Node.js before running this script."
    exit
fi

# Initialize the project (if package.json doesn't exist)
if [ ! -f package.json ]; then
  echo "Initializing Node.js project..."
  npm init -y
fi

# Install Puppeteer
echo "Installing Puppeteer..."
npm install puppeteer

# Provide commands to run the project
echo ""
echo "Project setup complete."
echo "To run the screenshot script, use the following command:"
echo "  node screenshot.js [url] [width] [height]"
echo "Example:"
echo "  node screenshot.js https://example.com 1366 768"
echo ""

# Instructions to run the script automatically
echo "To run this script periodically, set up a cron job using the command:"
echo "  crontab -e"
echo "And add a line similar to this:"
echo "  0 * * * * /usr/bin/node /path/to/screenshot.js https://example.com 1920 1080"
 
