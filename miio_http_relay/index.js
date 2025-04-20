const fs = require('fs')
const express = require('express');
const miio = require('miio');

// Read port from options
const { port } = JSON.parse(fs.readFileSync('options.json'));

// Create express web server
const app = express();

// Parse HTTP request body as JSON
app.use(express.json());

// Single handler for all HTTP methods
app.all('/send/:command', async (req, res) => { 

    try {

        const { address, token, args } = req.body;
        if (!address || !token) { 
            res.status(400).send('No address or token specified');
            return;
        }
        if (args == null) args = '';

        const device = await miio.device({ address, token });
        const result = await device.call(req.params.command, args); 

        res.status(200).send(result);
        
    } catch (err) {

        res.status(500).send(err.toString())
        
    }
    
   
});

app.listen(port, () => { 
    console.log(`Mi gateway radio relay server is listening on :${port}`);
});