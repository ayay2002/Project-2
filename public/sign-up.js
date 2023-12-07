document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signup-form');
  
    signUpForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      // Fetch input values
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
  
      // Validate input (you can add more validation as needed)
      if (!username || !email || !password || password !== confirmPassword) {
        alert('Please fill in all fields and ensure passwords match.');
        return;
      }
  
      // Create user object
      const user = {
        username,
        email,
        password,
      };
  
      try {
        // Make a POST request to your signup API endpoint
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
  
        if (response.ok) {
          // Optionally, redirect to another page or show a success message
          console.log('User signed up successfully!');
        } else {
          // Handle error response
          const errorData = await response.json();
          console.error('Signup failed:', errorData.message);
          alert('Signup failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred. Please try again.');
      }
    });
  });
  