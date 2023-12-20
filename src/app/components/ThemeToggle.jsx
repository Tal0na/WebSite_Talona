import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleClick = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={`dark:text-white text-black px-4 py-2 rounded flex items-center`}
      onClick={typeof window !== "undefined" ? handleClick : undefined}
    >
      {mounted && (
        <>
          {resolvedTheme === "dark" ? (
            <>
            
              <FaMoon style={{ marginRight: '1rem' }} />
             
            </>
          ) : (
            <>
              
              <FaSun style={{ marginRight: '0.5rem' }} />
            </>
          )}
        </>
      )}
    </button>
  );
};

export default ThemeButton;