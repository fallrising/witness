# Puppeteer Screenshot Automation

This Node.js project uses Puppeteer to take screenshots of a given URL with configurable screen sizes. The screenshots are saved with filenames formatted as `yyyymmddhh.png` (year, month, day, hour).

## Features
- Configurable URL, screen width, and height via command-line arguments.
- Automatically saves the screenshot with a timestamped filename.
- Can be set up to run periodically (e.g., hourly) using cron jobs.

## Requirements
- Node.js (>= 14.x)
- Puppeteer

## Installation

1. Clone the repository or download the script.
2. Install the required dependencies using the initialization script or manually:

    ```bash
    npm install
    ```

## Usage

You can take a screenshot by running the script with optional parameters for the URL, screen width, and screen height.

```bash
node screenshot.js [url] [width] [height]
```

## Cron
```
0 * * * * /usr/bin/node /path/to/screenshot.js https://example.com 1920 1080
```
