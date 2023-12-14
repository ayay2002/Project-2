// friendController.js or similar

const express = require('express');
const router = express.Router();

// Import your models and any necessary dependencies
const { Friend } = require('../../models');

// DELETE route to delete a friend by ID
router.delete('/api/friends/:friendId', async (req, res) => {
    const { friendId } = req.params;

    try {
        // Assuming Friend is your Sequelize model
        const deletedFriend = await Friend.destroy({
            where: {
                id: friendId,
            },
        });

        if (deletedFriend) {
            res.status(200).json({ message: 'Friend deleted successfully' });
        } else {
            res.status(404).json({ message: 'Friend not found' });
        }
    } catch (error) {
        console.error('Error deleting friend:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;

