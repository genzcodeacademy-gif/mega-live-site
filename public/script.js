document.getElementById('studentForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameValue = document.getElementById('studentName').value;
    const emailValue = document.getElementById('studentEmail').value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nameValue, email: emailValue })
        });

        const result = await response.json();
        alert(result.message);

        document.getElementById('studentName').value = '';
        document.getElementById('studentEmail').value = '';
    } catch (error) {
        console.error("Error:", error);
    }
});
async function handleFormSubmit(event) {
    event.preventDefault(); // This stops the page from reloading
    console.log("Submit button was clicked!"); // If you don't see this in the console, the function isn't connected
    
    // ... rest of your fetch code
}
function sendMessage() {
    const input = document.getElementById('consoleInput');
    const body = document.getElementById('consoleBody');
    if (input.value.trim() !== "") {
        // Add user message
        body.innerHTML += `<div class="message">You: ${input.value}</div>`;
        // Simulate a system response
        setTimeout(() => {
            body.innerHTML += `<div class="message incoming">Console: Message received. Our team will review this query.</div>`;
            body.scrollTop = body.scrollHeight; // Auto-scroll to bottom
        }, 500);
        input.value = "";
    }
}

function toggleConsole() {
    const body = document.getElementById('consoleBody');
    body.style.display = (body.style.display === 'none') ? 'block' : 'none';
}
function sendMessage() {
    const input = document.getElementById('consoleInput');
    const body = document.getElementById('consoleBody');
    if (input.value.trim() !== "") {
        // User message
        body.innerHTML += `<div class="message outgoing">${input.value}</div>`;
        
        // Auto-reply simulation
        setTimeout(() => {
            body.innerHTML += `<div class="message incoming">Thanks! Our team will respond shortly.</div>`;
            body.scrollTop = body.scrollHeight; 
        }, 600);
        
        input.value = "";
        body.scrollTop = body.scrollHeight;
    }
}
function sendMessage() {
    const query = document.getElementById('consoleInput').value;
    // 1. Send to your server
    fetch('/api/support-queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query, timestamp: new Date() })
    });
    // ... (existing code to show message in bubble)
}
// Toggle the Support Desk
document.getElementById('initiateChat').addEventListener('click', () => {
    const chatBox = document.getElementById('academyChatBox');
    chatBox.style.display = 'block';
});

// Close button
document.getElementById('dismissChat').addEventListener('click', () => {
    document.getElementById('academyChatBox').style.display = 'none';
});function sendMessage() {
    console.log("Button clicked!"); // If you see this in the console, the button IS working, but the code inside is failing.
    // ... rest of your code
}
// Add this to your script.js or inside your <script> tag
document.getElementById('consoleInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage(); // This calls your function when they hit Enter
    }
});