import { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-very-pale-blue dark:bg-very-dark-blue-top h-[235px] rounded-b-[20px] pt-8 px-6">
      <h1 className="text-very-dark-blue dark:text-white text-2xl font-bold mb-1">
        Social Media Dashboard
      </h1>
      <p className="text-dark-grayish-blue dark:text-desaturated-blue font-bold mb-6">
        Total Followers: 23,004
      </p>

      <hr className="h-px border-0 bg-dark-grayish-blue/30 dark:bg-dark-desaturated-blue mb-[19px]" />

      <div className="flex justify-between">
        <p className="text-dark-grayish-blue dark:text-desaturated-blue font-bold">
          Dark Mode
        </p>

        <label
          htmlFor="darkmode"
          className="relative bg-toggle w-12 h-6 rounded-full overflow-hidden cursor-pointer p-[3px]"
        >
          <input
            id="darkmode"
            type="checkbox"
            className="peer sr-only"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          <div className="w-full h-full peer-checked:bg-[image:var(--gradient-toggle)] absolute top-0 left-0"></div>
          <div className="w-[18px] h-[18px] bg-light-grayish-blue dark:bg-very-dark-blue-top rounded-full relative peer-checked:translate-x-[24px] transition-all"></div>
        </label>
      </div>
    </header>
  );
};

export default Header;