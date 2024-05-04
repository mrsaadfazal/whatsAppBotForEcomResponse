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




client.on('qr', (qr) => {
    // Display QR code in the terminal
    qrcode.generate(qr, { small: true });

    // Provide instructions to the user
    console.log('Scan the QR code with your phone to log in.');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// // Load existing numbers from the file
// let numbers = [];
// if (fs.existsSync('numbers.txt')) {
//     numbers = fs.readFileSync('numbers.txt', 'utf-8').split('\n').filter(Boolean);
// }
// console.log("numbers1: ", numbers);

client.on('message', async msg => {
    if (msg.type == 'chat' || msg.type == "image") {

        const senderNumber = msg.from;

        // Read the file to check if the number exists
        const existingNumbers = fs.existsSync('numbers.txt') ? fs.readFileSync('numbers.txt', 'utf-8').split('\n').filter(Boolean) : [];

        if (existingNumbers.includes(senderNumber)) {
            // Number is in the list, don't send the message
            return;
        } else if (msg.body.toLowerCase().includes("mens bracelet collection")) {


            setTimeout(async () => {
                await client.sendMessage(msg.from, `آپنا آرڈر پلیس کرنے کے لئے، نیچے دیے گئے فارمیٹ میں اپنی ضروری معلومات بھیجیں، شکریہ!

                نام:
                موبائل نمبر:
                گھر کا پتہ:
                شہر: 
                گھر  کے قریب مشہور مقام:`);
            }, 35000);




            // wait for 5 seconds then send the video
            setTimeout(async () => {
                const imageMedia1 = MessageMedia.fromFilePath("./images/bracelets/10mmCubanIcedOut.jpg");
                const imageMedia2 = MessageMedia.fromFilePath("./images/bracelets/11-5mmpureStainlessSteelItalianMeshLinkChain.jpg");
                const imageMedia3 = MessageMedia.fromFilePath("./images/bracelets/blackFreeSizeCuffKadaBracelets.jpg");
                const imageMedia4 = MessageMedia.fromFilePath("./images/bracelets/blackMetalBracele.jpg");
                const imageMedia5 = MessageMedia.fromFilePath("./images/bracelets/brownOpenable.jpg");
                const imageMedia6 = MessageMedia.fromFilePath("./images/bracelets/fashionHandMadeFeatherBlackRUbberSilver.jpg");
                const imageMedia7 = MessageMedia.fromFilePath("./images/bracelets/goldBracelet.jpg");
                const imageMedia8 = MessageMedia.fromFilePath("./images/bracelets/handmadeBlack.jpg");
                const imageMedia9 = MessageMedia.fromFilePath("./images/bracelets/handmadeMetalDshapBracelt.jpg");
                const imageMedia10 = MessageMedia.fromFilePath("./images/bracelets/pureStainlessSteelItalianBracelet.jpg");
                const imageMedia11 = MessageMedia.fromFilePath("./images/bracelets/stainlessSteelDragon.jpg");
                const imageMedia12 = MessageMedia.fromFilePath("./images/bracelets/stainlessSteelThorMjolnirHammerLeatherCord.jpg");
                const imageMedia13 = MessageMedia.fromFilePath("./images/bracelets/vintageFashionHandmadeBlackRubberSilver.jpg");


                // const imageMedia1 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_1-1000x1000.jpg?v=1692993352");
                await client.sendMessage(msg.from, imageMedia1);
                await client.sendMessage(msg.from, imageMedia2);
                await client.sendMessage(msg.from, imageMedia3);
                await client.sendMessage(msg.from, imageMedia4);
                await client.sendMessage(msg.from, imageMedia5);
                await client.sendMessage(msg.from, imageMedia5);
                await client.sendMessage(msg.from, imageMedia6);
                await client.sendMessage(msg.from, imageMedia7);
                await client.sendMessage(msg.from, imageMedia8);
                await client.sendMessage(msg.from, imageMedia9);
                await client.sendMessage(msg.from, imageMedia10);
                await client.sendMessage(msg.from, imageMedia11);
                await client.sendMessage(msg.from, imageMedia12);
                await client.sendMessage(msg.from, imageMedia13);



            }, 2000); // 5000 ms = 5 s

            setTimeout(async () => {
                const voice = MessageMedia.fromFilePath("./voices/bracelets/intro.mp3");
                await client.sendMessage(msg.from, voice);
            }, 15000); // 5000 ms = 5 s

            setTimeout(async () => {
                const voice = MessageMedia.fromFilePath("./voices/bracelets/form.mp3");
                await client.sendMessage(msg.from, voice);
            }, 30000); // 5000 ms = 5 s


            // Save the sender's number to the file
            fs.appendFileSync('numbers.txt', senderNumber + '\n');
            console.log("Added number to file:", senderNumber);
        }
        else if (msg.body.toLowerCase().includes('solar military helicopter')) {


            setTimeout(async () => {
                await client.sendMessage(msg.from, "Solar Military Helicopter Air Freshener.\n\nPrice: Rs 2999 + Free Delivery all over pakistan \n\n10% discount on 2 pieces");
            }, 5000);




            // wait for 5 seconds then send the video
            setTimeout(async () => {
                // const imageMedia1 = MessageMedia.fromFilePath("./heli1.jpeg");
                // const imageMedia2 = MessageMedia.fromFilePath("./heli2.jpeg");
                // const imageMedia3 = MessageMedia.fromFilePath("./heli3.jpeg");
                // const imageMedia4 = MessageMedia.fromFilePath("./processed-ce4460ef-74cd-447d-a059-757b2867e4f3_GK0fQorP.jpeg");
                // const imageMedia5 = MessageMedia.fromFilePath("./processed-f3a70ff1-82fd-44df-ad62-20713e0425d4_qY2j7Rjq.jpeg");




                const imageMedia1 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_1-1000x1000.jpg?v=1692993352");
                // const imageMedia9 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/38c753cb-eb9e-4beb-a252-4856af85a0cc.jpg?v=1692993598");

                await client.sendMessage(msg.from, imageMedia1);
            }, 1000); // 5000 ms = 5 s


            // Save the sender's number to the file
            fs.appendFileSync('numbers.txt', senderNumber + '\n');
            console.log("Added number to file:", senderNumber);
        }


    }

    else {
        // msg.reply('Only text messages are allowed');
        return;
    }
});



client.initialize();