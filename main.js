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
        } else if (msg.body.toLowerCase().includes('solar helicopter air freshener')) {
            // setTimeout(async () => {
            //     await msg.reply('*METAL SOLAR HELICOPTER CAR AIR FRESHENER*');
            // }, 3000);

            setTimeout(async () => {
                await client.sendMessage(msg.from, "Solar Helicopter Air Freshener.\n\nPrice: Rs 3999 + Free Delivery all over pakistan \n\n10% discount on 2 pieces");
            }, 5000); //



            // setTimeout(async () => {
            //     client.sendMessage(msg.from, "Wait Sending videos and Images....");
            // }, 5000); 

            // wait for 5 seconds then send the video
            setTimeout(async () => {


                // const imageMedia1 = MessageMedia.fromFilePath("./Helicopter Car Air Freshenr1.png");
                // const imageMedia2 = MessageMedia.fromFilePath("./Helicopter Car Air Freshenr2.png");
                // const imageMedia3 = MessageMedia.fromFilePath("./Helicopter Car Air Freshenr3.png");
                // const imageMedia4 = MessageMedia.fromFilePath("./Helicopter Car Air Freshenr4.png");
                // const imageMedia5 = MessageMedia.fromFilePath("./Helicopter Car Air Freshenr5.png");


                //  const imageMedia2 = MessageMedia.fromFilePath("./processed-7d5c7816-22db-4e93-82f6-1af2825b3d7e_Aq28wEwO.jpeg");
                //  const imageMedia3 = MessageMedia.fromFilePath("./processed-7f67d16a-335c-4b13-91a4-4b2ce0b85bac_y7QvAr3w.jpeg");

                // const imageMedia1 = MessageMedia.fromFilePath("./processed-0d0bd47e-a463-42a8-b49b-019c3166ea36_zKOklsHS.jpeg");
                // const imageMedia4 = MessageMedia.fromFilePath("./processed-ce4460ef-74cd-447d-a059-757b2867e4f3_GK0fQorP.jpeg");
                // const imageMedia5 = MessageMedia.fromFilePath("./processed-f3a70ff1-82fd-44df-ad62-20713e0425d4_qY2j7Rjq.jpeg");




                const imageMedia1 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_1-1000x1000.jpg?v=1692993352");
                // const imageMedia2 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/air-freshener-helicopter1.jp2-700x700.jpg?v=1692993353");
                // const imageMedia3 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_5-1000x1000.jpg?v=1692993353");
                // const imageMedia4 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/bcc4002b-7dc7-424f-9a90-4f3cc8f132fc.jpg?v=1692993598");
                // const imageMedia5 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/eb624f33-6593-4e73-b81d-f6393a34aa08.jpg?v=1692993598");
                // const imageMedia6 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/154d2650-e8c4-479d-b69c-4b5f8f54c378.jpg?v=1692993597");
                // const imageMedia7 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/b4a284ea-ce0a-4ed4-8262-dbb64019f803.jpg?v=1692993598");
                // const imageMedia8 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/6c5dfeaa-018f-40d4-a01b-e25996195049.jpg?v=1692993598");
                // const imageMedia9 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/38c753cb-eb9e-4beb-a252-4856af85a0cc.jpg?v=1692993598");

                // await client.sendMessage(msg.from, imageMedia1);
                await client.sendMessage(msg.from, imageMedia1);
                // await client.sendMessage(msg.from, imageMedia2);
                // await client.sendMessage(msg.from, imageMedia3);
                // await client.sendMessage(msg.from, imageMedia4);
                // await client.sendMessage(msg.from, imageMedia5);


                // await client.sendMessage(msg.from, imageMedia4);
                // await client.sendMessage(msg.from, imageMedia5);

                // await client.sendMessage(msg.from, imageMedia5);
                // await client.sendMessage(msg.from, imageMedia6);
                // await client.sendMessage(msg.from, imageMedia7);
                // await client.sendMessage(msg.from, imageMedia8);
                // await client.sendMessage(msg.from, imageMedia9);

            }, 1000); // 5000 ms = 5 s


            // Save the sender's number to the file
            fs.appendFileSync('numbers.txt', senderNumber + '\n');
            console.log("Added number to file:", senderNumber);
        } else if (msg.body.toLowerCase().includes('solar aircraft air freshener')) {


            setTimeout(async () => {
                await client.sendMessage(msg.from, "Solar Aircraft Air Freshener.\n\nPrice: Rs 2299 + 200 Delivery \n\n10% discount on 2 pieces");
            }, 5000);


            // wait for 5 seconds then send the video
            setTimeout(async () => {
                const imageMedia1 = MessageMedia.fromFilePath("./Airplane Solar Car Dashboard Air Freshener1.png");
                const imageMedia2 = MessageMedia.fromFilePath("./Airplane Solar Car Dashboard Air Freshener2.png");
                const imageMedia3 = MessageMedia.fromFilePath("./Airplane Solar Car Dashboard Air Freshener3.png");
                const imageMedia4 = MessageMedia.fromFilePath("./Airplane Solar Car Dashboard Air Freshener4.jpg");


                // const imageMedia1 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_1-1000x1000.jpg?v=1692993352");
                // const imageMedia2 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/air-freshener-helicopter1.jp2-700x700.jpg?v=1692993353");
                // const imageMedia3 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_5-1000x1000.jpg?v=1692993353");
                // const imageMedia4 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/bcc4002b-7dc7-424f-9a90-4f3cc8f132fc.jpg?v=1692993598");
                // const imageMedia5 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/eb624f33-6593-4e73-b81d-f6393a34aa08.jpg?v=1692993598");
                // const imageMedia6 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/154d2650-e8c4-479d-b69c-4b5f8f54c378.jpg?v=1692993597");
                // const imageMedia7 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/b4a284ea-ce0a-4ed4-8262-dbb64019f803.jpg?v=1692993598");
                // const imageMedia8 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/6c5dfeaa-018f-40d4-a01b-e25996195049.jpg?v=1692993598");
                // const imageMedia9 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/38c753cb-eb9e-4beb-a252-4856af85a0cc.jpg?v=1692993598");

                await client.sendMessage(msg.from, imageMedia1);
                await client.sendMessage(msg.from, imageMedia2);
                await client.sendMessage(msg.from, imageMedia3);
                await client.sendMessage(msg.from, imageMedia4);


            }, 1000); // 5000 ms = 5 s

            // Save the sender's number to the file
            fs.appendFileSync('numbers.txt', senderNumber + '\n');
            console.log("Added number to file:", senderNumber);
        } else if (msg.body.toLowerCase().includes('solar-powered plane air freshener')) {


            setTimeout(async () => {
                await client.sendMessage(msg.from, "Solar-Powered Plane Air Freshener.\n\nPrice: Rs 3999 + Free Delivery all over pakistan \n\n10% discount on 2 pieces");
            }, 5000);




            // wait for 5 seconds then send the video
            setTimeout(async () => {
                const imageMedia1 = MessageMedia.fromFilePath("./blueplane.JPEG");
                const imageMedia2 = MessageMedia.fromFilePath("./goldenplain.JPEG");
                const imageMedia3 = MessageMedia.fromFilePath("./redplane.JPEG");
                // const imageMedia4 = MessageMedia.fromFilePath("./processed-ce4460ef-74cd-447d-a059-757b2867e4f3_GK0fQorP.jpeg");
                // const imageMedia5 = MessageMedia.fromFilePath("./processed-f3a70ff1-82fd-44df-ad62-20713e0425d4_qY2j7Rjq.jpeg");




                // const imageMedia1 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_1-1000x1000.jpg?v=1692993352");
                // const imageMedia2 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/air-freshener-helicopter1.jp2-700x700.jpg?v=1692993353");
                // const imageMedia3 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_5-1000x1000.jpg?v=1692993353");
                // const imageMedia4 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/bcc4002b-7dc7-424f-9a90-4f3cc8f132fc.jpg?v=1692993598");
                // const imageMedia5 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/eb624f33-6593-4e73-b81d-f6393a34aa08.jpg?v=1692993598");
                // const imageMedia6 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/154d2650-e8c4-479d-b69c-4b5f8f54c378.jpg?v=1692993597");
                // const imageMedia7 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/b4a284ea-ce0a-4ed4-8262-dbb64019f803.jpg?v=1692993598");
                // const imageMedia8 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/6c5dfeaa-018f-40d4-a01b-e25996195049.jpg?v=1692993598");
                // const imageMedia9 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/38c753cb-eb9e-4beb-a252-4856af85a0cc.jpg?v=1692993598");

                await client.sendMessage(msg.from, imageMedia1);
                await client.sendMessage(msg.from, imageMedia2);
                await client.sendMessage(msg.from, imageMedia3);
                // await client.sendMessage(msg.from, imageMedia4);
                // await client.sendMessage(msg.from, imageMedia5);

                // await client.sendMessage(msg.from, imageMedia5);
                // await client.sendMessage(msg.from, imageMedia6);
                // await client.sendMessage(msg.from, imageMedia7);
                // await client.sendMessage(msg.from, imageMedia8);
                // await client.sendMessage(msg.from, imageMedia9);

            }, 1000); // 5000 ms = 5 s


            // Save the sender's number to the file
            fs.appendFileSync('numbers.txt', senderNumber + '\n');
            console.log("Added number to file:", senderNumber);
        } else if (msg.body.toLowerCase().includes('solar military helicopter')) {


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
                // const imageMedia2 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/air-freshener-helicopter1.jp2-700x700.jpg?v=1692993353");
                // const imageMedia3 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_5-1000x1000.jpg?v=1692993353");
                // const imageMedia4 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/bcc4002b-7dc7-424f-9a90-4f3cc8f132fc.jpg?v=1692993598");
                // const imageMedia5 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/eb624f33-6593-4e73-b81d-f6393a34aa08.jpg?v=1692993598");
                // const imageMedia6 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/154d2650-e8c4-479d-b69c-4b5f8f54c378.jpg?v=1692993597");
                // const imageMedia7 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/b4a284ea-ce0a-4ed4-8262-dbb64019f803.jpg?v=1692993598");
                // const imageMedia8 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/6c5dfeaa-018f-40d4-a01b-e25996195049.jpg?v=1692993598");
                // const imageMedia9 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/38c753cb-eb9e-4beb-a252-4856af85a0cc.jpg?v=1692993598");

                await client.sendMessage(msg.from, imageMedia1);
                // await client.sendMessage(msg.from, imageMedia2);
                // await client.sendMessage(msg.from, imageMedia3);
                // await client.sendMessage(msg.from, imageMedia4);
                // await client.sendMessage(msg.from, imageMedia5);

                // await client.sendMessage(msg.from, imageMedia5);
                // await client.sendMessage(msg.from, imageMedia6);
                // await client.sendMessage(msg.from, imageMedia7);
                // await client.sendMessage(msg.from, imageMedia8);
                // await client.sendMessage(msg.from, imageMedia9);

            }, 1000); // 5000 ms = 5 s


            // Save the sender's number to the file
            fs.appendFileSync('numbers.txt', senderNumber + '\n');
            console.log("Added number to file:", senderNumber);
        } else if (msg.body.toLowerCase().includes('all purpose foam cleaner')) {


            setTimeout(async () => {
                await client.sendMessage(msg.from, "All purpose foam cleaner.\n\nPrice of Foam Cleaner is 1299 + 200 Delivery charges \n\n2 Foam Cleaner price = 2600 + Buy two get one free + Free Delivery");
            }, 5000);




            // wait for 5 seconds then send the video
            setTimeout(async () => {
                // const imageMedia1 = MessageMedia.fromFilePath("./formCLeaner.jpg");
                //  const imageMedia2 = MessageMedia.fromFilePath("./helli1 (2).png");
                // const imageMedia3 = MessageMedia.fromFilePath("./helli1 (3).png");
                // const imageMedia4 = MessageMedia.fromFilePath("./processed-ce4460ef-74cd-447d-a059-757b2867e4f3_GK0fQorP.jpeg");
                // const imageMedia5 = MessageMedia.fromFilePath("./processed-f3a70ff1-82fd-44df-ad62-20713e0425d4_qY2j7Rjq.jpeg");




                const imageMedia1 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_1-1000x1000.jpg?v=1692993352");
                // const imageMedia2 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/air-freshener-helicopter1.jp2-700x700.jpg?v=1692993353");
                // const imageMedia3 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_5-1000x1000.jpg?v=1692993353");
                // const imageMedia4 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/bcc4002b-7dc7-424f-9a90-4f3cc8f132fc.jpg?v=1692993598");
                // const imageMedia5 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/eb624f33-6593-4e73-b81d-f6393a34aa08.jpg?v=1692993598");
                // const imageMedia6 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/154d2650-e8c4-479d-b69c-4b5f8f54c378.jpg?v=1692993597");
                // const imageMedia7 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/b4a284ea-ce0a-4ed4-8262-dbb64019f803.jpg?v=1692993598");
                // const imageMedia8 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/6c5dfeaa-018f-40d4-a01b-e25996195049.jpg?v=1692993598");
                // const imageMedia9 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/38c753cb-eb9e-4beb-a252-4856af85a0cc.jpg?v=1692993598");

                await client.sendMessage(msg.from, imageMedia1);
                // await client.sendMessage(msg.from, imageMedia2);
                // await client.sendMessage(msg.from, imageMedia3);
                // await client.sendMessage(msg.from, imageMedia4);
                // await client.sendMessage(msg.from, imageMedia5);

                // await client.sendMessage(msg.from, imageMedia5);
                // await client.sendMessage(msg.from, imageMedia6);
                // await client.sendMessage(msg.from, imageMedia7);
                // await client.sendMessage(msg.from, imageMedia8);
                // await client.sendMessage(msg.from, imageMedia9);

            }, 1000); // 5000 ms = 5 s


            // Save the sender's number to the file
            fs.appendFileSync('numbers.txt', senderNumber + '\n');
            console.log("Added number to file:", senderNumber);
        } else if (msg.body.toLowerCase().includes('wrist watch remote control car')) {
            // setTimeout(async () => {
            //     await msg.reply('*METAL SOLAR HELICOPTER CAR AIR FRESHENER*');
            // }, 3000);

            setTimeout(async () => {
                await client.sendMessage(msg.from, "Wrist Watch Remote Control Car.\n\nPrice: Rs 2699 + 200 Delivery Charges \n\nYee Car 4 colors me dasteyab he \n\n 5% discount available on 2 pieces \n10% discount available on 3 pieces");
            }, 5000); //



            // setTimeout(async () => {
            //     client.sendMessage(msg.from, "Wait Sending videos and Images....");
            // }, 5000); 

            // wait for 5 seconds then send the video
            setTimeout(async () => {
                // const imageMedia1 = MessageMedia.fromFilePath("./RemoteControlCarRed.jpeg");
                // const imageMedia2 = MessageMedia.fromFilePath("./RemoteControlCarBlack.jpeg");
                // const imageMedia3 = MessageMedia.fromFilePath("./RemoteControlCarPink.jpeg");
                // const imageMedia4 = MessageMedia.fromFilePath("./RemoteControlCarBlue.jpeg");

                //  const imageMedia3 = MessageMedia.fromFilePath("./processed-7f67d16a-335c-4b13-91a4-4b2ce0b85bac_y7QvAr3w.jpeg");
                // const imageMedia1 = MessageMedia.fromFilePath("./processed-0d0bd47e-a463-42a8-b49b-019c3166ea36_zKOklsHS.jpeg");
                // const imageMedia4 = MessageMedia.fromFilePath("./processed-ce4460ef-74cd-447d-a059-757b2867e4f3_GK0fQorP.jpeg");
                // const imageMedia5 = MessageMedia.fromFilePath("./processed-f3a70ff1-82fd-44df-ad62-20713e0425d4_qY2j7Rjq.jpeg");




                const imageMedia1 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_1-1000x1000.jpg?v=1692993352");
                // const imageMedia2 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/air-freshener-helicopter1.jp2-700x700.jpg?v=1692993353");
                // const imageMedia3 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/aromatisator_5-1000x1000.jpg?v=1692993353");
                // const imageMedia4 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/bcc4002b-7dc7-424f-9a90-4f3cc8f132fc.jpg?v=1692993598");
                // const imageMedia5 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/eb624f33-6593-4e73-b81d-f6393a34aa08.jpg?v=1692993598");
                // const imageMedia6 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/154d2650-e8c4-479d-b69c-4b5f8f54c378.jpg?v=1692993597");
                // const imageMedia7 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/b4a284ea-ce0a-4ed4-8262-dbb64019f803.jpg?v=1692993598");
                // const imageMedia8 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/6c5dfeaa-018f-40d4-a01b-e25996195049.jpg?v=1692993598");
                // const imageMedia9 = await MessageMedia.fromUrl("https://cdn.shopify.com/s/files/1/0785/1478/2486/files/38c753cb-eb9e-4beb-a252-4856af85a0cc.jpg?v=1692993598");

                // await client.sendMessage(msg.from, imageMedia1);
                await client.sendMessage(msg.from, imageMedia1);
                // await client.sendMessage(msg.from, imageMedia2);
                // await client.sendMessage(msg.from, imageMedia3);
                // await client.sendMessage(msg.from, imageMedia4);
                // await client.sendMessage(msg.from, imageMedia4);
                // await client.sendMessage(msg.from, imageMedia5);

                // await client.sendMessage(msg.from, imageMedia5);
                // await client.sendMessage(msg.from, imageMedia6);
                // await client.sendMessage(msg.from, imageMedia7);
                // await client.sendMessage(msg.from, imageMedia8);
                // await client.sendMessage(msg.from, imageMedia9);

            }, 1000); // 5000 ms = 5 s
            setTimeout(async () => {
                const imageMedia1 = MessageMedia.fromFilePath("./RemoteControlCarvideo.mp4");
                // await client.sendMessage(msg.from, imageMedia1);
                await client.sendMessage(msg.from, imageMedia1);
            }, 6000); // 5000 ms = 5 s



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