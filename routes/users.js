
import express from 'express';


const router = express.Router();

const users = [
    

]

router.get('/', (req, res) =>
{
    res.send('Hello');
});

export default router;