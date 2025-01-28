const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user-router');
const facultyRoutes = require('./routes/faculty-router');
const studentRoutes = require('./routes/student-router');
const productRoutes = require('./routes/product-router');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose
    .connect('mongodb+srv://rekhta-mern:rekhtamerndhara@cluster0.s3zyd.mongodb.net/lab9WT?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Connection failed:', err));

// Root route
app.get('/', (req, res) => {
    res.send('Lab9 API! Available routes: /api/users, /api/faculties, /api/students, /api/products');
});

// Define API routes
app.use('/api/users', userRoutes);
app.use('/api/faculties', facultyRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
