const logout= async function () {
    console.log('Logout route accessed');
    const res = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
        document.location.replace('/login');
        alert('You are now logged out.');
    } else {
        alert('Failed to log out.');
    }
}

document.querySelector('#logoutbutton').addEventListener('click', logout);