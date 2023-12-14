// Friends data from friends-seeds.json
const allFriends = [
    { id: '1', username: 'John' },
    { id: '2', username: 'Devonte' },
    { id: '3', username: 'Cristiano' },
    { id: '4', username: 'Chang' },
    { id: '5', username: 'Aleut' }
];

function searchForFriend() {
    const searchQuery = document.getElementById('searchInput').value;

    const matchingFriends = allFriends.filter(friend =>
        friend.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    if (matchingFriends.length === 0) {
        searchResultsContainer.innerHTML = 'No matching friends found.';
    } else {
        const resultList = document.createElement('ul');
        matchingFriends.forEach(friend => {
            const listItem = document.createElement('li');
            listItem.textContent = friend.username;
            resultList.appendChild(listItem);
        });
        searchResultsContainer.appendChild(resultList);
    }
}

// Display all friends initially
const friendsListContainer = document.getElementById('friendsList');
allFriends.forEach(friend => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.textContent = friend.username;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteFriend(friend.id);

    listItem.appendChild(deleteButton);
    friendsListContainer.appendChild(listItem);
});

function deleteFriend(friendId) {
    // Implement the logic to delete a friend
    alert(`Deleting friend with ID ${friendId}`);
}
