import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin: ['http://localhost:5173', 'http://localhost:5174',
            'http://localhost:3000','http://13.203.27.70:5174'],
            // Add other allowed origins as needed like production frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
  }
));
// API Routes
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Rahuls server using docker compose up!' });
});
const PORT = 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});