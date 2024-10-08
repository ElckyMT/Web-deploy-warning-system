async function fetchCommits() {
    const username = 'ElckyMT'; // Replace with your GitHub username
    const repo = 'Web-deploy-warning-system'; // Replace with your repository name
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
        const response = await fetch(url);
        const commits = await response.json();

        const commitList = document.getElementById('commit-list');
        commitList.innerHTML = ''; // Clear any existing content

        commits.forEach(commit => {
            const listItem = document.createElement('li');
            listItem.textContent = `${commit.commit.message} by ${commit.commit.author.name}`;
            commitList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching commits:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchCommits);