body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #1a1a1a;
  color: #fff;
  overflow-x: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#welcome-message {
  font-size: 3em;
  text-align: center;
  color: orange;
  margin-top: 50px;
  opacity: 0;
  animation: fadeIn 3s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

#ascii-container {
  padding: 20px;
  white-space: pre-wrap;
  font-family: 'Courier New', Courier, monospace;
  overflow-y: auto;
}

#stats {
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
}

#stats p {
  margin: 0;
  font-size: 1.2em;
}

.ascii-art {
  min-height: 150px;
  margin: 10px 0;
}
