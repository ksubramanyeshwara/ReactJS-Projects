import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 12px",
        cursor: "pointer",
        background: theme === "light" ? "#333" : "#fff",
        color: theme === "light" ? "#fff" : "#333",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Toggle Theme
    </button>
  );
}

export default Button;
