console.log("Akhirnya Kesambung wkwkwkw"); // This will log "Hello, world!" to the console

// Function to add commit to the list and save it to local storage
function addCommit() {
    const commitInput = document.getElementById('commit-input');
    const commitList = document.getElementById('commit-list');
    const commitText = commitInput.value.trim();

    if (commitText) {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = commitText;
        commitList.appendChild(listItem);

        // Save to local storage
        saveCommit(commitText);

        // Clear the input field
        commitInput.value = '';
    }
}

// Function to save commit to local storage
function saveCommit(commitText) {
    let commits = JSON.parse(localStorage.getItem('commits')) || [];
    commits.push(commitText);
    localStorage.setItem('commits', JSON.stringify(commits));
}

// Function to load commits from local storage
function loadCommits() {
    const commitList = document.getElementById('commit-list');
    const commits = JSON.parse(localStorage.getItem('commits')) || [];

    commits.forEach(commit => {
        const listItem = document.createElement('li');
        listItem.textContent = commit;
        commitList.appendChild(listItem);
    });
}

// Event listener for the button
document.getElementById('add-commit-btn').addEventListener('click', addCommit);

// Load commits on page load
window.onload = loadCommits;
