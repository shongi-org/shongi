import { useTheme } from "../app/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;
