// profilesController.js

// Placeholder data
const profiles = [
    {
      id: 1,
      username: 'JohnDoe',
      email: 'john@example.com',
      bio: 'Web Developer'
    },
    {
      id: 2,
      username: 'JaneSmith',
      email: 'jane@example.com',
      bio: 'Software Engineer'
    }
  ];
  
  // Data retrieval logic
  function getProfileData(req, res) {
    const userId = parseInt(req.params.userId); 
  
    // Find the user profile by ID
    const userProfile = profiles.find(profile => profile.id === userId);
  
    if (!userProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
  
    res.json(userProfile);
  }
  
  module.exports = {
    getProfileData
  };
  