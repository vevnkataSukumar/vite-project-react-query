import React from "react";
import ReactDOM from "react-dom";

const Modal2 = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {children}
        <button onClick={onClose} style={styles.button}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root") // 👈 Rendering outside the normal React tree
  );
};

const Modal = ({children, onClose }) => {
    return ReactDOM.createPortal(
        <div style={styles.overlay}>
            <div style={styles.modal2}>
                {children}
                <button onClick={onClose} style={styles.button}>Close</button>
            </div>
        </div>
        , document.getElementById("modal-root"));
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
  },
  modal2: {
    backgroundColor: "#fff",
    height: "200px",
    width: "200px",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center", 
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Modal;
