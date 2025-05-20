const fetch = require('node-fetch');

const API_URL = 'http://localhost:3001/api';

async function testAuth() {
  try {
    // Test registration
    console.log('Testing registration...');
    const registerResponse = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Hotel User',
        email: 'hotel@example.com',
        password: 'hotel123',
      }),
    });
    
    const registerData = await registerResponse.json();
    console.log('Registration response:', registerData);

    // Test login
    console.log('\nTesting login...');
    const loginResponse = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'hotel@example.com',
        password: 'hotel123',
      }),
    });
    
    const loginData = await loginResponse.json();
    console.log('Login response:', loginData);

  } catch (error) {
    console.error('Error:', error);
  }
}

testAuth(); 