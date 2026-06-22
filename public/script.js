// ==========================================
// 1. ENROLLMENT FORM HANDLING
// ==========================================

async function handleFormSubmit(event) {
    event.preventDefault(); // Stops the page from reloading

    // Grab the data from the input fields
    const nameValue = document.getElementById('studentName').value;
    const emailValue = document.getElementById('studentEmail').value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nameValue, email: emailValue })
        });

        const result = await response.json();

        // Hide the form and show the professional success message
        document.getElementById('studentForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';

    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong with the submission. Please try again.");
    }
}

// Attach the function to the form
document.getElementById('studentForm').addEventListener('submit', handleFormSubmit);


// ==========================================
// 2. SUPPORT DESK CHAT WIDGET
// ==========================================

// Open the Chat Box
document.getElementById('initiateChat').addEventListener('click', () => {
    document.getElementById('academyChatBox').style.display = 'block';
});

// Close the Chat Box
document.getElementById('dismissChat').addEventListener('click', () => {
    document.getElementById('academyChatBox').style.display = 'none';
});

// Send a Message in the Chat
function sendMessage() {
    const input = document.getElementById('consoleInput');
    const body = document.getElementById('consoleBody');
    const query = input.value.trim();

    if (query !== "") {
        // 1. Post the user's message
        body.innerHTML += `<div class="message outgoing">You: ${query}</div>`;
        
        // 2. Clear the input box and scroll to bottom
        input.value = "";
        body.scrollTop = body.scrollHeight; 

        // 3. Simulate a system auto-reply after a short delay
        setTimeout(() => {
            body.innerHTML += `<div class="message incoming">Support: Message received. Our team will review your query and respond shortly.</div>`;
            body.scrollTop = body.scrollHeight; // Scroll to bottom again after reply
        }, 600);
    }
}

// Allow sending messages by pressing the 'Enter' key
document.getElementById('consoleInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage(); 
    }
});