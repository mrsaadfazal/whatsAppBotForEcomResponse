const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');

const client = new Client({
    puppeteer: {
        executablePath: "/usr/bin/google-chrome-stable",
        args: [
            "--headless",
            "--no-sandbox",
            "--disable-gpu",
            "--disable-software-rasterizer",
        ],
        headless: true,
    },
});

let videoMedia; // Declare videoMedia variable to be used later

// Pre-encode the video at startup
(async () => {
    const videoName = 'handaiyanVideo';
    const videoPath = `./videos/Handaiyan/${videoName}.mp4`;
    if (fs.existsSync(videoPath)) {
        const encodingPath = `./encodings/${videoName}.json`;
        let encodedVideoData;

        if (fs.existsSync(encodingPath)) {
            // Read the encoded video data from the JSON file
            encodedVideoData = JSON.parse(fs.readFileSync(encodingPath, 'utf8'));
            console.log('Encoded video data loaded from cache.');
        } else {
            // Read and encode the video file
            const videoBuffer = fs.readFileSync(videoPath);
            encodedVideoData = `data:video/mp4;base64,${videoBuffer.toString('base64')}`;
            console.log('Video encoded for the first time.');

            // Ensure the encodings directory exists
            if (!fs.existsSync('./encodings')) {
                fs.mkdirSync('./encodings');
            }

            // Save the encoded video data to a JSON file
            fs.writeFileSync(encodingPath, JSON.stringify(encodedVideoData));
            console.log('Encoded video data saved to cache.');
        }

        // Create the MessageMedia object to be used later
        videoMedia = new MessageMedia(
            'video/mp4',
            encodedVideoData.split(',')[1]
        );

        console.log('Video is pre-encoded and ready to send.');
    } else {
        console.error(`Video file not found at ${videoPath}`);
    }
})();

// Message queue to handle incoming messages
let messageQueue = [];
let isProcessing = false;

client.on('qr', (qr) => {
    // Display QR code in the terminal
    qrcode.generate(qr, { small: true });

    // Provide instructions to the user
    console.log('Scan the QR code with your phone to log in.');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (msg) => {
    if (msg.type === 'chat' || msg.type === 'image') {
        // Add the message to the queue
        messageQueue.push(msg);
        processQueue();
    } else {
        // Only text and image messages are processed
        return;
    }
});

async function processQueue() {
    if (isProcessing) {
        // Already processing a message
        return;
    }

    if (messageQueue.length === 0) {
        // No messages to process
        return;
    }

    isProcessing = true;
    const msg = messageQueue.shift(); // Get the first message in the queue
    const senderNumber = msg.from;

    // Read the file to check if the number exists
    const existingNumbers = fs.existsSync('numbers.txt')
        ? fs.readFileSync('numbers.txt', 'utf-8').split('\n').filter(Boolean)
        : [];

    if (existingNumbers.includes(senderNumber)) {
        // Number is in the list, don't send the message
        isProcessing = false;
        processQueue(); // Process the next message
        return;
    } else if (msg.body.toLowerCase().includes('handaiyan')) {
        // Save the sender's number to the file
        fs.appendFileSync('numbers.txt', senderNumber + '\n');
        console.log('Added number to file:', senderNumber);

        try {
            // Send messages with delays
            await client.sendMessage(msg.from, `Hello! I am a bot. I see you mentioned Handaiyan. I will send you a video in a few seconds.`);
            console.log('First message sent.');
            await sleep(6000); // Wait for 6 seconds

            if (videoMedia) {
                // Send the pre-encoded video
                await client.sendMessage(msg.from, videoMedia);
                console.log('Video sent successfully.');
            } else {
                console.error('Video not available to send.');
            }
            await sleep(2000); // Wait for 2 seconds before processing next message
        } catch (err) {
            console.error('Error sending messages:', err);
        }
    }

    isProcessing = false;
    processQueue(); // Process the next message
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

client.initialize();
