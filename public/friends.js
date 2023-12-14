document.addEventListener('DOMContentLoaded', () => {
    const friendsListContainer = document.getElementById('friendsList');
    const searchResultsContainer = document.getElementById('searchResults');
    const searchInput = document.getElementById('searchInput');
    const deleteFriendButton = document.getElementById('deleteFriendButton');

    seedDatabaseAndDisplayFriends();

    deleteFriendButton.addEventListener('click', () => {
        const friendIdToDelete = 'John'; // Replace with the actual friend ID
        deleteFriend(friendIdToDelete);
    });

    searchInput.addEventListener('input', () => searchForFriend(allFriends));
});

function seedDatabaseAndDisplayFriends() {
    seedDatabase()
        .then(displayFriends)
        .catch(error => console.error('Error seeding database or displaying friends:', error));
}

function seedDatabase() {
    const friendsData = [
        { "first_name": "John", "last_name": "Smith", "age": "26", "race": "white", "birth_city": "Charleston", "home_city": "Richmond" },
        { "first_name": "Devonte", "last_name": "Robinson", "age": "32", "race": "Black", "birth_city": "New Orleans", "home_city": "Baton Rouge" },
        { "first_name": "Cristiano", "last_name": "Ronoldo", "age": "37", "race": "Hispanic", "birth_city": "Miami", "home_city": "Orlando" },
        { "first_name": "Chang", "last_name": "Wong", "age": "76", "race": "Asian", "birth_city": "Houston", "home_city": "Dallas" },
        { "first_name": "Aleut", "last_name": "Cupan", "age": "17", "race": "Alaskan Native", "birth_city": "Anchorage", "home_city": "Seattle" }
    ];

    return Promise.resolve(friendsData);
}

function displayFriends(friends) {
    const friendsListContainer = document.getElementById('friendsList');
    friendsListContainer.innerHTML = '';

    friends.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = `${friend.first_name} ${friend.last_name}`;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteFriend(friend.first_name);

        listItem.appendChild(deleteButton);
        friendsListContainer.appendChild(listItem);
    });
}

function searchForFriend(allFriends) {
    const searchQuery = searchInput.value.toLowerCase();

    const matchingFriends = allFriends.filter(friend =>
        (friend.first_name + ' ' + friend.last_name).toLowerCase().includes(searchQuery)
    );

    searchResultsContainer.innerHTML = '';

    if (matchingFriends.length === 0) {
        searchResultsContainer.innerHTML = 'No matching friends found.';
    } else {
        const resultList = document.createElement('ul');
        matchingFriends.forEach(friend => {
            const listItem = document.createElement('li');
            listItem.textContent = `${friend.first_name} ${friend.last_name}`;
            resultList.appendChild(listItem);
        });
        searchResultsContainer.appendChild(resultList);
    }
}

function deleteFriend(friendId) {
    const deleteEndpoint = `/api/friends/${friendId}`;

    fetch(deleteEndpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to delete friend ${friendId}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(`Friend ${friendId} deleted successfully`);
    })
    .catch(error => {
        console.error('Error deleting friend:', error);
    });
}
