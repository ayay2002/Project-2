const logout= async function () {
    const res = await fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out.');
    }
}

document.querySelector('#logout').addEventListener('click', logout);