document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      // Extract form data
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      console.log('Form Data:', { email, password });
      try {
        // Send POST request to server with login data
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        if (response.ok) {
          // If successful, redirect to the profile page
          document.location.replace('/profile');
        } else {
          console.error('Login failed:', response.statusText);
          const responseBody = await response.json();
          console.error('Response Body:', responseBody);
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    });
  });