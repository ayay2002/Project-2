document.addEventListener('DOMContentLoaded', () => {
    seedDatabaseAndDisplayFriends();
});

function seedDatabaseAndDisplayFriends() {
    seedDatabase()
        .then(data => {
            displayFriends(data);
            setupEventListeners(data);
        })
        .catch(error => console.error('Error seeding database or displaying friends:', error));
}

function seedDatabaseAndDisplayFriends() {
    seedDatabase()
        .then(data => {
            displayFriends(data);
        })
        .catch(error => console.error('Error seeding database or displaying friends:', error));
}

function seedDatabase() {
    const friendsData = [
        {
            "first_name": "John",
            "last_name": "Smith",
            "age": "26",
            "race": "white",
            "birth_city": "Charleston",
            "home_city": "Richmond"
        },
        {
            "first_name": "Devonte",
            "last_name": "Robinson",
            "age": "32",
            "race": "Black",
            "birth_city": "New Orleans",
            "home_city": "Baton Rouge"
        },
        {
            "first_name": "Cristiano",
            "last_name": "Ronoldo",
            "age": "37",
            "race": "Hispanic",
            "birth_city": "Miami",
            "home_city": "Orlando"
        },
        {
            "first_name": "Chang",
            "last_name": "Wong",
            "age": "76",
            "race": "Asian",
            "birth_city": "Houston",
            "home_city": "Dallas"
        },
        {
            "first_name": "Aleut",
            "last_name": "Cupan",
            "age": "17",
            "race": "Alaskan Native",
            "birth_city": "Anchorage",
            "home_city": "Seattle"
        }
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(friendsData);
        }, 1000);
    });
}

function displayFriends(friends) {
    const friendsListContainer = document.getElementById('friendsList');
    friends.forEach(friend => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = friend.first_name + ' ' + friend.last_name;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteFriend(friend.first_name, listItem);

        listItem.appendChild(deleteButton);
        friendsListContainer.appendChild(listItem);
    });
}

function setupEventListeners(allFriends) {
    document.getElementById('searchButton').addEventListener('click', () => searchForFriend(allFriends));
}

function searchForFriend(allFriends) {
    const searchQuery = document.getElementById('searchInput').value;

    const matchingFriends = allFriends.filter(friend =>
        (friend.first_name + ' ' + friend.last_name).toLowerCase().includes(searchQuery.toLowerCase())
    );

    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    if (matchingFriends.length === 0) {
        searchResultsContainer.innerHTML = 'No matching friends found.';
    } else {
        const resultList = document.createElement('ul');
        matchingFriends.forEach(friend => {
            const listItem = document.createElement('li');
            listItem.textContent = friend.first_name + ' ' + friend.last_name;
            resultList.appendChild(listItem);
        });
        searchResultsContainer.appendChild(resultList);
    }
}

function deleteFriend(friendName, listItem) {
    const confirmDelete = window.confirm(`Are you sure you want to delete this friend ${friendName}?`);

    if (!confirmDelete) {
        return;
    }

    const deleteEndpoint = `/api/friends/${encodeURIComponent(friendName)}`;

    fetch(deleteEndpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to delete friend ${friendName}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(`Friend ${friendName} deleted successfully`);
        listItem.remove();
    })
    .catch(error => {
        console.error('Error deleting friend:', error);
    });
}
