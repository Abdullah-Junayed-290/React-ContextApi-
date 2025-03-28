import { useState, useEffect } from "react";
import { ThemeProvider } from "./Hook/Theme/useTheme.js";
import ThemeBtn from "./components/ThemeToggleButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className='dark:bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
            Manage Your Todos
          </h1>
          <div className='mb-4'>
            <ThemeBtn />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
