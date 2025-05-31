document.addEventListener("DOMContentLoaded", function() {
    const widgetContainer = document.createElement("div");
    widgetContainer.classList.add("chat-widget");
    
    const chatHeader = document.createElement("div");
    chatHeader.classList.add("chat-header");
    chatHeader.innerHTML = '<h2><i class="fas fa-robot"></i> Proto AI</h2>';
    
    const chatBody = document.createElement("div");
    chatBody.classList.add("chat-body");
    
    const chatMessages = document.createElement("div");
    chatMessages.classList.add("chat-messages");
    chatMessages.id = "chat-messages";
    
    const initialMessage = document.createElement("div");
    initialMessage.classList.add("message", "bot-message");
    initialMessage.textContent = "Hello! I'm Proto AI, your intelligent assistant. How can I help you today?";
    chatMessages.appendChild(initialMessage);
    
    chatBody.appendChild(chatMessages);
    
    const chatInput = document.createElement("div");
    chatInput.classList.add("chat-input");
    
    const messageInput = document.createElement("input");
    messageInput.type = "text";
    messageInput.id = "message-input";
    messageInput.classList.add("form-control");
    messageInput.placeholder = "Ask Proto AI anything...";
    
    const sendButton = document.createElement("button");
    sendButton.id = "send-button";
    sendButton.classList.add("btn", "btn-primary");
    sendButton.innerHTML = '<i class="fas fa-paper-plane"></i>';
    
    sendButton.addEventListener("click", function() {
        const userMessage = messageInput.value;
        if (userMessage.trim() !== "") {
            const userMessageDiv = document.createElement("div");
            userMessageDiv.classList.add("message", "user-message");
            userMessageDiv.textContent = userMessage;
            chatMessages.appendChild(userMessageDiv);
            messageInput.value = "";
            
            // Simulate bot response
            setTimeout(() => {
                const botResponseDiv = document.createElement("div");
                botResponseDiv.classList.add("message", "bot-message");
                botResponseDiv.textContent = "This is a simulated response to: " + userMessage;
                chatMessages.appendChild(botResponseDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
            }, 1000);
        }
    });
    
    chatInput.appendChild(messageInput);
    chatInput.appendChild(sendButton);
    
    widgetContainer.appendChild(chatHeader);
    widgetContainer.appendChild(chatBody);
    widgetContainer.appendChild(chatInput);
    
    document.body.appendChild(widgetContainer);
});