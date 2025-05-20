const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/hotel-app';

async function testDB() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully');

    // Get the User model
    const User = mongoose.model('User', new mongoose.Schema({
      name: String,
      email: String,
      password: String,
      createdAt: Date
    }));

    // Find all users
    const users = await User.find({}).select('-password');
    console.log('\nRegistered users:');
    console.log(JSON.stringify(users, null, 2));

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
  }
}

testDB(); 