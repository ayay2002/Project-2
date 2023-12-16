document.addEventListener('DOMContentLoaded', () => {
    fetch('')
      .then(response => response.json())
      .then(profileData => {
        updateProfileUI(profileData);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  
    /* Function to update the UI with profile data */
    function updateProfileUI(profileData) {
      /* Assuming you have elements in your HTML to display the profile data */
      const usernameElement = document.getElementById('username');
      const emailElement = document.getElementById('email');
      const bioElement = document.getElementById('bio');
  
      /* Update the elements with the fetched data */
      usernameElement.textContent = profileData.username;
      emailElement.textContent = profileData.email;
      bioElement.textContent = profileData.bio;
    }
  });