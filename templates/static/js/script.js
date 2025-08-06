async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    appendMessage("You", message);
    input.value = "";

    const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });
    const data = await response.json();
    appendMessage("Ghost", data.reply);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const msg = document.createElement("div");
    msg.textContent = `${sender}: ${message}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}
