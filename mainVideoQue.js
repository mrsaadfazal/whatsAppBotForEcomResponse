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
        setTimeout(async () => {
            await client.sendMessage(msg.from, `السلام علیکم!\nاگر آپ 12 پیس میٹ لِکوئڈ لپ اسٹک اور ہائی شائن لپ گلوس سیٹ کا آرڈر دینا چاہتے ہیں، تو براہ کرم اپنا نام، موبائل نمبر، اسٹریٹ کا نام، گھر کا نمبر، قریبی مشہور جگہ، شہر اور صوبہ ہمیں بھیج دیں۔\n\nانشاءاللہ آپ کو بہترین معیار کے ساتھ پروڈکٹ فراہم کی جائے گی اور 2 سے 3 دن کے اندر ڈیلیور کر دیا جائے گا۔\n\nقیمت: 2950 روپے\nڈیلیوری چارجز: 250 روپے\nکل قیمت (ڈیلیوری سمیت): 3200 روپے\n\nانشاءاللہ فون پر آپ سے آرڈر کی تصدیق کر لی جائے گی۔`);
            console.log('First message sent.');
        }, 6000);

        setTimeout(async () => {
            if (videoMedia) {
                // Send the pre-encoded video
                await client.sendMessage(msg.from, videoMedia);
                console.log('Video sent successfully.');
            } else {
                console.error('Video not available to send.');
            }
        }, 8000); // 6 seconds after the first message

        // Save the sender's number to the file
        fs.appendFileSync('numbers.txt', senderNumber + '\n');
        console.log('Added number to file:', senderNumber);



    } else if (msg.body.toLowerCase().includes("password lock")) {
        setTimeout(async () => {
            await client.sendMessage(msg.from, `السلام علیکم!\nاگر آپ "Steering Wheel Password Lock - Anti Theft Device Car Lock" کا آرڈر دینا چاہتے ہیں، تو براہ کرم اپنا نام، موبائل نمبر، اسٹریٹ کا نمبر، گھر کا نمبر، قریبی مشہور جگہ، شہر اور صوبہ ہمیں بھیج دیں۔\n\nانشاءاللہ آپ کو بہترین معیار کے ساتھ پروڈکٹ فراہم کی جائے گی اور 2 سے 3 دن کے اندر ڈیلیور کر دیا جائے گا۔\n\nقیمت: 7950 روپے (ڈیلیوری چارجز شامل ہیں)\n\nانشاءاللہ فون پر آپ سے آرڈر کی تصدیق کر لی جائے گی۔`);
            console.log('First message sent.');
        }, 6000);



        setTimeout(async () => {
            const imageMedia1 = MessageMedia.fromFilePath("./images/PasswordLock/1.jpeg");
            const imageMedia2 = MessageMedia.fromFilePath("./images/PasswordLock/2.jpeg");
            const imageMedia3 = MessageMedia.fromFilePath("./images/PasswordLock/3.jpeg");
            const imageMedia4 = MessageMedia.fromFilePath("./images/PasswordLock/4.jpeg");



            // const imageMedia1 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_1-1000x1000.jpg?v=1692993352");
            await client.sendMessage(msg.from, imageMedia1);
            await client.sendMessage(msg.from, imageMedia2);
            await client.sendMessage(msg.from, imageMedia3);
            await client.sendMessage(msg.from, imageMedia4);
        }, 8000); // 5000 ms = 5 s

        // Save the sender's number to the file
        fs.appendFileSync('numbers.txt', senderNumber + '\n');
        console.log('Added number to file:', senderNumber);
    }

    isProcessing = false;
    processQueue(); // Process the next message
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

client.initialize();
