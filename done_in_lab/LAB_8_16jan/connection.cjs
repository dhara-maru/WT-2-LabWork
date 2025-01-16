const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routers/userRouter.cjs');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Practice')
  .then(() => console.log("DB Connected!"))
  .catch(err => console.log(err));

app.use('/api/users', userRoutes);

app.listen(2006, () => {
    console.log("http://localhost:2006");
});
