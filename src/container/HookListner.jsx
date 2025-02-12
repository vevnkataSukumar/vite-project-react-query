import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useWebSocket from "../hooks/useWebSocket";

function WebhookListener() {
  const messages = useWebSocket("ws://localhost:8080");

  return (
    <div>
      <h2>Webhook Events</h2>
      {messages.length === 0 ? (
        <p>No webhook events received yet.</p>
      ) : (
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>
              <strong>{msg.event}:</strong> {JSON.stringify(msg.data)}
            </li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
}

export default WebhookListener;
