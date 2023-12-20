'use clinet'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

 if (!mounted){
  return null
 }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className={`dark:text-white text-black px-4 py-2 rounded`}
      onClick={()=> setTheme(resolvedTheme === 'dark'?  'light' :'dark')}
    >

        <>
          {resolvedTheme === "dark" ? "Light" : "Dark"}
        </>
  
    </button>
  );
};

export default ThemeButton;