const express = require('express');
const { execFile } = require('child_process');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, '../public_html')));
app.use(express.json());

app.post('/calculator/calculate', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).json({ error: 'Provide num1 and num2' });
    }

    const calculatorPath = path.join(__dirname, 'calculator');
    execFile(calculatorPath, [num1, num2], (error, stdout, stderr) => {
        if (error) {
            // log to error to file
            console.error(error);
            return res.status(500).json({ error: stderr || error.message });
        }
        // log to file
        console.log(`Result: ${stdout.trim()}`);
        res.json({ result: stdout.trim() });
    });
});

app.listen(port, () => {
    console.log(`Serverul rulează la http://localhost:${port}`);
});