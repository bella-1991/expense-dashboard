const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

const expenses = {
    approved: [
        {
            id: 123,
            number: 4325,
            title: "Just Eat",
            type: "Food & Beverages",
            amount: 400,
        },
        {
            id: 124,
            number: 4325,
            title: "Just Eat2",
            type: "Food & Beverages",
            amount: 300,
        }
    ],
    rejected: [
        {
            id: 125,
            number: 4325,
            title: "Just Eat",
            type: "Food & Beverages",
            amount: 200,
        }
    ],
    pending: [
        {
            id: 126,
            number: 4325,
            title: "Just Eat",
            type: "Food & Beverages",
            amount: 100,
            status: null,
            reason: null
        },
        {
            id: 127,
            number: 8754,
            title: "Grattan",
            type: "Education",
            amount: 500,
            status: null,
            reason: null
        },
        {
            id: 128,
            number: 4325,
            title: "Lorem Ipsum",
            type: "Food & Beverages",
            amount: 200,
            status: null,
            reason: null
        },
        {
            id: 129,
            number: 8754,
            title: "Dolor",
            type: "Education",
            amount: 300,
            status: null,
            reason: null
        }
    ]
}

app.get('/', (req, res) => {
    res.send('Api Running');
});

app.get('/expenses', (req, res) => {
    setTimeout(() => {        
        res.send(expenses);
    }, 1000)
});

app.listen(4000, () => {
    console.log('Listening on port 4000')
})