// friends.js

document.addEventListener('DOMContentLoaded', () => {
    fetchFriendsData();
});

function fetchFriendsData() {
    fetch('../seeds/friends-seeds.json')
        .then(response => response.json())
        .then(data => {
            displayFriends(data);
            setupEventListeners(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

fetchFriendsData();

function displayFriends(friends) {
    const friendsListContainer = document.getElementById('friendsList');
    friends.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = friend.first_name + ' ' + friend.Last_name;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteFriend(friend.id, listItem);

        listItem.appendChild(deleteButton);
        friendsListContainer.appendChild(listItem);
    });
}

function setupEventListeners(allFriends) {
    document.getElementById('searchButton').addEventListener('click', () => searchForFriend(allFriends));
}

function searchForFriend(allFriends) {
    // Get the search query from the input field
    const searchQuery = document.getElementById('searchInput').value;

    // Filter friends based on the search query
    const matchingFriends = allFriends.filter(friend =>
        (friend.first_name + ' ' + friend.Last_name).toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Display the search results
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    if (matchingFriends.length === 0) {
        searchResultsContainer.innerHTML = 'No matching friends found.';
    } else {
        const resultList = document.createElement('ul');
        matchingFriends.forEach(friend => {
            const listItem = document.createElement('li');
            listItem.textContent = friend.first_name + ' ' + friend.Last_name;
            resultList.appendChild(listItem);
        });
        searchResultsContainer.appendChild(resultList);
    }
}

function deleteFriend(friendId, listItem) {
    // Alert to notify the user before deleting
    const confirmDelete = window.confirm(`Are you sure you want to delete this friend with ID ${friendId}?`);

    if (!confirmDelete) {
        return;
    }

    // Assuming you have an API endpoint for deleting a friend
    const deleteEndpoint = `/api/friends/${friendId}`;

    // You can use the Fetch API to make an HTTP DELETE request
    fetch(deleteEndpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // Include any additional headers as needed
        },
        // You can include a request body if needed
        // body: JSON.stringify({ friendId: friendId }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to delete friend with ID ${friendId}`);
        }
        return response.json();
    })
    .then(data => {
        // Handle success, if needed
        console.log(`Friend with ID ${friendId} deleted successfully`);
        // You might want to refresh the friends list or update the UI accordingly
        listItem.remove(); // Remove the deleted friend from the UI
    })
    .catch(error => {
        // Handle errors, if needed
        console.error('Error deleting friend:', error);
    });
}
