import path from "path";
import express from "express";
import {fileURLToPath} from "url";

const app = express();
const PORT = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, 'build')));

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build' + 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
});