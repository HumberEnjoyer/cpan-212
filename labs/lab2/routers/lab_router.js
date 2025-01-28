
import express from 'express';

const router = express.Router();

//id router
router.get('/', (req, res) => {
    res.send('lab router');
});
//name router
router.get('/name', (req, res) => {
    res.send('name');
    
});
// greeting
router.get('/greeting', (req, res) => {
    res.send('Hello from me');
    
});
//add
router.get('/add/:x/:y', (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    res.send(`${x+y}`)
});
//calculate
router.get('/calculate/:a/:b/:operation', (req, res) => {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let operation = req.params.operation;
    let result = 0;
    switch(operation){
        case '+':
            result = a+b;
            break;
        case '-':
            result = a-b;
            break;
        case '*':
            result = a*b;
            break;
        case '/':
            result = a/b;
            check = b === 0 ? 'Invalid operation' : a/b;
            break;
        default:
            result = 'Invalid operation';
    }
    res.send(`${result}`);
});

export default router;