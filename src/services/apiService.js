const API_URL = 'https://your-api-url.com';

export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getDashboardData = async () => {
  try {
    const response = await fetch(`${API_URL}/dashboard`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_TOKEN`, // If you have a token
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
