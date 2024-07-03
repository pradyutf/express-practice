const express = require('express');
const { json } = require('express/lib/response');
const app = express();

app.use(express.json());

let courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.get('/', (req, res) => {
    res.send('CHAL RHA HU BHAI');
});

app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.json(courses);

    // console.log(req.body);
    // res.send('received');
});

app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');

    course.name = req.body.name;
    res.json(courses);
});






app.listen(3000, () => console.log('Listening on port 3000...'));