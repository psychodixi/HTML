function sendMessage(){
    const messageInput = document.getElementById('message');
    const message = messageInput.value;
    
    if(message.trim() !== '')
    {
        const chatbox = document.getElementById('chatbox');
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        
        chatbox.appendChild(messageElement);
        messageInput.value = "";
    }
}