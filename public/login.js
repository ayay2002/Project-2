document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      // Extract form data
      const email = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      try {
        // Send POST request to server with login data
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
  
        if (response.ok) {
          // If successful, redirect to the profile page
          document.location.replace('/profile');
        } else {
          console.error('Login failed:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    });
  });