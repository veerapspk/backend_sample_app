import express from 'express';
import user from './user.js';



const app = express();
const PORT = process.env.PORT || 3005;



app.get('/', (req, res) => {
    res.send('jai shree ram');
});

app.get('/api/user', (req, res) => {
    res.send(user);
});

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});
