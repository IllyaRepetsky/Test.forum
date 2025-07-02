
function postMessage() {
  const username = document.getElementById("username").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!username || !message) {
    alert("Заповніть всі поля!");
    return;
  }
  const msgDiv = document.createElement("div");
  msgDiv.className = "message";
  msgDiv.innerHTML = `<strong>${username}:</strong> ${message}`;
  document.getElementById("messages").appendChild(msgDiv);
  document.getElementById("message").value = "";
}
