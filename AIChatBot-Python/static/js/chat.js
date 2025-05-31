document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    sendButton.addEventListener('click', function() {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            appendMessage('user', userMessage);
            messageInput.value = '';
            sendMessageToBot(userMessage);
        }
    });

    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }

    function sendMessageToBot(message) {
        // Simulate a bot response for demonstration purposes
        setTimeout(() => {
            const botResponse = `You said: ${message}`; // Replace with actual bot response logic
            appendMessage('bot', botResponse);
        }, 1000);
    }
});