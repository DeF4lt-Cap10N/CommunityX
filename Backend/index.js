const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Its working boy!!'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));


const PORT = process.env.PORT || 8000;

const main = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log('MongoDB Connected...');
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (err) {
        console.error(err.message);
    }
};
main();




