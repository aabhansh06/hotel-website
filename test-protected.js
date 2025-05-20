const fetch = require('node-fetch');

const API_URL = 'http://localhost:3001/api';

async function testProtected() {
  try {
    // First, login to get a token
    console.log('Logging in...');
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
    console.log('Login successful, got token');

    // Test protected route with token
    console.log('\nTesting protected route...');
    const protectedResponse = await fetch(`${API_URL}/test-auth`, {
      headers: {
        'Authorization': `Bearer ${loginData.token}`,
      },
    });
    
    const protectedData = await protectedResponse.json();
    console.log('Protected route response:', protectedData);

  } catch (error) {
    console.error('Error:', error);
  }
}

testProtected(); 