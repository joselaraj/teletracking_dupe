const fullName = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

//connect the mongoDB

mongoose.connect('mongodb://localhost:27017/registration');

//define a user schema 
const userSchema = new mongoose.Schema({
    fullName: String,
    role:String,
    id:String,
    password:string
});

const User = mongoose.model('User',userSchema);

// Registration endpoint
app.post('/api/register', async (req, res) => {
  const { fullName, role, employeeId, password } = req.body;
  const user = new User({ fullName, role, employeeId, password });
  await user.save();
  res.json({ message: 'User registered successfully' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));