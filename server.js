const express = require('express');
const connectDB = require('./config/db');
const app = express();

const PORT = 5000 || process.env.PORT;

// connect database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API RUNNING');
});

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
