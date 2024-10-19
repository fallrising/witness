const puppeteer = require('puppeteer');

// Helper function to format current date and time as yyyymmddhh
function getTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  return `${year}${month}${day}${hour}`;
}

async function takeScreenshot(url, width, height) {
  let browser;
  const outputPath = `screenshot_${getTimestamp()}.png`;
  
  try {
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    console.log(`Setting viewport to ${width}x${height}...`);
    await page.setViewport({ width: parseInt(width), height: parseInt(height) });

    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    console.log('Waiting for a moment to ensure page is fully loaded...');
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log('Taking screenshot...');
    await page.screenshot({ path: outputPath, fullPage: true });

    console.log(`Screenshot saved to ${outputPath}`);

    // Log the page title and URL for verification
    const pageTitle = await page.title();
    const pageUrl = page.url();
    console.log(`Page Title: ${pageTitle}`);
    console.log(`Final URL: ${pageUrl}`);

  } catch (error) {
    console.error('Error during screenshot process:', error);
  } finally {
    if (browser) {
      console.log('Closing browser...');
      await browser.close();
    }
  }
}

// Get command-line arguments
const url = process.argv[2] || 'https://www.baidu.com';
const width = process.argv[3] || 1920;
const height = process.argv[4] || 1080;

takeScreenshot(url, width, height)
  .then(() => console.log('Process completed'))
  .catch(error => console.error('Unhandled error:', error));

