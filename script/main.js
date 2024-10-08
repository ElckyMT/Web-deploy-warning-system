console.log("Akhirnya Kesambung wkwkwkw"); // This will log "Hello, world!" to the console

document.addEventListener("DOMContentLoaded", function() {
    const commitList = document.getElementById('commit-list');
    const username = 'ElckyMT';
    const repo = 'Web-deploy-warning-system';
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/commits`;

    // Replace 'YOUR_PERSONAL_ACCESS_TOKEN' with your actual token
    const headers = new Headers({
        'Authorization': 'token YOUR_PERSONAL_ACCESS_TOKEN'
    });

    fetch(apiUrl, { headers: headers })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(commit => {
                const listItem = document.createElement('li');
                listItem.textContent = commit.commit.message;
                commitList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching commits:', error));
});