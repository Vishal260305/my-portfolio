const Toggle = ({ darkMode, setDarkMode }) => {
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black transition"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    );
  };
  
  export default Toggle;
  